import { IntlBlogHub, intlBlogHubMetadata } from "@/components/IntlArticle";

export const metadata = intlBlogHubMetadata("en");

export default function EnBlogPage() {
  return <IntlBlogHub lang={"en"} />;
}
