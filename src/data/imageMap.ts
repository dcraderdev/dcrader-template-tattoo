import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/tattoo/*.jpg',
  { eager: true }
);

const map: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const match = path.match(/photo-([a-z0-9-]+)\.jpg$/);
  if (match) map[match[1]] = mod.default;
}

export function resolveImage(url: string): ImageMetadata {
  const m = url.match(/photo-([a-z0-9-]+)/);
  if (!m) throw new Error(`Cannot resolve image: ${url}`);
  const img = map[m[1]];
  if (!img) throw new Error(`No local image for: ${m[1]}`);
  return img;
}
