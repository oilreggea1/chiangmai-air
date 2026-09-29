import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CondoBrandView, CondoDirectoryView, condoBrandMetadata, condoDirectoryMetadata, getCondo } from "@/components/CondoPages";
import { CondoDetailView, condoDetailMetadata } from "@/components/CondoDetail";
import { condoBrands, getCondoBrand } from "@/lib/condo-brands";
import { condoDirectory } from "@/lib/condo-directory";

/** /en/condo/directory = ทำเนียบ, /en/condo/[brand] = หน้าแบรนด์, /en/condo/[slug] = หน้าคอนโดรายโครงการ */
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ slug: "directory" }, ...condoBrands.map((b) => ({ slug: b.slug })), ...condoDirectory.map((c) => ({ slug: c.s }))];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "directory") return condoDirectoryMetadata("en");
  const b = getCondoBrand(slug);
  if (b) return condoBrandMetadata(b, "en");
  const c = getCondo(slug);
  return c ? condoDetailMetadata(c, "en") : {};
}
export default async function EnCondoSubPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "directory") return <CondoDirectoryView lang={"en"} />;
  const b = getCondoBrand(slug);
  if (b) return <CondoBrandView b={b} lang={"en"} />;
  const c = getCondo(slug);
  if (!c) notFound();
  return <CondoDetailView c={c} lang={"en"} />;
}
