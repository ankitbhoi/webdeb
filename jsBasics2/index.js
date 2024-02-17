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