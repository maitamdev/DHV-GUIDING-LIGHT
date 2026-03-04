// SEO utility for structured data
export function generateStructuredData(
  type: string,
  data: Record<string, unknown>,
): string {
  const schema = { "@context": "https://schema.org", "@type": type, ...data };
  return JSON.stringify(schema);
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
): string {
  return generateStructuredData("BreadcrumbList", {
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}
