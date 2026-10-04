import { ServiceTermsView, serviceTermsMetadata } from "@/components/ServiceTerms";

export const metadata = serviceTermsMetadata("th");

export default function ServiceTermsPage() {
  return <ServiceTermsView lang="th" />;
}
