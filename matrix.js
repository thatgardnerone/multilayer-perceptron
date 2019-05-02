function Matrix(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.matrix = [];

  for (var i = 0; i < this.rows; i++) {
    this.matrix[i] = [];
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] = 0;
    }
  }
}

Matrix.prototype.randomize = function () {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] = Math.floor(Math.random() * 10);
    }
  }
}

Matrix.prototype.add = function (n) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      if (n instanceof Matrix) {
        this.matrix[i][j] += n.matrix[i][j];
      } else {
        this.matrix[i][j] += n;
      }
    }
  }
}

Matrix.prototype.multiply = function (n) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] *= n;
    }
  }
}