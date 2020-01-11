

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
}

class Circle extends Shape {
  constructor(radius) {
    super();
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
    this.div.attr('id', 'rectangle');
    this.div.css('backgroundColor', 'green');
  }
}
$('#rectangle-btn').click(function() {
  let rectWidth = $('#width-px').val();
  let rectHeight = $('#rect-height-px').val();
  new Rectangle(rectWidth, rectHeight);

});

class Square extends Shape {
  constructor(sideLength) {
    super(sideLength, sideLength);
    this.div.attr('id', 'square');
    this.div.css('backgrounColor', 'red');
  }
}
$('#square-btn').click(function() {
  let sidePx = $('#side-px').val();
  new Square(sidePx, sidePx);
})
