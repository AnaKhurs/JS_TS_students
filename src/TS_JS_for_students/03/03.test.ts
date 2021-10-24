import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
})

test('new tech skill should be added to student', () => {
expect(student.technologies.length).toBe(3);
 addSkill(student,"JS");
 expect(student.technologies.length).toBe(4);
 expect(student.technologies[3].title).toBe("JS");
 expect(student.technologies[3].id).toBeDefined();

})

test('studentl should be made active', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test('does student live in city', () => {
    let result1 = doesStudentLiveInCity(student, "Moscow");
    let result2 = doesStudentLiveInCity(student, "Minsk");
    expect(result1).toBe(false);
    expect(result2).toBe(true);
})
