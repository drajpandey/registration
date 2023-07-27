import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://rajjpandey234:admin@cluster0.t9kftye.mongodb.net/?retryWrites=true&w=majority" || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("Cluster0");

export default db;