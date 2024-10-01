const user = {id:111, name:'Rasel', job:'developer'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

const shop = {
    owner : 'alia',
    address: {
        street: 'kochukhet',
        city : 'ranbir',
        country:'BD'
    },
    product:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 45000,
    isOpen: true,
    isNew : false,
}
console.log(shop);
const shopJSN = JSON.stringify(shop);//JSN.stringify will make the object to string
console.log(shopJSN)
const shopObj = JSON.parse(shopJSN);//it will return string to object
console.log(shopObj)