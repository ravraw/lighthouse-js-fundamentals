var string ='';

function chess(w,h){
for(let x=0;x<h;x++){


for(let y=0;y<w;y++){
 if((x+y)%2===0){
   string += '_';

}else{
    string +='#';
}

 } string +='\n';

}
}