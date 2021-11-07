
let user = {
    age: 32,
    name: "Dimych",
    address: {
        street: {
            title: "Minsk"
        }
    }
}
//{age: 32, name: 'Dimych', address: {…}}

user.address.street.title //'Minsk'

user["address"]["street"]["title"] //'Minsk'

let city = {} //undefined

city.title = "Minsk" //'Minsk'

city.counter = 1000 //1000

city //{title: 'Minsk', counter: 1000}

let users = ['ira','masha', 'maks', 'nastya'] //undefined

users[0] //'ira'

users["map"](e => e.toUpperCase()) //(4) ['IRA', 'MASHA', 'MAKS', 'NASTYA']

userObj.0 // SyntaxError: Unexpected number
userObj[0] //'dima'
let userObj = { "0": "dima", "1":'ira', "2": 'masha', "3": 'maks', "4": 'nastya'}
userObj['0']//'dima'
Object.keys(userObj) //(5)['0', '1', '2', '3', '4']
Object.values(userObj) //(5)['dima', 'ira', 'masha', 'maks', 'nastya']
users[{}]="объект" // преобразует в строку {}.toString
// (4)['ira', 'masha', 'maks', 'nastya', [object Object]: 'объект']