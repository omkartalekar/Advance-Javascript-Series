let likes=200;
const youtube={
    name:"thapa technical",
    subscribers:98000
}
const thapa=(a,b)=>{
    a=300;
    console.log(a);
    b.subscribers=100000;
}
thapa(likes,youtube);

console.log(likes);
console.log(youtube.subscribers);