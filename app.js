function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach((item) => {
      sum += item;
    });
    return sum;
  }