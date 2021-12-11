const text = "Lorem Ipsum is INTECBRUSSEL simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but INTECBRUSSEL also the leap into electronic typesetting, remaining essentially unchanged. INTECBRUSSEL It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker INTECBRUSSEL including versions of Lorem Ipsum."

var url = "https://www.intecbrussel.be"
var company = "             intec                     "
var myMessage = "             hello sadasdas          asdjasdjaidiadis       asdasdasd               "
var PrintService;
var myItems = "laptop, desktop, mobile"

PrintService = text.length; // return length of text
PrintService = text.indexOf('1500s')
PrintService = text.lastIndexOf('printer')
PrintService = text.search('book')
PrintService = text.indexOf('INTECBRUSSEL')
PrintService = text.lastIndexOf('INTECBRUSSEL')
PrintService = text.slice(15,27)
PrintService = url.slice(12,url.length)
PrintService = url.substring(12)
PrintService = text.replace("INTECBRUSSEL","0101010101")
PrintService = text.replace(/INTECBRUSSEL/g,"010101010101011010")
PrintService = text.toUpperCase();
PrintService = text.toLowerCase();
PrintService = company.concat('brussel')
//PrintService = company + "brussel"
PrintService = company.trim()
PrintService = myMessage.trim()
PrintService = myMessage.replace(/ /g," ").trim()
PrintService = text.charAt(text.length-1)
// PrintService = text.length-1
PrintService = text[0];
PrintService = typeof myItems
PrintService = myItems.split(", ")
PrintService = myItems.split(", ")
console.log(PrintService)