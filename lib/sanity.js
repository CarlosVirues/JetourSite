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
      *[_type == "homePage"][1]{
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
        },
        globalStats {
          stats[] {
            number,
            label,
            description,
            backgroundImage {
              asset-> {
                _id,
                url
              }
            },
            backgroundVideo
          }
        },
        roldanSection {
          title,
          backgroundImage {
            asset-> {
              _id,
              url
            }
          },
          logo {
            asset-> {
              _id,
              url
            }
          },
          features[] {
            icon,
            title,
            description
          }
        },
        videoGallery {
          title,
          videos[] {
            title,
            thumbnail {
              asset-> {
                _id,
                url
              }
            },
            type,
            videoUrl,
            views
          }
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

    // Procesar imágenes de GlobalStats
    if (data?.globalStats?.stats) {
      data.globalStats.stats = data.globalStats.stats.map((stat) => ({
        ...stat,
        backgroundImage: stat.backgroundImage?.asset?.url || null,
      }));
    }

    // Procesar imágenes de RoldanSection
    if (data?.roldanSection) {
      if (data.roldanSection.backgroundImage) {
        data.roldanSection.backgroundImage = urlFor(
          data.roldanSection.backgroundImage
        ).url();
      }
      if (data.roldanSection.logo) {
        data.roldanSection.logo = urlFor(data.roldanSection.logo).url();
      }
    }

    // Procesar imágenes de VideoGallery
    if (data?.videoGallery?.videos) {
      data.videoGallery.videos = data.videoGallery.videos.map(
        (video, index) => ({
          ...video,
          id: index + 1, // Agregar ID para compatibilidad
          thumbnail: video.thumbnail ? urlFor(video.thumbnail).url() : null,
        })
      );
    }

    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

export async function getConcesionariosPageData() {
  try {
    const data = await client.fetch(`
      *[_type == "concesionariosPage"][0]{
        title,
        cities[] {
          cityName,
          distributors[] {
            name,
            address,
            phone,
            mobile,
            hours_weekdays,
            hours_saturday,
            status,
            image {
              asset-> {
                _id,
                url
              }
            },
            location {
              lat,
              lng
            }
          }
        }
      }
    `);

    // Procesar imágenes de concesionarios
    if (data?.cities) {
      data.cities = data.cities.map((city) => ({
        ...city,
        distributors: city.distributors.map((distributor, index) => ({
          ...distributor,
          id: index + 1, // Agregar ID para compatibilidad
          image: distributor.image ? urlFor(distributor.image).url() : null,
        })),
      }));
    }

    return data;
  } catch (error) {
    console.error("Error fetching concesionarios page data:", error);
    return null;
  }
}
