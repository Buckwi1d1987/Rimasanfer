import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.rimasanfer.com",
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://www.rimasanfer.com/privacy",
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: "https://www.rimasanfer.com/legal",
      changeFrequency: "yearly",
      priority: 0.4
    }
  ];
}
