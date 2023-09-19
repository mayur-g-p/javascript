const name = "mayur"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mayur')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0,3)
console.log(newString);



const anotherString = gameName.slice(-5,3)
console.log(anotherString)


const newStringOne = "   mayur  "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "www.gooogle.com/mayur%20patil"

console.log(url.replace('%20','-'))
console.log(url.includes("mayur"))


let splitEx = "mayur-patil"
console.log(splitEx.split('-'));