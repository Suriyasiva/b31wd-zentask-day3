//1.json format  and acessed in for loop,for in
var details =[{                       //json format
    name:"suriya",
    batch:"b31wd",
    gender:"male",
    age:24,
    education:"b.e-eee",
    dob:30-11-1998,
    city:"chidambaram"
}]
//iterated in for loop
details.lastname="siva"             //to new key in object
for (let index = 0; index < details.length; index++) {
    console.log(details
        );
    
}

//iterated in forin loop

for(let keys in details){
    console.log(keys,details[keys]);
}

// iterated in forof loop
for(let value of details){
    console.log(value);
}


// 2. resume in json format
var resume =[{                       //json format
    name:"suriya.s",
    qualification:'B.E',
    passedOut:2020,
    dob:30-11-1998,
    collegeName:"MRK institutr of technology",
    city:"chidambaram",
    fatherName:"sivanandam",
    motherName:"saraswathi",
    brother:"vishva",
}]
console.log(resume);



// difference between window,screen,and document.
// window-
// each browser atp has it own top level window object
// each element has it window object too,nested within parent window
// each of the windows gets it own seprate global object
// window.window always refer window
// but window.parent and window.top always refer enclosing windows
// screen-
// a windows object also has acsreen object iwth properties describing the physical dispaly
// screen properties with and height are the full screen
// screen properties avilwidth and avilheight omit the toolbar
// the portion of screen displaying the rendered document is the viewport in javascript
// thegetboundingclientrect() method of any document element will return an object with top,left,bottom,right 
// document-
// each window object has adocument object to be rendered
// thes object gets confused in part 
// because html element are added to gobal object
// eg:p tag,h1 tag,etc


