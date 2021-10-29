const outerFun=(a)=>{
    let b=19;
    const innerFun=()=>{
        let sum=a+b;
        console.log( `The sum of two no. is ${sum}.`);
    }
    // innerFun();
    return innerFun;
}
let inner=outerFun(10);

console.dir(inner);
inner();