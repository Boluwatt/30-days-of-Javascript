const words = document.getElementById("words")
const button = document.getElementById("btn")
const message = document.getElementsByClassName("wordnumber")

let wordCount = ("This is not a function")

const noOfWords = () => {
    return(wordCount.split(" "))
}

let wordNumber = noOfWords().length
console.log(wordNumber)

button.addEventListener("click", showNumber);

function showNumber(e) {
    document.getElementsByClassName("wordnumber").innerHTML = `"The number of words is ${wordNumber}"`
}