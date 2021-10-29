// old method
// const funA=()=>{

//     setTimeout(function(){
//         console.log(`welcome FunA`);
//         funB()
//     },3000 );  
// }

// const funB=()=>{
//     console.log(`welcome FunB`)
// }
// funA();


const perOne=(friend,callFriend)=>{
     console.log(`I am busy right now. I am talking to ${friend}.I will call you back.`);
     callFriend();
}

const perTwo=()=>{
    console.log(`Hey What's up. I call u back`);
}

perOne("thapa",perTwo);