import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CondoBrandView, CondoDirectoryView, condoBrandMetadata, condoDirectoryMetadata } from "@/components/CondoPages";
import { condoBrands, getCondoBrand } from "@/lib/condo-brands";

/** /en/condo/directory = ทำเนียบคอนโด, /en/condo/[brand] = หน้าแบรนด์ */
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ slug: "directory" }, ...condoBrands.map((b) => ({ slug: b.slug }))];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "directory") return condoDirectoryMetadata("en");
  const b = getCondoBrand(slug);
  return b ? condoBrandMetadata(b, "en") : {};
}
export default async function EnCondoSubPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "directory") return <CondoDirectoryView lang={"en"} />;
  const b = getCondoBrand(slug);
  if (!b) notFound();
  return <CondoBrandView b={b} lang={"en"} />;
}
