import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './contact-section.scss';

import Icon from '../components/Icon';

const ContactSection = () => {
  const loadContactImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "allan_contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="section-contact-me">
      <Img className="contact-image" fluid={loadContactImage.placeholderImage.childImageSharp.fluid} />
      <div className="social-links">
        <a target="_blank" rel="noopener noreferrer" href="mailto:allangalera@gmail.com" className="social-link">
          <Icon icon="mail" size={48} color="#333" />
          <span>allangalera@gmail.com</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="//www.linkedin.com/in/allangalera" className="social-link">
          <Icon icon="linkedin" size={48} color="#333" />
          <span>linkedin.com/in/allangalera</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="//github.com/allangalera" className="social-link">
          <Icon icon="github" size={48} color="#333" />
          <span>github.com/allangalera</span>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
