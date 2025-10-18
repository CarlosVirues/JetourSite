import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2024-01-01",
});

// Builder para URLs de imágenes
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export async function getHomePageData() {
  try {
    const data = await client.fetch(`
      *[_type == "homePage"][0]{
        hero {
          backgroundVideo,
          backgroundImage,
          logoImage {
            asset-> {
              _id,
              url,
              metadata {
                dimensions {
                  width,
                  height
                }
              }
            },
            alt
          },
          subtitle,
          showScrollIndicator,
          height
        }
      }
    `);

    // Procesar imagen del logo si existe
    if (data?.hero?.logoImage) {
      const logo = data.hero.logoImage;
      data.hero.logoUrl = urlFor(logo).url();
      data.hero.logoAlt = logo.alt || "JETOUR";
      data.hero.logoWidth = logo.asset.metadata.dimensions.width / 3;
      data.hero.logoHeight = logo.asset.metadata.dimensions.height / 3;

      // Limpiar el objeto original para evitar confusión
      delete data.hero.logoImage;
    }

    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}
