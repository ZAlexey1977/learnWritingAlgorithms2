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

///////////////////////////////////// unit 4 ///////////////////////////////

// let myArray = [
//   { first: "Romeo", last: "Montague" },
//   { first: "Mercutio", last: null },
//   { first: "Tybalt", last: "Capulet" }
// ];

// function whatIsInAName(collection, source) {

//   let result = [];
//   for (let i = 0; i < collection.length; i++) {
//     let obj = collection[i];
//     log(obj);
//     for (let key in obj) {
//       log(key);
//     }
//   }
// }

// whatIsInAName(myArray, { last: "Capulet" });

///////////////////////////////////// unit 5 ///////////////////////////////

// function spinalCase(str) {

//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }

// log(spinalCase('This Is_Spinal Tap'));

///////////////////////////////////// unit 6 ///////////////////////////////

// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

// log(translatePigLatin("eight"));

///////////////////////////////////// unit 7 ///////////////////////////////

// function myReplace(str, before, after) {

//   let result = '';
//   let string = 'www';

//   if ((/[A-Z]/.test(before[0]) && /[A-Z]/.test(after[0])) || (/[a-z]/.test(before[0]) && /[a-z]/.test(after[0]))) {
//     string = after;
//     result = str.replace(before, string);
//   } else if (/[A-Z]/.test(before[0]) && /[a-z]/.test(after[0])) {
//     let out = after.split('');
//     out[0] = out[0].toUpperCase();
//     string = out.join('');
//     return str.replace(before, string);
//     log(result);
//   } else {
//     let out = after.split('');
//     out[0] = out[0].toLowerCase()
//     string = out.join('');
//     result = str.replace(before, string);
//   }
//   return result;
// }

// log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));

///////////////////////////////////// unit 8 ///////////////////////////////

// function pairElement(str) {
//   let temp = str.split('');
//   let result = [];
//   for (let i = 0; i < temp.length; i++) {
//     let ar = [];
//     if (temp[i] == 'A') {
//       ar.push(temp[i], 'T');
//       result.push(ar);
//     } else if (temp[i] == 'T') {
//       ar.push(temp[i], 'A');
//       result.push(ar);
//     } else if (temp[i] == 'G') {
//       ar.push(temp[i], 'C');
//       result.push(ar);
//     } else if (temp[i] == 'C') {
//       ar.push(temp[i], 'G');
//       result.push(ar);
//     }
//   }
//   return result;
// }

// log(pairElement("ATCGA"));

///////////////////////////////////// unit 9 ///////////////////////////////

// function fearNotLetter(str) {
//   let count = str.charCodeAt(0);
//   let out = undefined;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) === count) {
//       count++;
//     } else {
//       out = String.fromCharCode(count);
//     }
//   }
//   return out;
// }

// log(fearNotLetter("abcdefghjklmno"));

///////////////////////////////////// unit 10 ///////////////////////////////

///////////////////////////////////// unit 11 ///////////////////////////////
