/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('check addParagraph adds to array', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();
    view.addParagraph("new paragraph")
    expect(document.querySelectorAll('p').length).toBe(3);
  });
});