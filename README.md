### armazenando-na-web

Cookies, localStorage e sessionStorage são formas de armazenar dados no navegador, porém existem diferenças na usabilidade de cada um. Vamos conferir estas diferenças abaixo:

localStorage guarda informações de forma persistente no navegador, sendo em média 5MB de armazenamento padrão, podendo variar dependendo do navegador utilizado. Este limite pode ser aumentado pelo usuário quando necessário, no entanto apenas alguns navegadores suportam isso. Os dados salvos são apenas do tipo string texto.

Cookies guardam informações de forma persistente no navegador, sendo até 4KB de armazenamento por Cookie, bem menos que localStorage. Cada cookie é como se fosse um arquivo criado que guarda as informações de acesso da pessoa usuária, por exemplo, de qual local o site foi acessado, qual e-mail foi utilizado ao realizar login no navegador, e quais produtos de um site foram clicados. Para acessá-los, muitas empresas criam pop ups para confirmar a autorização do uso dessas informações, pois são consideradas sensíveis.

sessionStorage é similar ao localStorage, sua diferença é que os dados não são salvos de forma persistente, ou seja, ao fechar o navegador eles são perdidos. Este tipo de armazenamento é utilizado quando queremos que a pessoa usuária utilize os dados apenas enquanto estiver com o site aberto.
