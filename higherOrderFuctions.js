const interviewQuestions=(name)=>{
    if(name==="omkar"){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic}?. Please explain us.`);
        }
    }
    if(name==="talekar"){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic}?. Please explain us.`);
        }
    }
    if(name==="omkartalekar"){
        return function(topic){
            console.log(`Hii ${name}. What is ${topic}?. Please explain us.`);
        }
    }
    else{
        return function(){
            console.log("Welcome to interview");
        }
    }
}

interviewQuestions("omkar")("UI");
interviewQuestions("talekar")("Full Stack");
interviewQuestions("omkartalekar")("Frontend");

const candidate1=interviewQuestions("omkar");
candidate1("UI");
candidate1("UX1");
