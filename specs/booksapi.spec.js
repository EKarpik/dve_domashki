import BookService from '../framework/services/BookService.js'
import { books } from '../framework/fixtures/Books.json'
import AuthService from '../framework/services/AuthService.js'
import config from '../framework/config/config.js'
import UserService from '../framework/services/UserService.js'
import UserBookService from '../framework/services/UserBookService.js'


describe('Books', () => {
  const userId = config.credentials.userId
  const userName = config.credentials.username
  const password = config.credentials.password
  const [book1, book2] = books
  const isbn = book1.isbn

  let token

    beforeAll(async () => {
    const responseToken = await AuthService.getAuthToken({userName, password})
    token = responseToken.data.token 
    console.log('токен для теcтов с книгами', token)
    console.log('имя юзера для тестов с книгами', userName)
    console.log('пароль юзера для тестов с книгами', password)
  })

  it('Получить список книг', async () => {
    const response = await BookService.getAll()

    expect(response.status).toBe(200)
    expect(response.data).toEqual({ books })
  })

  it('Удаление всех книг из коллекции пользователя', async () => {
    const responseRemoveAll = await UserBookService.removeAll({userId, token})
    console.log('айдишник юзера для теста удаления книг', userId)
    console.log('токен для теста удаления книг', token)

    expect(responseRemoveAll.status).toBe(204)

    const responseUser = await UserService.userInfo({userId, token})
    expect(responseUser.body.books).toEqual([])
  })

  it('Получение информации о конкретной книге', async () => {
    const responseGetBook = await BookService.getOne({isbn, token})
    console.log('информация о книге', responseGetBook.data)
    console.log('isbn книги', isbn)
    console.log('стутс код ответа информация о книге', responseGetBook.status)
    expect(responseGetBook.status).toBe(200)
  })
  it('Добавление книги в коллекцию к пользователю', async () => {
    const responseAddListOfBooks = await BookService.add({userId, isbns: [isbn], token})
    console.log('isbn добавленной книги', responseAddListOfBooks.data)
    expect(responseAddListOfBooks.data).toEqual({ books: [{ isbn }] })
  })

   it('Удалить одну книгу у пользователя из коллекции', async () => {
    const responseDelOne = await UserBookService.removeOne({userId, isbns: [isbn], token})
    console.log('эту книгу удаляем', responseDelOne.data)
    expect(responseDelOne.status).toBe(204)
  })

  it('Заменить/обновить книгу в коллекции пользователя', async () => {
    const responseAddBook = await UserBookService.replace({
      userId,
      fromIsbn: isbn,
      toIsbn: book2.isbn,
      token
    })
    expect(responseAddBook.data).toEqual({
      books: [book2],
      userId,
      username: config.credentials.username
    })
  })
})
