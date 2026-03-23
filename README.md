# Introdução

Este projeto propõe o desenvolvimento do e-book digital baseado na obra *Alice*, utilizando a tecnologia **Progressive Web App (PWA)** como alternativa aos formatos tradicionais de livros digitais. O objetivo central é investigar e demonstrar a viabilidade do PWA como um formato adequado para a leitura digital, considerando aspectos de design, acessibilidade e experiência do usuário.

## Objetivo Geral

Desenvolver um e-book no formato PWA que atenda aos requisitos de usabilidade, acessibilidade e design editorial, oferecendo uma alternativa aos modelos convencionais, como **ePub** e **PDF**.

## Justificativa

Os formatos tradicionais de e-books apresentam limitações que comprometem a experiência do leitor digital. O ePub, embora amplamente utilizado, depende de softwares específicos e apresenta restrições na formatação visual. O PDF, por sua vez, não é responsivo, dificultando a adaptação a diferentes dispositivos. O PWA surge como uma solução que permite maior controle sobre o design, além de possibilitar funcionalidades como **acesso offline**, **responsividade** e **independência de plataformas proprietárias**.

## Estrutura do Documento

A pesquisa está estruturada em etapas que abordam desde o embasamento teórico sobre livros digitais e design editorial até as especificações técnicas do desenvolvimento do e-book no formato PWA. Serão analisadas as tecnologias empregadas, os desafios encontrados no processo e os resultados obtidos a partir da implementação do projeto.

# Objetivos

## Objetivo Geral

O objetivo deste projeto é desenvolver um e-book digital das obras *Alice no País das Maravilhas* e *Alice Através do Espelho*, utilizando a tecnologia **Progressive Web App (PWA)** como alternativa aos formatos convencionais de livros digitais. A pesquisa busca demonstrar a viabilidade do PWA como um formato adequado para a leitura digital, considerando aspectos de **design, acessibilidade e experiência do usuário**.

## Objetivos Específicos

- **Investigar as limitações dos formatos tradicionais de e-books** (ePub, PDF) e como elas impactam a experiência do leitor.
- **Analisar as vantagens do PWA como um formato para livros digitais**, considerando acessibilidade, responsividade e interatividade.
- **Desenvolver um projeto gráfico adaptado para o meio digital**, garantindo a aplicação de princípios de design editorial voltados para a leitura em telas.
- **Implementar recursos interativos**, como ajuste de fonte, modo noturno e sistema de navegação otimizado.
- **Testar e avaliar a usabilidade do e-book**, garantindo uma experiência de leitura eficiente e acessível em diferentes dispositivos.
- **Documentar todo o processo de desenvolvimento**, fornecendo uma base para futuras pesquisas sobre a aplicação de PWA na produção editorial digital.

O desenvolvimento deste projeto busca contribuir para a inovação na área editorial digital, explorando novas possibilidades de design e interação que superem as limitações dos formatos tradicionais de e-books.

## Contexto e Justificativa

Os e-books são uma alternativa digital aos livros tradicionais, oferecendo a conveniência de carregar múltiplos títulos em um único dispositivo. No entanto, os formatos mais populares, como ePub, PDF e MOBI, ainda enfrentam limitações quando se trata de interatividade, responsividade e adaptação a diferentes tipos de telas. Muitos desses formatos não garantem uma experiência de leitura totalmente fluida e podem ser difíceis de personalizar, especialmente em dispositivos móveis.

O design editorial é fundamental na experiência de leitura. No ambiente digital, ele precisa ir além da simples disposição de texto ou adaptação do design gráfico impresso, ele deve sempre considerar as especificidades do digital e de cada plataforma.

### Justificativa para a Escolha do PWA como Formato Principal

O uso do PWA no desenvolvimento deste e-book foi uma escolha estratégica, considerando suas várias vantagens:

