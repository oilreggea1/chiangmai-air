import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlArticleView, intlArticleMetadata } from "@/components/IntlArticle";
import { getIntlArticle, intlArticles } from "@/content/articles-intl";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return intlArticles("zh-CN").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getIntlArticle("zh-CN", (await params).slug);
  return a ? intlArticleMetadata(a, "zh-CN") : {};
}

export default async function ZhArticlePage({ params }: Props) {
  const a = getIntlArticle("zh-CN", (await params).slug);
  if (!a) notFound();
  return <IntlArticleView a={a} lang={"zh-CN"} />;
}
