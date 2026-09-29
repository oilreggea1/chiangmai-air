import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlCaseView, intlCaseMetadata, intlCaseSlugs } from "@/components/IntlCase";
import { getWorkCase } from "@/lib/work-cases";
import { caseText } from "@/content/cases-intl";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return intlCaseSlugs("zh-CN").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getWorkCase((await params).slug);
  return c && caseText("zh-CN", c.slug) ? intlCaseMetadata(c, "zh-CN") : {};
}

export default async function ZhCasePage({ params }: Props) {
  const c = getWorkCase((await params).slug);
  if (!c || !caseText("zh-CN", c.slug)) notFound();
  return <IntlCaseView c={c} lang={"zh-CN"} />;
}
