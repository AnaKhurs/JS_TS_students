import {CityType} from "./02_02";

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

//01. создайте тип CityType
//02. заполните объект city чтобы тесты прошли
test.skip('test city should contains 3 houses', () => {
    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("white");
})


//01. создайте тип GovermentBildingsType
//02. заполните объект city чтобы тесты прошли
test.skip('test city should contains 3 houses', () => {
    expect(city.govermentBildings.length).toBe(2);
    expect(city.govermentBildings[0].type).toBe("Hospital");
    expect(city.govermentBildings[0].budget).toBe(20000);
    expect(city.govermentBildings[0].staffCount).toBe(200);
    expect(city.govermentBildings[0].address.street.title).toBe("Central str");
})
