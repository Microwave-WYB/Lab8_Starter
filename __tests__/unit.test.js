// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Create 2 tests that should be true, and 2 tests that should be false for each function (4 tests x 5 functions = 20 tests).

test('true phone number' , () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('true phone number', () => {
    expect(functions.isPhoneNumber('(222) 333-4444')).toBe(true);
});

test('false phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('false phone number', () => {
    expect(functions.isPhoneNumber('(123) 456-789')).toBe(false);
});

test('true email address', () => {
    expect(functions.isEmail('test@uscd.edu')).toBe(true);
});

test('true email address', () => {
    expect(functions.isEmail('abc@outlook.com')).toBe(true);
});

test('false email address', () => {
    expect(functions.isEmail('test@uscd')).toBe(false);
});

test('false email address', () => {
    expect(functions.isEmail('abc.cse.ucsd.edu')).toBe(false);
});

test('true strong password', () => {
    expect(functions.isStrongPassword('abc123')).toBe(true);
});

test('true strong password', () => {
    expect(functions.isStrongPassword('aspdjgaiowr13')).toBe(true);
});

test('false strong password', () => {
    expect(functions.isStrongPassword('a')).toBe(false);
});

test('false strong password', () => {
    expect(functions.isStrongPassword('asdiofjoaidhgoibsoidfhiajoisadjioj')).toBe(false);
});

test('true date', () => {
    expect(functions.isDate('12/25/2015')).toBe(true);
});

test('true date', () => {
    expect(functions.isDate('99/99/9999')).toBe(true);
});

test('false date', () => {
    expect(functions.isDate('12/25/15')).toBe(false);
});

test('false date', () => {
    expect(functions.isDate('2015/12/25')).toBe(false);
});

test('true hex color', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('true hex color', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('false hex color', () => {
    expect(functions.isHexColor('#ffff')).toBe(false);
});

test('false hex color', () => {
    expect(functions.isHexColor('#ffffff00')).toBe(false);
});