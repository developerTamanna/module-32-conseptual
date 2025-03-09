const person ={
    name: 'tamu',
    age:23,
    city: 'sylhet',
    friends:{name:'fr1', age:32}
}
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element)
    }
}