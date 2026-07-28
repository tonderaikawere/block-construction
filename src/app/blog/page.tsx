import { pagesHtml } from "../html_sources";

export default function Page() {
  const html = pagesHtml["blog"];
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
