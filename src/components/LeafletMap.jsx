import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
  { name: "Sofia", nameBg: "София", country: "Bulgaria", lat: 42.6977, lng: 23.3219 },
  { name: "Plovdiv", nameBg: "Пловдив", country: "Bulgaria", lat: 42.1354, lng: 24.7453 },
  { name: "Belgrade", nameBg: "Белград", country: "Serbia", lat: 44.7866, lng: 20.4489 },
  { name: "Bratislava", nameBg: "Братислава", country: "Slovakia", lat: 48.1486, lng: 17.1077 },
  { name: "Oradea", nameBg: "Орадя", country: "Romania", lat: 47.0465, lng: 21.9189 },
];

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

export function LeafletMap({ lang = "bg", theme = "dark" }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const tileLayerRef = useRef(null);

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

  return (
    <div className="ind-img-wrap border border-border">
      <div ref={mapRef} className="aspect-[4/3] w-full sm:aspect-[16/10]" />
    </div>
  );
}
