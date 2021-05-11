import axios from 'axios';
import moment from 'moment';

export async function getAllPosts() {
  const { data } = await axios.get(
    `${process.env.BLOG_BASE_URL}/wp-json/wp/v2/posts?_embed`
  );

  return await convertPostData(data);
}

export async function getPostBySlug(slug) {
  const { data } = await axios.get(
    `${process.env.BLOG_BASE_URL}/wp-json/wp/v2/posts?_embed&slug=${slug}`
  );

  return await convertPostData(data);
}

const convertPostData = async (data) => {
  return await data.map((post) => {
    return {
      title: post.title.rendered,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      slug: post.slug,
      postDate: moment(post.date).format('DD.MM.YYYY'),
      id: post.id,
      author: post._embedded.author[0].name,
      postImage: post._embedded['wp:featuredmedia'][0].source_url,
      category: post._embedded['wp:term'][0][0].name,
    };
  });
};
