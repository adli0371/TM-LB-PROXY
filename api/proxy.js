export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) {
    return res.status(400).json({ error: "Missing path parameter" });
  }

  try {
    const response = await fetch(`https://trackmania.io/api/${path}`, {
      headers: {
        "User-Agent": "TrackmaniaOverlayProject/1.0 (contact: discord-lvyathan)"
      }
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch from Trackmania.io" });
  }
}
