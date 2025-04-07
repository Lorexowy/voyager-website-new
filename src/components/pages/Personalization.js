import React from 'react';
import styled from 'styled-components';
import { FaGift, FaBriefcase, FaPen, FaPalette } from 'react-icons/fa';

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

const Section = styled.section`
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.l};
  text-align: center;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.l};
  margin-top: ${props => props.theme.spacing.xl};
`;

const OptionCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.small};
  padding: ${props => props.theme.spacing.l};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const OptionIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const OptionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.s};
`;

const OptionDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
`;

const ProcessSteps = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Step = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing.l};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: ${props => props.theme.spacing.m};
  flex-shrink: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: ${props => props.theme.spacing.s};
  }
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const StepDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
`;

const CorporateSection = styled.section`
  background-color: ${props => props.theme.colors.lightBackground};
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.m};
  margin: ${props => props.theme.spacing.xxl} 0;
  text-align: center;
`;

const CorporateTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.m};
`;

const CorporateDescription = styled.p`
  color: ${props => props.theme.colors.lightText};
  max-width: 800px;
  margin: 0 auto ${props => props.theme.spacing.l};
  line-height: 1.6;
`;

const ContactButton = styled.a`
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

const Personalization = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Personalizacja produktów</PageTitle>
        <PageDescription>
          Oferujemy usługi personalizacji naszych wyrobów skórzanych, które pozwalają na stworzenie
          wyjątkowego produktu, dostosowanego do indywidualnych potrzeb i preferencji. Niezależnie od tego,
          czy szukasz prezentu, czy chcesz wyróżnić swoją markę, nasze rozwiązania zapewnią niepowtarzalny efekt.
        </PageDescription>
      </PageHeader>
      
      <Section>
        <SectionTitle>Możliwości personalizacji</SectionTitle>
        <OptionsGrid>
          <OptionCard>
            <OptionIcon>
              <FaPen />
            </OptionIcon>
            <OptionTitle>Grawerowanie</OptionTitle>
            <OptionDescription>
              Trwałe grawerowanie tekstu lub logo na powierzchni skóry, tworzące elegancki i profesjonalny efekt.
            </OptionDescription>
          </OptionCard>
          
          <OptionCard>
            <OptionIcon>
              <FaPalette />
            </OptionIcon>
            <OptionTitle>Wybór kolorów</OptionTitle>
            <OptionDescription>
              Możliwość wyboru koloru skóry, nici, elementów wykończeniowych oraz dodatków zgodnie z preferencjami.
            </OptionDescription>
          </OptionCard>
          
          <OptionCard>
            <OptionIcon>
              <FaGift />
            </OptionIcon>
            <OptionTitle>Niestandardowe wymiary</OptionTitle>
            <OptionDescription>
              Dostosowanie rozmiarów i proporcji produktu do specyficznych wymagań i zastosowań.
            </OptionDescription>
          </OptionCard>
        </OptionsGrid>
      </Section>
      
      <Section>
        <SectionTitle>Proces personalizacji</SectionTitle>
        <ProcessSteps>
          <Step>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>Konsultacja</StepTitle>
              <StepDescription>
                Rozpoczynamy od rozmowy na temat Twoich oczekiwań, preferencji oraz potrzeb. 
                Omówimy dostępne opcje personalizacji i doradzimy najlepsze rozwiązania.
              </StepDescription>
            </StepContent>
          </Step>
          
          <Step>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>Projekt</StepTitle>
              <StepDescription>
                Na podstawie ustaleń przygotowujemy projekt, który zawiera szczegóły personalizacji, 
                jak również wizualizację końcowego efektu.
              </StepDescription>
            </StepContent>
          </Step>
          
          <Step>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>Akceptacja</StepTitle>
              <StepDescription>
                Przedstawiamy projekt do akceptacji. Na tym etapie możliwe są jeszcze zmiany i modyfikacje, 
                aby osiągnąć pełną satysfakcję.
              </StepDescription>
            </StepContent>
          </Step>
          
          <Step>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>Realizacja</StepTitle>
              <StepDescription>
                Po zatwierdzeniu projektu przystępujemy do realizacji. Każdy element personalizacji jest 
                wykonywany ręcznie z najwyższą dbałością o detale.
              </StepDescription>
            </StepContent>
          </Step>
          
          <Step>
            <StepNumber>5</StepNumber>
            <StepContent>
              <StepTitle>Dostarczenie</StepTitle>
              <StepDescription>
                Gotowy, spersonalizowany produkt dostarczamy w eleganckiej formie, gotowy do użycia lub wręczenia jako prezent.
              </StepDescription>
            </StepContent>
          </Step>
        </ProcessSteps>
      </Section>
      
      <CorporateSection>
        <CorporateTitle>Personalizacja dla firm</CorporateTitle>
        <CorporateDescription>
          Oferujemy specjalne rozwiązania dla firm, które chcą wyróżnić swoją markę za pomocą ekskluzywnych produktów skórzanych.
          Nasze spersonalizowane wyroby mogą służyć jako eleganckie upominki dla klientów, wyjątkowe prezenty dla pracowników
          lub ekskluzywne materiały promocyjne na specjalne okazje.
        </CorporateDescription>
        <ContactButton href="mailto:kontakt@voyager.pl">Zapytaj o ofertę dla firm</ContactButton>
      </CorporateSection>
      
      <Section>
        <SectionTitle>Najczęściej personalizowane produkty</SectionTitle>
        <OptionsGrid>
          <OptionCard>
            <OptionTitle>Portfele i etui</OptionTitle>
            <OptionDescription>
              Idealne do grawerowania inicjałów, logo firmy lub życzeń, stanowią praktyczny i elegancki prezent.
            </OptionDescription>
          </OptionCard>
          
          <OptionCard>
            <OptionTitle>Paski</OptionTitle>
            <OptionDescription>
              Możliwość personalizacji klamry, wyboru koloru i wykończenia, a także grawerowania na wewnętrznej stronie.
            </OptionDescription>
          </OptionCard>
          
          <OptionCard>
            <OptionTitle>Organizery i teczki</OptionTitle>
            <OptionDescription>
              Profesjonalne akcesoria biznesowe z możliwością dodania logo firmy, idealne jako upominki korporacyjne.
            </OptionDescription>
          </OptionCard>
          
          <OptionCard>
            <OptionTitle>Torebki i plecaki</OptionTitle>
            <OptionDescription>
              Możliwość doboru kolorów, wykończeń oraz dodania unikalnych elementów personalizujących.
            </OptionDescription>
          </OptionCard>
        </OptionsGrid>
      </Section>
    </PageContainer>
  );
};

export default Personalization;