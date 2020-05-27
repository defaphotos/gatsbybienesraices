const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultados = await graphql(`
    query {
      allStrapiPaginas{
        nodes{
          id
          nombre
        }
      }
      allStrapiPropiedades {
        nodes {
          id
          nombre
        }
      }
    }
  `);

  if (resultados.errors) {
    reporter.panic("No hubo resultados", resultados.errors)
  }

  const propiedades = resultados.data.allStrapiPropiedades.nodes
  const paginas = resultados.data.allStrapiPaginas.nodes;



  propiedades.forEach(propiedad => {
    const url = urlSlug(propiedad.nombre);
    actions.createPage({
        path: url,
        component: require.resolve('./src/components/propiedades.js'),
        context:{
          id:propiedad.id
        }
    })
  });

  paginas.forEach(pagina => {
    const url = urlSlug(pagina.nombre);
    actions.createPage({
        path: url,
        component: require.resolve('./src/components/paginas.js'),
        context:{
          id:pagina.id
        }
    })
  });


}
