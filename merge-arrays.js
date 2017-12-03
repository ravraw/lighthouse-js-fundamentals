function merge(x,y){
 var z = [];
for (var i=0;y.length < 1;i++){
       if (x[i]<y[i]){
           z.push(x[i]);
           x.shift();
       }else{
         z.push(y[i]);
         y.shift();
       }
       i--;

}

return z;
}



merge([1,4,6,8],[2,3,5,7]);

