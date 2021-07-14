const orgUrl = document.querySelector(".link");
const orgTitle = document.querySelector(".title");
const orgDescription = document.querySelector(".description");

function fetchData() {
  //fetching data from api
  fetch("https://run.mocky.io/v3/5b85cba2-59d0-4e0e-a62e-3c8cba388983")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data
        .map((user) => {
          for (let i = 0; i < 1; i++) {
            console.log(user.meta.ogUrl);
            console.log(user.meta.ogTitle);
            console.log(user.meta.ogDescription);
            console.log("\n\n");

            orgUrl.textContent = user.meta.ogUrl;
            orgTitle.textContent = user.meta.ogTitle;
            orgDescription.textContent = user.meta.ogDescription;
          }
        })
        .join("");
      // console.log(html);
    })

    .catch((error) => {
      console.log(error);
    });
}

fetchData();
