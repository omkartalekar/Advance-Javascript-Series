// we can bind an object to a common function , so that the function gives different result when its need

// const youtuber={
//     name:"ThapaTechnical",
//     content:"Programming",
//     feature:function(){
//         console.log(`My fav youtuber name is ${this.name}. And he made videos on ${this.content} topics.`)
//     }
// }

// youtuber.feature();

// wrong way
// let youtuberFun=youtuber.feature;
// youtuberFun();

// let youtuberFun2=youtuber.feature.bind(youtuber);
// youtuberFun2();

const youtuber={
    name:"ThapaTechnical",
    content:"Programming",
}

const youtuber1={
    name:"ThapaTechnical1",
    content:"Programming1",
}

const youtuber2={
    name:"ThapaTechnical2",
    content:"Programming2",
}

function features(rating){
    console.log(`My fav youtuber name is ${this.name}. And he made videos on ${this.content} topics. ${rating}`);
}

let you1=features.bind(youtuber1);
you1(5);
