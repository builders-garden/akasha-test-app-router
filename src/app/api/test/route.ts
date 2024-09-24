import getAkashaBeams from "@/lib/akasha";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("searchParams", searchParams);

  const akashaBeamIndex = await getAkashaBeams();

  return new Response(JSON.stringify(akashaBeamIndex?.edges ?? []), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
