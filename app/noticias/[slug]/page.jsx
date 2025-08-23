import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleDetail from "@/components/ArticleDetail";
import RelatedNews from "@/components/RelatedNews";
import { getNewsBySlug } from "@/lib/data-site";

export default async function ArticlePage({ params }) {
  const pageParams = await params;
  const article = getNewsBySlug(pageParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      <ArticleDetail article={article} />

      <RelatedNews currentArticleId={article.id} />

      <Footer />
    </div>
  );
}
