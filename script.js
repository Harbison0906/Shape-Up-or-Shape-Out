class Shape {
  constructor(width, height) {
    this.div = $('<div></div>');
    this.div.addClass('shape');
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