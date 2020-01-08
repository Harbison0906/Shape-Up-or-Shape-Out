function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.div = $('<div></div>');
    this.div.addClass('shape');
    this.randomPos();
    // this.div.style.left = `${x}px`;
    // this.div.style.top = `${y}px`;
  }

  randomPos () {
    this.position.style(`position: absolute, left: ${randomVal(0, 600)}, top: ${randomVal(0, 600)}`);
  }
}

class Circle extends Shape {
  constructor(radius) {

  }
}

class Triangle extends Shape {
  constructor(height) {

  }
}

class Rectangle extends Shape {
  constructor(width, height) {

  }
}

class Square extends Shape {
  constructor(sideLength) {

  }
}