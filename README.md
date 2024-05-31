# AngularBancoDeSangue

Este frontend em Angular serve como uma interface para a API de um banco de sangue. Ele permite gerenciar doadores, receptores e transações de sangue, fornecendo diversas funcionalidades para a administração eficiente do banco de sangue. Abaixo estão as principais características e funcionalidades do frontend.

## Funcionalidades Principais
- Registro de Pessoas
- Permite o registro de novos doadores e receptores com informações como nome, idade, sexo, peso, altura, tipo sanguíneo e estado.
- Consulta de Pessoas Cadastradas
- Funcionalidade para buscar pessoas cadastradas no banco de sangue por diferentes critérios (nome, tipo sanguíneo, estado, etc.).
- Estatísticas e Relatórios
- IMC Médio por Faixa Etária: Calcula e exibe a média do Índice de Massa Corporal (IMC) para diferentes faixas etárias de 10 em 10 anos (0-10, 11-20, 21-30, etc.).
- Quantidade de Candidatos por Estado: Mostra a quantidade de candidatos (doadores e receptores) cadastrados em cada estado do Brasil.
- Percentual de Obesos por Sexo: Calcula e exibe o percentual de obesos (IMC > 30) entre homens e mulheres.
- Média de Idade por Tipo Sanguíneo: Exibe a média de idade das pessoas para cada tipo sanguíneo.
- Quantidade de Doadores Disponíveis por Tipo Sanguíneo Receptor: Mostra a quantidade de doadores disponíveis para cada tipo sanguíneo receptor.

## Tecnologias Utilizadas
- Angular: Framework principal para desenvolvimento do frontend.
- Angular CLI: Ferramenta de linha de comando para gerenciar o projeto Angular.
- RxJS: Biblioteca para programação reativa.
- Bootstrap: Framework de CSS para estilização e design responsivo.
- Node.js: Ambiente de execução JavaScript server-side.
- npm: Gerenciador de pacotes para JavaScript, usado para instalar bibliotecas e ferramentas necessárias para o projeto.

## Instalação
- Este projeto foi desenvolvido utilizando `Angular CLI v10.0.7`, `Node.js v12.18.2` e `npm v6.14.5`;
- Baixe e instale o Angular CLI, Node.js e npm;
- Clonar repositório: 
```sh
https://github.com/alexandreluchetti/AngularBancoDeSangue.git
```
- Navegar até o Diretório do Projeto: 
```sh
cd banco-de-sangue/
```
- Instalar dependências: 
```sh
npm install
```
- Iniciar o servidor de desenvolvimento: 
```sh
ng serve
```
- Abra o navegador e acesse 
```sh
http://localhost:4200/
```

## Leyout web
<img src="src/assets/images/Screenshot from 2024-05-31 15-31-30.png">
<img src="src/assets/images/Screenshot from 2024-05-31 15-31-51.png">
<img src="src/assets/images/Screenshot from 2024-05-31 15-32-03.png">
<img src="src/assets/images/Screenshot from 2024-05-31 15-32-11.png">
<img src="src/assets/images/Screenshot from 2024-05-31 15-32-19.png">
<img src="src/assets/images/Screenshot from 2024-05-31 15-32-24.png">
<img src="src/assets/images/Screenshot from 2024-05-31 15-32-29.png">

## Autor
Alexandre Lucchetta

+55 16 99169-9718

luchetti.92@gmail.com

https://www.linkedin.com/in/alexandreluchetti/
