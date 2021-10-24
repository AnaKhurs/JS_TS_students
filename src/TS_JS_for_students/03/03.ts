import React from 'react';
import {StudentType} from "../02/02";
import {student} from "../02/02";
import {GovermentBildingsType, HousesType} from "../02/02_02";

export function sum(a: number, b: number) {
    return a + b;
}

const res = sum(sum(1, 2), sum(1, 3));


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLiveInCity = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export function addMoneyToBudget(building: GovermentBildingsType, budget: number) {
    building.budget += budget;
}

export const reparedHouse = (housesType: HousesType) => {
    housesType.repaired = true;
}