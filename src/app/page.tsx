import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ProductCatalog from "@/components/ProductCatalog";
import Services from "@/components/Services";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Image from "next/image";

export default function Home() {
   return (
     <main>
      <Hero />
      <Services />
      <About />
        <Portfolio />
        <ProductCatalog />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </main>
    // <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
    //   <h1 className="text-4xl font-extrabold text-mra-blue">
    //     Welcome to MRA Multimedia
    //   </h1>
    //   <p className="mt-4 text-gray-600 max-w-lg">
    //     Your one-stop destination for printing, branding, and creative design services.
    //   </p>
    // </main>
   )
}
