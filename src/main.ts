import './style.css';

import { 
    clearDisplay, 
    deleteLastCharacter, 
    calculateResult, 
    addToInput, 
    getInput 
} from './functions';

const display = document.getElementById('display') as HTMLElement;
const buttons = document.querySelectorAll('.calculator__button');

const updateDisplay = (): void => {
    display.textContent = getInput();
};



const handleButtonClick = (button: Element): void => {

    const value = button.textContent!;

    switch (value) {
        case 'DEL':
            clearDisplay();
            break;
        case 'CE':
            deleteLastCharacter();
            break;
        case '=':
            calculateResult()
            break;
        default:
            addToInput(value);
    }

    updateDisplay();


    
};

buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
});


updateDisplay();