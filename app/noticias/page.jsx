import Header from "@/components/Header";
import FeaturedNews from "@/components/FeaturedNews";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getFeaturedNews, getAllNews, getNewsCategories } from "@/lib/sanity";

export default async function NoticiasPage() {
  const [featuredNews, allNews, categories] = await Promise.all([
    getFeaturedNews(),
    getAllNews(),
    getNewsCategories(),
  ]);

  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[400px] xl:h-[500px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        {/* Background Image Placeholder - You can replace this with an actual car image */}
        <Image
          src="/bg-news.jpg"
          alt="Noticias"
          fill
          className="object-cover"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
              Noticias
            </h1>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <FeaturedNews articles={featuredNews} />

      {/* News Grid Section */}
      <NewsGrid articles={allNews} categories={categories} />

      <Footer />
    </div>
  );
}
