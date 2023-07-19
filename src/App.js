let array1 = [1, 2, 3];
let prod = [];

const findProduct = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let remaingArr = arr.filter((a) => {
      return a !== arr[i];
    });
    let product = remaingArr.reduce((a, b) => {
      prod.push(a * b);
    });
  }
  return prod;
};
console.log(findProduct(array1));
