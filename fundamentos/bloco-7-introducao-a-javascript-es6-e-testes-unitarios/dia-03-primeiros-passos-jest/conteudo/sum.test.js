const { test, expect } = require("@jest/globals");
const sum = require('./sum');

const value1 = 10;
const value2 = 20;

test('Testa valor da soma', () => {
    expect(sum(value1, value2)).toEqual(30);
});

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});