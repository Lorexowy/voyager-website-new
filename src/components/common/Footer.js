import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.lightBackground};
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.m};
  margin-top: ${props => props.theme.spacing.xxl};
`;

const FooterContent = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const FooterSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.l};
`;

const FooterTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing.m};
  padding-bottom: ${props => props.theme.spacing.xs};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  display: inline-block;
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLink = styled.li`
  margin-bottom: ${props => props.theme.spacing.s};

  a {
    color: ${props => props.theme.colors.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.s};
  color: ${props => props.theme.colors.text};
`;

const ContactIcon = styled.span`
  margin-right: ${props => props.theme.spacing.s};
  color: ${props => props.theme.colors.primary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.m};
  margin-top: ${props => props.theme.spacing.m};
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.large};
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${props => props.theme.spacing.l};
  margin-top: ${props => props.theme.spacing.l};
  border-top: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.lightText};
  font-size: ${props => props.theme.fontSizes.small};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Voyager</FooterTitle>
          <p style={{ marginBottom: '1rem' }}>
            Firmą rzemieślnicza specjalizująca się w produkcji wysokiej jakości wyrobów skórzanych.
            Wszystkie nasze produkty wykonywane są ręcznie z dbałością o najmniejsze szczegóły.
          </p>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Produkty</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/torebki">Torebki</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/paski">Paski</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/plecaki">Plecaki</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/aleksandra-sopel">AS | Aleksandra Sopel</Link>
            </FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Usługi</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/personalizacja">Personalizacja produktów</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/personalizacja">Oferta dla firm</Link>
            </FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Kontakt</FooterTitle>
          <ContactItem>
            <ContactIcon><FaMapMarkerAlt /></ContactIcon>
            <div>ul. Przykładowa 123<br />00-000 Miasto</div>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaPhone /></ContactIcon>
            <div>+48 123 456 789</div>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaEnvelope /></ContactIcon>
            <div>kontakt@voyager.pl</div>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <Copyright>
        &copy; {currentYear} Voyager. Wszystkie prawa zastrzeżone.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;