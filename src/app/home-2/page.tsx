import { pagesHtml } from "../html_sources";

export default function Page() {
  const html = pagesHtml["home-2"];
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
