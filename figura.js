class Figura {

    constructor(nome, pais, posicao, urlImagem){
        this.nome = nome;
        this.pais = pais;
        this.posicao = posicao;

        this.imagem = new Image(180, 240);
        this.imagem.src = urlImagem;
    }
    exibir(){
        document.body.appendChild(this.imagem);
        document.write("<br /> Nome: " + this.nome + "<br />");
        document.write("Posição: " + this.posicao + "<br />");
        document.write("País: " + this.pais + "<br />");
    } 
}