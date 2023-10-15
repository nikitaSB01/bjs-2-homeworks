function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
/* let student1 = new Student("ivan", "мужской", "20");
let student2 = new Student("lena", "женский", "25");
let student3 = new Student("ivan", "мужской", "10"); */

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if ("marks" in this === false || this.marks.length <= 0) {
     return 0;
  } else {
    return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
