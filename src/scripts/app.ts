import createNewText from './createNewText';

const form = document.querySelector('.input-src-text');
const sourceTextElement: any = document.querySelector('.input-src-text__src');
const resultElement: any = document.querySelector('.result');
const rangeElement: any = document.querySelector('.input-src-text__select-count-p');

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const sourceText = sourceTextElement.value;

    resultElement.innerText = createNewText(
        sourceText,
        5,
        Number(rangeElement.value)
    );
});