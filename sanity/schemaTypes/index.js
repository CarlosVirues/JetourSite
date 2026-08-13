import homePage from "./homePage";
import concesionariosPage from "./concesionariosPage";
import vehicleModel from "./vehicleModel";
import posventaPage from "./posventaPage";
import newsCategory from "./newsCategory";
import newsArticle from "./newsArticle";
import seo from "./seo";

export const schema = {
  types: [
    homePage,
    concesionariosPage,
    vehicleModel,
    posventaPage,
    newsCategory,
    newsArticle,
    // Objeto reutilizable, no un documento: se embebe como campo en los 4 anteriores.
    seo,
  ],
};
