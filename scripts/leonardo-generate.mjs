import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const API_KEY = process.env.LEONARDO_API_KEY || "YOUR_KEY_HERE";
const API_V2 = "https://cloud.leonardo.ai/api/rest/v2/generations";
const API_V1_GET = "https://cloud.leonardo.ai/api/rest/v1/generations";

// Nano Banana (gemini-2.5-flash-image) — great quality, cost-effective
const MODEL = "gemini-2.5-flash-image";

// Photography style UUID for realistic images
const STYLE_PHOTO = "111dc692-d470-4eec-b791-3475abac4c46";

// Nano Banana supports 1024×1024 only — CSS object-fit:cover handles cropping
const SIZE = { width: 1024, height: 1024 };

const IMAGES = [
  // Hero grid (3×3) — each cell ~400px → MEDIUM
  { id: "hero-1", ...SIZE, prompt: "Aerial view of a massive modern logistics warehouse at dawn, warm orange sunlight streaming through glass panels, rows of shipping containers and trucks, professional commercial photography, cinematic lighting" },
  { id: "hero-2", ...SIZE, prompt: "Close-up of a cargo ship bow cutting through deep blue ocean waves, golden hour lighting, dramatic perspective from water level, shipping containers stacked on deck, professional marine photography" },
  { id: "hero-3", ...SIZE, prompt: "Modern European highway at sunset with a fleet of clean white freight trucks driving in formation, orange sky reflecting off truck surfaces, motion blur on road, professional automotive photography" },
  { id: "hero-4", ...SIZE, prompt: "Inside a high-tech logistics control center, multiple screens showing world maps and shipping routes, operators at workstations, blue and orange ambient lighting, futuristic corporate environment" },
  { id: "hero-5", ...SIZE, prompt: "Dramatic wide shot of a busy international port at twilight, cranes loading containers onto ships, warm amber port lights reflecting on water, industrial scale and beauty, cinematic composition" },
  { id: "hero-6", ...SIZE, prompt: "A cargo airplane being loaded at a modern airport terminal at night, bright floodlights creating dramatic shadows, ground crew working efficiently, professional aviation photography" },
  { id: "hero-7", ...SIZE, prompt: "Overhead drone shot of a rail freight terminal, colorful shipping containers arranged in geometric patterns, train tracks converging, warm afternoon light casting long shadows" },
  { id: "hero-8", ...SIZE, prompt: "Professional business handshake in front of a logistics operations board, blurred warehouse background with forklifts, warm natural lighting, corporate partnership concept" },
  { id: "hero-9", ...SIZE, prompt: "A modern automated warehouse interior with robotic sorting systems, conveyor belts moving packages, LED strip lighting in orange and white, futuristic logistics technology" },

  // Service cards — ~800px display → MEDIUM
  { id: "service-ftl", ...SIZE, prompt: "A powerful European freight truck full truckload driving through scenic Alpine mountain pass, dramatic clouds, road winding through green valleys, warm golden sunlight, professional automotive photography" },
  { id: "service-ltl", ...SIZE, prompt: "Inside a clean modern distribution center, workers scanning and sorting mixed pallets of goods for partial load shipments, organized shelving systems, warm overhead lighting" },
  { id: "service-ocean", ...SIZE, prompt: "Massive container ship entering a Mediterranean port, turquoise water, stacked colorful containers, port cranes in background, dramatic sky with golden hour clouds" },
  { id: "service-air", ...SIZE, prompt: "Cargo aircraft on tarmac with nose cargo door open, freight being loaded on roller system, ground crew in high-vis vests, dramatic sunset sky behind, cinematic lighting" },
  { id: "service-customs", ...SIZE, prompt: "Professional customs clearance office, organized desk with shipping documents stamps and laptop showing trade data, EU flag visible, warm professional lighting, clean modern office" },
  { id: "service-warehouse", ...SIZE, prompt: "Expansive modern bonded warehouse interior, floor-to-ceiling shelving with organized palletized goods, electric forklifts in motion, bright LED industrial lighting with warm accent" },

  // Industry cards — ~300px display → SMALL
  { id: "industry-ecommerce", ...SIZE, prompt: "Modern e-commerce fulfillment center, workers packing boxes on conveyor belts, branded shipping boxes stacked neatly, screens showing order dashboards, warm efficient lighting" },
  { id: "industry-automotive", ...SIZE, prompt: "Automotive parts being loaded onto specialized transport truck, engine components on pallets, clean industrial facility, precision manufacturing meets logistics, warm lighting" },
  { id: "industry-pharma", ...SIZE, prompt: "Temperature-controlled pharmaceutical logistics cold room, insulated shipping containers with blue cold chain indicators, workers in lab coats checking shipments, clean sterile environment" },
  { id: "industry-chemical", ...SIZE, prompt: "Specialized chemical tanker trucks at an industrial chemical plant, safety markings and hazmat placards visible, professional industrial safety protocols, dramatic architecture" },

  // Gallery — large horizontal scroll → LARGE
  { id: "gallery-1", ...SIZE, prompt: "Panoramic shot of the Bosphorus strait with cargo ships passing through, Istanbul skyline in background, golden hour lighting, bridges spanning the waterway, professional landscape photography" },
  { id: "gallery-2", ...SIZE, prompt: "Busy European train station freight terminal in Germany, modern locomotives pulling container wagons, overhead electric lines, clean platform architecture, professional railway photography" },
  { id: "gallery-3", ...SIZE, prompt: "Sofia Bulgaria cityscape at blue hour with modern business district, illuminated office buildings, highway with truck traffic in foreground, Vitosha mountain backdrop" },
  { id: "gallery-4", ...SIZE, prompt: "Rotterdam port Netherlands massive container terminal, enormous gantry cranes working simultaneously, reflection on calm harbor water, dramatic sunset sky" },
  { id: "gallery-5", ...SIZE, prompt: "Silk Road logistics scene with modern truck caravan crossing vast Central Asian steppe, dramatic endless horizon, warm amber light, dust trails, epic sense of scale" },

  // Stats background → MEDIUM
  { id: "stats", ...SIZE, prompt: "Professional team of logistics managers reviewing operations on a large digital display board, diverse team in modern office, warm collaborative atmosphere, data visualizations on screens" },

  // Page headers — full-width backgrounds → LARGE
  { id: "header-services", ...SIZE, prompt: "Wide cinematic shot of freight trucks lined up at a modern logistics hub loading dock at sunrise, warm orange light flooding the scene, professional and efficient atmosphere, architectural photography" },
  { id: "header-reviews", ...SIZE, prompt: "Happy logistics professionals shaking hands at a modern bright office, shipping operations visible through floor-to-ceiling windows behind them, warm natural light, genuine smiles" },
  { id: "header-contact", ...SIZE, prompt: "Modern glass office building exterior of a European logistics company at golden hour, clean architecture with warm interior lighting visible, landscaped entrance, inviting professional atmosphere" },

  // Contact map → SMALL
  { id: "contact-map", ...SIZE, prompt: "Stylized dark-themed map of Sofia Bulgaria centered, showing city streets and districts, minimal design with orange accent highlights on key locations, modern cartographic illustration style" },
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

  console.log(`\n🚀 SpeedLink Image Generator — Leonardo AI (Nano Banana)`);
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
