class Rectangle
{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }

calculateArea()
{
    return this.width * this.height;
}
calculatePerimeter()
{
    return 2 * (this.width + this.height);
}
}

let obj=new Rectangle(2,2);
console.log("Area is :" + obj.calculateArea());
console.log("Perimeter is :"+ obj.calculatePerimeter());