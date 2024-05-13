const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

for(let i=0; i<shoppingCart.length; i++){
    if(shoppingCart[i] === 'Meat'){
        break;
    }
    else if(i === shoppingCart.length-1){
        shoppingCart.unshift('Meat');
    }
}

for(let i = 0; i < shoppingCart.length; i++){
    if(shoppingCart[i] === 'Sugar'){
        break;
    }
    else if(i === shoppingCart.length-1){
        shoppingCart.push('Sugar');
    }
}

for(let i = 0; i < shoppingCart.length; i++){
    if(shoppingCart[i] === 'Honey'){
        shoppingCart.splice(i, 1);
    }
}
for(let i = 0; i < shoppingCart.length; i++){
    if(shoppingCart[i] === 'Tea'){
        shoppingCart[i] = 'Green Tea';
    }
}