import { pagesHtml } from "../html_sources";

export default function Page() {
  const html = pagesHtml["projects"];
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
