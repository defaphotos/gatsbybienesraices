import {graphql,useStaticQuery} from 'gatsby';

const usePropiedades = () => {
    const listado = useStaticQuery(graphql`
    query{
        allStrapiPropiedades {
          nodes {
            id
            nombre
            descripcion
            estacionamiento
            habitaciones
            wc
            descripcion
            precio
            categoria{
              nombre
            }
            agentes{
              nombre
              telefono
              email
            }
            imagen{
              childImageSharp{
                fluid(maxWidth: 600,maxHeight:400){
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `);

    return listado.allStrapiPropiedades.nodes;
};

export default usePropiedades;