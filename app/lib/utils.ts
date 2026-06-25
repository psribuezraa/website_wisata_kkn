export function getValidImg(src?: string | null, fallback: string = ""): string {
  if (!src) return fallback;
  const s = src.trim();
  if (s === "(kosong)" || s === "-") return fallback;

  // Auto-convert Google Drive sharing links to direct image links
  if (s.includes("drive.google.com/file/d/")) {
    const match = s.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      // Use Google Drive Thumbnail API (most reliable for embedding)
      return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }
  }

  if (s.startsWith("/") || s.startsWith("http://") || s.startsWith("https://")) {
    return s;
  }
  
  return fallback;
}
