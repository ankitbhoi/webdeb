console.log("hero banega tu????");

// creation of a object with properties and methods
let rectangle = {
    length:1,
    breadth:2,

    draw(){
        console.log('draw');
    }
};
// 1
function createRectangle(l,b){
    return rectangle = {
        length:l,
        breadth:b,
    
        draw(){
            console.log('draw');
        }
    };
}

let storeVariable = createRectangle(5,2);
let storeVariable1=createRectangle(23,4);

// 2
function CreateRectangle(l,b){
    this.length=l;
    this.breadth=b;
    this.draw = function(){
        console.log('draw 2');
    };
}

let storeVariable3 = new createRectangle(99,88);

//add a property
storeVariable3.color= "yellow";
//delete a property
delete storeVariable3.color;

//reference type example
let a={
    value:10,
};
let b=a;
a.value++;
console.log(a.value);          //11
console.log(b.value);          //11

//loops
let square = {
    length:2,
    breadth:3
};

//for in loop
for(let key in square){
    //keys are reflected key variable
    //values are reflected through box braces => square[key]
    console.log(square[key]);
}

//for of loop=>only used on iterables - array,maps
// for(let key of square){
//     console.log(key);
//     //will give error bcz iterable hai nahi bhidu
// }

//object cloning
let src = {
    a:10,
    b:11
};

let src2 = {
    c:12
};
let dest = Object.assign({},src,src2);
src.a++;
src.c++;
console.log(dest);


