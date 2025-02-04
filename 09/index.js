console.log("High Order Functions")
const radius = [1,2,3,4,5]

const area = function (radius){
    return Math.PI * radius * radius;
};
const circumtance = function (radius){
    return 2 * Math.PI * radius;
};
const diameter = function (radius){
    return 2 * radius;
};

const Calculate = function(radius, logic){
    let result = []
    for(let i = 0; i< radius.length; i++){
        result.push(logic(radius[i]));
    }
    return result
}
console.log(Calculate(radius,area))
console.log(Calculate(radius, circumtance))
console.log(Calculate(radius, diameter))