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
    <h6>${eventsDetails.category}<h6>
    <h1>${eventsDetails.name}</h1>
    <h4>${eventsDetails.description}<h4>
    <h6>${eventsDetails.place}<h6>
    <h6>${eventsDetails.date}<h6>
   
</div>
</div>`

})