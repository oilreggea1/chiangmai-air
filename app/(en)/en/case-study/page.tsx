import { IntlCaseHub, intlCaseHubMetadata } from "@/components/IntlCase";

export const metadata = intlCaseHubMetadata("en");

export default function EnCaseHubPage() {
  return <IntlCaseHub lang={"en"} />;
}
