//  <!-- Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument. -->
class Shape {

  circleArea(radius) {
    const area = 3.14 * radius * radius;
    console.log(`Area of Circle with radius ${radius} is: ${area}`);
    return area;
  }

  rectangleArea(width, height) {
    const area = width * height;
    console.log(`Area of Rectangle with width ${width} and height ${height} is: ${area}`);
    return area;
  }
}

const shape = new Shape();
shape.circleArea(5);
shape.rectangleArea(4, 6);




