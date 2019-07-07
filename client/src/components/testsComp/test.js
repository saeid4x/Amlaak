
// person constructor
function Person(name){
    //this= refer to current object
    this.name=name;
}

const brad =new Person('brad');

console.log(brad);   //  Person {name: 'brad'}
console.log(brad.name);  // 'brad'

//****************************************************************************** */
console.log('---------------------------------------------');
//============  class in ES =================//
class Person2{
    constructor(name,family){
        this.firstname=name;
        this.lastname=family;
    }
}
const saeid=new Person2('saeid','imani');
console.log(saeid);  //Person2 { firstname: 'saeid', lastname: 'imani' }
console.log(saeid.firstname);  // 'saeid'
//********************************************************** */
console.log('---------------------------------------------');
//============   sub class (extends class) =================//

//  ../temp/5.png

//************************************************ */


//============  async/await =====================

// 1
async function myFunc(){
    return 'Hello';
}
myFunc()
    .then((res)=> console.log(res));


// 2
async function getUsers(){
    const response =await fetch('url');
    const data= await response.json();
    return data
}

getUsers()
    .then(users =>console.log(users))

    //**************************************************************** */
    