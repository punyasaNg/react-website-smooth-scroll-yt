import React from 'react'
import { FaFacebook,FaYoutube,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,
SocialMedia,SocialIconLink,SocialIcons,SocialLogo,SocialMediaWrap,WebsiteRights} from './footerElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper> 
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Servies</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Servies</FooterLink>
                        </FooterLinkItems>


                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Servies</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Servies</FooterLink>
                        </FooterLinkItems>

                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>punyasa</SocialLogo>
                        <WebsiteRights>punyasa {new Date().getFullYear} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
