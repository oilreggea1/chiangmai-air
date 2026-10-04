import { ServiceTermsView, serviceTermsMetadata } from "@/components/ServiceTerms";

export const metadata = serviceTermsMetadata("zh");

export default function ServiceTermsPage() {
  return <ServiceTermsView lang="zh" />;
}
