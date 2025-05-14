import { evaluate } from 'mathjs';

let currentInput: string = '';
let error: boolean = false;

export const clearDisplay = (): void => {
    currentInput = '';
};

export const deleteLastCharacter = (): void => {
    currentInput = currentInput.slice(0, -1);
};

export const calculateResult = (): string => {
    try {
        if (!currentInput) return '';
        const result = evaluate(currentInput);
        currentInput = result.toString();
        return currentInput;
    } catch {
        currentInput = '';
        error = true;
        return 'Error';
    }
};

export const addToInput = (value: string): void => {
    currentInput += value;
};

export const getInput = (): string => {
    if (error){
        error = false;
        return "error";
    }
    return currentInput || '0';
};