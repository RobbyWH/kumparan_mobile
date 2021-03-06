// UTILS
import * as Constants from 'kumparan_mobile/app/utils/Constants';

export const getListArticlesApi = (params) => {
  return params.q != "" ?
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${Constants.API_KEY}&q=${params.q}&sort=${params.sort}&page=${params.page}` :
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${Constants.API_KEY}&sort=${params.sort}&page=${params.page}`;
}


export const getListBooksApi = (params) => {
  return `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${Constants.API_KEY}&list=${params.list}&offset=${params.offset}`;
}
