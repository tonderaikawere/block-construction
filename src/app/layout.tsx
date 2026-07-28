import type { Metadata } from "next";
import Script from "next/script";
import "./template-block.webflow.9baed00f7.min.css";

export const metadata: Metadata = {
  title: "Block - Webflow Ecommerce website template",
  description: "Block is a premium webflow template geared towards constuction companies with ecommerce capability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Webfont Script Loader */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-init" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["DM Sans:regular,italic,500,500italic,700,700italic"] } });`}
        </Script>
      </head>
      <body>
        {children}
        {/* Load jQuery and Webflow script at the bottom */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60191a8d697f7e7a06a843a4"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/webflow.724a87295.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
