/**
 * Repeating art deco patterns as CSS `url()` values. Each takes its colours as arguments
 * because a data-URI SVG cannot read CSS custom properties.
 */

function toUrl(svg: string) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}")`;
}

/** Overlapping fan scales. Lower rows cover upper rows, so only each fan's top shows. */
export function fanScales(background: string, line: string, size = 48) {
  const r = size / 2;
  const rings = (cx: number, cy: number) => `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${background}" stroke="${line}" stroke-width="1.25"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.7}" fill="none" stroke="${line}" stroke-width="1"/>
    <circle cx="${cx}" cy="${cy}" r="${r * 0.4}" fill="none" stroke="${line}" stroke-width="1"/>`;
  return toUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <rect width="${size}" height="${size}" fill="${background}"/>
      ${rings(0, 0)}${rings(size, 0)}${rings(r, r)}${rings(0, size)}${rings(size, size)}
    </svg>`);
}

/** A diamond lattice with a dot at every crossing. */
export function diamondLattice(line: string, size = 32) {
  const h = size / 2;
  return toUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <path d="M${h} 0L${size} ${h}L${h} ${size}L0 ${h}Z" fill="none" stroke="${line}" stroke-width="1"/>
      <circle cx="${h}" cy="0" r="1.5" fill="${line}"/>
      <circle cx="${h}" cy="${size}" r="1.5" fill="${line}"/>
      <circle cx="0" cy="${h}" r="1.5" fill="${line}"/>
      <circle cx="${size}" cy="${h}" r="1.5" fill="${line}"/>
    </svg>`);
}

/** A band of nested chevrons, meant to repeat along the x axis only. */
export function chevronBand(line: string, width = 28, height = 14) {
  const h = height / 2;
  return toUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <polyline points="0,${h} ${width / 2},1 ${width},${h}" fill="none" stroke="${line}" stroke-width="1.5"/>
      <polyline points="0,${height - 1} ${width / 2},${h} ${width},${height - 1}" fill="none" stroke="${line}" stroke-width="1.5"/>
    </svg>`);
}

/** Fine vertical pinstripes in pairs, like a deco wall panel. */
export function pinstripes(line: string, width = 18) {
  return toUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="4" viewBox="0 0 ${width} 4">
      <rect x="0" width="1" height="4" fill="${line}"/>
      <rect x="4" width="1" height="4" fill="${line}"/>
    </svg>`);
}
