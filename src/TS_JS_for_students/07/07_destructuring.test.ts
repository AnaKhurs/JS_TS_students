import {ManType} from "./Destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        age: 32,
        name: "Dimych",
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test("", () => {

//const age = props.age;
//const lessons = props.lessons;
    const {age, lessons} = props; //тоже что и выше
    /*const {age:a, lessons:l} = props; //создать псевдонимы для свойств age, lessons*/
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
    expect(title).toBe("Nezavisimosti street")
})

test(" ", () => {
    /*    const l1 = props.lessons[0];
          const l2 = props.lessons[1];*/
/*    const [l1, l2] = props.lessons*/
     const [ , , l3] = props.lessons
    const [ls1, ...restLessons] = props.lessons

/*    expect(l1.title).toBe("1");*/
    expect(l3.title).toBe("3");
    expect(restLessons.length).toBe(2);
    expect(restLessons[0].title).toBe('2');
    expect(restLessons[1].name).toBe("react")
    expect(restLessons[1]).toStrictEqual({title: "3", name: "react"})
})