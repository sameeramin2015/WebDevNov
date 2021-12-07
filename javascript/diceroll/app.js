function diceOne() {



    var result1 = Math.floor(Math.random() * 6) + 1

    var result2 = Math.floor(Math.random() * 6) + 1

    document.getElementById('placeholder1').innerHTML = `<img src="assets/dice${result1}.png" width="100" height="100"/>`;



    document.getElementById('placeholder2').innerHTML = `<img src="assets/dice${result2}.png" width="100" height="100"/>`
}
