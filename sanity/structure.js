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
      // Separador
      S.divider(),
      // Resto de tipos de documento
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["homePage", "concesionariosPage"].includes(listItem.getId())
      ),
    ]);
