import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getPrimeFactors } from './PrimeFactors';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('exist a getPrimeFactors function', () => {
  const result = getPrimeFactors(2);
  //expect(result).toBe([2])
});
test('return array', () => {
  const result = getPrimeFactors(2);
  expect(result[0]).toBe(2)
});

test('return array pass 3', () => {
  const result = getPrimeFactors(3);
  expect(result[0]).toBe(3)
});


test('return array pass 9', () => {
  const result = getPrimeFactors(9);
  expect(result[0]).toBe(3)
  expect(result[1]).toBe(3)

});

test('return array empty passing 1', () => {
  const result = getPrimeFactors(1);
  expect(result).toEqual([])

});

test('return array empty passing 4', () => {
  const result = getPrimeFactors(4);
  expect(result).toEqual([2,2])

});



/*test('exist a getPrimeFactors function null', () => {
  const result = getPrimeFactors(undefined);
  expect(result).toBe([2])
});

test('exist a getPrimeFactors function passing text', () => {
  const result = getPrimeFactors('hola');
  expect(result).toBe([2])

});*/

