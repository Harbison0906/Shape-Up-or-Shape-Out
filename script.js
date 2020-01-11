

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

class Circle extends Shape {
  constructor(radius) {
    super(2 * radius, 2 * radius);
    this.div.attr('id', 'circle');
  }
}

class Triangle extends Shape {
  constructor(height) {
    super();
    this.div.attr('id', 'triangle');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
    this.height = Number(height);
    this.width = Number(width);
    this.div.attr('id', 'rectangle');
    this.div.css('backgroundColor', 'green');
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

class Square extends Shape {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.sideLength = Number(sideLength);
    this.div.attr('id', 'square');
    this.div.css('backgrounColor', 'red');
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
