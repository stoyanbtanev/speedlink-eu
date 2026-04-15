import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import * as topojson from "topojson-client";
import worldAtlas from "world-atlas/countries-110m.json";

const LOCATIONS = [
  { name: "Sofia",       nameBg: "София",      country: "Bulgaria", lat: 42.6977, lng: 23.3219 },
  { name: "Plovdiv",     nameBg: "Пловдив",    country: "Bulgaria", lat: 42.1354, lng: 24.7453 },
  { name: "Belgrade",    nameBg: "Белград",    country: "Serbia",   lat: 44.7866, lng: 20.4489 },
  { name: "Bratislava",  nameBg: "Братислава", country: "Slovakia", lat: 48.1486, lng: 17.1077 },
  { name: "Oradea",      nameBg: "Орадя",      country: "Romania",  lat: 47.0465, lng: 21.9189 },
];

// ISO-3166-1 numeric codes for all countries in the coverage range
// Europe + Turkey + Caucasus + Central Asia
const COVERAGE_IDS = new Set([
  // Western Europe
  8,   // Albania
  40,  // Austria
  56,  // Belgium
  191, // Croatia
  196, // Cyprus
  208, // Denmark
  246, // Finland
  250, // France
  276, // Germany
  300, // Greece
  352, // Iceland
  372, // Ireland
  380, // Italy
  442, // Luxembourg
  470, // Malta
  528, // Netherlands
  578, // Norway
  620, // Portugal
  724, // Spain
  752, // Sweden
  756, // Switzerland
  826, // United Kingdom
  // Central Europe
  203, // Czech Republic
  348, // Hungary
  616, // Poland
  642, // Romania
  703, // Slovakia
  705, // Slovenia
  // Eastern Europe & Balkans
  112, // Belarus
  70,  // Bosnia-Herzegovina
  100, // Bulgaria
  233, // Estonia
  383, // Kosovo
  428, // Latvia
  440, // Lithuania
  498, // Moldova
  499, // Montenegro
  807, // North Macedonia
  688, // Serbia
  804, // Ukraine
  // Turkey
  792, // Turkey
  // Caucasus
  51,  // Armenia
  31,  // Azerbaijan
  268, // Georgia
  // Central Asia
  398, // Kazakhstan
  417, // Kyrgyzstan
  762, // Tajikistan
  795, // Turkmenistan
  860, // Uzbekistan
]);

// Strip polygon parts that fall outside the Europe→Central Asia bbox.
// Prevents overseas territories (e.g. French Guiana, Greenland) from being highlighted.
function clipOverseas(feature) {
  if (feature.geometry.type !== "MultiPolygon") return feature;
  const kept = feature.geometry.coordinates.filter((polygon) => {
    const ring = polygon[0];
    let sumLng = 0, sumLat = 0;
    for (const [lng, lat] of ring) { sumLng += lng; sumLat += lat; }
    const avgLng = sumLng / ring.length;
    const avgLat = sumLat / ring.length;
    // Keep only parts within the Old World coverage window
    return avgLng >= -30 && avgLng <= 90 && avgLat >= 20;
  });
  if (kept.length === 0) return null;
  return { ...feature, geometry: { ...feature.geometry, coordinates: kept } };
}

const CENTER = [45.2, 21.0];
const ZOOM = 5;

function createPulseIcon() {
  return L.divIcon({
    className: "",
    html: `
      <div style="position:relative;width:32px;height:32px;">
        <div style="position:absolute;inset:0;border-radius:50%;background:rgba(232,168,56,0.25);animation:leaflet-pulse 2s ease-out infinite;"></div>
        <div style="position:absolute;top:50%;left:50%;width:12px;height:12px;transform:translate(-50%,-50%);border-radius:50%;background:#E8A838;border:2px solid #fff;box-shadow:0 0 8px rgba(232,168,56,0.6);"></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

export function LeafletMap({ lang = "bg", theme = "dark", mode = "default", wrapClass }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const tileLayerRef = useRef(null);

  const isRange = mode === "range";

  const tileUrl =
    theme === "dark"
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  useEffect(() => {
    if (mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: CENTER,
      zoom: ZOOM,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);

    tileLayerRef.current = L.tileLayer(tileUrl, {
      maxZoom: 18,
      subdomains: "abcd",
    }).addTo(map);

    if (isRange) {
      // Convert TopoJSON → GeoJSON and filter to coverage countries
      const all = topojson.feature(worldAtlas, worldAtlas.objects.countries);
      const filtered = {
        ...all,
        features: all.features
          .filter((f) => COVERAGE_IDS.has(Number(f.id)))
          .map(clipOverseas)
          .filter(Boolean),
      };

      const geoLayer = L.geoJSON(filtered, {
        style: {
          fillColor: "#E8A838",
          fillOpacity: 0.22,
          color: "#E8A838",
          weight: 0.8,
          opacity: 0.55,
        },
      }).addTo(map);

      map.fitBounds(geoLayer.getBounds(), { padding: [24, 24] });
    } else {
      const icon = createPulseIcon();
      const bounds = L.latLngBounds([]);

      LOCATIONS.forEach((loc) => {
        const label = lang === "bg" ? loc.nameBg : loc.name;
        const marker = L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:'Outfit',sans-serif;text-align:center;padding:4px 2px;">
              <strong style="font-size:14px;color:#E8A838;">${label}</strong>
              <br/><span style="font-size:12px;opacity:0.7;">${loc.country}</span>
            </div>`,
            { className: "speedlink-popup", closeButton: false }
          );
        bounds.extend(marker.getLatLng());
      });

      map.fitBounds(bounds, { padding: [60, 60], maxZoom: 5 });
    }

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapInstance.current || !tileLayerRef.current) return;
    tileLayerRef.current.setUrl(tileUrl);
  }, [tileUrl]);

  const outerClass = wrapClass ?? "ind-img-wrap border border-border";
  const innerClass = isRange
    ? "w-full h-[52vh] min-h-[320px]"
    : "aspect-[4/3] w-full sm:aspect-[16/10]";

  return (
    <div className={outerClass}>
      <div ref={mapRef} className={innerClass} />
    </div>
  );
}
