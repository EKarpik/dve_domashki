// import AuthService from '../framework/services/AuthService'
// import UserService from '../framework/services/UserService'
// import { generateUser } from '../framework/fixtures/UserFixture'
// import { Response } from 'node-fetch'

// describe('Users', () => {
//     let token
//     let userId
//     let credentials
//     let userName
//     let pass

//     beforeAll(async () => {
//       credentials = generateUser()
//     })

//     it('Авторизован ли пользователь?', async () => {
//         const responseCreateUser = await UserService.createUser(credentials)
//         userId = responseCreateUser.body.userID
//         userName = responseCreateUser.body.username
//         pass = credentials.password
      
//         console.log('завели аккаунт юзера в системе ' ,[userName,pass])
//         console.log('идентификатр юзера' ,userId)

    
//         const responseToken = await AuthService.getAuthToken(credentials)
//         token = responseToken.data.token //здесь data, а не body потому что выесли при выводе в методе в data ответы
       
//         console.log('получили токен для пользователя' ,token)

//         const authorizedAfterLogin = await AuthService.login(credentials) 
//         expect(authorizedAfterLogin.data).toBe(true)
//         console.log('ответ функции авторизации', authorizedAfterLogin.data)
//     })

//     test("Информация о юзере", async () => {
//         const Info = await UserService.userInfo({userId, token});
//         console.log('userId используемое в тесте info о юзере ', userId);
//         console.log('token используемый в тесте info о юзере ', token);
//         //console.log(Info);
//         expect(Info.status).toBe(201);
//         return Info.body;
//       });

//     it('Удаление юзера', async () => {
//         const delresponse = await UserService.delUser({userId, token})
//         console.log('удаляем вот этого чувака' ,credentials)
//         console.log(' используем для уделения токен' ,token)
//         console.log('удаляем userid' ,userId)
//         console.log(delresponse.body)
//         expect(delresponse.status).toBe(200)
//         expect(delresponse.body.code).toBe(0)
            
//     })
 
// })
