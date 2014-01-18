function toggleDiv(divName)
{
    var div = document.getElementById(divName);
    if(div.style.display == 'hidden'){
        div.style.display = "none";
    }else{
       div.style.display = "hidden";
    }
}