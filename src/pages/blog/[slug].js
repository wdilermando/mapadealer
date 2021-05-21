import { Background, Parallax } from 'react-parallax';
import Image from 'next/image';
import styled from 'styled-components';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import background from '../../assets/images/bgServices.png';
import { Col, Row } from 'react-bootstrap';
import { ContainerCustom } from '../../styles/globalStyles';
import { SocialIcons } from '../../components';

const HeroSectionPost = styled.div`
  height: 50vh;
  width: 100%;
  @media screen and (max-width: 450px) {
    height: 25vh;
  }
`;

const ContentBg = styled(Parallax)`
  height: auto;
  background-color: ${({ theme }) => theme.primaryLight};
`;

const PostContent = styled.div`
  background-color: #fbfbfb;
  color: ${({ theme }) => theme.primaryDark};
  padding: 3em;
  margin-bottom: 3em;
`;

const SocialCard = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  background-color: ${({ theme }) => theme.primaryLight};
  box-shadow: 0px 5px 10px 0px #0000001a;
  border-radius: 20px;
  height: 25vh;
  padding: 2em;
`;

const TitleSection = styled.h2`
  font-weight: ${({ enfasis }) => (enfasis ? '800' : '600')};
  margin-bottom: 3vh;
  white-space: pre-wrap;
  font-size: ${({ fSize }) => fSize};
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
`;

const TitlePostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2em;

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
  h3 {
    color: ${({ theme }) => theme.primaryDark};
    font-weight: 700;
  }
  small {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export default function Post({ post = {} }) {
  return (
    <>
      <HeroSectionPost>
        <Image
          src={post.postImage}
          layout="responsive"
          width={1440}
          height={685}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </HeroSectionPost>

      <ContentBg blur={0} bgImage={background} strength={-200}>
        <ContainerCustom>
          <Row>
            <Col lg="8">
              <PostContent>
                <TitlePostWrapper>
                  <p>{post.category}</p>
                  <h3>{post.title}</h3>
                  <small>
                    {' '}
                    {`Publicado por ${post.author} - ${post.postDate}`}
                  </small>
                </TitlePostWrapper>
                <article
                  dangerouslySetInnerHTML={{
                    __html: `${post.content}`,
                  }}
                ></article>
              </PostContent>
            </Col>
            <Col lg="4">
              <SocialCard>
                <TitleSection fSize={'32px'}>Siga o MAPPA</TitleSection>
                <SocialIcons share />
              </SocialCard>
            </Col>
          </Row>
        </ContainerCustom>
      </ContentBg>
    </>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();

  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post: post[0],
    },
  };
}
