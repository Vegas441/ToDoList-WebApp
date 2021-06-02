/**
 * Test script 
 * @file test.js
 * @author David Svaty 
 */

// Person class
class personClass{
    constructor(name,age,admin){
        this.userName = name;
        this.userAge = age;
        this.isAdmin = admin;
    }
}

// Function for printing elements of array 
function printPeople (pArray) {
    // For cycle
    for (let i=0; i < pArray.length; i++) {
        // Two types of property access
        console.log('User name:\t' + pArray[i].userName);
        console.log('User age:\t' + pArray[i].userAge);

        if (pArray[i].isAdmin) {
            console.log('User is admin');
        }else{
            console.log('User is not admin');
        }
        console.log('\n');
    }
    return
} 

// Objects 
let person1 = new personClass('David Svaty',21,true);

let person2 = new personClass('Naruto Uzumaki',33,false);

let person3 = {
    userName: 'Sasuke Uchiha',
    userAge: 33,
    isAdmin: false
};

// Array 
let pArray = [person1,person2,person3];

// Function call
printPeople(pArray);