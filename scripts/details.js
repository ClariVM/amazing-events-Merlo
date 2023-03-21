let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlAPI)
.then(reponse => reponse.json())
.then(data => {
    let events = data.events
    let currentDate = data.currentDate

const queryString = location.search

const params = new URLSearchParams(queryString)
console.log(params);

const idEvents = params.get('id')
console.log(idEvents);

const eventsDetails = events.find(event => event._id == idEvents)

const containerDetails = document.getElementById('container-details')

containerDetails.innerHTML = `<div class="row">
<div class="col-12 col-sm-12 col-md-12 col-lg-6 box-photo">
    <img src="${eventsDetails.image}" alt="${eventsDetails.name}"/>
</div>
<div class="col-12 col-sm-12 col-md-12 col-lg-6 box-text">
    <div class="name-event"><h1>${eventsDetails.name}</h1></div>
    <span class= "description-event">${eventsDetails.description}</span>
    <div class="event-info">

    <h6><ion-icon name="star-outline" style="color:#d90368"></ion-icon> Category: ${eventsDetails.category}<h6>
    <h6><ion-icon name="navigate-outline" style="color:#d90368"></ion-icon> Place: ${eventsDetails.place}<h6>
    <h6><ion-icon name="calendar-outline" style="color:#d90368"></ion-icon> Date: ${eventsDetails.date}<h6>
    <h6><ion-icon name="pricetags-outline" style="color:#d90368"></ion-icon> Price: $${eventsDetails.price}<h6>
    </div>
</div>
</div>`

})