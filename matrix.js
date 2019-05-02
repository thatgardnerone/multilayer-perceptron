class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.matrix = [];
    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }
  randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }
  add(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (n instanceof Matrix) {
          this.matrix[i][j] += n.matrix[i][j];
        } else {
          this.matrix[i][j] += n;
        }
      }
    }
  }
  multiply(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (n instanceof Matrix) {
          this.matrix[i][j] *= n.matrix[i][j];
        } else {
          this.matrix[i][j] *= n;
        }
      }
    }
  }
}
