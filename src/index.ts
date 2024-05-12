import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";
import { Pool } from "pg";

// const connectionString = `${process.env.DATABASE_URL}`;
const connectionString = "postgresql://postgres:postgres@db:5432/example";

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/users", async (c) => {
  const users = await prisma.user.findMany();
  return c.json(users);
});

export default app;
