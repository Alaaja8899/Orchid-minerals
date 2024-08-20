import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orchid Minerals",
  description: "mineral factory company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Container>
          <div className="mt-[110px]"></div>
        {children}
        </Container>
        <Footer/>
        </body>
    </html>
  );
}
