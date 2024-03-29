import './style.css';

const number = new RegExp(/^d+$/);
document.querySelector('#app').innerHTML = `
  <aside>
      <div class="cards first">
        <div>
          <svg class="icon" aria-label="card logo" width="84" height="47">
            <use xlink:href="images/card-logo.svg#card-logo"></use>
          </svg>
        </div>
        <img src="images/bg-card-front.png" alt="">
        
        <div class="card-details">
            <p class="card-number fs-large fw-regular">0000 0000 0000 0000 </p>
            <p class="owner fs-small">Jane Appleseed</p>
            <div class="exp-date fs-small"><p class="month">00/</p><p class="year">00</p></div>
        </div>
      </div>
      <div class="cards second">
        <img src="images/bg-card-back.png" alt="">
        <p class="cvc">000</p>
      </div>
  </aside>
  <main role="main">
    <section class="padding-block-700 form">
      <div class="container">
        <form class="even-rows" novalidate>
          <div class="inputs">
            <label for="name"> Cardholder Name</label>
            <input type="text" id="name" name="name" placeholder="e.g. Jane Appleseed"  required/>
            <p class="form-error" data-error="true"></p>
          </div>
          <div class="inputs">
            <label for="number"> Card Number</label>
            <input type="text" pattern="[0-9, /\s]+" id="card-number" name="number"  placeholder="e.g. 1234 5678 9128 0000" required/>
            <p class="form-error" data-error="true"></p>
          </div>
          <fieldset class="inputs odd-columns">
            <label for="month"> Exp. Date <span> (MM/YY)</span></label>
            <input type="text" id="month" name="month" placeholder="MM" pattern="[0-9]+" required/>
            <input type="text" id="year" name="year" placeholder="YY" pattern="[0-9]+" required/>
            <p class="form-error" data-error="true"></p>
            <label for="cvc"> CVC </label>
            <input type="text" id="cvc" name="cvc" min-length="3" maxlength="4" placeholder="e.g. 123" pattern="[0-9]{3}" required/>
            <p class="form-error" data-error="true"></p>
          </fieldset>
          <button type="submit" id="confirm"> Confirm</button>
        </form>
      </div>
    </section>
    <section class="hidden success">
      <p> Thank you!</p>
      <p> We've added your card details</p>
      <button id="reset-button">Continue</button>
    </section>
  </main>
  <footer class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by
      <a href="#">Chukwuebuka Victor Ezeocha</a>
      .
  </footer>
`
const domElements = {
  form: document.querySelector('form'),
  view: document.querySelector('.form'),
  success: document.querySelector('.hidden'),
  reset: document.querySelector('#reset-button'),
  cards: {
    name: document.querySelector('.owner'),
    number: document.querySelector('.card-number'),
    cvc: document.querySelector('.cvc'),
    date: {
      month: document.querySelector('.month'),
      year: document.querySelector('.year'),
    }
  },
  inputs: {
    name: document.querySelector('#name'),
    cardnumber: document.querySelector('#card-number'),
    expMonth: document.querySelector('#month'),
    expYear: document.querySelector('#year'),
    cvc: document.querySelector('#cvc'),
  }
};
//pattern = "[0-9]{1,2}"
//pattern = "[0-9]{4}"
//[0-9, *\s]+
const getErrorElement = (el) => {
  const next = el.nextElementSibling;
  if (next === null || next?.dataset.error) return next;
  return getErrorElement(next)
};

const errorMssg = {
  required: "Can't be blank",
  pattern:"Wrong Format, number only",
};

domElements.form?.addEventListener('submit', e => {
  e.preventDefault();
  const target = e.target;

  const fields = target.querySelectorAll('input');
  let isValid = true;
  fields.forEach(field => {
    const validity = field.validity;
    const errorElement = getErrorElement(field);
    //const inputElements = HTMLInputElement;
    //field = inputElements.prototype.validity;
    //let validation = field;
    //const validate = validation;
    //const errorElement = getErrorElement(field);
    if(validity.valid){
      field.classList.remove('error');
      errorElement.textContent = '';
      return;
    }
    console.log(field.name, validity);
    isValid = false;
    field.classList.add('error');
    errorElement.textContent = validity.valueMissing ? errorMssg.required : errorMssg.pattern;
  });
  if( isValid) {
    domElements.form?.classList.add('hidden');
    domElements.view?.classList.add('hidden');
    domElements.success?.classList.remove('hidden');
  }

});

const updatePreview = () => {
  domElements.cards.name.textContent = domElements.inputs.name.value || 'Jane Appleseeds';
  domElements.cards.number.textContent = domElements.inputs.cardnumber.value || '0000 0000 0000 0000';
  domElements.cards.cvc.textContent = domElements.inputs.cvc.value || '000';
  domElements.cards.date.month.textContent = domElements.inputs.expMonth.value || '00';
  domElements.cards.date.year.textContent = domElements.inputs.expYear.value || '00';
};

domElements.reset?.addEventListener('click', () => {
  domElements.form?.classList.remove('hidden');
  domElements.view?.classList.remove('hidden');
  domElements.success?.classList.add('hidden');
  domElements.cards.name.textContent = 'Jane Appleseeds';
  domElements.cards.number.textContent = '0000 0000 0000 0000';
  domElements.cards.cvc.textContent = '000';
  domElements.cards.date.month.textContent = '00';
  domElements.cards.date.year.textContent = '00';
  domElements.form?.reset();
});

domElements.form?.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', updatePreview);
});