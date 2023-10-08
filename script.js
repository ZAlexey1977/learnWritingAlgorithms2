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

// function uniteUnique(arr) {
//   let temp = [...arguments];
//   let result = [];
//   for (let i = 0; i < temp.length; i++) {
//     for (let k = 0; k < temp[i].length; k++) {
//       result.push(temp[i][k]);
//     }
//   }
//   [...result] = new Set(result);
//   return result;
// }

// log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

///////////////////////////////////// unit 11 ///////////////////////////////

// function convertHTML(str) {
//   let temp = str.split('');
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] == '&') { temp[i] = '&amp;' }
//     else if (temp[i] == '<') { temp[i] = '&lt;' }
//     else if (temp[i] == '>') { temp[i] = '&gt;' }
//     else if (temp[i] == '"') { temp[i] = '&quot;' }
//     else if (temp[i] == "'") { temp[i] = '&apos;' }
//     else {
//       temp[i] = temp[i];
//     }
//   }
//   return temp.join('');
// }

// log(convertHTML('Stuff in "quotation marks"'));

///////////////////////////////////// unit 12 ///////////////////////////////

// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }

// log(sumFibs(10));

///////////////////////////////////// unit 13 ///////////////////////////////

// function sumPrimes(num) {
//   let out = [];
//   for (let i = 2; i <= num; i++) {
//     if (out.every((el) => i % el !== 0)) {
//       out.push(i);
//     }
//   }
//   let count = 0;
//   for (let i = 0; i < out.length; i++) {
//     count += out[i];
//   }
//   return count;
// }

// log(sumPrimes(10));

///////////////////////////////////// unit 14 ///////////////////////////////

// function smallestCommons(arr) {
//   let [min, max] = arr.sort((a, b) => a - b);
//   let temp = [];

//   for (let i = min; i <= max; i++) {
//     temp.push(i);
//   }
//   log(temp.length);
//   let amount = temp.reduce((el, akkum) => { return akkum *= el });

//   for (let i = max; i <= amount; i += max) {
//     let count = 0;
//     for (let k = min; k <= max; k++) {
//       if (i % k === 0) {
//         count++;
//       }
//     }
//     if (temp.length === count) {
//       return i;
//     }
//   }
// }

// log(smallestCommons([23, 18]));

///////////////////////////////////// unit 15 ///////////////////////////////

// function dropElements(arr, func) {
//   let originalLen = arr.length;

//   for (let i = 0; i < originalLen; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }

// log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));

///////////////////////////////////// unit 16 ///////////////////////////////

// function steamrollArray(arr) {
//   let result = [];

//   arr.filter((el) => {
//     if (Array.isArray(el)) {
//       result = [...result, ...steamrollArray(el)];
//     } else {
//       result.push(el);
//     }
//   })
//   return result;
// }

// log(steamrollArray([1, {}, [3, [[4]]]]));

///////////////////////////////////// unit 17 ///////////////////////////////

// function binaryAgent(str) {
//   return str.split(' ')
//     .map((el) => { return String.fromCharCode(parseInt(el, 2)) })
//     .join('');
// }

// log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

///////////////////////////////////// unit 18 ///////////////////////////////

// function truthCheck(collection, pre) {
//   return collection.every((element) => {
//     return element.hasOwnProperty(pre) && Boolean(element[pre]);
//   });
// }

log(truthCheck([{ name: "Pikachu", number: 25, caught: 3 },
{ name: "Togepi", number: 175, caught: 1 }], "number"));

///////////////////////////////////// unit 19 ///////////////////////////////

///////////////////////////////////// unit 20 ///////////////////////////////

///////////////////////////////////// unit 21 ///////////////////////////////

///////////////////////////////////// unit 22 ///////////////////////////////

///////////////////////////////////// unit 23 ///////////////////////////////
