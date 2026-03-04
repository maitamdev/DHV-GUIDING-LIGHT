import { useEffect } from 'react';
import { DEFAULT_SEO, type SEOData } from '../../constants/seo';
const SEOHead: React.FC<Partial<SEOData>> = (props) => {
  const seo = { ...DEFAULT_SEO, ...props };
  useEffect(() => {
    document.title = seo.title;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) { el = document.createElement('meta'); name.startsWith('og:') ? el.setAttribute('property', name) : el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', seo.description); if (seo.keywords) setMeta('keywords', seo.keywords.join(', '));
    setMeta('og:title', seo.title); setMeta('og:description', seo.description); if (seo.ogImage) setMeta('og:image', seo.ogImage); if (seo.ogType) setMeta('og:type', seo.ogType);
    setMeta('twitter:card', 'summary_large_image'); setMeta('twitter:title', seo.title); setMeta('twitter:description', seo.description);
  }, [seo.title, seo.description, seo.keywords, seo.ogImage, seo.ogType]);
  return null;
};
import React from 'react';
export default SEOHead;
