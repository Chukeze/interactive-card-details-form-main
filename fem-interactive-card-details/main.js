import './style.css'
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
    <section class="padding-block-700">
      <div class="container">
        <form class="even-rows">
          <div class="inputs">
            <label for="name"> Cardholder Name</label>
            <input type="text" id="name" name="name" placeholder="e.g. Jane Appleseed" onclick="cardManipulation(this)" required>
          </div>
          <div class="inputs">
            <label for="number"> Card Number</label>
            <input type="text" id="card-number" name="number" pattern="${number}" placeholder="e.g. 1234 5678 9128 0000" onclick="cardManipulation(this)" required>
          </div>
          <div class="odd-columns">
            <div class="inputs">
              <label for="month"> Exp. Date <span> (MM/YY)</span></label>
              <div class="flex">
                <input type="text" id="month" name="month" placeholder="MM" onclick="cardManipulation(this)" required>
                <input type="text" id="year" name="year" placeholder="YY" onclick="cardManipulation(this)" required>
              </div>
            </div>
            <div class="inputs">
              <label for="cvc"> CVC </label>
              <input type="text" id="cvc" name="cvc" min-length="3" maxlength="3" placeholder="e.g. 123" onclick="cardManipulation(this)" required>
            </div>
          </div>
          <button type="submit" id="confirm"> Confirm</button>
        </form>
      </div>
    </section>
  </main>
`
