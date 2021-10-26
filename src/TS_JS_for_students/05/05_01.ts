export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]

const dimychTransformator = (man: ManType) => ({  //опустили return и добавили () чтобы интерпритатор не запутался ведь {} означает начало функции
    slack: ['css, html', 'tdd', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
})

const devs = [
    {
        slack: ['css, html', 'tdd', 'react'],
        firstName: "Andrew",
        lastName: "Ivanov"
    },
    {
        slack: ['css, html', 'tdd', 'react'],
        firstName: "Alexander",
        lastName: "Petrov"
    },
    {
        slack: ['css, html', 'tdd', 'react'],
        firstName: "Dmitry",
        lastName: "Sidorov"
    },
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map(man => ({  //опустили return и добавили () чтобы интерпритатор не запутался ведь {} означает начало функции
    slack: ['css, html', 'tdd', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}, welcome to IT!`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}, welcome to IT!`)
}
