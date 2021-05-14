class ContatoController{
    constructor(){
        this._contatoOpcao = document.querySelectorAll(".radio");
    };

    verificaOpcaoContato(){
        this._contatoOpcao.forEach( n => {
            n.addEventListener("change", function(event) {
                let item = event.target.value;
                console.log(item);
                let divContato = document.querySelector("#div-contato-selecionado");
                if(item == "email"){
                    divContato.classList.remove("div-zapzap");
                    divContato.innerHTML = ViewContato.showForm();                   
                }else{
                    divContato.classList.add("div-zapzap");
                    divContato.innerHTML = ViewContato.showZap();
                } 
            });
        });
    }







}