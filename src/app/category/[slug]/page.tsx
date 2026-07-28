import { pagesHtml } from "@/app/html_sources";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const key = `category_${slug}`;
  const html = pagesHtml[key];
  if (!html) {
    notFound();
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
