let score = 98
if ( score >= 90 && score <= 100)
{
    console.log('Your score is',score,'and grade is A')
}
else if(score >= 70 && score <=89)
{
    console.log('Your score is',score,'and grade is B')
}
else if(score >= 60 && score <= 69)
{
    console.log('Your score is',score,'and grade is C')
}
else if(score >= 50 && score <= 59)
{
    console.log('Your score is',score,'and grade is D')
}
else if(score >= 0 && score <= 49)
{
    console.log('Your score is',score,'and grade is F')
}
else
{
    console.log('You have entered invalid score.')
}