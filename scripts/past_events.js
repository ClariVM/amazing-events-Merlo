let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlAPI)
.then(reponse => reponse.json())
.then(data => {
    let events = data.events
    let currentDate = data.currentDate




const containerCards = document.getElementById("container-cards");

   
      function createCards(arrayDatos) {
        let cards = "";
        for (ev of arrayDatos) {
          if (ev.date < currentDate) {
          cards += ` <div class="card" style="width: 15rem;">
          <img src="${ev.image}" class="card-img-top" alt="museum">
          <div class="card-body">
              <h5 class="card-title">${ev.name}</h5>
              <p class="card-text">${ev.description}</p>
              <h6><ion-icon name="pricetags-outline"></ion-icon>$${ev.price}</h6>
              <a href="details.html?id=${ev._id}" class="btn btn-primary">See more</a>
          </div>
      </div>
      </div>`;}
        }
        return cards;
      }

//CATEGORIES

const containerCategories = document.getElementById("container-categories");

function createCategories(arrayDatos) {
  let categories = "";
  let cat = 0;
  arrayDatos.forEach((event) => {
    if (!categories.includes(event.category))
      categories += `
        <input type="checkbox" name="category1" id="${event.category}" value = "${event.category}">
        <label for="category">${event.category}</label>
   `;
    cat++;
  });
  return categories;
}

const pasteCategories = createCategories(events);
containerCategories.innerHTML = pasteCategories;

const checkedCategories = [];
const filterEventsCategories = [];

containerCategories.addEventListener("click", (e) => {
  if (e.target.value != undefined) {
    if (e.target.checked) {
      checkedCategories.push(e.target.value);
    } else {
      let index = checkedCategories.indexOf(e.target.value);
      if (index != -1) {
        checkedCategories.splice(index, 1);
      }
    }
  }
  almacen();
});

for (evento of events) {
  for (category of checkedCategories) {
    if (evento == category) {
      filterEventsCategories.push(evento);
    }
  }
}

//SEARCH

const search = document.getElementById("search");
const message = document.getElementById("message");
let searchAlgo = "";

search.addEventListener("keyup", (x) => {
  searchAlgo = x.target.value.toLowerCase();

  almacen();
});

function almacen() {
  let checkedElements = events.filter((event) =>
    checkedCategories.includes(event.category)
  );
  let filterSearch = events.filter((event) =>
    event.name.toLowerCase().includes(searchAlgo)
  );
  if (filterSearch.length > 0) {
    containerCards.innerHTML = createCards(filterSearch);
    let filterCrossed = filterSearch.filter((event) =>
      event.category.includes(checkedCategories.toString())
    );
    containerCards.innerHTML = createCards(filterCrossed);
  } else if (filterSearch.length == 0) {
    containerCards.innerHTML = `<img src="./assets/NotfoundResults.gif" id="fotoMensaje" alt="">`;
  }
  if(checkedElements.length > 0){            
    containerCards.innerHTML = createCards(checkedElements);            
      let filterCrossedCheck = checkedElements.filter(check => check.name.toLowerCase().includes(searchAlgo.toString()));            
      containerCards.innerHTML = createCards(filterCrossedCheck);        
     }
}
almacen();

})