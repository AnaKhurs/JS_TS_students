import {CityType} from "../02/02_02";
import {addMoneyToBudget, reparedHouse} from "./03";


let city: CityType;

beforeEach(() => {
        city = {
            title: "New York",
            houses: [
                {
                    buildedAt: 2012,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "white"
                        }
                    }
                }
            ],
            govermentBildings: [
                {
                    type: "Hospital",
                    budget: 200000,
                    staffCount: 200,
                    address: {
                        number: 100,
                        street: {
                            title: "Central str"
                        }
                    }
                },
                {
                    type: "FireStation",
                    budget: 500000,
                    staffCount: 400,
                    address: {
                        number: 90,
                        street: {
                            title: "Central str"
                        }
                    }
                }],
            citizensNumber: 100000
        }
    }
)

//01. создайте в отдельгос файле функцию чтобы тесты прошли
test('Budget should be changed for Hospital', () =>{
    addMoneyToBudget(city.govermentBildings[0], 100000);
    expect(city.govermentBildings[0].budget).toBe(300000);
})

//01. тесты должны пройти
test('Budget should be changed for FireStation', () =>{
    addMoneyToBudget(city.govermentBildings[1], -100000);
    expect(city.govermentBildings[1].budget).toBe(400000);

})

/*
//01. дополните тип HouseType (добавить id от 1 и выше)
//02. создайте функцию
test('Houses shoul be destroyed', () =>{

})*/

//01. создайте в отдельном файле функцию чтобы тесты прошли
test('House shoul be repared', () =>{
    reparedHouse(city.houses[0]);
    expect(city.houses[0].repaired).toBeTruthy();
})
