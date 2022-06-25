import app from "./app.js";
import { connectDB } from "./database.js";
import { createAdminUser } from "./libs/createUser.js";

async function main() {
  await connectDB();
  await createAdminUser();
  app.listen(app.get("port"));

  console.log("Servicio en el puerto ", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}

main();
