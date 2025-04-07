import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductsGrid from '../common/ProductsGrid';
import { FaLeaf, FaHandHolding, FaGem } from 'react-icons/fa';

// Hero Section
const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
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
    transform: scale(1.03);
    transition: transform 0.5s ease-out;
  }
  
  &:hover::before {
    transform: scale(1);
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  padding: ${props => props.theme.spacing.l};
  max-width: 800px;
  z-index: 1;
  animation: fadeIn 1s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroTitle = styled.h1`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.huge};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.spacing.m};
  letter-spacing: 4px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.xxxlarge};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.xxlarge};
  }
`;

const HeroSubtitle = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.light};
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${props => props.theme.typography.lineHeight.loose};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: white;
  border: 2px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.xl};
  border-radius: 0;
  font-family: ${props => props.theme.typography.bodyFont};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${props => props.theme.fontSizes.small};
  transition: ${props => props.theme.transitions.medium};
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.primary ? 'transparent' : props.theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

// About Section
const AboutSection = styled.section`
  padding: ${props => props.theme.spacing.xxxl} 0;
  background-color: ${props => props.theme.colors.background};
`;

const SectionContainer = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.m};
`;

const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.xxlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const SectionSubtitle = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.lightText};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${props => props.theme.typography.lineHeight.normal};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const AboutCard = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.l};
  background-color: ${props => props.theme.colors.lightBackground};
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: ${props => props.theme.transitions.medium};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const CardTitle = styled.h3`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const CardText = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.lightText};
  line-height: ${props => props.theme.typography.lineHeight.normal};
`;

// Categories Section
const CategoriesSection = styled.section`
  padding: ${props => props.theme.spacing.xxxl} 0;
  background-color: ${props => props.theme.colors.lightBackground};
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.l};
  margin-top: ${props => props.theme.spacing.xxl};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(Link)`
  position: relative;
  height: 400px;
  overflow: hidden;
  text-decoration: none;
  display: block;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CategoryContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.theme.spacing.xl};
  z-index: 2;
`;

const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: white;
  margin-bottom: ${props => props.theme.spacing.s};
`;

const CategoryDescription = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.medium};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${props => props.theme.spacing.m};
`;

const CategoryLink = styled.span`
  font-family: ${props => props.theme.typography.bodyFont};
  font-size: ${props => props.theme.fontSizes.small};
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${props => props.theme.fontWeights.medium};
  position: relative;
  
  &:after {
    content: '→';
    margin-left: ${props => props.theme.spacing.s};
    transition: margin-left 0.3s ease;
  }
  
  ${CategoryCard}:hover &:after {
    margin-left: ${props => props.theme.spacing.m};
  }
`;

// Products Section
const ProductsSection = styled.section`
  padding: ${props => props.theme.spacing.xxxl} 0;
  background-color: ${props => props.theme.colors.background};
`;

