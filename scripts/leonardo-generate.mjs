import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const API_KEY = process.env.LEONARDO_API_KEY || "9f3bed64-d4ba-42e6-b8e9-a10756cda51a";
const API_V2 = "https://cloud.leonardo.ai/api/rest/v2/generations";
const API_V1_GET = "https://cloud.leonardo.ai/api/rest/v1/generations";

// Nano Banana 2 — near-Pro quality at Flash speed ($0.039/img)
const MODEL = "nano-banana-2";

// Photography style UUID for realistic images
const STYLE_PHOTO = "111dc692-d470-4eec-b791-3475abac4c46";

// Nano Banana supports 1024×1024 only — CSS object-fit:cover handles cropping
const SIZE = { width: 1024, height: 1024 };

const IMAGES = [
  // Hero grid (3×3) — each cell ~400px → MEDIUM
  { id: "hero-1", ...SIZE, prompt: "Aerial drone view of a massive modern logistics warehouse complex at dawn, warm orange sunlight streaming through glass panels, rows of unmarked shipping containers and plain white trucks, no text no logos no branding no people, professional commercial photography, cinematic lighting, photorealistic" },
  { id: "hero-2", ...SIZE, prompt: "Close-up of a plain unmarked cargo ship bow cutting through deep blue ocean waves at golden hour, warm light on the hull, shipping containers stacked on deck seen from water level, no text no logos no writing no people no branding on ship, professional marine photography, photorealistic" },
  { id: "hero-3", ...SIZE, prompt: "Modern European highway at sunset with clean plain white freight trucks driving in formation, no markings no logos no text on trucks, orange sky reflecting off truck surfaces, motion blur on road, professional automotive photography, photorealistic" },
  { id: "hero-4", ...SIZE, prompt: "Empty unmanned high-tech logistics control center room with multiple glowing screens showing abstract world maps and shipping route lines, no people no text no readable writing on screens, blue and orange ambient LED lighting, futuristic corporate environment, professional interior photography, photorealistic" },
  { id: "hero-5", ...SIZE, prompt: "Dramatic wide shot of a busy international container port at twilight, massive gantry cranes silhouetted against gradient sky, warm amber port lights reflecting on calm water, no people visible, industrial scale and beauty, cinematic composition, photorealistic" },
  { id: "hero-6", ...SIZE, prompt: "A large cargo airplane parked at a modern airport tarmac at night, bright floodlights creating dramatic shadows, cargo loading equipment positioned near open cargo door, no people no ground crew visible, no text no logos on aircraft, professional aviation photography, photorealistic" },
  { id: "hero-7", ...SIZE, prompt: "Overhead drone shot of a rail freight terminal, colorful unmarked shipping containers arranged in geometric patterns, train tracks converging in perspective, warm afternoon light casting long shadows, no people no text no logos, professional aerial photography, photorealistic" },
  { id: "hero-8", ...SIZE, prompt: "Close-up of a modern tablet device on a warehouse desk showing an abstract logistics dashboard with colorful charts and a route map, blurred warehouse aisle with shelving in background, warm natural side lighting, no people no readable text no logos, professional product photography, photorealistic" },
  { id: "hero-9", ...SIZE, prompt: "A modern automated warehouse interior with robotic arms and conveyor belts moving plain cardboard packages, orange LED strip accents along ceiling, autonomous mobile robots on floor, no people no text no logos no branding on boxes, futuristic logistics technology, photorealistic" },

  // Service cards — ~800px display → MEDIUM
  { id: "service-ftl", ...SIZE, prompt: "A powerful plain white European freight truck driving through a scenic Alpine mountain pass at golden hour, dramatic clouds, winding road through green valleys, no text no logos no branding on truck, truck has clean unmarked trailer, professional automotive photography, photorealistic" },
  { id: "service-ltl", ...SIZE, prompt: "Inside a clean modern distribution center, organized shelving systems with mixed pallets of goods, conveyor rollers, scanning equipment on workstations, bright overhead lighting, completely empty of people, no text no logos no branding, professional interior photography, photorealistic" },
  { id: "service-ocean", ...SIZE, prompt: "Massive unmarked container ship entering a Mediterranean port, turquoise water, stacked colorful plain containers without logos, port cranes in background, dramatic golden hour sky with clouds, no text no people no branding, professional marine photography, photorealistic" },
  { id: "service-air", ...SIZE, prompt: "Front view of a large cargo aircraft on tarmac with nose cargo door open, freight pallets on roller loading system leading into cargo hold, dramatic sunset sky behind, no people no ground crew, no text no logos no airline branding on aircraft, cinematic lighting, photorealistic" },
  { id: "service-customs", ...SIZE, prompt: "Professional customs clearance desk with stacks of shipping documents, rubber stamps, an open laptop showing abstract colorful charts, EU flag on small desk stand, warm office lighting through window, no people no readable text on documents, clean modern office environment, photorealistic" },
  { id: "service-warehouse", ...SIZE, prompt: "Expansive modern warehouse interior, floor-to-ceiling pallet racking with organized goods, electric forklifts parked in wide central aisle, bright LED industrial lighting with warm accent, polished concrete floor, no people no text no logos, professional architectural photography, photorealistic" },

  // Industry cards — ~300px display → SMALL
  { id: "industry-ecommerce", ...SIZE, prompt: "Modern e-commerce fulfillment center with automated conveyor belt system, plain unmarked cardboard boxes moving along rollers, robotic sorting arms, organized shelving, warm efficient lighting, no people no text no logos no branding on boxes, professional interior photography, photorealistic" },
  { id: "industry-automotive", ...SIZE, prompt: "Close-up of precision automotive engine components and parts arranged on wooden pallets inside a clean industrial facility, specialized transport crates, mechanical parts gleaming under warm directional lighting, no people no text no logos, professional industrial photography, photorealistic" },
  { id: "industry-pharma", ...SIZE, prompt: "Temperature-controlled pharmaceutical cold storage room, rows of white insulated shipping containers on pallets, blue cold chain temperature indicators on containers, digital temperature display on wall, clean sterile environment, no people no text no logos, professional interior photography, photorealistic" },
  { id: "industry-chemical", ...SIZE, prompt: "Row of stainless steel chemical tanker trucks parked at an industrial refinery at dusk, complex pipe infrastructure and distillation towers in background, orange safety cones, no people no readable text no company names no branding, dramatic industrial architecture, photorealistic" },

  // Gallery — large horizontal scroll → LARGE
  { id: "gallery-1", ...SIZE, prompt: "Panoramic aerial shot of the Bosphorus strait with cargo ships passing through, Istanbul skyline silhouette in background, golden hour lighting, suspension bridges spanning the waterway, no people, professional landscape photography, photorealistic" },
  { id: "gallery-2", ...SIZE, prompt: "European freight train terminal at blue hour, modern red locomotive pulling unmarked container wagons, overhead electric catenary lines, clean platform architecture, rail infrastructure, no people no text no logos no branding on train, professional railway photography, photorealistic" },
  { id: "gallery-3", ...SIZE, prompt: "Sofia Bulgaria cityscape at blue hour with modern business district, illuminated glass office buildings, highway with vehicle light trails in foreground, Vitosha mountain silhouette backdrop, no people no text no signs, professional cityscape photography, photorealistic" },
  { id: "gallery-4", ...SIZE, prompt: "Rotterdam port Netherlands massive container terminal at sunset, enormous red gantry cranes working, colorful containers stacked high, perfect reflection on calm harbor water, dramatic pink and purple sunset sky, no people no text, photorealistic" },
  { id: "gallery-5", ...SIZE, prompt: "Epic aerial shot of a modern truck caravan of plain white trucks crossing vast Central Asian golden steppe grasslands, dramatic endless horizon, warm amber sunset light, dust trails behind vehicles, no text no logos no branding on trucks, epic sense of scale, photorealistic" },

  // Stats background → MEDIUM
  { id: "stats", ...SIZE, prompt: "Empty modern executive boardroom with a large wall-mounted display showing abstract colorful data visualizations and a glowing world map with route lines, sleek conference table with tablets, floor-to-ceiling windows with city view, warm natural light, no people no readable text on screen, professional interior photography, photorealistic" },

  // Page headers — full-width backgrounds → LARGE
  { id: "header-services", ...SIZE, prompt: "Wide cinematic shot of plain white freight trucks lined up at modern logistics hub loading docks at sunrise, warm orange light flooding the scene, glass and steel building facade, no people no text no logos no branding on trucks, professional architectural photography, photorealistic" },
  { id: "header-reviews", ...SIZE, prompt: "Modern bright corporate office interior with floor-to-ceiling windows overlooking a container port with cranes, empty meeting area with sleek furniture, warm golden natural light streaming in, no people, documents and tablets on table, professional interior photography, photorealistic" },
  { id: "header-contact", ...SIZE, prompt: "Modern glass office building exterior at golden hour, clean contemporary architecture with warm interior lighting visible through windows, landscaped entrance with ornamental grasses, no company signs no text no logos no branding on building, inviting professional atmosphere, photorealistic" },

  // Contact map → SMALL
  { id: "contact-map", ...SIZE, prompt: "Stylized dark navy blue abstract city map illustration, glowing orange street grid lines and route highlights, minimal geometric design, no city name no district labels no text no words no letters, small orange dot markers at key intersections, modern cartographic illustration style, dark background" },
];

