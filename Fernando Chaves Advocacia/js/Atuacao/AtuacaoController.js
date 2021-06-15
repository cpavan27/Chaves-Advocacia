class AtuacaoController {
  constructor() {
    this._checkBox = document.querySelectorAll(".atuacao-checkbox");
    this._divInfo = document.querySelector("#atuacao-infos");
  }

  esconderDivInfos() {
    this._divInfo.classList.add("hide");
  }
  mostrarDivInfos() {
    this._divInfo.classList.remove("hide");
    this._divInfo.scrollIntoView();
  }
  divInfo() {
    return this._divInfo;
  }

  mostraInfos() {
    let radioSelected = "";
    this._checkBox.forEach((checkBox) => {
      checkBox.addEventListener("click", (itemSelected) => {
        if (radioSelected == "") {
          this.divInfo().style.display = "grid";
          this.mostrarDivInfos();
          this.addInfos(
            this.selecionaInfoParaMostrar(itemSelected.target.value)
          );
          radioSelected = itemSelected.target;
        } else if (radioSelected.value == itemSelected.target.value) {
          itemSelected.target.checked = false;
          this.esconderDivInfos();
          this.divInfo().ontransitionend = () => {
            this.divInfo().style.display = "none";
          };
          radioSelected = "";
        } else if (radioSelected.value !== itemSelected.target.value) {
          this.esconderDivInfos();
          this.divInfo().ontransitionend = () => {
            this.divInfo().style.display = "grid";
            this.mostrarDivInfos();
            this.addInfos(
              this.selecionaInfoParaMostrar(itemSelected.target.value)
            );
          };
          radioSelected = itemSelected.target;
        }
      });
    });
  }

  addInfos(infoAdd) {
    this._divInfo.innerHTML = infoAdd;
    this._divInfo.classList.remove("hide");
  }

  selecionaInfoParaMostrar(info) {
    this._info = "";

    switch (info) {
      case "inss":
        this._info = AtuacaoViwer.inssView();
        break;
      case "trabalhista":
        this._info = `<p>trabalhista</p>`;
        break;
      case "familiar":
        this._info = `<p>familiar</p>`;
        break;
      case "civil":
        this._info = `<p>civil</p>`;
        break;
    }
    return this._info;
  }
}
