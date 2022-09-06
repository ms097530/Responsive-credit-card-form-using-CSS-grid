
const submissionBtn = document.querySelector('#form-submit');
const form = document.querySelector('form');

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
})


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
        console.log(cardholderInput);
        cardholderGraphic.innerText = cardholderInput.value;
        cardNumberGraphic.innerText = cardNumberInput.value;
        dateGraphic.innerText = `${mmInput.value}/${yyInput.value}`;
        cvcGraphic.innerText = cvcInput.value;
    }
})