function rev(){
    let a=1234;
    let v="";
    for(i=0;i<4;i++){
        v=v+a%10;
        a=parseInt(a/10);
    }
    console.log(v);
    

}