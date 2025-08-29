// app/api/ai/explain/route.ts
import { NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function POST(req: Request) {
  try {
    const { projectId } = await req.json();
    const project = projects.find((p) => p.id === projectId);
    if (!project)
      return NextResponse.json(
        { summary: "Project not found." },
        { status: 404 }
      );

    const prompt = `Write a recruiter-friendly 3-line summary of this project: Title: ${
      project.title
    }. ShortDesc: ${project.shortDesc}. Tech: ${project.tech.join(
      ", "
    )}. Focus on impact and responsibilities.`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // change to available model
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      }),
    });

    const j = await res.json();
    const summary = j?.choices?.[0]?.message?.content ?? "No summary.";
    return NextResponse.json({ summary });
  } catch (err) {
    return NextResponse.json(
      { summary: "Error generating summary." },
      { status: 500 }
    );
  }
}
