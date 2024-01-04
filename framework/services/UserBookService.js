import supertest from 'supertest'
import config from '../config/config.js'

const replaceBook = async ({ userId, fromIsbn, toIsbn, token }) => {
  const response = await supertest(config.baseUrl)
    .put(`/BookStore/v1/Books/${fromIsbn}`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      userId,
      isbn: toIsbn
    })
  return {
    headers: response.headers,
    status: response.status,
    data: response.body
  }
}

const addListOfBooks = async ({ userId, isbns, token }) => {
  const payload = {
    userId,
    collectionOfIsbns: isbns.map(isbn => ({ isbn }))
  }

  const response = await supertest(config.baseUrl)
    .post(`/BookStore/v1/Books`)
    .set('Authorization', `Bearer ${token}`)
    .set('Accept', 'application/json')
    .send(payload)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body
  }
}

const removeAllBooks = async ({ userId, token }) => {
  const response = await supertest(config.baseUrl)
    .delete(`/BookStore/v1/Books?UserId=${userId}`)
    .set('Authorization', `Bearer ${token}`)
  return {
    headers: response.headers,
    status: response.status,
    data: response.body
  }
}

export default {
  replace: replaceBook,
  addList: addListOfBooks,
  remove: () => {
    throw new Error('not implemented')
  },
  removeAll: removeAllBooks
}
