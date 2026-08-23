import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

function getGeminiAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY ortam değişkeni tanımlı değil.");
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

export function getReportData() {
  try {
    const dataPath = path.join(process.cwd(), "data.json");
    if (fs.existsSync(dataPath)) {
      return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    }
  } catch (err) {
    console.error("data.json okunurken hata:", err);
  }
  return null;
}

export async function processChatRequest(question: string, history: any[] = []) {
  if (!question || typeof question !== "string" || !question.trim()) {
    throw new Error("Lütfen geçerli bir soru iletiniz.");
  }

  const reportData = getReportData();
  const systemPrompt = `
Sen "Haftalık Rapor Asistanı"sın. Görevin, araştırmacının hazırlamış olduğu haftalık ve günlük staj/araştırma/geliştirme raporlarını derinlemesine ve objektif analiz ederek kullanıcıların sorularını yanıtlamaktır.

Elindeki Rapor Veri Tabanı (data.json içeriği):
\`\`\`json
${JSON.stringify(reportData, null, 2)}
\`\`\`

Cevaplama Kuralları:
1. Sadece verilen verilere ve rapor kayıtlarına dayanarak, gerçekçi ve yapıcı değerlendirmeler yap.
2. Kullanıcı "1. ay verimli miydi?", "Araştırmalar doğru düzende mi?", "Pazartesi günü ne yapıldı?" gibi sorular sorduğunda:
   - İlgili haftanın/günün metriklerini, tamamlanan pratik projeleri, kilit çıkarımları ve kazanımları özetle.
   - Güçlü yönleri ve (varsa) geliştirilmesi önerilen noktaları maddeleyerek açık, profesyonel ve samimi bir Türkçe ile açıkla.
3. Yanıtlarında Markdown biçimlendirmesi (kalın harfler, listeler, kod blokları) kullanarak okunabilirliği yüksek tut.
4. Rapor verisinde bulunmayan bir konu sorulursa bunu dürüstçe belirt ve rapordaki mevcut bilgiler üzerinden rehberlik et.
`;

  const ai = getGeminiAI();

  const contents: any[] = [];
  if (Array.isArray(history) && history.length > 0) {
    history.slice(-6).forEach((h: { role: string; text: string }) => {
      contents.push({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.text }],
      });
    });
  }
  contents.push({
    role: "user",
    parts: [{ text: question.trim() }],
  });

  const response = await ai.models.generateContent({
    model: "gemini-3.7-flash",
    contents: contents,
    config: {
      systemInstruction: systemPrompt,
      temperature: 0.7,
    },
  });

  return response.text || "Yanıt oluşturulamadı.";
}
