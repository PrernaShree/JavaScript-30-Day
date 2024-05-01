let dayInput = prompt("What is the day today : ","day goes here")
let day = dayInput.toLowerCase()

switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(day,'is a working day.')
        break
    case 'saturday':
    case 'sunday':
        console.log(day,'is a weekend.')
        break
    default:
        console.log('It is not a day of a week.')
}