const text = "Lorem Ipsum is INTECBRUSSEL simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but INTECBRUSSEL also the leap into electronic typesetting, remaining essentially unchanged. INTECBRUSSEL It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker INTECBRUSSEL including versions of Lorem Ipsum."

var url = "https://www.intecbrussel.be"
var company = "             intec                     "
var myMessage = "             hello sadasdas          asdjasdjaidiadis       asdasdasd               "
var PrintService;
var myItems = "laptop, desktop, mobile"
PrintService = text.length // return lenght of text
PrintService = text.indexOf('1500s') // return location of 1500s based on index number 
PrintService = text.lastIndexOf('printer') // location of printer
PrintService = text.search('book') // search location of book = 253 index number located 
PrintService = text.indexOf('INTECBRUSSEL') // return location based on index number = 15 
PrintService = text.lastIndexOf('INTECBRUSSEL') // return the last item of INTECBRUSSEL address there is 4 INTECBRUSSEL in the text 
PrintService = text.slice(15,27) // slice text
PrintService = url.slice(12,url.length)
PrintService = url.substring(12) // return after index number 12 the rest of the item
PrintService = text.replace("INTECBRUSSEL","0101010101") // replace the first item
PrintService = text.toUpperCase(); // change text to uppercase 
PrintService = text.toLowerCase(); // change text to lowercase 
PrintService = company.concat('brussel')
PrintService = company.trim() // return company

PrintService = myMessage.trim() // return  message 
PrintService = myMessage.replace(/ /g," ").trim()
PrintService = text.charAt(text.length-1)
PrintService = text[0]; // return first letter of text
PrintService = typeof myItems // return type of text
PrintService = myItems.split(", ") // add quotation around items in variable myItems
console.log(PrintService)