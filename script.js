

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.div = $('<div class="shape"></div>');
    this.randomPos();
    this.div.dblclick(() => this.div.remove());
    this.div.click(() => this.describe());
  }
  randomVal(min, max) {
    return Math.floor(Math.random() * (max - min));
  }
  randomPos() {
    this.div.css({
      top: `${this.randomVal(this.height, 600)}px`,
      left: `${this.randomVal(this.width, 600)}px`,
      height: this.height,
      width: this.width,
    });
    $('#shapeBoard').append(this.div);
  }
  describe() {
    $('#describe-height').val(this.height);
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
    super(width, height)
    this.div.attr('id', 'rectangle');
  }
}
new Rectangle(300, 150);

class Square extends Shape {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.div.attr('id', 'square');
  }
}
new Square(150);