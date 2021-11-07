import {UsersType} from "./08_01";


let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '18765212': {id: 18765212, name: 'Natasha'},
        '3435': {id: 3435, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }

})

test("should update corresponding user", () => {

    users["1"].name = 'Ekaterina'

    expect(users["1"].name).toBe('Ekaterina')
    expect(users["1"]).toEqual({id: 1, name: 'Ekaterina'})
})


test("should delete corresponding user", () => {

    delete users["1"]

    expect(users["1"]).toBeUndefined()
})