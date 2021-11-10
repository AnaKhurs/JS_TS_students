import {makeHairStyle, moveUser, UserType, UserWithLapTopType} from "./10_01";



test("reference type test", () => {

    let user: UserType = {
        name: "Dima",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
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