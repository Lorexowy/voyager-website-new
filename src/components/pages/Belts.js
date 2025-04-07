import React from 'react';
import styled from 'styled-components';
import ProductsGrid from '../common/ProductsGrid';

const PageContainer = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.m};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const PageDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Belts = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Paski</PageTitle>
        <PageDescription>
          Nasze paski to połączenie eleganckiego designu i trwałości. Wykonane z wyselekcjonowanych skór, 
          z dbałością o detale, stanowią doskonałe uzupełnienie każdej stylizacji. Oferujemy modele 
          o różnej szerokości, z różnorodnymi klamrami i wykończeniami, aby każdy mógł znaleźć coś dla siebie.
        </PageDescription>
      </PageHeader>
      
      <ProductsGrid 
        title="Nasze paski" 
        category="paski" 
      />
    </PageContainer>
  );
};

export default Belts;