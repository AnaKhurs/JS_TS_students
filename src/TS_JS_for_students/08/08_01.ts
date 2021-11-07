export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

export type UsersType = {
    [key: string]: { id: number, name: string }
}

export let usersArray = [ //массив
    {id: 101, name: 'Dimych'},
    {id: 18765212, name: 'Natasha'},
    {id: 3435, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

export const users: UsersType = { //accоциативный массив
    '101': {id: 101, name: 'Dimych'},
    '18765212': {id: 18765212, name: 'Natasha'},
    '3435': {id: 3435, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

let user = {id: 3, name: 'Nastya'}

users[user.id] = user //users[user.id.toString()] = user
delete users[user.id]
users[user.id].name = "N"

usersArray.push(user) //возможны дубликаты
let UsersCopy = [...usersArray, user] //возможны дубликаты
usersArray = usersArray.filter(u => u.id !== user.id)
