let employees = [
  {
    name: 'Bob' ,
    department: 'sales',
    title: 'sales manager'
  },
  {
    name: 'Tina',
    department: 'finance',
    title: 'director of finance'
  },
  {
    name: 'Randy',
    department: 'IT',
    title: 'hardware guy'
  },
  {
    name: 'Glenda',
    department: 'C-suite',
    title: 'CEO'
  }
];


for (i = 0; i <employees.length; i++){
  console.log(`${employees[i].name}'s job title is ${employees[i].title}`);
}