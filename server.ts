import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { processChatRequest } from "./server/chat-logic";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// AI Soru-Cevap API Uç Noktası
app.post("/api/chat", async (req, res) => {
  try {
    const { question, history } = req.body;
    const reply = await processChatRequest(question, history);
    return res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({
      error: error.message || "Yapay zeka asistanına bağlanırken bir hata oluştu.",
    });
  }
});

// Vite / Statik dosya yönetimi
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

