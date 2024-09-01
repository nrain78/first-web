// -----------------trim and slice meth0d-----------
let msg = " iamnoorulain ";
newMsg = (msg.trim().slice(0, 7));
console.log(newMsg);
// ----------replace and repeat method-------
let brand = "iamproduct" ;
console.log(brand.replace("product", "maria.b"));
brand.repeat(2);
// --------prac que -----------
let msgs = " help!";
console.log(msgs.trim().toUpperCase());
//qno 2
let str = "apnacollege";
console.log(str.slice(4));
console.log(str.indexOf('apna'));
console.log(str.replace("apna", "sirsyed"));
console.log(str.replace("l", "t"));

//------arrays ------------
let nums = [2, 4, 8, 9, 8];
console.log(nums);
console.log(nums.indexOf(4));
console.log(nums[3]);
console.log(nums.length);
console.log(nums[0]);
//--------arraysmutable-----
// let names = ["noor", "basit"];
// console.log(names);
// console.log(names[0] = "noorinbasit");
//-----------arrays methods------
//              array-- push---slice--
let cars = ["brv", "hrv", "crv"];
cars.push("toyota");
console.log(cars.slice(2, 3));
console.log(cars.indexOf("toyota"));
// ----------arrays splice------
let toyota = ["revo", "corolla", "markX", "supra"];
console.log(toyota.splice(0, 1));
//--------------prac que of part 3----
let months = ["january", "july", "march", "august"];
console.log(months.splice(0, 1));
//----- nested array ---//
let marks = [ ['X', 'null', 'O'],
 ['null','X', "null"],
  ['O', 'null', 'O']];
console.log(marks);
//// ass qno 1
let arr = [7, 9, 0,-2];
 let n = 3;
 let ans = arr.slice(0, 3);
 console.log(ans);
 // ass qno 2
 let array = [7, 9, 0, -2];
 let r = 4;
 let anss = array.slice(1, r);
 console.log(anss);
 // ass qno 3----
 let wheter = prompt("enter a string");
 if (wheter.length == 0) {
  console.log("string is empty");
 } else{
  console.log("string is not empty")
 }
 // 4
 let strr = "ApNaCoLlEgE";
 let idx = 3;
 if(strr[idx] == strr[idx].toUpperCase()) {
 console.log("character is lowercase");
 } else {
 console.log("character is not lowercase");
 }

 /// ------ 5-       -- 
 let name = " apnacollege ";
 console.log(`original string = ${name}`);
 console.log(`string without spaces = ${name.trim()}`);
 //  qno 6----
 let arrs = ["hello", 'a', 23, 64, 99,-6];
 let item = 64;
 if(arrs.indexOf(item) !=-1) {
console.log("element exists in array");
 } else {
 console.log("element doesn't exist in array");
 }
 