const API_BASE = "https://api.krea.ai";
const API_TOKEN = "b0f2a247595717f1f52dc062fe9274e3";
const MODEL = "google/nano-banana-2";

const IMAGES = [
  { id: "hero-truck-1", prompt: "Cinematic aerial photograph of a modern European freight truck driving on a highway through alpine mountains at golden hour, dramatic lighting, long shadows, motion blur on road, professional logistics photography, ultra-realistic, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-port-2", prompt: "Dramatic aerial photograph of a massive container port at twilight with blue and orange lighting, cranes loading containers onto ships, reflection on water, industrial scale, cinematic mood, professional photography, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-warehouse-3", prompt: "Modern logistics warehouse interior at night, warm industrial lighting, organized rows of pallets and packages, a forklift in motion, long exposure feel, professional corporate photography, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-aerial-4", prompt: "Aerial birds-eye view of a logistics distribution center with dozens of trucks loading at docks, geometric patterns, early morning light, professional drone photography, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-ship-5", prompt: "Massive container ship cutting through deep blue ocean waves, dramatic sky with clouds, golden light hitting the containers, cinematic wide angle, professional maritime photography, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-highway-6", prompt: "European autobahn at dawn, line of freight trucks in convoy, misty conditions, dramatic perspective vanishing point, professional transport photography, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-cargo-7", prompt: "Close up of shipping containers stacked in geometric patterns, vibrant colors (orange, blue, red), dramatic shadows, abstract industrial composition, professional photography, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-loading-8", prompt: "Workers loading cargo onto a truck at a modern logistics facility, warm amber lighting, professional teamwork scene, documentary style photography, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "hero-map-9", prompt: "Aerial view of a highway interchange at night, light trails from trucks and vehicles, geometric patterns, long exposure photography, blue and orange tones, no text, no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "service-ftl", prompt: "Modern European freight truck (full truckload) on a scenic European highway, side angle, sunrise lighting, professional transport photography, clean composition, no text no logo no watermark", aspect_ratio: "4:3", quality: "2K" },
  { id: "service-ltl", prompt: "Organized pallets and packages inside a clean modern truck trailer, partial load, professional lighting showing organized cargo management, corporate photography, no text no watermark", aspect_ratio: "4:3", quality: "2K" },
  { id: "service-ocean", prompt: "Container ship being loaded at port with massive cranes, blue hour photography, dramatic scale showing industrial power, professional maritime photography, no text no watermark", aspect_ratio: "4:3", quality: "2K" },
  { id: "service-air", prompt: "Cargo airplane being loaded with freight containers at airport, dramatic dusk sky with orange and purple, professional aviation photography, no text no watermark", aspect_ratio: "4:3", quality: "2K" },
  { id: "service-customs", prompt: "Professional close-up of shipping documents, customs forms, and a stamp on a dark wood desk, warm lighting, shallow depth of field, business documentary photography, no text no watermark", aspect_ratio: "4:3", quality: "2K" },
  { id: "service-warehouse-main", prompt: "State of the art automated warehouse with robotic systems and LED lighting, modern logistics technology, wide angle interior shot, blue and orange accent lighting, professional architecture photography, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "gallery-europe-route", prompt: "Dramatic photograph of a freight truck crossing a European bridge at sunset, mountains in background, cinematic wide shot, warm golden light, professional landscape photography, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "gallery-port-operations", prompt: "Panoramic view of a busy container port at blue hour, cranes silhouetted against colorful sky, containers in foreground, reflections on wet ground, professional industrial photography, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "gallery-fleet-dawn", prompt: "Fleet of modern white freight trucks lined up at a logistics base at dawn, symmetric composition, dramatic sky, professional fleet photography, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "stats-operations", prompt: "Modern logistics control room with multiple screens showing maps and tracking data, operator silhouette, blue ambient lighting with orange accents, professional corporate photography, no text no watermark", aspect_ratio: "3:2", quality: "2K" },
  { id: "reviews-hero", prompt: "Professional business handshake in a modern logistics office, warm natural lighting from large windows, blurred truck fleet in background, corporate photography, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "services-hero", prompt: "Dramatic aerial view of a long straight European highway with trucks, vanishing point perspective, golden hour, atmospheric haze, cinematic photography, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "contact-hero", prompt: "Modern glass office building exterior at blue hour with warm interior lighting, European architecture, professional corporate photography, clean and elegant, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "contact-map-office", prompt: "Aerial photograph of Sofia Bulgaria cityscape at golden hour, modern buildings and streets, warm light, professional urban photography, no text no watermark", aspect_ratio: "16:9", quality: "2K" },
  { id: "industry-ecommerce", prompt: "Modern e-commerce fulfillment center with workers picking and packing orders, conveyor belts, organized shelving, warm professional lighting, no text no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "industry-auto", prompt: "Automotive parts on industrial conveyor belt in a modern factory, precision engineering, metallic surfaces, dramatic industrial lighting, professional photography, no text no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "industry-pharma", prompt: "Pharmaceutical cold chain storage facility, temperature controlled containers with blue LED indicators, sterile clean environment, professional medical logistics photography, no text no watermark", aspect_ratio: "1:1", quality: "2K" },
  { id: "industry-chemical", prompt: "Specialized chemical tanker truck at an industrial facility, hazmat safety equipment visible, dramatic moody lighting, professional industrial photography, no text no watermark", aspect_ratio: "1:1", quality: "2K" },
];

async function createJob(image) {
  const res = await fetch(`${API_BASE}/generate/image/${MODEL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: image.prompt,
      aspect_ratio: image.aspect_ratio,
      quality: image.quality,
    }),
  });
  const data = await res.json();
  return { ...image, job_id: data.job_id, status: data.status };
}

async function pollJob(jobId) {
  while (true) {
    const res = await fetch(`${API_BASE}/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    const data = await res.json();
    if (data.status === "completed") return data.result.urls[0];
    if (data.status === "failed" || data.status === "cancelled") {
      console.error(`Job ${jobId} failed: ${data.status}`);
      return null;
    }
    process.stdout.write(".");
    await new Promise((r) => setTimeout(r, 3000));
  }
}

async function main() {
  console.log(`Generating ${IMAGES.length} images via Krea Nano Banana 2...`);

  const batchSize = 4;
  const results = {};

  for (let i = 0; i < IMAGES.length; i += batchSize) {
    const batch = IMAGES.slice(i, i + batchSize);
    console.log(`\nBatch ${Math.floor(i / batchSize) + 1}: ${batch.map((b) => b.id).join(", ")}`);

    const jobs = await Promise.all(batch.map(createJob));
    console.log("Jobs created:", jobs.map((j) => `${j.id}=${j.job_id}`).join(", "));

    const urls = await Promise.all(
      jobs.map(async (job) => {
        const url = await pollJob(job.job_id);
        console.log(`\n✓ ${job.id}: ${url}`);
        return { id: job.id, url };
      })
    );

    for (const { id, url } of urls) {
      results[id] = url;
    }
  }

  const fs = await import("fs");
  fs.writeFileSync(
    new URL("../src/image-urls.json", import.meta.url),
    JSON.stringify(results, null, 2)
  );
  console.log("\n\nAll done! URLs saved to src/image-urls.json");
}

main().catch(console.error);
