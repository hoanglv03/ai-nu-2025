import type { Metadata } from "next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Chúc mừng ngày 8/3",
    template: "%s | Chúc mừng ngày 8/3",
  },
  description:
    "Chúc mừng ngày Quốc tế Phụ nữ 8/3 với những lời chúc tốt đẹp nhất.",
  openGraph: {
    title: "Chúc mừng ngày 8/3",
    description:
      "Chúc mừng ngày Quốc tế Phụ nữ 8/3 với những lời chúc tốt đẹp nhất.",
    url: baseUrl,
    siteName: "Chúc mừng ngày 8/3",
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
