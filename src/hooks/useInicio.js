import {graphql,useStaticQuery} from 'gatsby';

const useInicio = () => {

    const contenido = useStaticQuery(graphql`
      query {
        allStrapiPaginas(filter: {nombre:{eq:"Inicio"}}) {
          nodes {
            id
            nombre
            contenido
            imagen {
              childImageSharp{
                fluid(maxWidth:1200){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      
    `);
    return contenido.allStrapiPaginas.nodes[0];
};

export default useInicio;