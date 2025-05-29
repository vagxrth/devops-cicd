import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async (ws) => {
  const user = await prisma.user.create({
    data: {
      email: "test@test.com",
      password: "test",
    },
  });

  ws.send(JSON.stringify(user));
});