
var container=document.createElement('div');
container.setAttribute('class','container1');
var allcats=document.createElement('div');
allcats.setAttribute('class','allcatsbtn');
allcats.innerHTML='<span class="t1" > Click Me to Display All Cats : </span><button  onclick="allCats()" class="btn btn-primary allcats">Click Me</button>'
var catstext=document.createElement('div');
catstext.setAttribute('class','catstext');
catstext.innerHTML=`<input type="text" class="form-control text1" id="text" placeholder="Write Text Here Which Will Place The Text In Cat Images " maxlength:"15"/>
<button  onclick="saysText()" class="btn btn-primary searchBtn">Search</button>`;


container.append(allcats,catstext)
document.body.append(container);


var displaybox=document.createElement('div');
displaybox.setAttribute('class','displaybox');
container.append(displaybox);
var displaybox1=document.createElement('div');
displaybox1.setAttribute('class','displaybox1');
container.append(displaybox1);
async function allCats(){ 
      displaybox1.innerHTML="";
try{
    let data=await fetch('https://cataas.com/api/cats');
    let data2= await data.json();
   
    displayAllCats(data2)

}
catch(error){
console.log("Error, Something Went Wrong");
}
}
async function displayAllCats(values){
   
    for(var cat of values){
        let smallbox=document.createElement('div');
        smallbox.setAttribute('class','smallbox');
         link="https://cataas.com/cat/"+cat.id;
           
           try{
            let v1=await fetch(link);
           
            smallbox.innerHTML=`<img  class="catimage" src="${v1.url}" alt=" Unable To Load Image" loading="lazy">`
            displaybox.append(smallbox)
           
           }
           catch{
                 console.log('Unable to display image')
           }
        

    }
}

async function saysText(){
    displaybox.innerHTML="";


try{
    let datas=await fetch('https://cataas.com/api/cats');
    let datas2= await datas.json();
  
    displayAllCats1(datas2)

}
catch(error){
console.log("Error, Something Went Wrong");
}
}
async function displayAllCats1(valueses){
    let text;
let link;
     text=document.getElementById('text').value
    for(var cat of valueses){
        
        let smallbox1=document.createElement('div');
        smallbox1.setAttribute('class','smallbox');
         if(text!=""){
         link=`https://cataas.com/cat/${cat.id}/says/${text}`;
         }
         else{
             
              link=`https://cataas.com/cat/${cat.id}`;
         }
         
           try{
            let v2=await fetch(link);
            console.log(v2)
            smallbox1.innerHTML=`<img  class="catimage" src="${v2.url}" alt=" Unable To Load Image" loading="lazy">`
            displaybox1.append(smallbox1)
           
           }
           catch{
                 console.log('Unable to display image')
           }
        

    }
}

