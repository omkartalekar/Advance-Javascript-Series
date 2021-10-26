// console.log(this);

// function sum(){
//     let add=2+2;
//     console.log("Sum of this two number is "+add);
//     console.log(this);
// }
// sum();

const om={
    name:"omkar talekar",
    qualification:"mca",

    sum:function(){
        console.log(this.name);
        let add=2+2;
            console.log("Sum of this two number is "+add);
            console.log(this);

            function child(){
                let name="thapa";
                console.log("child method name : "  +name);console.log(this);
            }
          child();
    }
}

om.sum();


