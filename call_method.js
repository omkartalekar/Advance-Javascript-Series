const youtuber1={
    name:"ThapaTechnical",
    content:"Programming",
    feature:function(rating,support){
        console.log(`very friendly way of teaching. ${this.name} is my favourite ${this.content} channel.I will give ${rating} star. Please ${support} ${this.name} channel`);
       
    }
}

youtuber1.feature(5,"Subscribe");

const youtuber2={
    name:"kuchbhi",
    content:"Programming"
}

youtuber1.feature.call(youtuber2,5,"Subscribe");