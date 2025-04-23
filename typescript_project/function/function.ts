// function declaration example
function add (i1:number, i2:number):number {
    return i1 + i2;
}
// function invoking example
// console.log(add(1,2));



// Optional parameters function example 
function add2(i1:number, i2?:number): number {
    if (i2)
        return i1 + i2;
    else
        return i1;
}
// console.log(add2(1,2));



// Default parameters function example
function add3(i1:number, i2 = 3): number {
    return i1 + i2;
}
// console.log(add3(1));



// Variable Number of parameters
function add4( array_sum:number[] ) {
    return array_sum.reduce( (x1,x2) => (x1 + x2) );
}
console.log(add4([1,2,3,4,5]));