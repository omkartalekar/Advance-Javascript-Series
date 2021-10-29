const interviewQuestions=(name)=>{
    return function(topic){
        if(name==="vinod"){
            console.log(`Hi , ${name}. plz explain what is ${topic}.`);
        }
        else if(name==="thapa"){
            console.log(`Hi , ${name}. plz explain what is ${topic}.`);
        }
        else if(name==="thapatechnical"){
            console.log(`Hi , ${name}. plz explain what is ${topic}.`);
        }
        else{
            console.log("Welcome TT company");
        }
    }
}

const candidates1=interviewQuestions("vinod");
candidates1("UI");

const candidates2=interviewQuestions("thapa");
candidates2("UX");

// int 2 lines code
interviewQuestions("vinod")("UI");
interviewQuestions("thapa")("UX");