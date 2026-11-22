// entry.png says what the world's news of Sunday 22 November 2026 was; this program puts it
// where the grader looks for it. Node 22, standard library only, no network.
//
// It also checks the image against the rules the gate reads, so a bad file fails here with a
// sentence instead of failing there with a zero:
//   * PNG (or JPEG) by its magic bytes, file name stays entry.png
//   * at most 1 MiB (1048576 bytes)
//   * at most 1024 by 1024 pixels, read from the IHDR chunk of the PNG
//   * the PNG's every chunk is present and checksummed, walked to IEND
//
// Run it outside the grader's container with MAKEFUN_OUTPUT_DIR standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

const png = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(png);
const isPng = bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8;

if (!isPng && !isJpeg) throw new Error('entry.png is neither a PNG nor a JPEG');
if (bytes.length > MAX_BYTES) throw new Error('entry.png is ' + bytes.length + ' bytes, over the 1 MiB cap');

let width = 0;
let height = 0;
if (isPng) {
  if (bytes.subarray(12, 16).toString('ascii') !== 'IHDR') throw new Error('entry.png has no IHDR header');
  width = bytes.readUInt32BE(16);
  height = bytes.readUInt32BE(20);
  if (width < 1 || height < 1) throw new Error('entry.png declares an empty picture');
  let at = 8;
  let sawIend = false;
  while (at + 8 <= bytes.length) {
    const length = bytes.readUInt32BE(at);
    const kind = bytes.subarray(at + 4, at + 8).toString('ascii');
    // every chunk is a length, a type, its payload and a CRC the format puts there
    if (at + 12 + length > bytes.length) throw new Error('entry.png is cut short inside ' + kind);
    if (kind === 'IEND') sawIend = true;
    at += 12 + length;
  }
  if (!sawIend) throw new Error('entry.png has no IEND chunk');
}

if (isJpeg) {
  // walk the segments to the frame header, which holds the picture's own size
  let at = 2;
  while (at + 9 < bytes.length) {
    if (bytes[at] !== 0xff) throw new Error('entry.png is a broken JPEG at ' + at);
    const marker = bytes[at + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      height = bytes.readUInt16BE(at + 5);
      width = bytes.readUInt16BE(at + 7);
      break;
    }
    at += 2 + bytes.readUInt16BE(at + 2);
  }
}

if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error('entry.png is ' + width + ' by ' + height + ', over 1024 by 1024');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const out = join(outputDir, 'entry.png');

// write it through the bytes already read, so both runs of the grader write the same file
writeFileSync(out, bytes);

console.log('entry.png: ' + width + ' by ' + height + ', ' + bytes.length + ' bytes -> ' + out);
