var cris = new Figura("Cristiane", "Brasil", "Atacante", "./imgs/cris.png");
var marta = new Figura("Marta", "Brasil","Meio campo", "./imgs/marta.png");
var debinha = new Figura("Débora","Brasil","Atacante","./imgs/debinha.png");
var formiga = new Figura("Formiga", "Brasil", "Meio campo","./imgs/formiga.png");
var thais = new Figura("Thais","BRasil","Volante","./imgs/thais.png");

var colecaoFiguras = [];

colecaoFiguras.push(cris);
colecaoFiguras.push(marta);
colecaoFiguras.push(debinha);
colecaoFiguras.push(formiga);
colecaoFiguras.push(thais);

for(var i = 0; i<colecaoFiguras.length; i++){
    
    colecaoFiguras[i].exibir();

}