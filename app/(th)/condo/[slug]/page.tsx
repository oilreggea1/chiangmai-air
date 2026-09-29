import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CondoBrandView, condoBrandMetadata } from "@/components/CondoPages";
import { condoBrands, getCondoBrand } from "@/lib/condo-brands";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return condoBrands.map((b) => ({ slug: b.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = getCondoBrand((await params).slug);
  return b ? condoBrandMetadata(b, "th") : {};
}
export default async function CondoBrandPage({ params }: Props) {
  const b = getCondoBrand((await params).slug);
  if (!b) notFound();
  return <CondoBrandView b={b} lang="th" />;
}
