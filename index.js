// console.log("Tac tak TOe")
let music = new Audio("music/music.mp3")
let turn_Music = new Audio("music/ting.mp3")
let gameOver = new Audio("music/gameover.mp3")
let turn = "X"
// Creating Turn change Function
let changeTurn = () => {
    console.log("Turn change");
    return turn === "X" ? "0" : "X"
}
let isWin = false
// music.play()

//Function To check Win if Some one win or not

let checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    let boxText = document.getElementsByClassName("BoxText");
    wins.forEach(element => {
        if ((boxText[element[0]].innerText === boxText[element[1]].innerText) && (boxText[element[1]].innerText === boxText[element[2]].innerText) && (boxText[element[0]].innerText !== "")) {

            // console.log("win")
            document.getElementById("info").innerText = boxText[element[0]].innerText + " Won"
            isWin = true
            document.getElementById("gif").style.width = "20vw";
            gameOver.play();

        }

    });

}

//Creating Game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".BoxText");
    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn()
            turn_Music.play();
            checkWin();
            if (isWin === false) {

                document.getElementById("info").innerText = "Turn of " + turn
            }


        }
    })

});
function Reset() {

    let el = document.querySelectorAll(".BoxText")
    for (const i of el) {
        console.log(i.innerText)
        i.innerText="";

    }
    turn="X";
    document.getElementById("gif").style.width ="0";

}


let reset = document.getElementById("reset");
reset.addEventListener('click',Reset)
