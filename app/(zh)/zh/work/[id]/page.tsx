import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetail, workDetailMetadata } from "@/components/IntlWork";
import { jobs } from "@/lib/jobs";
import { getJob } from "@/lib/job-stories";

type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJob((await params).id);
  return job ? workDetailMetadata(job, "zh-CN") : {};
}

export default async function ZhWorkJobPage({ params }: Props) {
  const job = getJob((await params).id);
  if (!job) notFound();
  return <WorkDetail job={job} lang={"zh-CN"} />;
}
