import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntlAreaView, intlAreaMetadata, intlAreaSlugs } from "@/components/IntlArea";
import { areaText } from "@/content/areas-intl";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return intlAreaSlugs("zh-CN").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return intlAreaMetadata((await params).slug, "zh-CN");
}

export default async function ZhAreaPage({ params }: Props) {
  const { slug } = await params;
  if (!areaText("zh-CN", slug)) notFound();
  return <IntlAreaView slug={slug} lang={"zh-CN"} />;
}
