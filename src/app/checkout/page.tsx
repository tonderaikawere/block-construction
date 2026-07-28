import { pagesHtml } from "@/app/html_sources";

export default function Page() {
  const html = pagesHtml["checkout"];
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
