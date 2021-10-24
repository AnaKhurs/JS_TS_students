import React from 'react';

const ages = [10, 20, 22, 1, 100, 98, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]; // >90

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

// <160
const cheapPredicate = (courses:CourseType) => {
    return courses.price < 160;
}

const cheapCourse = [
    {title: "css", price: 110},
    {title: "React", price: 150}
]
