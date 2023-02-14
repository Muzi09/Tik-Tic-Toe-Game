const board = document.getElementsByClassName('board')
const restart = document.getElementsByClassName('restart')


const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')
const cell4 = document.getElementById('cell4')
const cell5 = document.getElementById('cell5')
const cell6 = document.getElementById('cell6')
const cell7 = document.getElementById('cell7')
const cell8 = document.getElementById('cell8')
const cell9 = document.getElementById('cell9')

let cell1_ClickTracker = false
let cell2_ClickTracker = false
let cell3_ClickTracker = false
let cell4_ClickTracker = false
let cell5_ClickTracker = false
let cell6_ClickTracker = false
let cell7_ClickTracker = false
let cell8_ClickTracker = false
let cell9_ClickTracker = false

let boardArr = [null, null, null, null, null, null, null, null, null]
let turns = 1
let resultMessage = ''

function winCondition() {
    if (
        (boardArr[0] == "X" && boardArr[1] == "X" && boardArr[2] == "X") ||
        (boardArr[2] == "X" && boardArr[5] == "X" && boardArr[8] == "X") ||
        (boardArr[8] == "X" && boardArr[7] == "X" && boardArr[6] == "X") ||
        (boardArr[6] == "X" && boardArr[3] == "X" && boardArr[0] == "X") ||
        (boardArr[0] == "X" && boardArr[4] == "X" && boardArr[8] == "X") ||
        (boardArr[2] == "X" && boardArr[4] == "X" && boardArr[6] == "X") ||
        (boardArr[1] == "X" && boardArr[4] == "X" && boardArr[7] == "X") ||
        (boardArr[3] == "X" && boardArr[4] == "X" && boardArr[5] == "X")
    ) {
        return 'X'
    }

    else if (
        (boardArr[0] == "O" && boardArr[1] == "O" && boardArr[2] == "O") ||
        (boardArr[2] == "O" && boardArr[5] == "O" && boardArr[8] == "O") ||
        (boardArr[8] == "O" && boardArr[7] == "O" && boardArr[6] == "O") ||
        (boardArr[6] == "O" && boardArr[3] == "O" && boardArr[0] == "O") ||
        (boardArr[0] == "O" && boardArr[4] == "O" && boardArr[8] == "O") ||
        (boardArr[2] == "O" && boardArr[4] == "O" && boardArr[6] == "O") ||
        (boardArr[1] == "O" && boardArr[4] == "O" && boardArr[7] == "O") ||
        (boardArr[3] == "O" && boardArr[4] == "O" && boardArr[5] == "O")
    ) {
        return 'O'
    }

    else if (turns == 10) {
        return 'Draw'
    }

    else {
        return
    }
}


function result () {
    if (winCondition()) {
        resultMessage = document.createElement('div')
        document.body.appendChild(resultMessage)
        resultMessage.setAttribute('id', 'winner-message')

        if (winCondition() == 'X') {
            resultMessage.innerHTML = 'X won the game'
        }
        else if (winCondition() == 'O') {
            resultMessage.innerHTML = 'O won the game'
        }
        else if (winCondition() == 'Draw') {
            resultMessage.innerHTML = 'Its a Draw !!!'
        }
    }
}

function setColor (cellData) {
    if (cellData == 'X') {
        return 'red'
    }
    else if (cellData == 'O') {
        return 'green'
    }
}



cell1.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[0] = 'O'
    }
    else {
        boardArr[0] = 'X'
    }

    if (!cell1_ClickTracker) {
        (turns % 2 == 0) ? cell1.innerHTML = 'O' : cell1.innerHTML = 'X'
        turns = turns + 1
        cell1.style.color = setColor(cell1.innerHTML)
    }
    cell1_ClickTracker = true
    result()
})


