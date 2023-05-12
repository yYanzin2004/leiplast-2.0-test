let nome = document.querySelector(".produto-name");
let image = document.querySelector(".produto-image");
let desc = document.querySelector(".produto-desc");

class Produto {
  constructor(name, img, desc) {
    this._name = name;
    this._img = img;
    this._desc = desc;
    /*Adicionar mais um atributo chamado link, que vai ser
    o link de pagina de cada um dos produtos.*/
  }
}
var a = [];
let Produto1 = new Produto(
  "Espaguete Corrugado",
  "src/produtos/corrugado.png",
  "Descrição corrugado"
);
let Produto2 = new Produto(
  "Tubo Isolante De PVC",
  "src/produtos/espaguete-pvc.png",
  "Descrição Tubo de pvc"
);
let Produto3 = new Produto(
  "Fita De PVC Sem Cola",
  "src/produtos/fita-pvc.png",
  "Descrição fita de pvc"
);
let Produto4 = new Produto(
  "Tubo Termo-Retratil",
  "src/produtos/tubo-retratil-preto.png",
  "Vai toma no cu piranha"
);
let Produto5 = new Produto(
  "Tubo De Poliuretano",
  "src/produtos/tubo-pu-azul.png",
  "Vai toma no cu piranha"
);
let Produto6 = new Produto(
  "Perfil T e U",
  "src/produtos/perfil-pvc.png",
  "Vai toma no cu piranha"
);
let Produto7 = new Produto(
  "Mangueira Narguile",
  "src/produtos/narguile-colorido.png",
  "Vai toma no cu piranha"
);
let Produto8 = new Produto(
  "Mangueira Lisa e Corrugada",
  "src/produtos/traqueia.png",
  "Vai toma no cu piranha"
);
let Produto9 = new Produto(
  "Cânulas",
  "src/produtos/catater.png",
  "Vai toma no cu piranha"
);
let Produto10 = new Produto(
  "Canudo Liso E Corrugado",
  "src/produtos/canudo-sanfo.png",
  "Vai toma no cu piranha"
);
let Produto11 = new Produto(
  "Perfil De PU",
  "src/Perfil-PU.png",
  "Vai toma no cu piranha"
);
let Produto12 = new Produto(
  "Raspador De Pu",
  "src/Raspador-PU.png",
  "Vai toma no cu piranha"
);
let Produto13 = new Produto(
  "Fita De Pu",
  "src/logo-65_07.png",
  "Vai toma no cu piranha"
);
let Produto14 = new Produto(
  "Espaguete Cigarro De Palha",
  "src/produtos/espaguete-cigarro.png",
  "Vai toma no cu piranha"
);

setInterval(function () {
  let item = Math.floor(Math.random() * a.length);
  console.log(a[item]);
  image.src = a[item]._img;
  nome.innerHTML = a[item]._name;
  desc.innerHTML = a[item]._desc;
}, 10000);
a.push(
  Produto1,
  Produto2,
  Produto3,
  Produto4,
  Produto5,
  Produto6,
  Produto7,
  Produto8,
  Produto9,
  Produto10,
  Produto11,
  Produto12,
  Produto13,
  Produto14
);

/* Criar vários objetos da classe Produto, cada um contendo informações
de cada produto da empresa. Fazer um timer que troca entre essas clases.*/
