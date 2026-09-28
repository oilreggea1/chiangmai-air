import { WorkHub, workHubMetadata } from "@/components/IntlWork";

export const metadata = workHubMetadata("zh-CN");

export default function ZhWorkPage() {
  return <WorkHub lang="zh-CN" />;
}
