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

const Backpacks = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Plecaki</PageTitle>
        <PageDescription>
          Nasze skórzane plecaki to idealne połączenie stylu, wygody i funkcjonalności. 
          Wykonane z wytrzymałej skóry naturalnej, świetnie sprawdzą się zarówno w codziennym użytkowaniu, 
          jak i podczas podróży. Oferujemy różne rozmiary i modele, które doskonale dopasują się 
          do Twoich potrzeb, zapewniając komfort noszenia i elegancki wygląd.
        </PageDescription>
      </PageHeader>
      
      <ProductsGrid 
        title="Nasze plecaki" 
        category="plecaki" 
      />
    </PageContainer>
  );
};

export default Backpacks;