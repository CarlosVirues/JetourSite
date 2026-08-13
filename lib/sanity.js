import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Construcción defensiva del cliente Sanity:
// - Si projectId/dataset están ausentes o tienen formato inválido (espacios, mayúsculas,
//   caracteres especiales — común al copiar/pegar en dashboards de Vercel), evitamos que
//   createClient tire un ConfigurationError sincrónico que rompa el build entero.
// - Sanity requiere projectId con [a-z0-9-] solamente.
// - Las funciones getXxxData() están envueltas en try/catch y devuelven null si falla.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();

// Sanity validation rules (cumple lo que createClient exige sincrónicamente):
// - projectId: solo [a-z0-9-]
// - dataset:   solo [a-z0-9_-], opcionalmente arranca con ~, máximo 64 chars
const PROJECT_ID_REGEX = /^[a-z0-9-]+$/;
const DATASET_REGEX = /^~?[a-z0-9_-]{1,64}$/;

const isValidProjectId = projectId && PROJECT_ID_REGEX.test(projectId);
const isValidDataset = dataset && DATASET_REGEX.test(dataset);

export const client = isValidProjectId && isValidDataset
  ? createClient({
      projectId,
      dataset,
      // 2026-08-12: pasa de la API live al CDN. El dashboard mostraba 0 requests de CDN
      // y 50.3k de API live en 12 días — se gastaba la cuota escasa teniendo la generosa
      // sin usar. El cliente no lleva token y el dataset es public, así que el CDN aplica
      // de verdad. Contrapartida: lo publicado en Studio tarda hasta ~60s en propagarse.
      useCdn: true,
      apiVersion: "2024-01-01",
    })
  : null;

if (!client && typeof window === "undefined") {
  if (!projectId || !dataset) {
    console.warn(
      "[sanity] Cliente no inicializado: faltan NEXT_PUBLIC_SANITY_PROJECT_ID o NEXT_PUBLIC_SANITY_DATASET."
    );
  } else if (!isValidProjectId) {
    console.warn(
      `[sanity] Cliente no inicializado: projectId="${projectId}" inválido. ` +
      "Sanity requiere solo a-z, 0-9 y guiones."
    );
  } else if (!isValidDataset) {
    console.warn(
      `[sanity] Cliente no inicializado: dataset="${dataset}" inválido. ` +
      "Sanity requiere solo a-z (lowercase), 0-9, underscores y guiones (máximo 64 chars). " +
      "Revisar mayúsculas, espacios o caracteres especiales."
    );
  }
}

// Builder para URLs de imágenes — defensivo también.
// 2026-08-12: `auto("format")` se aplica ACÁ, en el único punto por el que pasan todas las
// imágenes, para que ningún call site quede afuera. Sirve WebP/AVIF al navegador que lo
// soporte con los MISMOS píxeles; antes se mandaba el original completo (assets de hasta
// 2560×1440), que era el origen de los ~450 MB/día de bandwidth. Medido sobre 3 assets
// reales: 1002 KB → 280 KB (-72%). Devuelve el builder, así que sigue admitiendo
// encadenar .width()/.quality() donde haga falta.
const builder = client ? imageUrlBuilder(client) : null;
export const urlFor = (source) =>
  builder ? builder.image(source).auto("format") : { url: () => null };

export async function getHomePageData() {
  try {
    const data = await client.fetch(`
      *[_type == "homePage"][0]{
        seo {
          metaTitle,
          metaDescription,
          canonical,
          "ogImage": ogImage.asset->url
        },
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
        seo {
          metaTitle,
          metaDescription,
          canonical,
          "ogImage": ogImage.asset->url
        },
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

// --- Adaptador vehicleModel → shape de lib/page-data.js (rewire a Sanity 2026-06-11) ---
// Convierte recursivamente cualquier objeto imagen de Sanity ({_type:"image", asset:{_ref}})
// en su URL de CDN, dejando el resto del documento intacto (videos GCS, highlights, bullets,
// hex de colores, etc. ya vienen como strings). Así el doc migrado calza con los props que
// esperan las componentes, que antes consumían el hardcode de getVehicleModelPageData().
function resolveSanityImages(node) {
  if (Array.isArray(node)) return node.map(resolveSanityImages);
  if (node && typeof node === "object") {
    if (node._type === "image") {
      // imagen sin asset → null; con asset → URL del CDN (urlFor ya aplica auto=format)
      return node.asset ? urlFor(node).url() : null;
    }
    const out = {};
    for (const key of Object.keys(node)) out[key] = resolveSanityImages(node[key]);
    return out;
  }
  return node;
}

// Devuelve los datos del modelo con la MISMA forma que getVehicleModelPageData() del hardcode.
// La página usa esto y cae al hardcode si Sanity devuelve null (cliente caído / doc inexistente).
export async function getVehicleModelPageDataFromSanity(slug) {
  if (!client) return null;
  try {
    const doc = await client.fetch(
      `*[_type == "vehicleModel" && slug.current == $slug][0]`,
      { slug }
    );
    if (!doc) return null;
    return resolveSanityImages(doc);
  } catch (error) {
    console.error("Error fetching vehicle model page data (Sanity):", error);
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
        seo {
          metaTitle,
          metaDescription,
          canonical,
          "ogImage": ogImage.asset->url
        },
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
