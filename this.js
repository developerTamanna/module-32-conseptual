// function person(name){
//    this.name = name
// }

// const p1 =new person('tamanna')
// console.log(p1.name)

const person ={
    name:'sathi',

    greet:function(){
        const innerFN=()=>{
            console.log(`hello, ${this.name}`)
        }
     innerFN()
    }
}
person.greet()