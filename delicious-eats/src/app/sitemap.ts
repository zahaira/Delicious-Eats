import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1.0, changefreq: "yearly" },
    { path: "reservation", priority: 0.8, changefreq: "yearly" },
    { path: "about-us", priority: 0.7, changefreq: "yearly" },
    { path: "contact-us", priority: 0.7, changefreq: "yearly" },
  ];

  return staticPages.map((page) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${page.path}`,
    lastModified: new Date().toISOString(),
    priority: page.priority,
    changefreq: page.changefreq,
  }));
}
