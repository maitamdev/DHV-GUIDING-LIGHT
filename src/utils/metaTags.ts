// Meta tag management utilities
export function setMetaTag(name: string, content: string): void {
  let el = document.querySelector('meta[name=' + JSON.stringify(name) + ']');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function setOgTag(property: string, content: string): void {
  let el = document.querySelector('meta[property=' + JSON.stringify(property) + ']');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function setPageMeta(title: string, description: string): void {
  document.title = title;
  setMetaTag('description', description);
  setOgTag('og:title', title);
  setOgTag('og:description', description);
}
