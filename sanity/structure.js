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
      // Separador
      S.divider(),
      // Resto de tipos de documento
      ...S.documentTypeListItems().filter(
        (listItem) => !["homePage"].includes(listItem.getId())
      ),
    ]);
