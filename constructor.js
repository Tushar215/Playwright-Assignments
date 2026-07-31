class Sample
{
    constructor(param1,param2,param3)
    {
       this.property1=param1;
       this.property2=param2;
       this.property3=param3;
    }
demo()
{
    console.log(this.property1);
    console.log(this.property2);
    console.log(this.property3);
}
}

let a= new Sample("Tushar","Gaikwad","Ahilyanagar");
a.demo();
