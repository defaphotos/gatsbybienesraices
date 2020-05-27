import React from 'react';
import {Link,graphql,useStaticQuery} from 'gatsby';

import Navegacion from './navegacion';
import {css} from '@emotion/core';


const Header = () => {

    const logo = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "logo.svg"}){
          publicURL
        }
      }
      
    `);


    return (
        <header
            css={css`
                background-color: #0D283B;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items:center; 
                        justify-content: space-between;
                    }
                `}
            >
                <Link to="/">
                    <img src={logo.file.publicURL} alt="Logotipo Bienes Raices" />
                </Link>
                <Navegacion /> 
            </div>
        </header>
    );
};

export default Header;