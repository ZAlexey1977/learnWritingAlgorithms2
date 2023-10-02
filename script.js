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

function myReplace(str, before, after) {
  let string = 'www';
  let result = '';
  //log(after)
  // log(/[A-Z]/.test(before[0]));
  // if ((/[A-Z]/.test(before[0]) && /[A-Z]/.test(after[0])) || (/[a-z]/.test(before[0]) && /[a-z]/.test(after[0]))) {
  //   string = after;
  //   //result = str.replace(before, after);
  // }
  if (/[A-Z]/.test(before[0]) && /[a-z]/.test(after[0])) {
    log(before)
    let out = after.split('');
    log(out)
    out[0] = out[0].toUpperCase();
    string = out.join('');
    log(string)
    return str.replace(before, string);
    log(result);

  } else {
    log(after)
    let out = after.split('');
    log(out)
    out[0] = out[0].toLowerCase()
    string = out.join('');
    log(out)
    // result = str.replace(before, out);
  }

  return str.replace(before, string);
}

log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));

///////////////////////////////////// unit 8 ///////////////////////////////

///////////////////////////////////// unit 9 ///////////////////////////////

///////////////////////////////////// unit 10 ///////////////////////////////

///////////////////////////////////// unit 11 ///////////////////////////////