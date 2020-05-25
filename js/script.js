let btn = '';

//funcão chamada no botão 
function show()
{
    //pega o controle do botão
    btn = document.getElementById('btn1');

    //e adiciona um evento ao clicá-lo
    btn.addEventListener("click", animation() );

}

//funcão que é puxado pelo botão: 
function animation()
{
    //ele pega a tag com todas as informacões dela
    let boxInfo = '';

    //chama pelo selector, a tag se chama "box info"
    boxInfo = document.querySelector(".box-info");

    //checa se essa tag possui a subclasse de abertura
    if(boxInfo.classList.contains("info-show"))
    {
        //se tiver, ela remove, já que a animacão foi ativada uma vez
        boxInfo.classList.remove("info-show");

        //e chama a funcão de esconder os elementos
        animacao_hide();
    }

    //caso não tenha, adiciona a classe de abertura/aparecimento dos elementos
    else
    {
        boxInfo.classList.remove("info-hide");
        animacao_show();
    }
}

// funcão de aparecimento dos elementos 
function animacao_show()
{
    let boxInfo = '';

    //pegamos a tag e colocamos uma subclasse que vai fazer com que o css chame uma keyframe
    boxInfo = document.querySelector(".box-info");
    boxInfo.classList.add('info-show');
}

//funcão de ocultacão dos elementos
function animacao_hide()
{
    let boxInfo = '';
    
    //pegamos a tag e colocamos a subclasse que vai fazer com que o css chame uma keyframe
    boxInfo = document.querySelector(".box-info");
    boxInfo.classList.add('info-hide');   
}