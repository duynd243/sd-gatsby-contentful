import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HighlightSection from '../components/HighlightSection';
import CalculatorSection from '../components/CalculatorSection';

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulIntro(sort: { createdAt: ASC }) {
      nodes {
        id
        title
        description
      }
    }
    allContentfulHeroData {
      nodes {
        title
        description
        buttonText
        buttonUrl
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

type Props = PageProps & {
  data: Queries.Query;
};

const IndexPage = ({ data }: Props) => {
  return (
    <main className="bg-[#FBFDFF]">
      <section className="bg-[#383F50]">
        <Header />
        <HeroSection data={data.allContentfulHeroData.nodes[0]} />
      </section>
      <HighlightSection data={data.allContentfulIntro.nodes} />
      <CalculatorSection />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
