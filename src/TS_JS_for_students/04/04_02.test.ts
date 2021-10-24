import {CityType} from "../02/02_02";
import {demolishHouseOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";

let city: CityType;

beforeEach(() => {
        city = {
            title: "New York",
            houses: [
                {
                    id: 1, buildedAt: 2012, repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "white"
                        }
                    }
                },
                {
                    id: 2, buildedAt: 2008, repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "happy"
                        }
                    }
                },
                {
                    id: 3, buildedAt: 2020, repaired: false,
                    address: {
                        number: 101,
                        street: {
                            title: "happy"
                        }
                    }
                }
            ],
            govermentBildings: [
                {
                    type: "Hospital",
                    budget: 20000,
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
                    budget: 30000,
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

//01. дополнить тип HouseType (id)
//02. создайте функцию, чтобы тесты прошли
test('Houses should be destroyed', () => {
    demolishHouseOnTheStreet(city, "happy");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

//01.создать функцию в том же файле, чтобы тесты прошли
test("buildings with correct staffCount", () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.govermentBildings, 300);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FireStation');
})
