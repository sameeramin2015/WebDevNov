/*
 <table>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>jack</td>
        </tr>
      </tbody>
    </table>
*/

let elGen = t => document.createElement(t)

let table = elGen('table') // parent1
let tHead = elGen('thead') // sub-parent1
let tBody = elGen('tbody') // sub-parent2
let trOfthead = elGen('tr');
let th = elGen('th');
let trOfTbody = elGen('tr');
let td = elGen('td');

// thead begin
table.appendChild(tHead)
tHead.appendChild(trOfthead)
trOfthead.appendChild(th)
th.innerText="name"


// thead end

// tbody
table.appendChild(tBody)
tBody.appendChild(trOfTbody)
trOfTbody.appendChild(td)
td.innerText="jack"




table.className ="table table-dark"
document.querySelector('.container').appendChild(table)



// trOfthead.appendChild(th)
// tHead.appendChild(trOfthead)
// trOfTbody.appendChild(td)
// tBody.appendChild(trOfTbody)
// table.appendChild(tHead)
// table.appendChild(tBody)
// console.log(table)
