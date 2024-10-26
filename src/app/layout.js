import { Inter } from "next/font/google";
// import "./globals.css";

import Header from "./header.jsx";
import Footer from "./footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cửa hàng điện tử Etro Store  ",
  description: "Mua đồ điện tử tại đây"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
      <Footer/>
      <script src="/bootstrap/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
