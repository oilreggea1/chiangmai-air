import { IntlBlogHub, intlBlogHubMetadata } from "@/components/IntlArticle";

export const metadata = intlBlogHubMetadata("zh-CN");

export default function ZhBlogPage() {
  return <IntlBlogHub lang={"zh-CN"} />;
}
