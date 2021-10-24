import {mult, sum, splitIntoWords} from './01';
//data
let a: number;
let b: number;

beforeEach(() => {
        a = 1;
        b = 2;
    }
)


test('sum should be correct', () => {

    //action
    const result = sum(a, b);

    //expect result
    expect(result).toBe(3);
})

test('multiply should be correct', () => {

    //action
    const result = mult(a, b);

    //expect result
    expect(result).toBe(2);
})
