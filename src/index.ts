import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/users", async (c) => {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return c.json(users);
});

export default app;