// Gallery Section
const GallerySection = styled.section`
  padding: ${props => props.theme.spacing.xxxl} 0;
  background-color: ${props => props.theme.colors.lightBackground};
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: ${props => props.theme.spacing.s};
  margin-top: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 250px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 250px);
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>VOYAGER</HeroTitle>
          <HeroSubtitle>
            Rzemieślnicze wyroby skórzane najwyższej jakości.
            Tworzymy z pasją i dbałością o każdy detal.
          </HeroSubtitle>
          <Button to="/torebki" primary>Odkryj kolekcję</Button>
        </HeroContent>
      </HeroSection>
      
      <AboutSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Dlaczego VOYAGER?</SectionTitle>
            <SectionSubtitle>
              Nasza firma to połączenie tradycyjnego rzemiosła z nowoczesnym designem. 
              Każdy produkt to historia opowiedziana przez ręce doświadczonych rzemieślników.
            </SectionSubtitle>
          </SectionHeader>
          
          <AboutGrid>
            <AboutCard>
              <CardIcon>
                <FaGem />
              </CardIcon>
              <CardTitle>Najwyższa jakość</CardTitle>
              <CardText>
                Każdy produkt wykonany jest z wyselekcjonowanych, najlepszych gatunkowo skór, 
                z dbałością o najdrobniejsze detale i wykończenia.
              </CardText>
            </AboutCard>
            
            <AboutCard>
              <CardIcon>
                <FaHandHolding />
              </CardIcon>
              <CardTitle>Ręczne wykonanie</CardTitle>
              <CardText>
                Wszystkie nasze produkty są tworzone ręcznie przez doświadczonych rzemieślników,
                co gwarantuje ich unikalność i najwyższą jakość.
              </CardText>
            </AboutCard>
            
            <AboutCard>
              <CardIcon>
                <FaLeaf />
              </CardIcon>
              <CardTitle>Personalizacja</CardTitle>
              <CardText>
                Oferujemy możliwość personalizacji produktów według indywidualnych preferencji klienta,
                co czyni je wyjątkowymi i niepowtarzalnymi.
              </CardText>
            </AboutCard>
          </AboutGrid>
        </SectionContainer>
      </AboutSection>
      
      <CategoriesSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Nasze kolekcje</SectionTitle>
            <SectionSubtitle>
              Odkryj różnorodność naszych kolekcji, które łączą w sobie funkcjonalność, 
              elegancję i najwyższą jakość wykonania.
            </SectionSubtitle>
          </SectionHeader>
          
          <CategoriesGrid>
            <CategoryCard to="/torebki">
              <CategoryImage src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Torebki" />
              <CategoryContent>
                <CategoryTitle>Torebki</CategoryTitle>
                <CategoryDescription>
                  Eleganckie i funkcjonalne torebki ze skóry naturalnej, 
                  idealne na każdą okazję.
                </CategoryDescription>
                <CategoryLink>Zobacz kolekcję</CategoryLink>
              </CategoryContent>
            </CategoryCard>
            
            <CategoryCard to="/paski">
              <CategoryImage src="https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Paski" />
              <CategoryContent>
                <CategoryTitle>Paski</CategoryTitle>
                <CategoryDescription>
                  Stylowe paski ze skóry naturalnej, które dopełnią 
                  każdą elegancką stylizację.
                </CategoryDescription>
                <CategoryLink>Zobacz kolekcję</CategoryLink>
              </CategoryContent>
            </CategoryCard>
            
            <CategoryCard to="/plecaki">
              <CategoryImage src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Plecaki" />
              <CategoryContent>
                <CategoryTitle>Plecaki</CategoryTitle>
                <CategoryDescription>
                  Wytrzymałe i funkcjonalne plecaki skórzane, łączące 
                  styl z praktycznością.
                </CategoryDescription>
                <CategoryLink>Zobacz kolekcję</CategoryLink>
              </CategoryContent>
            </CategoryCard>
          </CategoriesGrid>
        </SectionContainer>
      </CategoriesSection>
      
      <ProductsSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Polecane produkty</SectionTitle>
            <SectionSubtitle>
              Odkryj nasze bestsellery i najnowsze dodatki do kolekcji.
            </SectionSubtitle>
          </SectionHeader>
          
          <ProductsGrid 
            title="" 
            category="" // Puste, aby pobrać wszystkie produkty
            hideTitle={true}
          />
        </SectionContainer>
      </ProductsSection>
      
      <GallerySection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Nasza pracownia</SectionTitle>
            <SectionSubtitle>
              Zajrzyj do naszej pracowni i poznaj proces tworzenia naszych wyrobów.
            </SectionSubtitle>
          </SectionHeader>
          
          <Gallery>
            <GalleryItem>
              <GalleryImage 
                src="https://images.unsplash.com/photo-1531873252757-8c21b6510100?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Pracownia skórzana" 
              />
            </GalleryItem>
            <GalleryItem>
              <GalleryImage 
                src="https://images.unsplash.com/photo-1510706407381-47d02a84212a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Narzędzia rzemieślnicze" 
              />
            </GalleryItem>
            <GalleryItem>
              <GalleryImage 
                src="https://images.unsplash.com/photo-1572263247793-13b233f3fadb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Skóra naturalna" 
              />
            </GalleryItem>
            <GalleryItem>
              <GalleryImage 
                src="https://images.unsplash.com/photo-1605056897898-a2c88d61cb05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Proces produkcji" 
              />
            </GalleryItem>
            <GalleryItem>
              <GalleryImage 
                src="https://images.unsplash.com/photo-1607342804351-3d268df4ad25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Detale wyrobów" 
              />
            </GalleryItem>
          </Gallery>
        </SectionContainer>
      </GallerySection>
    </>
  );
};

export default Home;