- **Acesso offline:** diferente dos formatos tradicionais, um PWA permite que o conteúdo do e-book seja acessado sem a necessidade de uma conexão constante com a internet. Isso é particularmente útil para leitores em regiões com conectividade limitada ou que desejam ler sem consumir dados.
  
- **Maior Controle sobre a experiência do usuário:** com um PWA, é possível ter um controle mais refinado sobre a interface do usuário, incluindo elementos interativos como mudança de fonte, modo escuro/claro e marcação de leitura, tudo dentro de um mesmo ambiente.

- **Adaptação a Diferentes Dispositivos:** os PWAs são responsivos por natureza, o que significa que o e-book se adapta de maneira eficiente a diferentes tamanhos de tela e tipos de dispositivo, seja um smartphone, tablet ou desktop.

- **Independência de Plataformas de Distribuição:** diferentemente de formatos como ePub ou MOBI, que dependem de plataformas específicas (como Amazon Kindle ou Apple Books), o PWA oferece maior liberdade de distribuição. Isso permite que o e-book seja acessado diretamente pelo navegador, sem precisar de aplicativos dedicados.

#  Metodologia e Desenvolvimento

## Plataforma e Tecnologias Utilizadas

Para o desenvolvimento do e-book digital de *Alice no País das Maravilhas*, foram escolhidas as seguintes tecnologias e ferramentas:

- **React + Vite:** React foi escolhido como framework para a construção da aplicação devido à sua flexibilidade, eficiência e vasta comunidade. Vite foi utilizado para otimizar o processo de build e melhorar a performance da aplicação, proporcionando uma experiência de desenvolvimento mais ágil e eficiente (no relatório do projeto será esclarecido o uso e funcionamento dessas duas tecnologias).

- **PWA (Progressive Web App):** O e-book foi desenvolvido como um PWA, aproveitando as vantagens dessa tecnologia, como o acesso offline, o armazenamento em cache e a independência de plataformas de distribuição. O PWA permite uma experiência de leitura contínua, sem depender de conexões constantes com a internet.

- **CSS Customizado:** O design foi construído utilizando CSS customizado para garantir total controle sobre o layout e a responsividade do e-book. Isso permite que o conteúdo se ajuste de maneira dinâmica às diferentes resoluções de tela e proporções dos dispositivos.

## Processo de Criação

A criação do e-book seguiu uma metodologia estruturada, com foco na construção de uma experiência de leitura imersiva e fluida. As etapas principais do processo de desenvolvimento incluem:

### Escolha da Estrutura de Navegação

A navegação do e-book foi projetada para ser intuitiva e fácil de usar. A estrutura foi organizada de acordo com a divisão dos capítulos e seções da obra, com a inclusão de um **sumário interativo** que permite ao usuário navegar rapidamente entre as partes do livro. 

A navegação foi otimizada para dispositivos móveis, garantindo uma leitura sem interrupções, independentemente do tamanho da tela.

### Definição de Tipografia e Layout Responsivo

A tipografia foi escolhida com base em critérios de legibilidade e estética, considerando tanto a fluidez da leitura quanto a adaptação a diferentes tamanhos de tela. O layout foi estruturado de maneira responsiva, utilizando unidades relativas (como `em` e `rem`) para garantir que o conteúdo se ajustasse perfeitamente em qualquer dispositivo.

- **Fonte:** A tipografia utilizada foi otimizada para leitura digital, levando em conta o contraste e a facilidade de leitura em telas.
- **Espaçamento e Margens:** O layout foi ajustado para manter um bom equilíbrio entre texto e imagens, proporcionando uma leitura confortável e sem sobrecarga visual.

### Implementação dos Recursos Interativos

Diversos recursos interativos foram integrados ao e-book para enriquecer a experiência do leitor:

- **Mudança de Fonte:** O leitor pode escolher entre diferentes opções de fontes, ajustando a leitura conforme suas preferências.
  
