## Framework
O jogo foi feito utilizando [AR.JS](https://github.com/jeromeetienne/AR.js/blob/master/three.js/examples/arjs-session.html), [aframe](https://aframe.io/blog/arjs/)
## Marcadores
Para criar os marcadores, foi utilizada a seguinte [ferramenta](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)

com pattern Ratio = 0.58 (apenas para padronizar os tamanhos, não é necessário ter o mesmo tamanho)

## O jogo
Aponte a câmera na direção de um [marcador com escudo de time](https://github.com/MVictorM/ARJSMemoryGame/tree/master/assets/images)
e será projetado um cubo com a bandeira do estado que o time pertence. Ao mostrar 2 times de um mesmo estado, o score aumenta e o jogo para de identificar aqueles marcadores.
