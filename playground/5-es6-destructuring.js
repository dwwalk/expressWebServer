const name = 'Dan'
const userAge = 62
const user = {
    name,
    age: userAge,
    location: 'Philadelphia' 
}

console.log(user)
// object destructuring
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2

}

console.log(product)

defValues = {label: 'oceans',
             stock: 11
            }

const transaction =(type,{label ='NoName', stock = 0 } = defValues ) => {
    console.log(type, label,stock)
}

transaction('order', product)
