import { ServiceTermsView, serviceTermsMetadata } from "@/components/ServiceTerms";

export const metadata = serviceTermsMetadata("en");

export default function ServiceTermsPage() {
  return <ServiceTermsView lang="en" />;
}
