//------------------------------------------------------------------
/////////////// Regex x Replace Method /////////////////////////////
////////////////////////////////////////////////////////////////////
function titleCase(title, minorWords) {
// ----------------------------------------------------------------
 minorWords = (minorWords || "").toLowerCase().split(' ');
// ----------------------------------------------------------------
 title = title.toLowerCase();
// ----------------------------------------------------------------
//  /(\w)\w*/g regex matchs every single word without the spaces 
//  instead of spliting the sentences, using replace method with regex
//  directly is the greatest solution
// ----------------------------------------------------------------
  return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
    console.log(word,firstChar,index)
    if (index === 0 || minorWords.indexOf(word) === -1)
      word = word.replace(firstChar, firstChar.toUpperCase());
    return word;
  });
}
// console.log(titleCase('the quick brown fox'))
// 
//------------------------------------------------------------------
/////////////// Lists Reduce Method ////////////////////////////////
////////////////////////////////////////////////////////////////////
function list(names){
  let initialValue = " "
  
  // reduce method applies an accumulator function
  // that accumulate list values from left to right
  // and return one reduced value
  // reduce method accepts a callback and can take 
  // an initial value like in the giving example 
  // the callback has the following arguments as
  // shown in this example
  
  return names.reduce((accum, current, index, array) => {
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return accum + ' & ' + current.name;
    } 
    else {
      return accum + ', ' + current.name;
    }
  }, initialValue);
 }

//  console.log(list([{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
//------------------------------------------------------------------
/////////////// Closures & Recursion ///////////////////////////////
////////////////////////////////////////////////////////////////////
function factorialize(num) {
  let sins= 1
  for (let i=1; i <= num; i++){
    sins*=i
  }
  return sins;
}
const recursionFacto=(num)=>{
  if(num === 0){
    return 1
  }  
  // just like the for loop in the function above
  // recursion is when a function goes in a loop 
  // by calling itself multiple times with a modified
  // argument until it meets a giving condition
  return num * recursionFacto(num-1)
}

/// console.log(factorialize(5),recursionFacto(5))
///-------------------------------------------------------------
//////////// Beautiful array Filtring  /////////////////////////
////////////////////////////////////////////////////////////////

const filterDuplicates= (array)=>{  
  let result=array.filter((value, index, array)=> { 
    
    // the trick is simple in filter method the indexOf method
    // returns the first index it finds of the array[value] so
    // number [2] in this case has an indexOf 2 were index
    // already eaquals 5 
    // ----------------------------------------------  
    // ---- uncomment the following console logs-----
    // ---to clear it up if you still dont get it!---
    // ----------------------------------------------
    // console.log('this is value',value)
    // console.log('this is index',index)
    // console.log('this is arrayIndexOf',array.indexOf(value))
    
    return array.indexOf(value) != index; 
  });
  return result
}
// let arr=[4, 3, 2, 7, 8, 2, 3, 1]
// console.log(filterDuplicates(arr))

/////////// Break Camelcase ////////////////////////////////
///////////////////////////////////////////////////////////
function solution(string) {
  return string.replace(/[A-Z]/g, (letter) => " " + letter)
}
//console.log(solution('camelCasingTest'))

//////////// Scramblies ///////////////////////////////////
//////////////////////////////////////////////////////////

function scramble(str1, str2) {
  // let baseArr = str2.split('')
  // let targetArr = str1.split('')
  // let acc = 0
  // baseArr.forEach((letter) => {
  //   if (targetArr.includes(letter)) acc++
  // })
  // return !!acc
  let arr = str1.split('')
  if(str2.length === 0) return false  
  if(str1.length === 0) return false  
  
  return (str2.split("").reduce((acc, val)=>{
      if(arr.includes(val)){
      arr.splice(arr.indexOf(val), 1)
      return acc+1
    }
    return acc
  }, 0) === str2.length)
}

// console.log(scramble('scriptjavx','javascript'))

//////////// Split Strings ////////////////////////////////
//////////////////////////////////////////////////////////

function solution(str){
  //  let res = []
  //  let base = ""
  //  let arr = (str && str.split('')) || []
  //  arr.forEach((letter, index) => {
  //    base += letter
  //    if(base.length === 2) {
  //      res.push(base)
  //      base = ''
  //    }
  //    if(arr.length === index+1) {
  //      base = letter+"_"
  //      res.push(base)
  //    }
  //  })
  // return res
  return str.length ? (str + '_').match(/../g) : []  
}

