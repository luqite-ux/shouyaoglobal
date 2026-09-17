import { siteConfig } from "@/lib/site-config"

export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.legalNameEn, alternateName: siteConfig.brandName, url: siteConfig.url, logo: `${siteConfig.url}/images/logo.png`, email: siteConfig.email, telephone: siteConfig.phone, address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressCountry: "CN" } },
      { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, url: siteConfig.url, name: siteConfig.brandName, publisher: { "@id": `${siteConfig.url}/#organization` }, inLanguage: "en" },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
}
