//subhanAllah cout

const subhanAllahDisplay=document.getElementById("subhanAllahDisplay")
let subhanallahValue=0;

document.getElementById("subhanAllahIncrimentBtn").addEventListener("click",function(){
    if(subhanallahValue==33){
        return alert("Complete");
    }
    subhanallahValue+=1;
    subhanAllahDisplay.innerText=subhanallahValue;
    
})

document.getElementById("subhanAllahDecrimentBtn").addEventListener("click",function(){
    if(subhanallahValue==0){
        return alert("You can not added a negative value");
    }

    subhanallahValue-=1;
    subhanAllahDisplay.innerText=subhanallahValue;
   
})



// Alhamdullilah count

const alhamdulillahDisplay=document.getElementById("alhamdulillahDisplay");
let alhamdullilahValue=0;

document.getElementById("alhamdulillahIncrimentBtn").addEventListener("click",function(){
    if(alhamdullilahValue ==33){
        return alert("Complete");
    }

    alhamdullilahValue +=1;
    alhamdulillahDisplay.innerText=alhamdullilahValue;
})

document.getElementById("alhamdulillahDecrimentBtn").addEventListener("click",function(){
    if(alhamdullilahValue ==0){
        return alert("You can not added a negative value");
    }

    alhamdullilahValue -=1;
    alhamdulillahDisplay.innerText=alhamdullilahValue;
})



//Allahuakbar count


 const allahAkberDisplay=document.getElementById("allahAkberDisplay");
 let allahuAkbarValue=0;

 document.getElementById("allahAkberIncrimentBtn").addEventListener("click",function(){
    if(allahuAkbarValue==33){
        return alert("Complete");
    }

    allahuAkbarValue +=1;
    allahAkberDisplay.innerText=allahuAkbarValue;
 })

 document.getElementById("allahAkberDecrimentBtn").addEventListener("click",function(){
    if(allahuAkbarValue ==0){
        return alert("You can not added a negative value");
    }
    allahuAkbarValue -=1;
    allahAkberDisplay.innerText=allahuAkbarValue;
 })

 //Reset button
 document.getElementById("resetBtn").addEventListener("click",function(){
    subhanAllahDisplay.innerText=0;
    alhamdulillahDisplay.innerText=0;
    allahAkberDisplay.innerText=0;
    subhanallahValue=0;
    alhamdullilahValue=0;
    allahuAkbarValue=0;


 })