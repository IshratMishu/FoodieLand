import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";

export const metadata = {
  title: "FoodieLand",
  description: "A food website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl mx-auto md:p-8 p-2 font-inter antialiased">
       <Navbar></Navbar>
          <div>
            {children}
          </div>
          <Footer></Footer> 
      </body>
    </html>
  );
}
