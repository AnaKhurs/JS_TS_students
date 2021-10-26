import {createMessages, getStreetsTitleOfGovernmentsBuildings, getStreetsTitleOfHouses} from "./05_02";

export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type  GovernmentBuildingsType = {
    type: "Hospital" | "FireStation"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

let City: CityType;

beforeEach(() => {
        City = {
            title: "New York",
            houses: [
                {
                    buildedAt: 2012,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "White street"
                        }
                    }
                },
                {
                    buildedAt: 2012,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "Happy street"
                        }
                    }
                },
                {
                    buildedAt: 2012,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "Happy street"
                        }
                    }
                }
            ],
            governmentBuildings: [
                {
                    type: "Hospital",
                    budget: 200000,
                    staffCount: 200,
                    address: {
                        number: 12,
                        street: {
                            title: "Central str"
                        }
                    }
                },
                {
                    type: "FireStation",
                    budget: 500000,
                    staffCount: 1000,
                    address: {
                        number: 12,
                        street: {
                            title: "South str"
                        }
                    }
                }],
            citizensNumber: 100000
        }
    }
)

//01. создайте функцию чтобы тесты прошли
test('list of streets titles of goverments buildings', () => {
    const streetsNames = getStreetsTitleOfGovernmentsBuildings(City.governmentBuildings);
    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central str");
    expect(streetsNames[1]).toBe("South str");
})

//01. создайте функцию чтобы тесты прошли
test('list of street titles', () => {
    const streets = getStreetsTitleOfHouses(City.houses);
    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

//01.
test("crete greeting messages for streets", () => {
    let messages = createMessages(City.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
})