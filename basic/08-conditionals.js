// if, else if, else

let age = 37;
if (age == 37) {
    console.log(`You are ${age} years old.`);
} else if (age < 18) {
    console.log(`You are younger than 18 years old.`);
}
else {
    console.log(`You are not 37 years old and You're not younger than 18 years old.`);
}

// operador ternário
const message = age == 37 ? `You are ${age} years old.` : `You are not 37 years old.` 
console.log(message);

// switch case
let day = 5

switch (day) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    default:
        console.log('Invalid day');
}