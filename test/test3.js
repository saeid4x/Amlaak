firstname='saeid'
console.log(firstname[0])                               // 's'
console.log(firstname.indexOf('d'))                    // 4
console.log(firstname.substring(0,2))                 // 'sa' [index of 2 not included]
console.log(firstname.slice(0,2))                    // 'sa' [index of 2 not included]
console.log(firstname.slice(2))                     // 'eid'   

str='saeid,imani,28,age'
console.log(str.split(','))                        //  [ 'saeid', 'imani', '28', 'age' ]

str2='saeid imani'
console.log(str2.replace('saeid','ali'))          // 'ali imani'
console.log(str2.includes('saeid'))               // true
console.log(str2.includes('mina'))                //false