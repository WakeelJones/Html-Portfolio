const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// type method
TypeWriter.prototype.type = function () {
  // Current index of words
  const current = this.wordIndex % this.words.length;

  // get full text of current word
  const fulltxt = this.words[current];

  // Check if deleting
  if (this.isDeleting) {
    //remove char
    this.txt = fulltxt.substring(0, this.txt.length - 1);
  } else {
    //add char
    this.txt = fulltxt.substring(0, this.txt.length + 1);
  }

  // insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  setTimeout(() => this.type(), 500);
};

// Init on Dom load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
