import React from 'react';

type TechnologiesType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    country: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}



export const student = {
    name: 'Nastya',
    age: 28,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "JS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
console.log(student.technologies[2].title);