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