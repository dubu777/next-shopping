import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/global.css"


export const metadata: Metadata = {
  title: "바프독",
  description: "강아지 생식, 정기 구독 서비스",
  icons: '/jaehyeon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
