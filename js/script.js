//Slide simples de transição com navegação.
// 1 - Copie o arquivo simple-slide.js da pasta dist e cole no seu site.
// 2 - Link o arquivo utilizando a tag script /js/plugins é apenas um exemplo, caso você tenha colocado o arquivo dentro da pasta de plugins
//<script src="./js/plugins/simple-slide.js"></script>;
// 3 - Inicie a classe do slide:

//new SimpleSlide({
  //slide: 'principal', // nome do atributo data-slide="principal"
  //nav: true, // se deve ou não mostrar a navegação
  //auto: true, // se o slide deve passar automaticamente
  //time: 5000, // tempo de transição dos slides
  //pauseOnHover: true, // pausa a transição automática});


if(window.SimpleSlide){ // só vai rodar se o SimpleSlide existir
  new SimpleSlide({
  slide: "quote",     // nome do atributo data-slide="principal"
  auto: true,             // se o slide deve passar automaticamente/ true é padrão... ou false
  time: 5000,             // tempo de transição dos slides de 5 segundos
  pauseOnHover: true,     // pausa a transição automática});
  })

  new SimpleSlide({
  slide: "portfolio", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides;
  })
  }


if(window.SimpleAnime){ // só vai rodar se o SimpleAnime
  new SimpleAnime();
}