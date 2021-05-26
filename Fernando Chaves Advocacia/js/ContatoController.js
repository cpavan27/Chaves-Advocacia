class ContatoController {
  constructor() {
    this._contatoOpcao = document.querySelectorAll(".radio");
    this._divContato = document.querySelector("#divOpcao");
  }

  verificaOpcaoContato() {
    this._contatoOpcao.forEach((n) => {
      n.addEventListener("change", function (event) {
        let opcao = document.querySelector("#divOpcao");
        if (event.target.value == "email") {
          opcao.classList.remove("div-zapzap");
          opcao.innerHTML = ViewContato.showForm();
        } else {
          opcao.classList.add("div-zapzap");
          opcao.innerHTML = ViewContato.showZap();
        }
      });
    });
  }
}
