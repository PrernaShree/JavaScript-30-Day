let monthInput = prompt("What is the day today : ","day goes here")
let month = monthInput.toLowerCase()

switch (month) 
{
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(monthInput,'has 31 days.')
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(monthInput,'has 30 days.')
        break;
    case 'february':
        console.log(monthInput, 'has 29 days.')
    default:
        console.log('It is not a month of a year.')
}