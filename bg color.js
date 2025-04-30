function color(){
    var backgrundcolor = (Math.floor(Math.random()*16777216)).toString(16);
    console.log(backgrundcolor);
    document.body.style.backgroundColor = '#' + backgrundcolor;
    var text = document.querySelector(".text");
    text.style.color = '#' + backgrundcolor;
    text.innerHTML = backgrundcolor;
    
}