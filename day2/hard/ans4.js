const problem = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let earning = 5000;
let bonus = 10000;
let courses = 15000;
let totalSalary = (earning*12) + bonus + (courses * 12);
console.log(totalSalary);