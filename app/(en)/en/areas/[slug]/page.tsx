import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlAreaView, intlAreaMetadata, intlAreaSlugs } from "@/components/IntlArea";
import { areaText } from "@/content/areas-intl";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return intlAreaSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return intlAreaMetadata((await params).slug, "en");
}

export default async function EnAreaPage({ params }: Props) {
  const { slug } = await params;
  if (!areaText("en", slug)) notFound();
  return <IntlAreaView slug={slug} lang={"en"} />;
}
