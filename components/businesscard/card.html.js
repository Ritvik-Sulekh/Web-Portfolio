function renderCard() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/businesscard/card.css">

    <div class="card">
      <div class="card__inner">

        <div class="card__top">
          <p class="card__name">Ritvik Singh Sulekh</p>
          <p class="card__title">MBA (IIM Udaipur)</p>
        </div>

        <div class="card__center">
          <div class="card__logo">
            <img src="${b}assets/logo.png" alt="Logo">
          </div>
          <h1 class="card__brand">ORitvik</h1>
        </div>

        <div class="card__tagline">&#9733; Resilience turns setbacks into Bounce-backs &#9733;</div>

        <div class="card__bottom">
          <p class="card__address">
            Address: <a href="https://maps.app.goo.gl/KoM7JYoLpRZkrzmF8" target="_blank">
              Vadodara, India
            </a>
          </p>
          <p class="card__contact">
            Mobile : <a href="tel:+91 7043929151">+91 7043929151</a>
          </p>
          <p class="card__contact">
            Email-ID : <a href="mailto:ritvik.sulekh@gmail.com">ritvik.sulekh@gmail.com</a>
          </p>
          <p class="card__contact">
            LinkedIn: <a href="https://www.linkedin.com/in/ritviksinghsulekh/" target="_blank">in/ritviksinghsulekh/</a>
          </p>
        </div>

      </div>
    </div>
  `;
}
