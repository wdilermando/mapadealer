import query from './query'
import moment from 'moment';

const ALL_BANNERS = `
  query {
    allBanners {
      id
      titulo
      imagemDestaque {
        alt
        url
      }
    }
  }
`

const ALL_TESTIMONIALS = `
  query {
    allDepoimentos {
      id
      nomeCliente      
      cargoCliente
      conteudo
    }
  }
`

const ALL_CLIENTS = `
  query {
    allClientes(orderBy: id_ASC) {
      id
      nomeCliente
      logo {
        url
      }
    }
  }
`

const ALL_ARTICLES = `
query {
    allPosts(orderBy: title_ASC) {
        id
        _publishedAt 
        slug
        cover {
            url
            alt
        }
        title
        excerpt
        category {
            nome
        }
        author {
            nome
        }
    }
}
`

const ARTICLE_BY_SLUG = `
query ($slug: String!) {
  post(filter: {slug: {eq: $slug}}) {
    id
    slug
    title
    _publishedAt
    cover {
      url
      alt
    }
    author {
      nome
    }
    category {
      nome
    }
    conteudo {
      value
    }
  }
}
`
const convertPostData = async (data) => {
  return await data.map((post) => {
    return {
      ...post,
      content: '',
      postDate: moment(post._publishedAt).format('DD.MM.YYYY'),        
      author: post.author.nome,
      postImage: post.cover.url,
      category: post.category[0].nome,
    };
  });
};

const allArticles = async () => {
  const result = await query({ query: ALL_ARTICLES })
  const converted = await convertPostData(result.allPosts)
  return converted;
}

const articleBySlug = async slug => {
  const result = await query({ query: ARTICLE_BY_SLUG, variables: { slug } })
  return result.post
}

const allTestimonials = async () => {
  const result = await query({ query: ALL_TESTIMONIALS })
  return result.allDepoimentos;
}

const allBanners = async () => {
  const result = await query({ query: ALL_BANNERS })
  return result.allBanners;
}

const allClients = async () => {
  const result = await query({ query: ALL_CLIENTS })
  return result.allClientes;
}

export {allArticles, articleBySlug, allTestimonials, allBanners, allClients}