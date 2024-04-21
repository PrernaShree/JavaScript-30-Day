let birthYear =  prompt("Enter your birth year : ","numbers goes here")
const now = new Date()
const age = (now.getFullYear()-birthYear)
if(age >= 18){
    console.log('You are '+ age + '. You are old enough to drive.')
}
else{
    console.log('You are '+ age + '. You will be allowed to drive after ' + (18 - age) + ' years.')
}