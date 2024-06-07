import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boss-foody.app"
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ]
}
