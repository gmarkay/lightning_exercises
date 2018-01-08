// // // // // let btn = document.getElementById('btn');
// // // // // let employees = [
// // // // //   { name: 'Bob' , department: 'sales', title: 'sales manager'},
// // // // //   { name: 'Tina', department: 'finance',title: 'director of finance'},
// // // // //   { name: 'Randy', department: 'IT', title: 'hardware guy'},
// // // // //   { name: 'Glenda', department: 'C-suite', title: 'CEO'},
// // // // //   { name: 'Banana', department: ' fruit studies', title: 'peeler'}
// // // // // ];

// // // // // // // for (i = 0; i <employees.length; i++){
// // // // // //   console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
// // // // // // }

// // // // // // document.getElementById('btn').addEventListener('click', e => {
// // // // // //   console.log('you clicked the button', e.target);
// // // // // // });
// // // // // // document.getElementById('btn').addEventListener('click', e => "hello");

// // // // // // let name = 'name';
// // // // // // let job = () => 'Names job';
// // // // // // let number = 2;

// // // // // // let col = {
// // // // // //   name, 
// // // // // // //   job, 
// // // // // // //   number
// // // // // // // };


// // // // // let obj = {
// // // // //   prop1: 'one',
// // // // //   prop2: 2,
// // // // //   propMethod: function propToString(){
// // // // //     prop1.toString
// // // // //   }
// // // // // }

// // // // // let obj2 = Object.create(obj);
// // // // // obj2.tProp1 = 1;
// // // // // obj2.tProp2 = 'two';


// // // // //   console.log(obj2.hasOwnProperty('prop1'), 'prop1');
// // // // //   //false
// // // // //   console.log(obj2.hasOwnProperty('propMethod'), 'propMethod');
// // // // //   //false
// // // // //     console.log(obj2.hasOwnProperty('tProp1'), 'tProp1');
// // // // //   //true
// // // // //   console.log(obj.hasOwnProperty('tProp1'), 'tProp1');
// // // // //   //false
// // // // //   obj2.__proto__.hasOwnProperty('prop1')
// // // // //   //true


// // // // let strArr = [45, 'I', true, null, 'am', 3.56, 'a', undefined,{ catchphrase: 'Oh hai, Mark'}, 'JS', 'rockstar']  

// // // //   let result = strArr.filter(function(string){  
// // // //    return typeof(string) === 'string';
// // // //   });

// // // //   console.log(result);


// // // // // let strArr = [45, 'I', true, null, 'am', 3.56, 'a', undefined,{ catchphrase: 'Oh hai, Mark'}, 'JS', 'rockstar'].filter((string)=> {
// // // // //   return typeof(string) === 'string';
// // // // // });
// // // // // console.log(strArr);



// // // //   // newArr = result;
// // // //   // document.getElementById('book-price').innerHTML = newArr;

// // // let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
// // // let faveages = [];


// // // // for (i = 0; i < ages.length; i++) {
// // // //   if (ages[i] > 17 && ages[i] < 50) faveages.push(ages[i])}
// // // // console.log(faveages, 'for');



// // // // faveages = [];

// // // // ages.forEach((age) => {
// // // //   if (age > 17 && age < 50) faveages.push(age);
// // // // });
// // // // console.log(faveages, 'foreach');



// // // faveages = ages.filter(age => age > 17 && age < 50);

// // // console.log(faveages, 'filter');

// // // let hitchhikers_guide = {
// // //   characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
// // //   catchphrase: "Don't Panic",
// // //   random_facts: {
// // //     copies_sold: 14000000,
// // //     formats: ["radio", "TV", "film", "graphic novel"],
// // //     ultimate_answer: {
// // //       meaning_of_life: 42
// // //     }
// // //   }
// // // };

// // // document.write(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// // // let meaning = 'meaning_of_life';


// // let quote = ['the', 'greatest', 'teacher','failure', 'is'];


// // //MY WAY
// // // let quoteString = quote.join(' ');
// // //  quoteString = quoteString.charAt(0).toUpperCase() + quoteString.slice(1);
// // //  quoteString = quoteString.slice(0, 20) + "," + quoteString.slice(20);

// // // console.log(quoteString);


// // //Joes WAY

// // quote = quote.map((word)=>{
// //   if(word === "the")
// //   word = word.slice(0,1).toUpperCase() + word.slice(1);
// //   if(word === "teacher")
// //   word = word + ',';
// //   return word;
// // }).join(" ")

// // console.log(quote);

// let nums = [1, 2, 3, 4, "5", 6, "7"];
// let newNums = [];


// nums = nums.map((num) => { 
//   return parseInt(num); 
// }).reduce((a, b) => {
//   newNums.push(a + b)
//   return b
// })

// console.log(newNums);

//       //  expected result: [3, 5, 7, 9, 11, 13]

// lightning exercise:
// Loop through this object and add each member object's key as an ID. Log the results.
let customers = {
  active: {
    a87b6345: {
      name: "Gary Harrison",
      age: 23,
      member_level: "gold"
    },
    b345hy66: {
      name: "Harry Garrison",
      age: 34,
      member_level: "silver"
    },
    nh56yht8: {
      name: "Mary Terryson",
      age: 78,
      member_level: "platinum"
    },
    j677yd456: {
      name: "Barry Sonnyman",
      age: 44,
      member_level: "gold"
    }
  },
  inactive: {
    ur56tfgt: {
      name: "Barb Justice",
      age: 56,
      member_level: "none"
    },
    d56gt6: {
      name: "Jane L'eggo",
      age: 11,
      member_level: "none"
    }
  }
}
let actKeys =  Object.keys(customers.active);

let inActKeys =  Object.keys(customers.inactive);


let custAct = customers.active;
let inActCust = customers.inactive;

actKeys.forEach((key) => {
  console.log(key);
  // console.log(custAct[key]);
  custAct[key].id = key;
  console.log(custAct[key]);


});
inActKeys.forEach((key) => {
  console.log(key);
  inActCust[key].id = key;
  console.log(inActCust[key]);

});


