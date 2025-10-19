// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Singleton para Página de Inicio
      S.listItem()
        .title("Página de Inicio")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      // Singleton para Página de Concesionarios
      S.listItem()
        .title("Página de Concesionarios")
        .id("concesionariosPage")
        .child(
          S.document()
            .schemaType("concesionariosPage")
            .documentId("concesionariosPage")
        ),
      // Singleton para Página de Posventa
      S.listItem()
        .title("Página de Posventa")
        .id("posventaPage")
        .child(
          S.document().schemaType("posventaPage").documentId("posventaPage")
        ),
      // Separador
      S.divider(),
      // Modelos de Vehículos
      S.listItem()
        .title("Modelos de Vehículos")
        .id("vehicleModels")
        .child(
          S.documentTypeList("vehicleModel")
            .title("Modelos de Vehículos")
            .filter('_type == "vehicleModel"')
        ),
      // Separador
      S.divider(),
      // Resto de tipos de documento
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "homePage",
            "concesionariosPage",
            "posventaPage",
            "vehicleModel",
          ].includes(listItem.getId())
      ),
    ]);
