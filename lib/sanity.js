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

export async function getVehicleModelData(slug) {
  try {
    const data = await client.fetch(
      `
      *[_type == "vehicleModel" && slug.current == $slug][0]{
        slug,
        name,
        description,
        hero {
          backgroundImage {
            asset-> {
              _id,
              url
            }
          },
          vehicleName,
          vehicleDescription,
          height,
          logoImage {
            asset-> {
              _id,
              url
            }
          },
          logoAlt
        },
        features {
          items[] {
            title,
            description,
            image {
              asset-> {
                _id,
                url
              }
            }
          }
        },
        vehicleGallery {
          title,
          subtitle,
          images[] {
            image {
              asset-> {
                _id,
                url
              }
            },
            alt
          }
        },
        threeSixty {
          enabled,
          totalFrames,
          title,
          subtitle,
          imagePath,
          showInstructions,
          colorsPath,
          totalColors,
          colorNames[]
        },
        heroShowcase {
          title,
          subtitle,
          slides[] {
            image {
              asset-> {
                _id,
                url
              }
            },
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
            videoUrl,
            views,
            type
          }
        },
        technicalSheet {
          enabled,
          pdfFile {
            asset-> {
              _id,
              url
            }
          }
        }
      }
    `,
      { slug }
    );

    if (!data) return null;

    // Procesar imágenes del hero
    if (data.hero) {
      if (data.hero.backgroundImage) {
        data.hero.backgroundImage = urlFor(data.hero.backgroundImage).url();
      }
      if (data.hero.logoImage) {
        data.hero.logoImage = urlFor(data.hero.logoImage).url();
      }
    }

    // Procesar imágenes de features
    if (data.features?.items) {
      data.features.items = data.features.items.map((item, index) => ({
        ...item,
        id: index + 1,
        image: item.image ? urlFor(item.image).url() : null,
      }));
    }

    // Procesar imágenes de la galería del vehículo
    if (data.vehicleGallery?.images) {
      data.vehicleGallery.images = data.vehicleGallery.images.map(
        (item, index) => ({
          ...item,
          id: index + 1,
          image: item.image ? urlFor(item.image).url() : null,
        })
      );
    }

    // Procesar imágenes del hero showcase
    if (data.heroShowcase?.slides) {
      data.heroShowcase.slides = data.heroShowcase.slides.map(
        (slide, index) => ({
          ...slide,
          id: index + 1,
          image: slide.image ? urlFor(slide.image).url() : null,
        })
      );
    }

    // Procesar imágenes de la galería de videos
    if (data.videoGallery?.videos) {
      data.videoGallery.videos = data.videoGallery.videos.map(
        (video, index) => ({
          ...video,
          id: index + 1,
          thumbnail: video.thumbnail ? urlFor(video.thumbnail).url() : null,
        })
      );
    }

    // Procesar archivo PDF de ficha técnica
    if (data.technicalSheet?.pdfFile) {
      data.technicalSheet.pdfFile = data.technicalSheet.pdfFile.asset.url;
    }

    // Agregar configuración para threeSixty si está habilitado
    if (data.threeSixty?.enabled) {
      data.threeSixty.model = slug;
    }

    return data;
  } catch (error) {
    console.error("Error fetching vehicle model data:", error);
    return null;
  }
}

export async function getAllVehicleModels() {
  try {
    const data = await client.fetch(`
      *[_type == "vehicleModel"]{
        slug,
        name,
        description,
        hero {
          backgroundImage {
            asset-> {
              _id,
              url
            }
          }
        }
      }
    `);

    // Procesar imágenes
    return data.map((model) => ({
      ...model,
      hero: {
        ...model.hero,
        backgroundImage: model.hero?.backgroundImage
          ? urlFor(model.hero.backgroundImage).url()
          : null,
      },
    }));
  } catch (error) {
    console.error("Error fetching all vehicle models:", error);
    return [];
  }
}

export async function getPostventaPageData() {
  try {
    const data = await client.fetch(`
      *[_type == "posventaPage"][0]{
        title,
        subtitle,
        heroBackgroundImage {
          asset-> {
            _id,
            url
          }
        },
        serviceHero {
          title,
          logo {
            asset-> {
              _id,
              url
            }
          },
          features[] {
            title,
            description,
            image {
              asset-> {
                _id,
                url
              }
            },
            imagePosition
          }
        },
        originalParts {
          title,
          subtitle,
          description,
          parts[] {
            image {
              asset-> {
                _id,
                url
              }
            },
            alt,
            name
          }
        },
        serviceCenters {
          title,
          subtitle,
          backgroundImage {
            asset-> {
              _id,
              url
            }
          },
          cities[] {
            id,
            name,
            serviceCenters[] {
              name,
              address,
              nearBy,
              phone,
              mobile,
              schedule {
                weekdays,
                weekends
              },
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
      }
    `);

    if (!data) return null;

    // Procesar imagen de fondo del hero
    if (data.heroBackgroundImage) {
      data.heroBackgroundImage = urlFor(data.heroBackgroundImage).url();
    }

    // Procesar imágenes de serviceHero
    if (data.serviceHero) {
      if (data.serviceHero.logo) {
        data.serviceHero.logo = urlFor(data.serviceHero.logo).url();
      }
      if (data.serviceHero.features) {
        data.serviceHero.features = data.serviceHero.features.map(
          (feature) => ({
            ...feature,
            image: feature.image ? urlFor(feature.image).url() : null,
          })
        );
      }
    }

    // Procesar imágenes de originalParts
    if (data.originalParts?.parts) {
      data.originalParts.parts = data.originalParts.parts.map(
        (part, index) => ({
          ...part,
          id: index + 1,
          image: part.image ? urlFor(part.image).url() : null,
        })
      );
    }

    // Procesar imágenes de serviceCenters
    if (data.serviceCenters) {
      if (data.serviceCenters.backgroundImage) {
        data.serviceCenters.backgroundImage = urlFor(
          data.serviceCenters.backgroundImage
        ).url();
      }
      if (data.serviceCenters.cities) {
        data.serviceCenters.cities = data.serviceCenters.cities.map((city) => ({
          ...city,
          serviceCenters: city.serviceCenters.map((center, index) => ({
            ...center,
            id: index + 2, // Empezar desde 2 para mantener compatibilidad con datos existentes
            image: center.image ? urlFor(center.image).url() : null,
            city: city.id, // Agregar referencia a la ciudad
          })),
        }));
      }
    }

    return data;
  } catch (error) {
    console.error("Error fetching posventa page data:", error);
    return null;
  }
}
