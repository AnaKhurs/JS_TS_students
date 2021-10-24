import {CourseType} from "./04";

test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take courses cheaper 160', () => {
    const courses = [
        {title: "css", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const cheapCourse = courses.filter(courses => courses.price < 160);

    expect(cheapCourse.length).toBe(2);
    expect(cheapCourse[0].title).toBe("css");
    expect(cheapCourse[1].title).toBe("React");
})

test("get only completed task", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "sugar", isDone: false},
        {id: 4, title: "cheese", isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

   /* const completedTasks = tasks.filter(function (task) {
        return task.isDone === true;
    })*/

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe("milk");
    expect(completedTasks[1].title).toBe("cheese");
})

test("get only uncompleted task", () => {
    const tasks = [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "sugar", isDone: false},
        {id: 4, title: "cheese", isDone: true},
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe("bread");
    expect(uncompletedTasks[1].title).toBe("sugar");
})