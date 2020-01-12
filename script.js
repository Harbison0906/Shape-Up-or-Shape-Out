
// Overall class for every shape. These properties will
// will apply to every shape
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
    $('#describe-width').val(this.width);
  }
  getArea() {
    let area = this.width * this.height;
    $('#describe-area').val(area);
  }
  getPerimeter() {
    let perimeter = (this.width + this.height) * 2;
    $('#describe-perimeter').val(perimeter);
  }
}

// class specific to Circles

class Circle extends Shape {
  constructor(radius) {
    super(2 * radius, 2 * radius);
    this.radius = Number(radius);
    this.div.attr('id', 'circle');
    this.div.click(() => this.getArea());  
    this.div.click(() => this.getPerimeter());  
    this.div.click(() => $('#describe-shape').val('Circle'));
    this.div.click(() => $('#describe-radius').val(this.radius));


  }
  getArea() {
    let radius = this.width / 2;
    let area = Math.PI * Math.pow(radius, 2);
    $('#describe-area').val(area);
  }
  getPerimeter() {
    let perimeter = 2 * Math.PI * this.radius;
    $('#describe-perimeter').val(perimeter);
  }
}
$('#circle-btn').click(function() {
  let radius = $('#radius-px').val();
  new Circle(radius);
})
// class specific to Triangles

class Triangle extends Shape {
  constructor(height) {
    super(height, height);
    this.height = Number(height);
    this.div.attr('id', 'triangle');
    this.div.click(() => this.getArea());
    this.div.click(() => $('#describe-shape').val('Triangle'));

  }
  getArea() {
    let area = 0.5 * this.height * this.height;
    $('#describe-area').val(area);
  }
}

$('#triangle-btn').click(function() {
  let triHeight = $('#triangle-height').val();
  new Triangle(triHeight);
})

// class specific to Rectangles

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
    this.height = Number(height);
    this.width = Number(width);
    this.div.attr('id', 'rectangle');
    this.div.click(() => this.getArea());
    this.div.click(() => this.getPerimeter());
    this.div.click(() => $('#describe-shape').val('Rectangle'));
    
  }
}

$('#rectangle-btn').click(function () {
  let rectWidth = $('#width-px').val();
  let rectHeight = $('#rect-height-px').val();
  new Rectangle(rectWidth, rectHeight);

});

// class specific to Squares

class Square extends Shape {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.sideLength = Number(sideLength);
    this.div.attr('id', 'square');
    this.div.click(() => this.getArea());
    this.div.click(() => this.getPerimeter());
    this.div.click(() => $('#describe-shape').val('Square'));
  }
  getArea() {
    let area = this.sideLength * this.sideLength;
    $('#describe-area').val(area);
  }
  getPerimeter() {
    let perimeter = (this.sideLength * 2) * 2;
    $('#describe-perimeter').val(perimeter);
  }
}
$('#square-btn').click(function () {
  let sidePx = $('#side-px').val();
  new Square(sidePx, sidePx);
})
