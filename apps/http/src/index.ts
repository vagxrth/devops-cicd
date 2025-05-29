import express from "express";
import { prisma } from "@repo/db";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/signup", async(req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  res.json(user);
});


app.listen(3002, () => {
  console.log("Server is running on port 3000");
});