import React from 'react';
import styled from 'styled-components';
import ProductsGrid from '../common/ProductsGrid';

const PageContainer = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.m};
`;

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  padding: ${props => props.theme.spacing.l};
  max-width: 800px;
  z-index: 1;
`;

const BrandTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.m};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const BrandDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.l};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const Section = styled.section`
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.l};
  text-align: center;
`;

const DesignerSection = styled.section`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xxl} 0;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const DesignerImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 250px;
    height: 250px;
  }
`;

const DesignerInfo = styled.div`
  flex: 1;
`;

const DesignerName = styled.h2`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const DesignerTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const DesignerBio = styled.p`
  color: ${props => props.theme.colors.lightText};
  line-height: 1.8;
`;

const FeatureList = styled.ul`
  margin-top: ${props => props.theme.spacing.l};
  padding-left: ${props => props.theme.spacing.l};
`;

const FeatureItem = styled.li`
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.s};
`;

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.l};
`;

const CollectionItem = styled.div`
  text-align: center;
`;

const CollectionImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: ${props => props.theme.spacing.s};
  border-radius: ${props => props.theme.borderRadius.medium};
`;

const CollectionName = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const CollectionDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
`;

const AleksandraSopel = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <BrandTitle>AS | Aleksandra Sopel</BrandTitle>
          <BrandDescription>
            Ekskluzywna linia produktów skórzanych, zaprojektowana przez Aleksandrę Sopel.
            Połączenie nowoczesnego designu z tradycyjnym rzemiosłem.
          </BrandDescription>
        </HeroContent>
      </HeroSection>
      
      <DesignerSection>
        <DesignerImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Aleksandra Sopel" />
        <DesignerInfo>
          <DesignerName>Aleksandra Sopel</DesignerName>
          <DesignerTitle>Projektant i założyciel</DesignerTitle>
          <DesignerBio>
            Aleksandra Sopel to utalentowana projektantka z wieloletnim doświadczeniem w branży skórzanej.
            Jej projekty charakteryzują się połączeniem funkcjonalności z nowoczesnym designem, przy zachowaniu 
            najwyższej jakości wykonania. Inspiracje czerpie z podróży, architektury i sztuki współczesnej.
            <br /><br />
            Kolekcja AS | Aleksandra Sopel powstała z myślą o wymagających klientach, poszukujących unikatowych,
            ręcznie wykonanych produktów skórzanych, które wyróżniają się na tle masowej produkcji.
          </DesignerBio>
        </DesignerInfo>
      </DesignerSection>
      
      <Section>
        <SectionTitle>Cechy kolekcji AS</SectionTitle>
        <FeatureList>
          <FeatureItem>
            Ręczne wykonanie z najwyższej jakości włoskich skór
          </FeatureItem>
          <FeatureItem>
            Unikalne wzornictwo inspirowane współczesną architekturą
          </FeatureItem>
          <FeatureItem>
            Oryginalne połączenia kolorystyczne
          </FeatureItem>
          <FeatureItem>
            Dbałość o każdy detal i precyzja wykonania
          </FeatureItem>
          <FeatureItem>
            Funkcjonalność i wygoda użytkowania
          </FeatureItem>
          <FeatureItem>
            Limitowane edycje - wyjątkowość i ekskluzywność
          </FeatureItem>
        </FeatureList>
      </Section>
      
      <Section>
        <SectionTitle>Inspiracje</SectionTitle>
        <CollectionGrid>
          <CollectionItem>
            <CollectionImage src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Inspiracja Miejska" />
            <CollectionName>Miejskie Inspiracje</CollectionName>
            <CollectionDescription>
              Geometryczne formy inspirowane współczesną architekturą miejską.
            </CollectionDescription>
          </CollectionItem>
          
          <CollectionItem>
            <CollectionImage src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Inspiracja Naturalna" />
            <CollectionName>Naturalna Harmonia</CollectionName>
            <CollectionDescription>
              Organiczne kształty i kolory zaczerpnięte z natury.
            </CollectionDescription>
          </CollectionItem>
          
          <CollectionItem>
            <CollectionImage src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Inspiracja Artystyczna" />
            <CollectionName>Awangardowa Ekspresja</CollectionName>
            <CollectionDescription>
              Odważne połączenia kolorystyczne i niekonwencjonalne formy.
            </CollectionDescription>
          </CollectionItem>
        </CollectionGrid>
      </Section>
      
      <ProductsGrid 
        title="Kolekcja AS | Aleksandra Sopel" 
        category="aleksandra-sopel" 
      />
    </PageContainer>
  );
};

export default AleksandraSopel;