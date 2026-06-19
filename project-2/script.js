let btn=document.que("#btn");
let fileinp=document.que("#fileinp");

btn.addEventListener("click",function(){
fileinp.click();//isse humne input pr click ko transfer kar diya 
});

fileinp.addEventListener("change",function(dets){
    const file=dets.target.files[0];
    if(file){
    btn.textContent=file.name;
    }
});