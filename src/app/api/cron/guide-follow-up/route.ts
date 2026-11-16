import { sendDueGuideFollowUps } from "@/lib/welcomeGuide";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET?.trim();
  const auth = request.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const result = await sendDueGuideFollowUps();
  return Response.json({ ok: true, ...result });
}
