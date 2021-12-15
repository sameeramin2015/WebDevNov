// Anonym function

// (()=>{console.log('hello')})();

// // this 

// let person1 ={
//     first:'Joe',
//     last:'Dalton',
//     age:20,
//     email:'joe@joe.com',
//     show:function(){
//         console.log(`
//         Fullname: ${this.first} ${this.last}
//         Age: ${this.age}
//         Email: ${this.email}
//         `)
//     }
// }

// person1.show();


// function callMe(param){
//     console.log(param)
// }

// (
//     document.querySelector('button').onclick=()=>console.log('hello')
// )();



// Arrow function

// let WelcomeMSG = ()=>'hello'
// WelcomeMSG = ()=>{
//     console.log('hellosdsd')
//     console.log('hello')
// }
// WelcomeMSG = x => x
// WelcomeMSG = (x,y) => x+y

// let obj = {
//     name:'test name',
//     printName:function(){console.log(this.name)}
// }


// obj.printName()
// console.log(WelcomeMSG(5,7))

// function test(){
//     console.log('hello')
// }

// let test = ()=> console.log('hello')

// spread operator

// let num1=[1,2,3,4,5]
// let num2=[6,7,8,9]
// let x = "testtesttest"
// let complexArray = [
//     {id:1},
//     true,
//     5,
//     "string",
//     function x(){}
// ]
// let num3=[...num1,...num2]
// console.log(...num1,...num2) // 1 2 3 4 5 6 7 8 9
// console.log(...num3) // 1 2 3 4 5 6 7 8 9
// let result = [...complexArray,...num3]
// console.log(result)
// console.log(...complexArray)

// Destructuring
let data = [1,2,3,4,5,function(){console.log('hello')},true,'jack',{id:1},['nested'],[{id:1,title:'nested'}]]

// console.log(data[4])
// let arrayitem_1 = data[0]
// let arrayitem_2 = data[1]
// let arrayitem_3 = data[2]

const [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11] = data

const obj ={a:1,b:2,c:3,d:4,e:function(){console.log('hello')}}

const {a:a1,b:b1,c:c1,d:d1,e:e1} = obj
console.log(a1,b1,c1,d1)

console.log(item1,item2,item3,item4,item5,item6,item7,item10,item11)
item6()