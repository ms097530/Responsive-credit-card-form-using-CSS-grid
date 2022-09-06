const cardNumberInput = document.querySelector('#card-number');
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

const submissionBtn = document.querySelector('#form-submit');
submissionBtn.addEventListener('click', (e) =>
{
    e.preventDefault();
    console.log(e);
    const cardForm = document.querySelector('#card-form');
    const confirmation = document.querySelector('#confirmation');
    cardForm.classList.add('display-none');
    confirmation.classList.remove('display-none');

})