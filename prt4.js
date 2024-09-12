//prt odd number 
// for  (let i = 1; i<=15; i = i+2) {
// console.log(i);
// }
// let print =`print table of = ${4}`;
// console.log(print);
// //
// for (let j = 4; j<=40; j = j+4) {
//     console.log(j);
// }
// let even = `print of even number = ${2-10}`
// console.log(even)
// for (let z = 0; z<=10; z = z+2) {
//     console.log(z);
// }
// ------------prac que ---
// let table = "print the table";
// console.log(table);
// let n = prompt("write your number");
// n = parseInt(n)
// for (let i=n; i<=n*10; i=i+n) {
// console.log(i); 
// }
//------------while loops-----//
// console.log("hello this is while loops ")
// let  i=1 ;  
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// -----prac quie -- favourite movie -- with while loop--
// let favMovie = "avatar";
// let guess = prompt("guess my favmovie");
// while (guess != favMovie) {
//     if (guess == "quit") {
//         break;
//     }
//     guess = prompt("wrong guess! please try again");
// }
// if ( guess == favMovie) {
//     console.log("congrats! your guess movie is correct");
// } else {
//     console.log("quit")
// }

//------------------loops with arrays--------------
// let fruits = [ "mango", "apple", "banna", "orange", "litchi"];
// for (let i =0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
// for (let i=fruits.length-1; i>=0; i--) {
//     console.log(i, fruits[i]);
// }
//---------nested array-------------
// let students = [["noor", 80], ["basit", 70], ["huz", 40], ["irshad", 30]];

// for (let i=0; i<students.length; i++) {
//     console.log(`student of info #${i+1}`);
//     for(let j = 0; j<students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }
// ------------------for of loops-------
// let cars = ["brv", "crv", "hrv", "honda", "civic"];
// for (j of cars ) {
//     console.log(j);
// }
//--------------nested for of loops-------------
// let heroes = [["ironman", "spiderman", "marvel"], ["thor", "superman", "hero"]];
// for (cartoon of heroes) {
//     for (names of cartoon) {
//         console.log(names);
//     }
// }
// ----- todo app list----
// let todo = []
// let req = prompt("enter a request");
// while (true) {
//     if (req == "quit") {
//         console.log(quitting);
//         break;
//     }
//     if(req == "list");{
//         console.log("------------");
//         for (task of todo) {
//             console.log(task);
//         }
//         console.log("------------");
//     } else if (req == "add") {
//       let task = prompt("enter a task u want to add");
//       todo.push(task);
//       console.log("task added");
//     }
   
      
// }


