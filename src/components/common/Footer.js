import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPinterest } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.footerBackground};
  color: ${props => props.theme.colors.footerText};
  padding-top: ${props => props.theme.spacing.xxl};
`;

const FooterTop = styled.div`
  max-width: ${props => props.theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.m} ${props => props.theme.spacing.xxl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const FooterBottom = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: ${props => props.theme.spacing.m} 0;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small};
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: ${props => props.theme.spacing.l};
`;

const LogoText = styled.h2`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  margin: 0;
  letter-spacing: 2px;
`;

const FooterDescription = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  line-height: ${props => props.theme.typography.lineHeight.normal};
  margin-bottom: ${props => props.theme.spacing.l};
  color: ${props => props.theme.colors.footerText};
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.m};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.footerText};
  border-radius: ${props => props.theme.borderRadius.small};
  transition: ${props => props.theme.transitions.short};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h3`
  font-family: ${props => props.theme.typography.headingFont};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.l};
  position: relative;
  padding-bottom: ${props => props.theme.spacing.s};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.s};
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.footerText};
  text-decoration: none;
  transition: ${props => props.theme.transitions.short};
  opacity: 0.8;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    opacity: 1;
    padding-left: ${props => props.theme.spacing.s};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.spacing.m};
`;

const ContactIcon = styled.div`
  margin-right: ${props => props.theme.spacing.m};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  padding-top: 3px;
`;

const ContactText = styled.div`
  font-family: ${props => props.theme.typography.bodyFont};
  opacity: 0.8;
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: ${props => props.theme.spacing.m};
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.footerText};
  font-family: ${props => props.theme.typography.bodyFont};
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
  }
`;

const NewsletterButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  font-family: ${props => props.theme.typography.bodyFont};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: ${props => props.theme.transitions.short};
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Tutaj będzie logika zapisywania do newslettera
    alert('Dziękujemy za zapisanie się do naszego newslettera!');
  };
  
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterColumn>
          <FooterLogo>
            <LogoText>VOYAGER</LogoText>
          </FooterLogo>
          <FooterDescription>
            Firmą rzemieślnicza specjalizująca się w produkcji wysokiej jakości wyrobów skórzanych.
            Wszystkie nasze produkty wykonywane są ręcznie z dbałością o najmniejsze szczegóły.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://pinterest.com" target="_blank" aria-label="Pinterest">
              <FaPinterest />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Produkty</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink to="/torebki">Torebki</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/paski">Paski</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/plecaki">Plecaki</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/aleksandra-sopel">AS | Aleksandra Sopel</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Usługi</FooterTitle>
          <FooterLinks>
            <FooterLinkItem>
              <FooterLink to="/personalizacja">Personalizacja produktów</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/personalizacja">Oferta dla firm</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/">Wysyłka i zwroty</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/">Pielęgnacja skóry</FooterLink>
            </FooterLinkItem>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Kontakt</FooterTitle>
          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>
              ul. Przykładowa 123<br />
              00-000 Miasto
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactText>+48 123 456 789</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>kontakt@voyager.pl</ContactText>
          </ContactItem>
          
          <FooterTitle>Newsletter</FooterTitle>
          <FooterDescription>
            Zapisz się do naszego newslettera, aby otrzymywać informacje o nowościach i promocjach.
          </FooterDescription>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Twój adres e-mail" 
              required 
            />
            <NewsletterButton type="submit">
              Zapisz się
            </NewsletterButton>
          </NewsletterForm>
        </FooterColumn>
      </FooterTop>
      
      <FooterBottom>
        <div style={{ maxWidth: props => props.theme.container.maxWidth, margin: '0 auto' }}>
          &copy; {currentYear} Voyager. Wszystkie prawa zastrzeżone.
        </div>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;