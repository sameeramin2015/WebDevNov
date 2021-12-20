// createElement

let h1 = document.createElement('h1');
h1.textContent = 'INTECBRUSSEL';

let cardColumns = document.querySelector('.card-columns')

// // insertBefore
// console.log(cardColumns.childNodes)
// cardColumns.insertBefore(h1,cardColumns.childNodes[3])
// // cardColumns.insertBefore(h1,cardColumns.childNodes[6])

// // append
// cardColumns.append("<h1>hello</h1>")
// cardColumns.append(h1)

// // prepend()
// cardColumns.prepend(h1)

/*
Element.append() allows you to also append DOMString objects, whereas Node.appendChild() only accepts Node objects. ... Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.
*/

// insertAdjacentHTML
// cardColumns.insertAdjacentHTML('beforebegin','<h1>hello hello</h1>')
// cardColumns.insertAdjacentHTML('afterbegin','<h1>hello hello</h1>')
// cardColumns.insertAdjacentHTML('beforeend','<h1>beforeend</h1>')
// cardColumns.insertAdjacentHTML('afterend','<h1>afterend</h1>')
// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

// cloneNode

let cardTemplate = cardColumns.firstElementChild.cloneNode(true)
cardTemplate.childNodes[3].childNodes[1].textContent="NEW YEAR 2022"
console.log(cardTemplate);

// replaceChild
setTimeout(()=>{
    cardColumns.replaceChild(cardTemplate,cardColumns.childNodes[5])
},3000)

// removeChild
setTimeout(()=>{
    cardColumns.removeChild(cardColumns.firstElementChild)
},3000)

cardColumns.appendChild(cardTemplate)