const person={
    name:'rumpa',
    age:23,
    city:'sylhet',
    greet: function(){
     return `hello ${this.name}`
    }
}

person.name ='sathi'
console.log(person.greet())