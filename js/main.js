//objects :can get (primitive,refrence)
//all of keys in object that have values are property...
/*
let data={
    firstName:"alireza",
    lastName:"moon",
    age:25,
    fatherName:"ali",
    email:"t@t.com",
    flag:true,
    check:null,
}
console.log(`my name is ${data.firstName} ${data.lastName}`);
console.log(`my father name is ${data.fatherName}`);
console.log(`my email is ${data.email}`);
console.log(`my age is ${data.age}`);

//yek jadval be arayei az jadval ha vasle => 1 to many (master slave)

let data={
    firstName:"alireza",
    lastName:"moon",
    age:25,
    fatherName:"ali",
    email:"t@t.com",
    flag:true,
    check:null,
    degree:[
        {
            bachelor:"electronic",
            master:"ai",
            phd:"ai"
        }
        {
            bachelor:"electronic",
            master:"ai",
            phd:"ai"
        }
        {
            bachelor:"electronic",
            master:"ai",
            phd:"ai"
        }
    ]
}


//ravabeti ke beyne yek jadval ba jadval dgas=>1 to 1 :

let data={
    firstName:"alireza",
    lastName:"moon",
    age:25,
    fatherName:"ali",
    email:"t@t.com",
    flag:true,
    check:null,
    degree:{
        bachelor:"electronic",
        master:"ai",
        phd:"ai",
        geo:{
            lat:55.2653,
            lng:33.2563,
        }
    },
    average:[14.1,15.1,16.1],
    person:[
        {firstName:"turaj",lastName:"armin",age:35},
        {firstName:"karim",lastName:"armin",age:25},
        {firstName:"ali",lastName:"armin",age:15}
    ],
    print:function(){
        console.log(this.firstName);
    },
    print1(){
        return `my name is ${this.firstName} and my last name is ${this.lastName} and my email is ${this.email}`
    }
}
console.log(`my bachelor is ${data.degree.bachelor}`);
console.log(`my master is ${data.degree.master}`);
console.log(`my phd is ${data.degree.phd}`);
console.log(`my bachelor average is ${data.average[0]}`);
console.log(`my master average is ${data.average[1]}`);
console.log(`my phd average is ${data.average[2]}`);
console.log(`my geo is ${data.degree.geo.lat} and ${data.degree.geo.lng}`);

//restful api=>transfer data with architectural style(zabane vasete beyne server va client ke data ro az server migire json mikone va be client miresone va bar ax) server <=> restful api <=> client

//fetch kardan :(khondan data az samte server va print kardan) :

data.person.forEach((elem)=>{
    console.log(elem.firstName);
    console.log(elem.lastName);
    console.log(elem.age);
    console.log("***********");
})

let html=""
data.person.map((elem)=>{
    html+=`<div class="person">
                <h4>first name :${elem.firstName}</h4>
                <h4>last name :${elem.lastName}</h4>
                <h4>age :${elem.age}</h4>
                <hr />
            </div>`
})
document.getElementById("root").innerHTML=html;

//faza khali dar javascript => WINDOW (bom)

//dar object bara function nevisi nemitavan az alamate arrow(=>) estefade kard chon be pedare pedar eshare mikone(Window)
data.print()
console.log(data.print1());

//RAM =>1) heap : ghesmati az addresse object ha mibashad 2)stack : address haro dar variable mirize va ba estefade az an ha be object ha dastresi darim

//object ha az property ha va method ha tashkil shodeand

//vaghti ma esme yek object ro seda mizanim addressesh dar stack vojod darad va az stack miravad be ghesmate heap ram

//this :baraye dastresi be property ha va method haye ye object az (this) estefade mishavad

class Human{
    firstName
    lastName
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName
    }
    print(){
        return this.firstName+this.lastName
    }
}
let TA = new Human("alireza","moon")
console.log(TA.print());
let AT = new Human("turaj","armin")
console.log(AT.print());
*/

//symbol.iterator => can use for()

let div=document.getElementsByTagName("div") //div => HTML collection
// for (let i = 0; i < div.length; i++) {
//     div[i].style.width="200px"
//     div[i].style.height="200px"
//     div[i].style.backgroundColor="green"
//     div[i].style.margin="20px auto"
// }
for (const item of div) {
    item.style.width="200px"
    item.style.height="200px"
    item.style.backgroundColor="green"
    item.style.margin="20px auto"
}


//HTML collection(weekness property) => Array(strong property) :

// 1)let div1=Array.from(document.getElementsByTagName("div"))
// 2)
let div1=[...document.getElementsByTagName("div")]
console.log(div1);

console.log(div1[0].attributes.style);

console.log(div1[0].baseURI);

console.log(div1[0].childElementCount);

let childh1=Array.from(div1[0].children)
console.log(childh1);

// console.log(div1[0].classList);
// div1[0].classList.add("ali")
// console.log(div1[0].classList);


div1.forEach((elem)=>{
    elem.addEventListener("click",function(){
        elem.classList.toggle("active")
        elem.classList.toggle("radius")
    })
})