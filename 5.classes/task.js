class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(num) {
    if (num < 0) {
      this._state = 0;
    }
    if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(type, name, releaseDate, pagesCount) {
    super(type, name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, type, releaseDate, pagesCount) {
    super(type, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, type, releaseDate, pagesCount) {
    super(author, type, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, type, releaseDate, pagesCount) {
    super(author, type, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, type, releaseDate, pagesCount) {
    super(author, type, releaseDate, pagesCount);
    this.type = "detective";
  }
}

/* _____________________ЗАДАЧА-2______________________________ */

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findBook = this.books.find((book) => book[type] === value);
    if (typeof findBook === "object") {
      return findBook;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let giveBoook = this.books.find((book) => book.name === bookName);
    if (typeof giveBoook === "object") {
      let indexBook = this.books.indexOf(giveBoook);
      this.books.splice(indexBook, 1);
      return giveBoook;
    } else {
      return null;
    }
  }
}

/* _____________________ЗАДАЧА-3______________________________ */

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  /*   addMark(mark, subject) {
    if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
    this.marks[subject] = [];
    this.marks[subject].push(mark);
  } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
    this.marks[subject].push(mark);
  }
} */
  addMark(mark, subjectname) {
    if (
      this.marks.hasOwnProperty(subjectname) === false &&
      mark >= 2 &&
      mark <= 5
    ) {
      this.marks[subjectname] = [];
      this.marks[subjectname].push(mark);
    } else if (mark >= 2 && mark <= 5) {
      this.marks[subjectname].push(mark);
    }
  }

  getAverageBySubject(subjectname) {
    if (this.marks.hasOwnProperty(subjectname) !== true) {
      return 0;
    } else {
      return (
        this.marks[subjectname].reduce((acc, item) => acc + item, 0) /
        this.marks[subjectname].length
      );
    }
  }

  getAverage() {
    if (Object.keys(this.marks).length === 0) {
      return 0;
    }
    return (
      Object.keys(this.marks).reduce(
        (acc, item) => acc + this.getAverageBySubject(item),
        0
      ) / Object.keys(this.marks).length
    );
  }
}
