import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Ruler from '../components/ruler';
import Button from '../components/Button/Button';
import Section from '../components/Section';
import Icon from '../components/Icon';
import SkillList from '../components/SkillList';
import ContactSection from '../components/ContactSection';
import ExperienceList from '../components/ExperienceList';
import SEO from '../components/seo';
import jump from 'jump.js';

import mySkillsList from '../info/mySkillsList';

const IndexPage = ({ pageContext }) => {
  // console.log(props.pageContext);
  const localeResources = pageContext.localeResources;
  const loadBannerImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "banner_allan_galera_pool_balls.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="banner">
        <Img
          className="banner-img"
          fluid={loadBannerImage.placeholderImage.childImageSharp.fluid}
          style={{ position: 'absolute' }}
        />
        <div className="overlay"></div>
        <div className="banner-content">
          <div className="title">
            {localeResources.banner.title.map((item, index) => {
              return <h1 key={index}>{item}</h1>;
            })}
          </div>
          <Ruler height={1} />
          <Button
            href="#contact-me"
            onClick={() => {
              jump('#contact-me');
            }}
          >
            {localeResources.banner.callToAction}
          </Button>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/allangalera/" target="_blank" rel="noopener noreferrer">
              <Icon icon="linkedin" />
            </a>
            <a href="https://github.com/allangalera" target="_blank" rel="noopener noreferrer">
              <Icon icon="github" />
            </a>
          </div>
        </div>
      </div>
      <Section id="about-me" title={localeResources.aboutMe.title}>
        <div style={{ maxWidth: '800px' }}>
          {localeResources.aboutMe.content.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </Section>
      <Section id="skills" title={localeResources.skills.title}>
        <SkillList skillList={mySkillsList} />
      </Section>
      <Section id="experience" title={localeResources.experience.title}>
        <ExperienceList experienceList={localeResources.experience.list} />
      </Section>
      <Section id="contact-me" title={localeResources.contact.title}>
        <ContactSection />
      </Section>
    </Layout>
  );
};

export default IndexPage;
