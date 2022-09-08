const EMPTY_INPUT_ERROR = "Field is required";

const submissionBtn = document.querySelector('#form-submit');
const form = document.querySelector('form');
const fieldset = document.querySelector('fieldset');

// select inputs and their matching parts on the card
// inputs
const cardholderInput = document.querySelector('#cardholder-input');
const cardNumberInput = document.querySelector('#card-number-input');
const mmInput = document.querySelector('#mm-input');
const yyInput = document.querySelector('#yy-input');
const cvcInput = document.querySelector('#cvc-input');

// card fields
const cardholderGraphic = document.querySelector('#name-card');
const cardNumberGraphic = document.querySelector('#card-number-card');
const dateGraphic = document.querySelector('#date-card');
const cvcGraphic = document.querySelector('#cvc-card');

// Cardholder events
cardholderInput.addEventListener('invalid', (e) =>
{
    e.preventDefault();
    const selector = '#cardholder-input ~ .error';
    e.target.value === "" ? addError(EMPTY_INPUT_ERROR, selector) : addError(e.target.attributes.title.value, selector);
});
cardholderInput.addEventListener('input', (e) =>
{
    const selector = '#cardholder-input ~ .error';
    removeError(selector);
});

// Cardholder number events
cardNumberInput.addEventListener('invalid', (e) =>
{
    e.preventDefault();
    const selector = '#card-number-input ~ .error';
    e.target.value === "" ? addError(EMPTY_INPUT_ERROR, selector) : addError(e.target.attributes.title.value, selector);
});
cardNumberInput.addEventListener('input', (e) =>
{
    let removedSpaces = e.target.value.replaceAll(' ', '')
    let removedSpacesArr = removedSpaces.split('')
    let noSpacesLength = removedSpacesArr.length;
    // makes sure space isn't added as the last character of the string so single deletion doesn't get stuck on space
    let start = noSpacesLength % 4 === 0 ? noSpacesLength - 4 : noSpacesLength - noSpacesLength % 4;
    // add spaces where necessary
    for (let i = start; i >= 4; i -= 4)
    {
        removedSpacesArr.splice(i, 0, ' ');
    }
    // seems setting e.target.value directly bypasses the element's maxlength, so this check makes sure the formatted length is not greater than maxlength
    if (removedSpacesArr.length > 19)
        removedSpacesArr.length = 19;
    e.target.value = removedSpacesArr.join('');

    const selector = '#card-number-input ~ .error';
    removeError(selector);
});

// Fieldset events
mmInput.addEventListener('invalid', (e) =>
{
    e.preventDefault();
    const selector = '#mm-input ~ .error div:first-child';
    e.target.value === "" ? addError(EMPTY_INPUT_ERROR, selector) : addError(e.target.attributes.title.value, selector);
});
mmInput.addEventListener('input', (e) =>
{
    const selector = '#mm-input ~ .error div:first-child';
    removeError(selector);
});
yyInput.addEventListener('invalid', (e) =>
{
    e.preventDefault();
    const selector = '#yy-input ~ .error div:last-child';
    e.target.value === "" ? addError(EMPTY_INPUT_ERROR, selector) : addError(e.target.attributes.title.value, selector);
});
yyInput.addEventListener('input', (e) =>
{
    const selector = '#yy-input ~ .error div:last-child';
    removeError(selector);
});

// CVC events
cvcInput.addEventListener('invalid', (e) =>
{
    e.preventDefault();
    const selector = '#cvc-input ~ .error';
    e.target.value === "" ? addError(EMPTY_INPUT_ERROR, selector) : addError(e.target.attributes.title.value, selector);
});
cvcInput.addEventListener('input', (e) =>
{
    const selector = '#cvc-input ~ .error';
    removeError(selector);
});


submissionBtn.addEventListener('click', (e) =>
{
    if (form.checkValidity())
    {
        e.preventDefault();
        const cardForm = document.querySelector('#card-form');
        const confirmation = document.querySelector('#confirmation');

        // hide form - show confirmation
        cardForm.classList.add('display-none');
        confirmation.classList.remove('display-none');

        // extract form info and place on card graphic
        cardholderGraphic.innerText = cardholderInput.value;
        cardNumberGraphic.innerText = cardNumberInput.value;
        dateGraphic.innerText = `${mmInput.value}/${yyInput.value}`;
        cvcGraphic.innerText = cvcInput.value;
    }
})



function removeError(selector)
{
    console.log('removing error');
    const target = document.querySelector(selector);
    if (!target.classList.contains('vis-hidden'))
    {
        target.classList.add('vis-hidden');
    }
}
function addError(text, selector)
{
    const target = document.querySelector(selector);
    target.innerHTML = text;
    target.classList.remove('vis-hidden');
}