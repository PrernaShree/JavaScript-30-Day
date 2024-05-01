let yourAge = prompt("Enter your age : " , "Number here") 
let myAge = 19
if (myAge > yourAge) {
    console.log("I am ", (myAge - yourAge), "years older than you.");
}
else if(myAge<yourAge)
{
    console.log("You are ", (yourAge - myAge), " years older than me.")
}
else
{
    console.log("We are of same age.")
}
