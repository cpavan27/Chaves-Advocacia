class EmailModel{

    constructor(nome, email, assunto, mensagem){
        this._nome = nome,
        this._email = email,
        this._assunto = assunto,
        this._mensagem = mensagem
    };

    get nome(){
        return this._nome;
    };
    get email(){
        return this._email;
    };
    get assunto(){
        return this._assunto;
    };
    get mensagem(){
        return this._mensagem;
    };


}