cell2.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[1] = 'O'
    }
    else {
        boardArr[1] = 'X'
    }

    if (!cell2_ClickTracker) {
        (turns % 2 == 0) ? cell2.innerHTML = 'O' : cell2.innerHTML = 'X'
        turns = turns + 1
        cell2.style.color = setColor(cell2.innerHTML)
    }
    cell2_ClickTracker = true
    result()
})


cell3.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[2] = 'O'
    }
    else {
        boardArr[2] = 'X'
    }

    if (!cell3_ClickTracker) {
        (turns % 2 == 0) ? cell3.innerHTML = 'O' : cell3.innerHTML = 'X'
        turns = turns + 1
        cell3.style.color = setColor(cell3.innerHTML)
    }
    cell3_ClickTracker = true
    result()
})


cell4.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[3] = 'O'
    }
    else {
        boardArr[3] = 'X'
    }

    if (!cell4_ClickTracker) {
        (turns % 2 == 0) ? cell4.innerHTML = 'O' : cell4.innerHTML = 'X'
        turns = turns + 1
        cell4.style.color = setColor(cell4.innerHTML)
    }
    cell4_ClickTracker = true
    result()
})


cell5.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[4] = 'O'
    }
    else {
        boardArr[4] = 'X'
    }

    if (!cell5_ClickTracker) {
        (turns % 2 == 0) ? cell5.innerHTML = 'O' : cell5.innerHTML = 'X'
        turns = turns + 1
        cell5.style.color = setColor(cell5.innerHTML)
    }
    cell5_ClickTracker = true
    result()
})


cell6.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[5] = 'O'
    }
    else {
        boardArr[5] = 'X'
    }

    if (!cell6_ClickTracker) {
        (turns % 2 == 0) ? cell6.innerHTML = 'O' : cell6.innerHTML = 'X'
        turns = turns + 1
        cell6.style.color = setColor(cell6.innerHTML)
    }
    cell6_ClickTracker = true
    result()
})


cell7.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[6] = 'O'
    }
    else {
        boardArr[6] = 'X'
    }

    if (!cell7_ClickTracker) {
        (turns % 2 == 0) ? cell7.innerHTML = 'O' : cell7.innerHTML = 'X'
        turns = turns + 1
        cell7.style.color = setColor(cell7.innerHTML)
    }
    cell7_ClickTracker = true
    result()
})


cell8.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[7] = 'O'
    }
    else {
        boardArr[7] = 'X'
    }

    if (!cell8_ClickTracker) {
        (turns % 2 == 0) ? cell8.innerHTML = 'O' : cell8.innerHTML = 'X'
        turns = turns + 1
        cell8.style.color = setColor(cell8.innerHTML)
    }
    cell8_ClickTracker = true
    result()
})


cell9.addEventListener('click', () => {
    if (turns % 2 == 0) {
        boardArr[8] = 'O'
    }
    else {
        boardArr[8] = 'X'
    }

    if (!cell9_ClickTracker) {
        (turns % 2 == 0) ? cell9.innerHTML = 'O' : cell9.innerHTML = 'X'
        turns = turns + 1
        cell9.style.color = setColor(cell9.innerHTML)
    }
    cell9_ClickTracker = true
    result()
})


restart[0].addEventListener('click', () => {
    
    cell1.innerHTML = ""
    cell2.innerHTML = ""
    cell3.innerHTML = ""
    cell4.innerHTML = ""
    cell5.innerHTML = ""
    cell6.innerHTML = ""
    cell7.innerHTML = ""
    cell8.innerHTML = ""
    cell9.innerHTML = ""

    boardArr = [null, null, null, null, null, null, null, null, null]

    turns = 1

    cell1_ClickTracker = false
    cell2_ClickTracker = false
    cell3_ClickTracker = false
    cell4_ClickTracker = false
    cell5_ClickTracker = false
    cell6_ClickTracker = false
    cell7_ClickTracker = false
    cell8_ClickTracker = false
    cell9_ClickTracker = false
    
    resultMessage.innerHTML = ''
    resultMessage.setAttribute('id', 'blank')
})