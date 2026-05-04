#!/usr/bin/env node
// Pings IndexNow with one or more URLs so Bing/Yandex re-crawl them.
// Usage: node scripts/indexnow-ping.mjs <url> [<url> ...]
//        node scripts/indexnow-ping.mjs --sitemap   (submits everything in public/sitemap dynamic route)

const KEY = "e72e2097b343cc0037caa106f82c2521"
const HOST = "www.agenticaiutah.com"
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error("Usage: node scripts/indexnow-ping.mjs <url> [<url> ...]")
  process.exit(1)
}

let urls
if (args[0] === "--sitemap") {
  const res = await fetch(`https://${HOST}/sitemap.xml`)
  if (!res.ok) {
    console.error(`Failed to fetch sitemap: ${res.status}`)
    process.exit(1)
  }
  const xml = await res.text()
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  console.log(`Found ${urls.length} URLs in sitemap`)
} else {
  urls = args
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
}

console.log(`Submitting ${urls.length} URL(s) to IndexNow...`)
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
})

console.log(`IndexNow response: ${res.status} ${res.statusText}`)
if (!res.ok) {
  console.error(await res.text())
  process.exit(1)
}
console.log("Done.")
