const button = document.getElementById("btn");

const noOfWords = (e) => {
  const words = document.getElementById("words");
  let wordCount = words.value;

  let wordNumber = wordCount.split(/\s/);
  let wordNo = wordNumber.length;

  let message = document.getElementById("wordnumber");

  message.innerHTML = `The number of words is ${wordNo}`;

  words.value = ""
};

button.addEventListener("click", noOfWords)