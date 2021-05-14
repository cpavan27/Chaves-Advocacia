class ViewContato{
    constructor(){        
    };
    static showForm(){
        return `
        <form class='form-contato'>
        <label for="nome" class="label-text">Nome e Sobrenome</label>
        <input type="text" id="nome" class="input-text" placeholder="José da Silva" required>

        <label for="email" class="label-text">Email</label>
        <input type="email" id="email" class="input-text" placeholder="email@domino.com" required>

        <label for="assunto" class="label-text">Assunto</label>
        <input type="text" id="assunto" class="input-text" placeholder='Ex: Problemas com o INSS'>
        
        <label for="mensagem" class="label-text">Mensagem</label>
        <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder='Ex: Estou com problemas para conseguir indenização por...'></textarea>
        
        <input type="submit" class="botao" value="Enviar Email" id="enviarEmail">
        </form>
        `;
    };

    static showZap(){
        return `
        <p>Nos contate pelo link:</p>
        <div class="zapzap-link">                        
            <a href="whasapp.com/web">
                <img src="images/whatsapp.png" alt="Icone do WhtasApp">
                <h2>WhatsApp<br>Fernando<br>Chaves<br>Advocacia</h2>
            </a>                    
        </div>

        `;
    }
}