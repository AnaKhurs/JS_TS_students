import {GovernmentBuildingsType, HousesType} from "./05_02.test";


export const getStreetsTitleOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(i => i.address.street.title)

}

export const getStreetsTitleOfHouses = (houses: Array<HousesType>) => {
    return houses.map(i => i.address.street.title)

}

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(i => `Hello guys from ${i.address.street.title}`)

}