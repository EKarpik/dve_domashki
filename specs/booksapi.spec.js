// import BookService from '../framework/services/BookService.js'
// import { books } from '../framework/fixtures/Books.json'
// import AuthService from '../framework/services/AuthService.js'
// import config from '../framework/config/config.js'
// import UserService from '../framework/services/UserService.js'
// import UserBookService from '../framework/services/UserBookService.js'

// describe('Books', () => {
//   const userId = config.credentials.user.userId
//   const [book1, book2] = books
//   const isbn = book1.isbn

//   let token

//   beforeAll(async () => {
//     const { data } = await AuthService.generateToken(config.credentials.user)

//     token = data.token
//   })

//   it('Список книг', async () => {
//     const response = await BookService.getAll()

//     expect(response.status).toBe(200)
//     expect(response.data).toEqual({ books })
//   })

//   it('Удаление всех книг из коллекции пользователя', async () => {
//     const responseRemoveAll = await UserBookService.removeAll({
//       userId,
//       token
//     })
//     expect(responseRemoveAll.status).toBe(204)

//     const responseUser = await UserService.get({
//       userId,
//       token
//     })
//     expect(responseUser.data.books).toEqual([])
//   })

//   it('Добавление книги в коллекцию к пользователю', async () => {
//     const responseAddListOfBooks = await UserBookService.addList({
//       userId,
//       isbns: [isbn],
//       token
//     })

//     expect(responseAddListOfBooks.data).toEqual({ books: [{ isbn }] })
//   })

//   it('Заменить книгу в коллекции пользователя', async () => {
//     const responseAddBook = await UserBookService.replace({
//       userId,
//       fromIsbn: isbn,
//       toIsbn: book2.isbn,
//       token
//     })
//     expect(responseAddBook.data).toEqual({
//       books: [book2],
//       userId,
//       username: config.credentials.user.userName
//     })
//   })
// })
