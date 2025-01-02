// Archivo: mathOperations.ts
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;

// Archivo: stringOperations.ts
export const toUpperCase = (str: string): string => str.toUpperCase();
export const toLowerCase = (str: string): string => str.toLowerCase();

// Archivo: importing-modules.ts
import * as MathOps from "./mathOperations";
import { toUpperCase, toLowerCase } from "./stringOperations";

const sum = MathOps.add(10, 5);
const diff = MathOps.subtract(10, 5);
const upper = toUpperCase("hello");
const lower = toLowerCase("WORLD");

console.log(`Suma: ${sum}, Diferencia: ${diff}`);
console.log(`Uppercase: ${upper}, Lowercase: ${lower}`);
