import { combine, rotate, traspose } from "./Ofuscate";

test('rotate msg 1', () => {
    const result = rotate('R1', 'dpasswor');
    expect(result).toBe('password')
});

test('rotate msg 2', () => {
    const result = rotate('R2', 'rdpasswo');
    expect(result).toBe('password')
});

test('rotate msg 4', () => {
    const result = rotate('R4', 'wordpass');
    expect(result).toBe('password')
});


test('traspose msg 1', () => {
    const result = traspose('T1', 'b');
    expect(result).toBe('a')
});

test('traspose msg 2', () => {
    const result = traspose('T1', 'a');
    expect(result).toBe('z')
});

test('traspose msg 3', () => {
    const result = traspose('T4', 'c');
    expect(result).toBe('y')
});



test('combine msg 1', () => {
    const result = combine('T1:R1', 'cb');
    expect(result).toBe('ab')
});

test('combine msg 3', () => {
    const result = combine('T1:R2:T3', 'fge');
    expect(result).toBe('abc')
});


test('combine msg points', () => {
    const result = combine('T1', 'b,');
    expect(result).toBe('a,')
});

test('final', () => {
    const result = combine('T22:R39', 'Bahev ranwjk. Jko raiko aj hw lqhlkYkj.');
    console.log(result)
    //expect(result).toBe('a,')
});