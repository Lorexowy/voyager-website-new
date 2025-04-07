import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductsGrid from '../common/ProductsGrid';

const HomeContainer = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.unsplash.com/photo-1560858070-f09a703bd020?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
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

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.m};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.l};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.l};
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const FeaturesSection = styled.section`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.m};
  background-color: ${props => props.theme.colors.lightBackground};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xxlarge};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text};
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
`;

const Feature = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.l};
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const FeatureTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.s};
  color: ${props => props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
`;

const CategorySection = styled.section`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.m};
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.l};
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
`;

const Category = styled(Link)`
  position: relative;
  height: 250px;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
    
    img {
      transform: scale(1.05);
    }
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  padding: ${props => props.theme.spacing.m};
`;

const CategoryTitle = styled.h3`
  color: white;
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const CategoryDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${props => props.theme.fontSizes.small};
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>VOYAGER</HeroTitle>
          <HeroSubtitle>
            Rzemieślnicze wyroby skórzane najwyższej jakości.
            Tworzymy z pasją i dbałością o każdy detal.
          </HeroSubtitle>
          <Button to="/torebki">Zobacz nasze produkty</Button>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <SectionTitle>Dlaczego VOYAGER?</SectionTitle>
        <Features>
          <Feature>
            <FeatureIcon>🔍</FeatureIcon>
            <FeatureTitle>Najwyższa jakość</FeatureTitle>
            <FeatureDescription>
              Każdy produkt wykonany jest z najlepszych gatunkowo skór, z dbałością o najdrobniejsze detale.
            </FeatureDescription>
          </Feature>
          
          <Feature>
            <FeatureIcon>✨</FeatureIcon>
            <FeatureTitle>Ręczne wykonanie</FeatureTitle>
            <FeatureDescription>
              Wszystkie nasze produkty są tworzone ręcznie przez doświadczonych rzemieślników.
            </FeatureDescription>
          </Feature>
          
          <Feature>
            <FeatureIcon>🎨</FeatureIcon>
            <FeatureTitle>Personalizacja</FeatureTitle>
            <FeatureDescription>
              Oferujemy możliwość personalizacji produktów według indywidualnych preferencji klienta.
            </FeatureDescription>
          </Feature>
        </Features>
      </FeaturesSection>
      
      <CategorySection>
        <SectionTitle>Nasze produkty</SectionTitle>
        <Categories>
          <Category to="/torebki">
            <CategoryImage src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Torebki" />
            <CategoryOverlay>
              <CategoryTitle>Torebki</CategoryTitle>
              <CategoryDescription>Eleganckie i funkcjonalne torebki skórzane</CategoryDescription>
            </CategoryOverlay>
          </Category>
          
          <Category to="/paski">
            <CategoryImage src="https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Paski" />
            <CategoryOverlay>
              <CategoryTitle>Paski</CategoryTitle>
              <CategoryDescription>Stylowe paski ze skóry naturalnej</CategoryDescription>
            </CategoryOverlay>
          </Category>
          
          <Category to="/plecaki">
            <CategoryImage src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Plecaki" />
            <CategoryOverlay>
              <CategoryTitle>Plecaki</CategoryTitle>
              <CategoryDescription>Wytrzymałe i funkcjonalne plecaki skórzane</CategoryDescription>
            </CategoryOverlay>
          </Category>
        </Categories>
      </CategorySection>
      
      <section style={{ padding: '3rem 0' }}>
        <ProductsGrid 
          title="Polecane produkty" 
          category="" // Puste, aby pobrać wszystkie produkty
        />
      </section>
    </HomeContainer>
  );
};

export default Home;