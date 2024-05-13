const webTechs =[
    'HTML',
    'CSS',
    'JavaScript',
    'Node',
    'React',
    'MongoDB',
    'PHP',
    'Angular'
]

for(let i = 0; i < webTechs.length; i++){
    if(webTechs[i] === 'Sass'){
        console.log('Sass is a CSS preprocess');
        break;
    }
    if(i === webTechs.length - 1){
        webTechs.push('Sass');
    }
}