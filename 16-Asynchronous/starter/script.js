// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderError = function (msg) {
//   const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     //countriesContainer.style.opacity = 1;
//   };
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   //countriesContainer.style.opacity = 1;
// };

// ///////////////////////////////////////

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `
// //   <article class="country">
// //   <img class="country__img" src="${data.flags.svg}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name.common}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>${(
// //       +data.population / 1000000
// //     ).toFixed(1)}</p>
// //     <p class="country__row"><span>🗣️</span>${data.languages}</p>
// //     <p class="country__row"><span>💰</span>${data.currencies}</p>
// //   </div>
// // </article>`;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };
// //getCountryData('portugal');
// //getCountryData('usa');

// //fetch promise through api call:-
// const getCountryData = function (country) {
//   //counntry 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => response.json(),
//       err => alert(err)
//     )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       //country 2
//       return fetch(`https://restcountries.eu/rest/v/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} err`);
//       renderError(`something went wrong ${err.message}. try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// //btn.addEventListener('click', function () {
// getCountryData('portugal');
// //});

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`you r in ${data.city} and ${data.country}`);
    });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

//promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('you win');
//   } else {
//     reject('you lose');
//   }
// });

//lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//easy way to write promise
//Promise.resolve('abc').then(x => console.log(x));
//Promise.reject(new Error('problem')).catch(x => console.error(x));

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err));
