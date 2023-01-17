

const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]


// 1. Write a function named `averageAge` that takes an array of objects and returns the average of all the ages from each age property in each object rounded to the nearest whole number. 
    
function averageAge(array){
    return Math.round(array.reduce((acc, curr) => acc + curr.age, 0) / array.length)
}

 console.log(averageAge(alumni)) // 22


// 2. Write a function named `orderedAlumni` that takes an array of objects and sorts the objects by the age of the alumni from oldest to youngest. 
 
 function orderedAlumni(array){
     return array.sort((a,b) => b.age - a.age)
 }   
    
console.log(orderedAlumni(alumni))
// returns [
//       { name: 'Devonte', job: 'WW', language: 'JavaScript', age: 23 },
//       {
//         name: 'Shemar',
//         job: 'SquareSpace',
//         language: 'JavaScript',
//         age: 23
//       },
//       { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22 },
//       {
//         name: 'Stephanie',
//         job: 'JPMorgan',
//         language: 'JavaScript',
//         age: 21
//       },
//       { name: 'Enmanuel', job: 'Asana', language: 'JavaScript', age: 21 },
//       { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 21 }
//     ]



// 3. Write a function named `allUseJavaScript` that takes an array of objects and returns a boolean if for every object, the language property is 'JavaScript'.
    
function allUseJavaScript(array){
    return array.every(x => x.language === 'JavaScript')
}
console.log(allUseJavaScript(alumni)); // returns true


