// function addSpace(e)
// {
//     console.log(e);
//     if (e.value.length % 4 === 0)
//         e.value += ' ';
// }

const cardNumberInput = document.querySelector('#card-number');
cardNumberInput.addEventListener('input', (e) =>
{
    if ([4, 9, 14].includes(e.target.value.length) && e.data !== null)
    {
        e.target.value += ' ';
    }
})

const onlyNumbersInputs = document.querySelectorAll('.numbers-only');
// console.log(onlyNumbersInputs);
onlyNumbersInputs.forEach(() => addEventListener('input', (e) =>
{

}))