#!/usr/bin/env node
export default function bqs(obj) {
  return Object.keys(obj).sort().map((key) => `${key}=${obj[key]}`).join('&');
}
