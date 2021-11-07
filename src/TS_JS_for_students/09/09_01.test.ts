function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address?: {
        title: string
    }
}

test("reference type test", () => {

    let user: UserType = {
        name: "Dima",
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000 //мутируем объект по ссылке

    expect(user.age).toBe(1000)
})


test("array test", () => {

    let users: Array<UserType> = [
        {
            name: "Dima",
            age: 32
        },
        {
            name: "Dima",
            age: 32
        }
    ]

    let admins = users

    admins.push({name: "bandugan", age: 10}) //мутируем объект по ссылке

    expect(users[2]).toEqual({name: "bandugan", age: 10})
})

test("value type test", () => {

    let usersCount = 100;

    let adminsCount = usersCount; //примитив не будет мутации

    adminsCount++

    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)
})

test("test", () => {

    let user: UserType = {
        name: "Dima",
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    let addr = user.address

    let user2: UserType = {
        name: "Nata",
        age: 30,
        address: addr  //Dima тоже переедет так как здесь ссылка на один и тот же объект
    }

    /*
        {} === {}   false
        [] === []  false
        */
    /*    let a = {}
          let b = a
          a === b    true
        */


    user2.address.title = "kanary"
    expect(user.address.title).toBe("kanary")
    expect(user.address).toBe(user2.address) // а два объекта равны только если это один и тот же объект

})


test("array reference test", () => {

    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Dima",
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: "Nata",
        age: 30,
        address: address
    }

    let users = [user, user2, {name: "misha", address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitriy'

    expect(users[0].name).toBe("Dmitriy")
    expect(user.name).toBe("Dmitriy")

})


test('sort array test', () => {
    const letters = ['b', 'c', 'a', 'z']
    letters.sort(); //произойдет мутация массива
    expect(letters).toEqual(['a', 'b', 'c', 'z'])
})

//должны использовать иммутабильный подход в функциональном программировании
