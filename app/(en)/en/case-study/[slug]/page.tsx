import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlCaseView, intlCaseMetadata, intlCaseSlugs } from "@/components/IntlCase";
import { getWorkCase } from "@/lib/work-cases";
import { caseText } from "@/content/cases-intl";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return intlCaseSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getWorkCase((await params).slug);
  return c && caseText("en", c.slug) ? intlCaseMetadata(c, "en") : {};
}

export default async function EnCasePage({ params }: Props) {
  const c = getWorkCase((await params).slug);
  if (!c || !caseText("en", c.slug)) notFound();
  return <IntlCaseView c={c} lang={"en"} />;
}
