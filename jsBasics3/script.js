let lastName = new String("anqeet");

//template literal
let message = "this is my \n message";
let message2 = 'this is \' is message';
console.log(message);

let message3= `yeh tune 
kya kia`;

console.log(`hello ${lastName}`);

let date = new Date();

let date2 = new Date('June 20 1998 7:15');

let date3 = new Date(1998, 11, 20,7);

console.log(date);

console.log(date2);

console.log(date3);

date3.getTime();


let nums = [1,2,3,4];

console.log(nums.indexOf(9));

console.log(nums.includes(7));

console.log(nums.indexOf(9,2));


// array of objects
let courses = [
    {
        no:1,
        naam:"ankit"
    },
    {
        no:2,
        naam:"anqeet"
    }
];

console.log(courses.indexOf({no:1,naam:"ankit"}));
console.log(courses.includes({no:1,naam:"ankit"}));

let c=courses.find(function(cou) {
    return cou.naam == 'ankit';
})

let c2=courses.find(courses=>courses.naam=='anqeet');
console.log(c2);

let nums1 = [1,2,3,4];

nums1.pop() //removes the last element

nums1.shift()  //removes the first element

nums1.splice(1,1);  //removes from mid (index,no. of elements u wanna del)

console.log(nums1);

let nooms = [1,3,4,5,6];

let nooms2 = nooms;

nooms[1]=5;
console.log(nooms);
console.log(nooms2)

let first = [1,2,3,99,100];
let second = [4,5,6];

// console.log(first.concat(second));

// console.log(first.slice(3,4));

// first.forEach(num=>console.log(num));

let first1 = [1,2,3,99,100];
let second2 = [4,5,6];
let lomdike = 'hello lomdike kya hal ?'

console.log(first1.join(','));

console.log(lomdike.split(' '));

let numberss = [1,3,-8,-17];

let filtered = numberss.filter(function(value){
    return value>=0;
});

console.log(filtered)


let ans = numberss.map(function(value){
    return 'A'+ value;
});

console.log(ans);


let arrayy = [1, 3, 4, -7, -8];

let mapper = arrayy.filter(val => val >= 0).map(num => ({ "value" : num }));

console.log(
            arrayy
            .filter(val => val >= 0)
            .map(num => ({ "value" : num }))
            );
