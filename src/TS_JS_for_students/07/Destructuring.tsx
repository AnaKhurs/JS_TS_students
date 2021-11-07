import React from "react";

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

export type ManType = {
    age: number
    name: string
    lessons: Array<{ title: string; name?: string }>
    address: {
        street: {
            title: string
        }
    }
}


export const ManComponent: React.FC<PropsType> = ({title, man: {name}, ...props}) => {

    /*    const {title} = props
        const {name} = props.man*/

    /* const {title, man: {name}} = props*/

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}