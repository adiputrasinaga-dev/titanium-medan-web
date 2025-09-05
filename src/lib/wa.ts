import { siteConfig } from "@/config/site";
export const prefilledWA = (text: string) => {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.waNumber}?text=${msg}&utm_source=landing&utm_medium=button&utm_campaign=cta_wa`;
};