//console.log(solution("abcdefg"))

//////////// Sum of Digits / Digital Root /////////////////
//////////////////////////////////////////////////////////

function digital_root(n) {
  const narr = (n > 9 && n.toString().split('').map(val => parseInt(val))) || n
  if(narr < 10) {
    return narr
  }
  return digital_root(narr.reduce((val, acc) => val + acc))
}

//console.log(digital_root(456))

//////////// Sort the odd /////////////////////////////////
//////////////////////////////////////////////////////////

function sortArray(array) {
  let odds = []
  if(!!array.length){
    array.forEach((val, index) => {
      if( val % 2 == 0 || val === 0 ) odds.push({ val, index })
    })
    let newArr = [...array].sort((a,b)=> {
      if(a < b && a % 2 == 0) return 1
      if(a % 2 == 0 && b % 2 !== 0 ) return 1
      if(a % 2 !== 0 && b % 2 == 0 ) return -1
      if(a < b && (a % 2 !== 0 && b % 2 !== 0 )) return -1
    }).filter(val => val % 2 !== 0)
    odds.forEach((obj, index) => {
      newArr.splice(obj.index, 0 , obj.val)
    })
    return newArr
  }
  return []
}

// let passed = 0

// let testCases = [[ 5, 3, 2, 8, 1, 4 ],[ 5, 3, 1, 8, 0 ],[ 5, 3, 2, 8, 1, 4, 11 ],[ 2, 22, 37, 11, 4, 1, 5, 0 ],[ 1, 111, 11, 11, 2, 1, 5, 0 ],[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],[ 0, 1, 2, 3, 4, 9, 8, 7, 6, 5 ],[ 36, 92, 24, 95, 46 ],[ 81, 83, 76, 72, 37, 84, 47, 30, 29, 63, 89 ],[ 48, 78, 32, 26, 58, 65, 66, 99 ]]

// let expectedResults = [[1, 3, 2, 8, 5, 4],[1, 3, 5, 8, 0],[1, 3, 2, 8, 5, 4, 11],[2, 22, 1, 5, 4, 11, 37, 0],[1, 1, 5, 11, 2, 11, 111, 0],[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],[0, 1, 2, 3, 4, 5, 8, 7, 6, 9],[36, 92, 24, 95, 46],[29, 37, 76, 72, 47, 84, 63, 30, 81, 83, 89],[48, 78, 32, 26, 58, 65, 66, 99]]

// function compare(arr1,arr2){  
//    if(!arr1  || !arr2) return  
//    let result;  
//    arr1.forEach((e1,i)=>arr2.forEach(e2=>{    
//          if(e1.length > 1 && e2.length){
//             result = compare(e1,e2);
//          }else if(e1 !== e2 ){
//             result = false
//          }else{
//             result = true
//       }
//     })
//   )  
//   return result  
// }

// for( let i in testCases) {
//   if ( compare(sortArray(testCases[i]),expectedResults[i]) ){
//     passed = passed + 1
//   }
//   console.log(sortArray(testCases[i]), `expected result`, expectedResults[i])
// }

// if(passed === testCases.length) console.log('all test were successful')


//////////// Roman Numerals Decoder ///////////////////////
//////////////////////////////////////////////////////////
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman){
  let arr = roman.split('') || []
  
  let newArr= arr.map((val) => {
    switch (val) {
        case "I":
        return val = 1
        break
        case "V":
        return val = 5
        break
        case "X":
        return val = 10
        break
        case "L":
        return val = 50
        break
        case "C":
        return val = 100
        break
        case "D":
        return val = 500
        break
        case "M":
        return val = 1000
        break
        
    }
  })
  
//   let trade = []
  
//   newArr.forEach((val, i)=>{
//     if( val < val[i+1]){ 
//       trade.push(val[i] - val)
//     } 
//   })
  
  // console.log({newArr, trade})
  
  
  
  return newArr.reduce((acc,val, index) => {
    console.log({acc, val, index, troll: newArr[index-1]})
    if(newArr[index-1] < val) {
      return (val - newArr[index-1])
    }
    return val
   // if( index === 1) {
   //   return newArr[index-1] >= val ? acc + val : acc - val
   // } 
   // return newArr[index-1] < val ? val - acc 
   //   : acc+val
  })  
}

console.log(solution('MCMXC'))
