function addNewWeField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");


    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");


    aqOb.insertBefore(newNode, aqAddButtonOb);

}

// generating CV
function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML=nameField;
    //contact
    document.getElementById('contactT1').innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById('addressT1').innerHTML=document.getElementById("addressField").value;
  
    document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;

    document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;

    document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;
    
    //objective
    document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;

    //work-exp
    let wes = document.getElementsByClassName("weField");
    let str = "";

    for(let e of wes){
         str = str+`<li> ${e.value} </li>`;  //jb loop khtm hojaega to saare wes aajaenge mere
    }
    document.getElementById('weT').innerHTML = str;

    //for academic Q
    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";

    for(let e of wes){
         str1 = str1 + `<li> ${e.value} </li>`;  //jb loop khtm hojaega to saare aqs aajaenge mere
    }
    document.getElementById('aqT').innerHTML = str1;
    
    //for setting image
    let file = document.getElementById('imageField').files[0] ;
    let reader = new FileReader();
    reader.readAsDataURL(file);

    //set image to tempelate
    reader.onloadend=function(){
         document.getElementById('imageTempelate').src = reader.result; 
    };

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-tempelate').style.display="block";

}

//To print
function printCV(){
    window.print();
}