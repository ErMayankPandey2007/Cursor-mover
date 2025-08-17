// Email verification...............................

/*const email =prompt('Enter the email address');

const emailLen=email.length;

const dotIndex=email.lastIndexOf(".");

const atIndex=email.lastIndexOf("@");

const lastIndex = emailLen-1;

if(emailLen<11 ||
     lastIndex - dotIndex <2  || 
     lastIndex- dotIndex >3 || 
     dotIndex- atIndex <3
    ){

        console.log('Valid email');
}*/

// Switch case condition..............

/*const fruits = prompt('Enter the name of fruits');

switch(fruits){

    case 'Apple':
        console.log('Heyi its a apple');
        break;

        case 'Kiwi':
            console.log('Wow! its a kiwi');

            break;

            default:
                console.log(
                    'Oh No its Neither Apple Nor Kiwi'
                );

                break;

}

console.log('Outside Switch')*/

// Ternary operator in JS...........

/*let num=6;
num%2===0
? console.log('Even')

:console.log('Odd')

// Loops In the JavaScript '''''''.........

// 1. For Loop

/*for(let i = 1; i<50; i=i+2)
    {

 
       console.log(i) 
    }*/

    // While Loop....

//     let num = 12345;
//     while(num !== 0)
// {
// let digit = num % 10;
// num = parseInt(num / 10);
// console.log(digit);

// }

// var varNum = 10;
// let letNum = 20;
// const constNum = 30;
// function print(){
//     var varLocal = 10;
//    let letLocal = 20;
//    const constLocal = 30;
//    console.log(varLocal,letLocal,constLocal);

// }

// console.log(varNum,letNum,constNum);.

var a = 10;
let b = 20;
const c = 30;

function print(){
    var a ='ten';
    let b = 'twenty';

    console.log('******* Inside print Function*******');
    console.log(a,b,c,);
    console.log('****** *******');

    function innerPrint(){
        var a = 'inner10';
        console.log('*Inside innerPrint Function*');
        console.log(a,b,c);
    }

    innerPrint()
}

console.log(a,b,c);
print();