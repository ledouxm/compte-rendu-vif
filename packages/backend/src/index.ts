import "./envVars";
import { onHmr, registerViteHmrServerRestart } from "./hmr";

import { createServer } from "@triplit/server";
import { migrations } from "../../frontend/triplit/migrations";
import { fastifyInstance } from "./router";
import { db } from "./db/db";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const server = createServer({
  storage: "sqlite",
  dbOptions: {
    migrations: migrations,
  },
})(3000);

const start = async () => {
  await registerViteHmrServerRestart();
  console.log("Starting...");

  migrate(db, { migrationsFolder: "./drizzle" });
  console.log(await fastifyInstance.listen({ port: 3001 }));

  onHmr(() => {
    server.close();
    fastifyInstance.close();
  });
};

start();
process.on("SIGINT", function () {
  server.close(() => {
    console.log("Shut down server");
    // some cleanup code
    process.exit();
  });
});
