/*
    Author: your name here
    Name: createCar.js
    Purpose: Produces a new car object
*/
const createCar = function(make,model) {
    //this function will return the make literal and whatever you place in the marke argument (such as "toyota", "camery") will return "make":toyota and "model":cammery
    return {
//this is the shorthand for writing "make" : make (the key:vlaue pair) or "model":model
    make,
    model,
    toString () {
        return `a ${this.make} ${this.model}`
    },
    drive (destination) {
        return `You drive ${this} to ${destination}`
    }
}
}

export default createCar;