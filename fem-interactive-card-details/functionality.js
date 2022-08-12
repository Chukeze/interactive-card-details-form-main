export const cardManipulation = (x) =>{
    const cardNumberInput = document.querySelector('.card-number');
    const cardHolderInput = document.querySelector('.owner');
    const cardMonthExpInput = document.querySelector('.month');
    const cardYearExpInput = document.querySelector('.year');
    const cardCvcInput = document.querySelector('#cvc');
    var text = x.value;
    cardNumberInput.addEventListener("input",() =>{
        cardNumberInput.innerHTML = text;
    });
    cardHolderInput.addEventListener("input",() =>{
        cardHolderInput.innerHTML = text;
    });
    cardMonthExpInput.addEventListener("input",() =>{
        cardMonthExpInput.innerHTML = text;
    });
    cardYearExpInput.addEventListener("input",() =>{
        cardYearExpInput.innerHTML = x.value;
    });
    cardCvcInput.addEventListener("input",() =>{
        cardCvcInput.innerHTML =x.value;
    });
    
    

}