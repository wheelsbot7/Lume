import Server from "lume/core/server.ts";

const kv = await Deno.openKv();

// increment a count using Deno KV
await kv.atomic().sum(["visitors"], 1n).commit();

// Get the latest visitor count
const count = await kv.get(["visitors"]);

console.log(`You are visitor number #${count.value}`);

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server.start();

console.log("Listening on http://localhost:8000");
