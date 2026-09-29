import { IntlCaseHub, intlCaseHubMetadata } from "@/components/IntlCase";

export const metadata = intlCaseHubMetadata("zh-CN");

export default function ZhCaseHubPage() {
  return <IntlCaseHub lang={"zh-CN"} />;
}
