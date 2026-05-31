import type { VercelRequest, VercelResponse } from '@vercel/node';

const CLIENT_ID = process.env['SPOTIFY_CLIENT_ID']!;
const CLIENT_SECRET = process.env['SPOTIFY_CLIENT_SECRET']!;
const REFRESH_TOKEN = process.env['SPOTIFY_REFRESH_TOKEN']!;

async function getAccessToken(): Promise<string> {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }).toString(),
  });
  const data = await res.json() as { access_token: string };
  return data.access_token;
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const accessToken = await getAccessToken();

    const recentRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    });

    const recentData = await recentRes.json() as any;
    const track = recentData.items?.[0]?.track;

    if (!track) {
      return res.status(200).json({ title: null });
    }

    return res.status(200).json({
      title: track.name,
      artist: track.artists.map((a: any) => a.name).join(', '),
      albumImageUrl: track.album.images[0]?.url ?? null,
      songUrl: track.external_urls.spotify,
    });
  } catch {
    return res.status(500).json({ title: null });
  }
}
