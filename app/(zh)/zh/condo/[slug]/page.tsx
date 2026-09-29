import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CondoBrandView, CondoDirectoryView, condoBrandMetadata, condoDirectoryMetadata, getCondo } from "@/components/CondoPages";
import { CondoDetailView, condoDetailMetadata } from "@/components/CondoDetail";
import { condoBrands, getCondoBrand } from "@/lib/condo-brands";
import { condoDirectory } from "@/lib/condo-directory";

/** /zh/condo/directory = ทำเนียบ, /zh/condo/[brand] = หน้าแบรนด์, /zh/condo/[slug] = หน้าคอนโดรายโครงการ */
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ slug: "directory" }, ...condoBrands.map((b) => ({ slug: b.slug })), ...condoDirectory.map((c) => ({ slug: c.s }))];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "directory") return condoDirectoryMetadata("zh-CN");
  const b = getCondoBrand(slug);
  if (b) return condoBrandMetadata(b, "zh-CN");
  const c = getCondo(slug);
  return c ? condoDetailMetadata(c, "zh-CN") : {};
}
export default async function ZhCondoSubPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "directory") return <CondoDirectoryView lang={"zh-CN"} />;
  const b = getCondoBrand(slug);
  if (b) return <CondoBrandView b={b} lang={"zh-CN"} />;
  const c = getCondo(slug);
  if (!c) notFound();
  return <CondoDetailView c={c} lang={"zh-CN"} />;
}
