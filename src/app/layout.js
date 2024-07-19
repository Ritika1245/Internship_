import { Inter } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import { AppProvider } from "./Components/layout/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StatusQou",
  description: "All in One",
};

const orbitron = Orbitron({subsets:["latin"],weights:["400","500","600"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/chatbot.gif"></link>
      <body className={`${orbitron.className} bg-black`}>
        <main className="mx-auto p-4">
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
        </main>
      </body>
    </html>
  );
}