// ---- API helpers ----

const headers = {
  "authorization": `Bearer ${API_KEY}`,
  "content-type": "application/json",
  "accept": "application/json",
};

async function createGeneration(img) {
  const body = {
    model: MODEL,
    parameters: {
      width: img.width,
      height: img.height,
      prompt: img.prompt,
      quantity: 1,
      style_ids: [STYLE_PHOTO],
      prompt_enhance: "OFF",
    },
    public: false,
  };

  const res = await fetch(API_V2, { method: "POST", headers, body: JSON.stringify(body) });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Create failed (${res.status}): ${text}`);
  }
  const data = await res.json();
  // v2 returns { generate: { generationId } }
  const genId = data?.generate?.generationId || data?.generationId || data?.id;
  if (!genId) {
    console.log("  Full response:", JSON.stringify(data).slice(0, 300));
    throw new Error("No generationId in response");
  }
  return genId;
}

async function pollGeneration(genId, maxWait = 120) {
  const start = Date.now();
  while (Date.now() - start < maxWait * 1000) {
    await sleep(4000);
    const res = await fetch(`${API_V1_GET}/${genId}`, { headers });
    if (!res.ok) continue;
    const data = await res.json();
    const gen = data.generations_by_pk || data;
    if (gen.status === "COMPLETE") {
      const images = gen.generated_images || [];
      if (images.length > 0) return images[0].url;
      throw new Error("Generation complete but no images");
    }
    if (gen.status === "FAILED") throw new Error("Generation failed");
    process.stdout.write(".");
  }
  throw new Error("Timeout waiting for generation");
}

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filepath, buffer);
  return buffer.length;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---- Main ----

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Check which images already exist
  const existing = IMAGES.filter((img) =>
    fs.existsSync(path.join(OUTPUT_DIR, `${img.id}.webp`)) ||
    fs.existsSync(path.join(OUTPUT_DIR, `${img.id}.jpg`)) ||
    fs.existsSync(path.join(OUTPUT_DIR, `${img.id}.png`))
  );
  const pending = IMAGES.filter((img) =>
    !fs.existsSync(path.join(OUTPUT_DIR, `${img.id}.webp`)) &&
    !fs.existsSync(path.join(OUTPUT_DIR, `${img.id}.jpg`)) &&
    !fs.existsSync(path.join(OUTPUT_DIR, `${img.id}.png`))
  );

  console.log(`\n🚀 SpeedLink Image Generator — Leonardo AI (Nano Banana 2)`);
  console.log(`   Model: ${MODEL}`);
  console.log(`   Images: ${IMAGES.length} total, ${existing.length} already exist, ${pending.length} to generate\n`);

  if (pending.length === 0) {
    console.log("✅ All images already exist! Nothing to generate.");
    return;
  }

  // Cost estimate: ~$0.039 per 1024×1024 image
  const estCost = (pending.length * 0.039).toFixed(2);
  console.log(`   Estimated cost: ~$${estCost} (${pending.length} × $0.039)`);
  console.log(`   Starting in 3s...\n`);
  await sleep(3000);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < pending.length; i++) {
    const img = pending[i];
    const progress = `[${i + 1}/${pending.length}]`;
    process.stdout.write(`${progress} ${img.id} (${img.width}×${img.height})`);

    try {
      const genId = await createGeneration(img);
      process.stdout.write(` → ${genId.slice(0, 8)}...`);

      const imageUrl = await pollGeneration(genId);
      process.stdout.write(" ✓ downloading");

      // Determine extension from URL
      const ext = imageUrl.includes(".webp") ? "webp" : imageUrl.includes(".png") ? "png" : "jpg";
      const filepath = path.join(OUTPUT_DIR, `${img.id}.${ext}`);
      const size = await downloadImage(imageUrl, filepath);

      console.log(` → ${(size / 1024).toFixed(0)}KB saved`);
      success++;

      // Rate limit: wait 2s between requests
      if (i < pending.length - 1) await sleep(2000);
    } catch (err) {
      console.log(` ✗ ${err.message}`);
      failed++;
      // On budget errors, stop early
      if (err.message.includes("402") || err.message.includes("payment") || err.message.includes("credit") || err.message.includes("balance")) {
        console.log("\n⚠️  Credits exhausted. Stopping. Run again later to resume.");
        break;
      }
      await sleep(1000);
    }
  }

  console.log(`\n✅ Done: ${success} generated, ${failed} failed, ${existing.length} pre-existing`);
  console.log(`   Images saved to: ${OUTPUT_DIR}`);

  // Remind to flip the flag
  if (success > 0) {
    console.log(`\n📝 Now set USE_LOCAL = true in src/data/images.js`);
    console.log(`   And update file extensions if needed (some may be .jpg/.png instead of .webp)`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
