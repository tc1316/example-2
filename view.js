class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(paragraph) {
    let newParagraph = document.createElement('p')
    newParagraph.append(paragraph);
    this.mainContainerEl.append(newParagraph)
  }

}

module.exports = View;