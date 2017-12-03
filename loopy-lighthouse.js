function loop(x,y){

  for(var i=x;i<y+1;i++){
       if(i%3===0 && i%4===0){
        console.log("LoopyLighthouse")
      }else if(i%3===0 && i%4!==0){
        console.log("Loopy");
      }else if(i%3!==0 && i%4===0){
        console.log("Lighthouse")
      }else{
        console.log(i);
       }
  }

}


loop(100,200);