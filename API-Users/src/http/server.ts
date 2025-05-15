import { ConnectMongoDB } from "@/database";
import app from "./app";

function main() {
  try {
    ConnectMongoDB();
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("Servidor online!");
  });
}
main();
