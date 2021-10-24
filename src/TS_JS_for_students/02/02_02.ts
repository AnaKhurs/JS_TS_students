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

export type  GovermentBildingsType = {
    type: "Hospital" | "FireStation"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    govermentBildings: Array<GovermentBildingsType>
    citizensNumber: number
}

