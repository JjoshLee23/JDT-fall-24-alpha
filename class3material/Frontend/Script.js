function toggle(){
    console.log("Hello world")
    var element=document.getElementById('hideshow1');
    console.log(element);
    
    if (element.style.display =='block'){
        element.style.display='none';

    }else{
        element.style.display='block';
    }

    var buttonElement=document.getElementsByClassName('toggler')[0];
    if (buttonElement.innerHTML == 'hide'){
        buttonElement.innerHTML='show';
    }else{
        buttonElement.innerHTML='hide';
    }
}
