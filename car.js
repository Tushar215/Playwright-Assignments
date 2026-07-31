class car
{
  constructor(brand,model)
  {
    this.brand=brand;
    this.model=model;
  }

  displayInfo()
  {
    console.log(this.brand);
    console.log(this.model);
  }
}

let obj=new car("TATA","NEXON");
obj.displayInfo();