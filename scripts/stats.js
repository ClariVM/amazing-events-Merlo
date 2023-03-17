let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";

fetch(urlAPI)
  .then((reponse) => reponse.json())
  .then((data) => {
    let events = data.events;
    let currentDate = data.currentDate;

    let pastEvents = events.filter((event) => event.date < currentDate);
    let futureEvents = events.filter((event) => event.date >= currentDate);

    //----EVENTS STATICS----//

    //Events with larger capacity
    let eventLargerCapacity = pastEvents
      .sort((a, b) => b.capacity - a.capacity)
      .map((rd) => {
        return `${rd.name} ${rd.capacity}`;
      });

    //Events with the highest percentage of attendance
    let assistance = events
      .filter((event) => event.assistance !== undefined)
      .map((rd) => {
        return {
          name: rd.name,
          capacity: rd.capacity,
          assistance: rd.assistance,
          percentage: parseFloat((rd.assistance / rd.capacity) * 100).toFixed(2),
        };
      });
    let eventHighestAssistence = assistance
      .sort((a, b) => b.percentage - a.percentage)
      .map((rd) => {
        return `${rd.name} - ${rd.percentage}`;
      });

    //Events with the lowest percentage of attendance
    let descendetAssistanceOrder = eventHighestAssistence.slice(-3);

    //----UPCOMING EVENTS STATICS BY CATEGORY----//
   let categoryUEStatics = futureEvents
    .filter((event) => event.category)
    .map((rd)=> {
      return `${rd.category}`
    })
    let categoryUEStaticsUnique = [...new Set(categoryUEStatics)]

      let revenues = futureEvents
      .map((f => {
        return{
        name: f.name,
        category: f.category,
        estimate: f.estimate,
        price: f.price,
        capacity: f.capacity,
        revenue: f.price * f.estimate
      }
      }))

    let upComingStatics = []
    for (const category2 of categoryUEStaticsUnique) {
    let sumaRevenues = 0
    let totalEstimate = 0
    let totalCapacity = 0
      for(element of revenues){
        if(element.category.includes(category2)){
          sumaRevenues += element.revenue
          totalEstimate += element.estimate
          totalCapacity += element.capacity 
         
        }
      } 
      upComingStatics.push({
        category : category2,
        revenues: sumaRevenues,
        totalPercentage: parseFloat((totalEstimate / totalCapacity) *100).toFixed(2),
        
      })
    }
    
    console.log(upComingStatics);
    let catUPS = []
    for (const iterator of upComingStatics) {
      if (iterator.includes) {
        
      }
    }
    


    const tableRender = document.getElementById("table");
    tableRender.innerHTML = ` <thead>
    <tr>
        <th colspan="3">EVENTS STATICS</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="subtitleTable">Events with the highest percentage of attendance</td>
        <td class="subtitleTable">Events with the lowest percentage of attendance</td>
        <td class="subtitleTable">Event with larger capacity</td>
    </tr>
    <tr>
        <td>${eventHighestAssistence[0]}%</td>
        <td>${descendetAssistanceOrder[2]}%</td>
        <td>${eventLargerCapacity[0]}</td>
    </tr>
    <tr>
        <td>${eventHighestAssistence[1]}%</td>
        <td>${descendetAssistanceOrder[1]}%</td>
        <td>${eventLargerCapacity[1]}</td>
    </tr>
    <tr>
        <td>${eventHighestAssistence[2]}%</td>
        <td>${descendetAssistanceOrder[0]}%</td>
        <td>${eventLargerCapacity[2]}</td>
    </tr>
</tbody>
<tr>
    <th colspan="3">UPCOMING EVENTS STATICS BY CATEGORY</th>
</tr>
<tr>
    <td class="subtitleTable">Categories</td>
    <td class="subtitleTable">Revenues</td>
    <td class="subtitleTable">Percentage of attendance</td>
</tr>
<tr>
      <td>${upComingStatics[0].category}</td>
    <td>$${upComingStatics[0].revenues}</td>
    <td>${upComingStatics[0].totalPercentage}%</td>
</tr>
<tr>
<td>${upComingStatics[1].category}</td>
<td>$${upComingStatics[1].revenues}</td>
<td>${upComingStatics[1].totalPercentage}%</td>
</tr>
<tr>
<td>${upComingStatics[2].category}</td>
<td>$${upComingStatics[2].revenues}</td>
<td>${upComingStatics[2].totalPercentage}%</td>
</tr>
<tr>
<td>${upComingStatics[3].category}</td>
<td>$${upComingStatics[3].revenues}</td>
<td>${upComingStatics[3].totalPercentage}%</td>
</tr>
<tr>
<td>${upComingStatics[4].category}</td>
<td>$${upComingStatics[4].revenues}</td>
<td>${upComingStatics[4].totalPercentage}%</td>
</tr>
<tr>
<td>${upComingStatics[5].category}</td>
<td>$${upComingStatics[5].revenues}</td>
<td>${upComingStatics[5].totalPercentage}%</td>
</tr>
<tr>
    <th colspan="3">PAST EVENTS STATICS BY CATEGORY</th>
</tr>
<tr>
    <td class="subtitleTable">Categories</td>
    <td class="subtitleTable">Revenues</td>
    <td class="subtitleTable">Percentage of attendance</td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr>`;
  });
