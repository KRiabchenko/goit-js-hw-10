import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {refs} from './refs';
import fetchCountries from './fetchCountries';
import { prewiewMarkup, createMarkup } from './creatMarkup'



const DEBOUNCE_DELAY = 300;

const debounce = require('lodash.debounce');


refs.inputBox.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(event) {
  event.preventDefault();

  const boxValue = refs.inputBox.value;
  const searchBoxValue = boxValue.trim().toLowerCase();


  if (searchBoxValue === '') {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
  }

  if (!searchBoxValue) {
    Notify.failure('Oops, there is no country with that name');
    return;
  }

  fetchCountries(searchBoxValue)
    .then(renderCountry)
    .catch(onError);

} 
  
function onError(error) {
  console.log('catch ');
  console.log(error.message);
  refs.countryList.innerHTML = '';
}

function renderCountry(countries) {
   
    if (countries.length >= 1 && countries.length <= 10) {
        const markup = countries.map(country=> prewiewMarkup(country));
      refs.countryInfo.innerHTML = markup.join('');
      refs.countryList.innerHTML = '';
  }
    if (countries.length === 1) {
          const markup = countries.map(country=> createMarkup(country));
      refs.countryInfo.innerHTML = markup.join('');
      refs.countryList.innerHTML = '';
  }  
  if (country.length >= 10) {
     Notify.info('Too many matches found. Please enter a more specific name.'); 
    }  
    }



  
 

