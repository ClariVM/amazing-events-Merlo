const containerCards = document.getElementById('container-cards');

function createCards(arrayDatos) {
    let cards = ''
    for (const person of arrayDatos) {
        if( parseInt(person.date) < parseInt(currentDate) ){
        cards += ` <div class="card" style="width: 15rem;">
            <img src="${person.image}" class="card-img-top" alt="museum">
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <p class="card-text">${person.description}</p>
                <h6><ion-icon name="pricetags-outline"></ion-icon>$${person.price}</h6>
                <a href="details.html" class="btn btn-primary">See more</a>
            </div>
        </div>
    </div>`
    }
}
    return cards
}

let pasteCards = createCards(events)
containerCards.innerHTML = pasteCards