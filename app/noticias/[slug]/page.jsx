import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleDetail from "@/components/ArticleDetail";
import RelatedNews from "@/components/RelatedNews";
import { getNewsArticleBySlug, getRelatedNews } from "@/lib/sanity";

export default async function ArticlePage({ params }) {
  const pageParams = await params;
  const article = await getNewsArticleBySlug(pageParams.slug);

  if (!article) {
    notFound();
  }

  const relatedNews = article.categorySlug
    ? await getRelatedNews(article.slug, article.categorySlug)
    : [];

  return (
    <div className="min-h-screen bg-black">
      <Header transparent={true} border={true} />

      <ArticleDetail article={article} />

      <RelatedNews articles={relatedNews} />

      <Footer />
    </div>
  );
}
