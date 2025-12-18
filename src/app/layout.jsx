import { Geist, Geist_Mono, Noto_Serif } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Noto_Serif({
  weight:"400",
  subsets:["latin"]
})

export const metadata = {
  title: {
    default:'Yantun khaijan',
    template: '%s | Yantun khaijan'
  },
  description: "Best Fast Food In Noakhali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${serif.className} antialiased`}
      >
        <header className="px-5 py-2 flex flex-wrap items-center justify-between gap-5 bg-stone-800">
  <Link href="/">
    <Image
      src="/logo.png"
      alt=""
      className="w-[120px]"
      width={300}
      height={100}
    />
  </Link>

  <div className="flex flex-wrap gap-3 justify-center sm:justify-end w-full sm:w-auto">
    <Link className="btn" href="/foods">
      Food
    </Link>
    <Link className="btn" href="/reviews">
      Reviews
    </Link>
    <Link className="btn" href="/feedbacks">
      Feed Backs
    </Link>
  </div>
</header>


        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
