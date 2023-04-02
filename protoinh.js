baleno={
    cmpny:"suzuki",
    tires:4,
    transmiision:"amt",
    fuel:"petrol",
    milage:"14",
    price:"10"

}
glanza={
    cmpny:"toyota",
    price:12
}
glanza.__proto__=baleno
console.log(glanza.transmiision)