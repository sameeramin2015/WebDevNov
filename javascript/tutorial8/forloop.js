for(let i=0; i<5; i++){
    console.log('hello world', i)

}

//function print even number
function printEvenNumber(number){
    for(i=1 ; i<number; i++){
        if(i%2 ===0){
            console.log(i)
        }

    }
}
printEvenNumber(7) // result 2,4,6

for(let i=10; i>=0; i--){
    console.log('hello world', i)
}
/* result
hello world 10
hello world 9
hello world 8
hello world 7
hello world 6
hello world 5
hello world 4
hello world 3
hello world 2
hello world 1
hello world 0
*/

let x,y
for(x=1, y=50; x<=20 && y>=50; x++,y--){
    console.log(`x:${x}\ny:${y}`)
}

// result x:1
//y:50

for(x=1; x<=10; x++){
    for(y=1; y<=10;y++){
        let result = `${x} + ${y}=${x+y}`
        console.log(result)
    }
}
/*result
1 + 1=2
1 + 2=3
1 + 3=4
1 + 4=5
1 + 5=6
1 + 6=7
1 + 7=8
1 + 8=9
1 + 9=10
1 + 10=11
2 + 1=3
2 + 2=4
2 + 3=5
2 + 4=6
2 + 5=7
2 + 6=8
2 + 7=9
2 + 8=10
2 + 9=11
2 + 10=12
3 + 1=4
3 + 2=5
3 + 3=6
3 + 4=7
3 + 5=8
3 + 6=9
3 + 7=10
3 + 8=11
3 + 9=12
3 + 10=13
4 + 1=5
4 + 2=6
4 + 3=7
4 + 4=8
4 + 5=9
4 + 6=10
4 + 7=11
4 + 8=12
4 + 9=13
4 + 10=14
5 + 1=6
5 + 2=7
5 + 3=8
5 + 4=9
5 + 5=10
5 + 6=11
5 + 7=12
5 + 8=13
5 + 9=14
5 + 10=15
6 + 1=7
6 + 2=8
6 + 3=9
6 + 4=10
6 + 5=11
6 + 6=12
6 + 7=13
6 + 8=14
6 + 9=15
6 + 10=16
7 + 1=8
7 + 2=9
7 + 3=10
7 + 4=11
7 + 5=12
7 + 6=13
7 + 7=14
7 + 8=15
7 + 9=16
7 + 10=17
8 + 1=9
8 + 2=10
8 + 3=11
8 + 4=12
8 + 5=13
8 + 6=14
8 + 7=15
8 + 8=16
8 + 9=17
8 + 10=18
9 + 1=10
9 + 2=11
9 + 3=12
9 + 4=13
9 + 5=14
9 + 6=15
9 + 7=16
9 + 8=17
9 + 9=18
9 + 10=19
10 + 1=11
10 + 2=12
10 + 3=13
10 + 4=14
10 + 5=15
10 + 6=16
10 + 7=17
10 + 8=18
10 + 9=19
10 + 10=20
*/

let arrylist =['ali','vali','deli','qali','jali']

for(i=0; i<arrylist.length; i++){
    console.log(arrylist[i])
}

let posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}]

for(i=0; i<posts.length; i++){
    let obj = posts[i]
    console.log(obj.title)
}
let answer =1
for(let x=4; x>=1; x--){
    answer *= x
    console.log(answer)
}
/* result
1*4 = 4
4*3 = 12
12*2 = 24
24*1 = 24

*/

// getFactrial(4)

let count=0;
for(let i=0;i<100;i++){
    console.log(i)
    count = count + i // increasing 1 2 3 4 5 6
    // count =0  = 0 +  1 => 1
    // count = 1 = 1 + 2 = > 3
    
    //4950
    count = count -1 // decrease 100 at the end  4950 - 100 
    // 4850
}

console.log(count)