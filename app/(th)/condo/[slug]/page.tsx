import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CondoBrandView, condoBrandMetadata, getCondo } from "@/components/CondoPages";
import { CondoDetailView, condoDetailMetadata } from "@/components/CondoDetail";
import { condoBrands, getCondoBrand } from "@/lib/condo-brands";
import { condoDirectory } from "@/lib/condo-directory";

/** /condo/[brand] = หน้าแบรนด์, /condo/[slug] = หน้าคอนโดรายโครงการ (slug ไม่ชนกัน ตรวจตอนสร้างทำเนียบ) */
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return [...condoBrands.map((b) => ({ slug: b.slug })), ...condoDirectory.map((c) => ({ slug: c.s }))];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = getCondoBrand(slug);
  if (b) return condoBrandMetadata(b, "th");
  const c = getCondo(slug);
  return c ? condoDetailMetadata(c, "th") : {};
}
export default async function CondoSlugPage({ params }: Props) {
  const { slug } = await params;
  const b = getCondoBrand(slug);
  if (b) return <CondoBrandView b={b} lang="th" />;
  const c = getCondo(slug);
  if (!c) notFound();
  return <CondoDetailView c={c} lang="th" />;
}
