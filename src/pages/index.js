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
import {
  allArticles, allBanners, allClients, allTestimonials,
} from '../lib/dato-cms';

export default function Home({
  allPosts, testimonials, banners, clients,
}) {
  return (
    <>
      <HeroSectionCarrousel banners={banners} />
      <InfoSection />
      <InfoSection2 />
      <SocialSection />
      <ServicesSection />
      <BenefitsSection />
      <GapSection />
      <PartnerSection testimonials={testimonials} partners={clients} />
      <SupportSection />
      <NewsSection posts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await allArticles();
  const testimonials = await allTestimonials();
  const clients = await allClients();
  const banners = await allBanners();

  return {
    props: {
      allPosts, testimonials, banners, clients,
    },
    revalidate: 120,
  };
}
