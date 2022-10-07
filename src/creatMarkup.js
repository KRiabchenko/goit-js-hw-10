function prewiewMarkup({ flags, name }) {
  return /*html*/ `<li class="country-list__item">
       <img class="country-list__flag" width="60px" height="40px" src="${flags.svg}"></img>
       <p class="country-list__name">${name.official}</p>
       </li>`
   
}

function createMarkup({ name, capital, population, languages, flags }) { 
return /*html*/ ` 
    <div class="country-list__item">
    <img class="country-list__flag" width="60px" height="40px" src="${flags.svg}"></img>
    <p class="country-list__name accent">${name.official}</p></div>
    <div class="description">
    <p class="description__name">Capital: <span>${capital}</span><p>
    <p class="description__name">Population: <span>${population}</span></p>
    <p class="description__name">Languages: <span>$${Object.values(
          languages
        )}</span></p>
    </div>`
}

export { prewiewMarkup, createMarkup };