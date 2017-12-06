// let btn = document.getElementById('btn');
// let employees = [
//   { name: 'Bob' , department: 'sales', title: 'sales manager'},
//   { name: 'Tina', department: 'finance',title: 'director of finance'},
//   { name: 'Randy', department: 'IT', title: 'hardware guy'},
//   { name: 'Glenda', department: 'C-suite', title: 'CEO'},
//   { name: 'Banana', department: ' fruit studies', title: 'peeler'}
// ];

// // // for (i = 0; i <employees.length; i++){
// //   console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
// // }

// // document.getElementById('btn').addEventListener('click', e => {
// //   console.log('you clicked the button', e.target);
// // });
// // document.getElementById('btn').addEventListener('click', e => "hello");

// // let name = 'name';
// // let job = () => 'Names job';
// // let number = 2;

// // let col = {
// //   name, 
// // //   job, 
// // //   number
// // // };


// let obj = {
//   prop1: 'one',
//   prop2: 2,
//   propMethod: function propToString(){
//     prop1.toString
//   }
// }

// let obj2 = Object.create(obj);
// obj2.tProp1 = 1;
// obj2.tProp2 = 'two';


//   console.log(obj2.hasOwnProperty('prop1'), 'prop1');
//   //false
//   console.log(obj2.hasOwnProperty('propMethod'), 'propMethod');
//   //false
//     console.log(obj2.hasOwnProperty('tProp1'), 'tProp1');
//   //true
//   console.log(obj.hasOwnProperty('tProp1'), 'tProp1');
//   //false
//   obj2.__proto__.hasOwnProperty('prop1')
//   //true
  
  
let strArr = [45, 'I', true, null, 'am', 3.56, 'a', undefined,{ catchphrase: 'Oh hai, Mark'}, 'JS', 'rockstar']  




  let result = strArr.filter(function(string){

   return typeof(string) === 'string';

  });
  
  console.log(result);