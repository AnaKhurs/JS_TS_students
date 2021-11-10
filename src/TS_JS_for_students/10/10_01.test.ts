import {
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, readNewBook, removeBook, updateCompanyTitle, updateCompanyTitle2, updateNewBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLapTopType, WithCompanyType
} from "./10_01";


test("reference type test", () => {

    let user: UserType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        }
    }
    const cutUser = makeHairStyle(user, 2)
    expect(user.hair).toBe(32)
    expect(cutUser.hair).toBe(16)
    expect(cutUser.address).toBe(user.address)
})

test("change address", () => {

    let user: UserWithLapTopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        }
    }
    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(movedUser).not.toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser.address.city).toBe("Kiev")
})

test("upgrade laptop to macbook", () => {

    let user: UserWithLapTopType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        }
    }
    const movedUser = upgradeUserLaptop(user, "macbook")

    expect(movedUser.laptop).not.toBe(user.laptop)
    expect(movedUser.laptop.title).toBe("macbook")
})


test("change house", () => {

    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        books: ["css", 'html', 'react', 'js']
    }
    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test("reading book", () => {

    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        books: ["css", 'html', 'react', 'js']
    }
    const userCopy = readNewBook(user, "redax")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('redax')
    /*  expect(user.books[5]).toBe('ts')*/
})

test("updete new book", () => {

    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        books: ["css", 'html', 'react', 'js']
    }
    const userCopy = updateNewBook(user, "js", "ts")


    expect(userCopy.books[3]).toBe('ts')
})

test("remove new book", () => {

    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        books: ["css", 'html', 'react', 'js']
    }
    const userCopy = removeBook(user, "react")


    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).toBe('js')
})

test("update company1", () => {

    let user: UserWithLapTopType & WithCompanyType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        company: [
            {id: 1, title: "epam"},
            {id: 2, title: "itINCUB"},
            {id: 3, title: "google"}
        ]

    }
    const userCopy = updateCompanyTitle(user, 1, 'EPAM')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.company).not.toBe(userCopy.company)
    expect(userCopy.company[0].title).toBe('EPAM')
})

test("update company2", () => {

    let companies = {
        "Dimych": [
            {id: 1, title: "epam"},
            {id: 2, title: "itINCUB"},
            {id: 3, title: "google"}
        ],
        "Artem": [
            {id: 1, title: "epam"},
        ]
    }

    const copy = updateCompanyTitle2(companies, 'Artem', 1, "inc");

    expect(copy["Artem"][0].title).toBe('inc')
    expect(copy['Artem']).not.toBe(companies['Artem'])
    expect(copy["Dimych"]).toBe(companies["Dimych"])
})