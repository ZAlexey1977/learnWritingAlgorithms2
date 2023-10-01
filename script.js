let log = console.log;
///////////////////////////////////// unit 1 ///////////////////////////////

// function sumAll(arr) {
//   arr.sort((a, b) => a - b);
//   let count = 0;
//   for (let i = arr[0]; i <= arr[1]; i++) {
//     count += i;
//   }

//   return count;
// }

// log(sumAll([1, 4]));

///////////////////////////////////// unit 2 ///////////////////////////////

// function diffArray(arr1, arr2) {
//   let newArr = [];
//   if (arr1.length == 0 || arr2.length == 0) {
//     if (arr1.length > 0) { newArr = arr1 }
//     else { newArr = arr2 }
//   }
//   else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (!arr2.includes(arr1[i])) {
//         newArr.push(arr1[i]);
//       }
//       for (let i = 0; i < arr2.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//           newArr.push(arr2[i]);
//         }
//       }
//     }
//   }

//   [...newArr] = new Set(newArr);
//   return newArr;
// }
// log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

///////////////////////////////////// unit 3 ///////////////////////////////

// function destroyer(arr) {
//   let temp = arguments[0];
//   let result = [];
//   let out = [];
//   for (let i = 1; i < arguments.length; i++) {
//     out.push(arguments[i]);
//   }

//   for (let i = 0; i < temp.length; i++) {
//     if (!out.includes(temp[i])) {
//       result.push(temp[i]);
//     }
//   }
//   return result;
// }

// log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

///////////////////////////////////// unit 1 ///////////////////////////////

///////////////////////////////////// unit 1 ///////////////////////////////

///////////////////////////////////// unit 1 ///////////////////////////////

///////////////////////////////////// unit 1 ///////////////////////////////

///////////////////////////////////// unit 1 ///////////////////////////////

///////////////////////////////////// unit 1 ///////////////////////////////

///////////////////////////////////// unit 1 ///////////////////////////////

///////////////////////////////////// unit 1 ///////////////////////////////