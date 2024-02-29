import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";
export const metadata = {
  title: "Anuj Chhikara",
  description: "As a MERN stack and Next.js full-stack developer, I bring web applications to life with cutting-edge technologies. Explore my portfolio for innovative projects, seamless user experiences, and a passion for creating robust, scalable solutions. Let's build the future together. #MERN #NextJS #FullStackDeveloper"
  ,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>{children}
        <Footer/></body>
      
    </html>
  );
}
