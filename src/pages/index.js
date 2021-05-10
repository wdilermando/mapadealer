import {
  BenefitsSection,
  GapSection,
  HeroSectionCarrousel,
  InfoSection,
  InfoSection2,
  NewsSection,
  PartnerSection,
  ServicesSection,
  SocialSection,
  SupportSection,
} from '../components';
import { getAllPosts } from '../lib/api';

export default function Home({ allPosts }) {
  return (
    <>
      <HeroSectionCarrousel />
      <InfoSection />
      <InfoSection2 />
      <SocialSection />
      <ServicesSection />
      <BenefitsSection />
      <GapSection />
      <PartnerSection />
      <SupportSection />
      <NewsSection posts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts },
    revalidate: 10,
  };
}
