function parseCount(count) {
  let result = Number.parseFloat(count);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}
function validateCount(count) {
  try {
    return parseCount(count);
  } catch (error) {
    return error;
  }
}

// ЗАДАНИЕ 2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || c + b < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimeter() {
    return +(this.a + this.b + this.c);
  }
  get area() {
    let p = this.perimeter / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
      3
    );
  }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
