// const numbers =[2,3,5,6,4,98,2];
// const total = numbers.reduce((acce, current)=>{
//    return acce + current; 
// },0);
// console.log(total)


//? next: reduce 

//* reduce er kaj 

// const numbers =[4,5,6,23,4,5,6,2];
// const total = numbers.reduce((acc, number)=>{
//      return acc + number;
// },0)
// console.log(total)



//*next:
//?reduce array

const array = [[2, 3], [3, 4], [6, 7]];
const singleArray = array.reduce((acc, current)=>{
 return acc.concat(current)    //acc Initial value =[],current value = [2, 3]...
},[]);
console.log(singleArray)


