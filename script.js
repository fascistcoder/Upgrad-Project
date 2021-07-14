"use strict";
// const orgUrl = document.querySelector(".link");
// const orgTitle = document.querySelector(".title");
// const orgDescription = document.querySelector(".description");
const searchClass = document.querySelector(".searchResults");

function fetchData() {
  //fetching data from api
  fetch("https://run.mocky.io/v3/5b85cba2-59d0-4e0e-a62e-3c8cba388983")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((user, i) => {
        // for (let i = 0; i < 1; i++) {
        console.log(user.meta.ogUrl);
        console.log(user.meta.ogTitle);
        console.log(user.meta.ogDescription);
        console.log("\n\n");

        const output = `<div class="result">
            
          <a class="link" href=${user.meta.ogUrl}> ${user.meta.ogUrl} </a>
          <h2>
            <a class="title" href="#"
              >${user.meta.ogTitle}</a
            >
          </h2>

          <p class="description">
            ${user.meta.ogDescription}
          </p>
        </div>`;

        // orgUrl.textContent = user.meta.ogUrl;
        // orgTitle.textContent = user.meta.ogTitle;
        // orgDescription.textContent = user.meta.ogDescription;

        searchClass.innerHTML += output;
      });
      // console.log(html);
    })

    .catch((error) => {
      console.log(error);
    });
}

fetchData();

// /* 0 0 0 0 0
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4 */

// for(let i=0;i<5;i++)
// {
//   for(let j=0;j<5;j++)
//   {
//     console.log(i)
//   }
// }
