import Header from "@/components/Header";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] xl:h-[750px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        {/* Background Image Placeholder - You can replace this with an actual car image */}
        <Image
          src="/bg-contacto.jpg"
          alt="Contact"
          fill
          className="object-cover"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              Contacto
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div>
              <ContactInfo />
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
