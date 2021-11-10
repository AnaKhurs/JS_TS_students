export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}

export type LapTopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LapTopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompanyType = {
    company: Array<{ id: number, title: string }>
}


export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,   //поверхностная копия
        hair: u.hair / power
    }
    return copy
}

export function moveUser(user: UserWithLapTopType, city: string) {
    const copy = {
        ...user,
        address: {...user.address, city: city}
    }
    return copy
}

export function upgradeUserLaptop(u: UserWithLapTopType, model: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: model}
    }
}

export function moveUserToOtherHouse(user: UserWithLapTopType & UserWithBooksType, house: number) {
    return {
        ...user,
        address: {...user.address, house: house}
    }
}


export function readNewBook(user: UserWithLapTopType & UserWithBooksType, title: string) {
    const copy = {
        ...user,
        books: [...user.books, title]
    }
    return copy
}

export function updateNewBook(user: UserWithLapTopType & UserWithBooksType, title1: string, title2: string) {
    return {
        ...user,
        books: user.books.map(i => i === title1 ? title2 : i)
    }
}

export function removeBook(user: UserWithLapTopType & UserWithBooksType, title1: string) {
    return {
        ...user,
        books: user.books.filter(i => i !== title1)
    }
}


export function updateCompanyTitle(user: UserWithLapTopType & WithCompanyType, id: number, title: string) {
    return {
        ...user,
        company: user.company.map(i => i.id === id ? {...i, title: title} : i)
    }
}


export const updateCompanyTitle2 = (companies: {[key: string]: Array<{ id: number, title: string }>}, userName: string, companyID: number, title: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: title} : c)
    return companyCopy
}