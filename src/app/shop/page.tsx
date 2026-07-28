import { pagesHtml } from "../html_sources";

export default function Page() {
  const html = pagesHtml["shop"];
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
