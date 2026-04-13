const token = process.env.KREA_API_TOKEN;
if (!token) {
  console.error("Missing KREA_API_TOKEN env var.");
  process.exit(1);
}

const r = await fetch("https://api.krea.ai/generate/image/google/nano-banana-2", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: "A modern freight truck on a European highway at golden hour, cinematic photography",
    aspect_ratio: "16:9",
    quality: "2K",
  }),
});

console.log("Status:", r.status);
const data = await r.json();
console.log("Response:", JSON.stringify(data, null, 2));

if (data.job_id) {
  console.log("Polling job:", data.job_id);
  let done = false;
  while (!done) {
    await new Promise((r) => setTimeout(r, 3000));
    const jr = await fetch(`https://api.krea.ai/jobs/${data.job_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const jd = await jr.json();
    console.log("Job status:", jd.status);
    if (jd.status === "completed") {
      console.log("Image URL:", jd.result.urls[0]);
      done = true;
    } else if (jd.status === "failed" || jd.status === "cancelled") {
      console.log("Job failed");
      done = true;
    }
  }
}
