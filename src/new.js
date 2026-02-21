// Array.prototype.myMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// const arr = [1, 2, 3];
// const newArr = arr.myMap((ele,i) => ele * 2);

// console.log(newArr);

for (var i = 0; i < 3; i++) {
  setTimeout((i) => {
    console.log(i);
  }, 1000,i);
  
}
