# 🖱️ Projeto Mouse

Este projeto tem como objetivo demonstrar e facilitar o controle do mouse e automação de ações no navegador, utilizando uma interface web e um backend em Node.js. Ele oferece suporte tanto para desktop quanto para dispositivos móveis, permitindo testes, demonstrações e experimentos com automação de navegação e interação.

## Sobre o Projeto

O Projeto Mouse é dividido em duas partes principais:

- **Interface Web (Desktop e Mobile):**  
  Permite ao usuário simular movimentos e cliques do mouse diretamente pelo navegador. A versão desktop (`public/index.html`) oferece uma experiência completa, enquanto a versão mobile (`mobile/index.html`) é otimizada para telas menores e comandos por toque.

- **Backend Node.js:**  
  O servidor (`public/server.js`) gerencia as requisições da interface web e integra com o script de automação (`public/puppeteer.js`), que utiliza a biblioteca Puppeteer para controlar o navegador de forma programática. Isso possibilita executar tarefas automatizadas, como navegação, cliques, preenchimento de formulários e outros testes automatizados.

## Principais Funcionalidades

- **Simulação de mouse:**  
  Movimente e clique usando a interface web, tanto em desktop quanto em mobile.

- **Automação com Puppeteer:**  
  Execute scripts automatizados para testar páginas, realizar tarefas repetitivas ou simular interações reais.

- **Servidor Node.js:**  
  Gerencia as comunicações entre a interface web e os scripts de automação.

- **Suporte multiplataforma:**  
  Interfaces adaptadas para desktop e dispositivos móveis.

## Como executar

1. Instale as dependências:
   ```sh
   cd public
   npm install


2-Inicie o servidor:node server.js

Acesse a interface desktop em http://localhost:3000/public/index.html ou abra mobile/index.html diretamente no navegador para a versão mobile.
Estrutura dos arquivos
public/index.html: Interface web para desktop.
public/server.js: Servidor Node.js.
public/puppeteer.js: Script de automação com Puppeteer.
public/package.json: Gerenciamento de dependências.
mobile/index.html: Interface web para mobile.
mobile/script.js: Lógica de interação mobile.
mobile/style.css: Estilos para mobile.

Status
🚧 Em desenvolvimento

Licença
Uso livre para fins educacionais e pessoais.

Desenvolvido para estudos, testes e demonstrações de automação web e controle de mouse. ```