- **Modo Escuro/Claro:** Um modo de leitura escuro foi implementado para ambientes de pouca luz, ajudando a reduzir o cansaço visual.
  
- **Marcação de Leitura:** O usuário pode marcar sua última página lida, facilitando a retomada da leitura em qualquer dispositivo.

# Documentação Técnica

## Estrutura do Código e Organização do Repositório

A organização do código foi estruturada de forma modular para facilitar a manutenção e a escalabilidade do projeto. A seguir, descrevo a estrutura básica do repositório e o papel de cada diretório e arquivo:

## Estrutura do Código e Organização do Repositório

/src  
  /assets  
    (página de imagens do projeto) 
  /components  
    Header.jsx  
    Footer.jsx  
    ChapterNav.jsx  
    Bookmarks.jsx  
  /contexts  
    ThemeContext.jsx  
    NavigationContext.jsx  
  /pages  
    Home.jsx  
    Chapter1.jsx  
    Chapter2.jsx  
    Chapter3.jsx  
  /services  
    offlineService.js  
    pwaService.js  
  /styles  
    App.css  
    global.css  
  App.jsx  

package.json  
README.md


## Tecnologias Utilizadas e sua Justificativa

- **React:** Framework JavaScript utilizado para construir a interface do usuário. Escolhido devido à sua flexibilidade e facilidade de criação de componentes reutilizáveis, o que facilita a manutenção do código e a implementação de novas funcionalidades.
  
- **Vite:** Ferramenta de build rápida, utilizada para otimizar o processo de desenvolvimento e melhorar a performance de inicialização da aplicação. Vite oferece suporte nativo a módulos ES e Hot Module Replacement (HMR), o que acelera a iteração no desenvolvimento.

- **PWA (Progressive Web App):** O uso do PWA foi uma escolha para permitir uma experiência offline completa, com armazenamento em cache de conteúdo e uma navegação fluida, mesmo sem uma conexão com a internet.

- **CSS Customizado:** A personalização do CSS foi essencial para o controle total do design. A escolha de unidades relativas (como `em`, `rem` e `%`) foi crucial para garantir um layout responsivo e adaptável a diferentes dispositivos.

- **Service Worker:** Utilizado para implementar funcionalidades offline e cache, permitindo que o e-book seja acessado mesmo sem uma conexão à internet.

- **React Router:** Biblioteca utilizada para a navegação entre diferentes seções e capítulos do e-book, permitindo uma transição suave entre as páginas sem recarregar a aplicação.

- **React Context API:** Utilizada para gerenciar o estado global da aplicação, como o tema (modo claro/escuro) e a marcação da página de leitura.

## Explicação sobre o Funcionamento do PWA no Projeto

O conceito de Progressive Web App (PWA) foi integrado ao projeto para proporcionar uma experiência de e-book moderna e fluida, com as seguintes funcionalidades principais:

- **Acesso Offline:** O PWA armazena o conteúdo do e-book no cache do navegador, permitindo que o usuário continue a leitura mesmo sem conexão à internet. O conteúdo é automaticamente carregado a partir do cache quando a rede não está disponível.
  
- **Instalação no Dispositivo:** O e-book pode ser "instalado" diretamente no dispositivo do usuário, criando um ícone no menu de aplicativos (no desktop ou em dispositivos móveis). Isso permite que o e-book seja acessado de forma semelhante a um aplicativo nativo, sem precisar de uma loja de aplicativos.

- **Service Worker:** O service worker é responsável por interceptar as requisições de rede e controlar o cache. Ele permite o pré-carregamento do conteúdo, garantindo que o e-book seja carregado rapidamente e que o usuário tenha uma experiência consistente mesmo em conexões lentas ou instáveis.

- **Manifesto PWA:** O arquivo `manifest.json` define as configurações essenciais do PWA, como o nome do aplicativo, ícones, tema e modo de exibição. Esse arquivo permite que o e-book seja visualmente consistente ao ser "instalado" no dispositivo do usuário.


