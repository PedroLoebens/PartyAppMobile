# PartyAppMobile

* `PROJETO NO FIGMA` ----------->> https://www.figma.com/file/tj82IcClr5erxg0lbAZ6L9/Prototyping-in-Figma?node-id=0%3A1

1- `EMPATIA:` Comece com a empatia levantando hipóteses sobre o que as pessoas precisam, pode fazer isso fazendo análise de um grupo específico. (ambiente escolar, mensagens, música, transporte.)

* Sabemos que hoje em dia algo muito importante para o sucesso de vender um produto ou um serviço está diretamente atrelado ao marketing em cima dele. Pensando nisso, qual seria a melhor forma de divulgar eventos se não numa plataforma específica para isso?
* Como jovens e adultos que curtem uma boa festa podem encontrar informações sobre esses eventos na nossa região? Saber quantas pessoas irão comparecer, qual a atração da noite, estilo musical, qual o ambiente…

2- `DEFINIÇÃO:` Depois de analisar, ou fazer uma pesquisa de opinião defina o problema que será resolvido.

* Pensando no marketing, buscaremos elaborar um aplicativo que ajuda empresários que promovem festas a divulgarem seus eventos com local e data de uma forma que chegue até o público consumidor de forma simples e automática, onde o próprio consumidor vai buscar por isso.
* Também pensando nos jovens e adultos que gostam de uma boa festa mas geralmente não sabem quando e onde vai acontecer e, se realmente mais pessoas irão, o que torna em teoria a festa mais “empolgante”.

3- `IDEALIZAR:` Chuva de ideias: depois de definir o problema realize com seu grupo uma chuva de ideias, todas são válidas, um dos membros do grupo pode ficar encarregado de anotá-las. (4 ideias no mínimo).

* O aplicativo será voltado para dois públicos: jovens/adultos e empresas
* Será voltado para realizar marketing e vender ingressos de eventos no caso das empresas (funcionalidade paga)
* Vai ser usado pelas pessoas para procurar por eventos na região.
* Os eventos constarão: localização, data e hora, valor do ingresso (com opção de compra), número de pessoas que compraram ingresso, a atração da noite, estilo musical e contará com fotos do ambiente.

## 	:hammer_and_wrench: Abrir e rodar o projeto
Após baixar o projeto, você pode abrir com o Visual Studio Code. Para o projeto funcionar você deve ter configurado em seu PC:

* Node.js - Versão >= 16.14.2
* Banco de dados MySQL

Em seguida, abra um terminal e execute:

* npm install --global expo-cli

Nos arquivos do projeto abra o arquivo config.json na pasta /config e edite as configurações do banco em "development": para as suas configurações escolhidas durante a instalação do MySQL, e altere a configuração "urlRootNode": para o IP do seu PC.

Após abra um novo terminal na raiz do projeto e execute:

* npm install
* npx sequelize-cli db:migrate
* expo start

Em outro terminal na raiz do projeto execute:

* nodemon Controller

Agora o projeto está pronto para uso. 
