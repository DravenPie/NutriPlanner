# NutriPlanner

<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/icone.png" alt="Icone"  height="50">
  </a> -->

  <h3 align="center">Seus macros sob controle</h3>

  <p align="center">
  </p>
    <div>
    <img src="images/perfil.jpg" alt="Captura de tela monstrando a aba de perfil" height="700">
    <img src="images/biblioteca.jpg" alt="Captura de tela monstrando a aba de biblioteca de alimentos" height="700">
    <img src="images/progresso.jpg" alt="Captura de tela monstrando a aba de progresso diário" height="700">
  </div>
</div>

  <h1><summary>Sumário</summary></h1>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o Projeto</a></li>
    <li><a href="#feito-com">Feito com</a></li>
    <li><a href="#desenvolvedor">Desenvolvedor</a></li>
    <li><a href="#licenca">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>


<div id="sobre-o-projeto"> </div>

## 📝 Sobre o projeto

NutriPlanner é um App mobile (android) cujo objetivo é auxiliar em dietas. Para isso, conta com a dinâmica de metas diárias de macronutrientes a serem consumidos. As metas são estabelecidas dadas as métricas biológicas fornecidas pelo usuário. No sistema, o usuário cria uma biblioteca própria com alimentos e receitas, especificando seus macronutrientes e, através deles, registra sua alimentação ao longo do dia.

Foi desenvolvido na disciplina de Projeto Integrado I, por alunos de Ciência da Computação da Universidade Federal do Espírito Santo, Brasil.

<div id="feito-com"> </div>

## 🔨 Feito com

As tecnologias usadas no desenvolvimento dessa aplicação foram:

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Docker](https://www.docker.com/)
* [Expo Go](https://expo.dev/client)

<div id="desenvolvedor"> </div>

## ⌨️  Desenvolvedor

Aqui estão as instruções sobre como configurar o projeto localmente.

### ✅ Instalando pré-requisitos

Os pré-requisitos se resumem às ferramentas no tópico acima. Caso queira usar do Docker, deve-se apenas instalar o Docker (caso não já o tenha em sua máquina) e pular para o tópico seguinte.
Caso, por algum motivo prefira não usar o Docker, deve-se certificar de que sua máquina está devidamente configurada para trabalhar com as ferramentas citadas acima. Para instalar tanto o Docker quanto as demais, deve-se visitar seus respectivos sites oficiais. A instalação varia a depender do sistema operacional. Ademais, para testar a aplicação, poode-se usar o aplicativo Expo GO. É importante ressaltar que, infelizmente, o projeto não funciona corretamente na versão Expo web.

### 💻 Criando e manipulando o ambiente

Clone o repositório.
```sh
git git@github.com:DravenPie/NutriPlanner.git
```

#### 🐳 Com o Docker

Execute o comando para montar a imagem e subir o docker:
```sh
sudo docker-compose up
```
Caso o comando falhe, verifique se há algum pré-requisito faltando. Caso o comando tenha sucesso, será criado e executado um conteiner de nome nutriplanner-app-1

Para parar o conteiner (e o servidor), pressione Ctrl-Z ou execute:
```sh
sudo docker stop nutriplanner-app-1
```

Os dados do aplicativo são armazenados localmente (dados do perfil do usuário, biblioteca de alimentos e progresso). Para removê-los, pode-se usar:
```sh
sudo docker rm -v nutriplanner-app-1
```

#### 😭  Sem o Docker
Para iniciar o servidor, execute:
```sh
cd app
```
```sh
npx expo start
```

Para desligar o servidor, pressione Ctrl-Z

Em ambos os casos é usada a porta 19000 para comunicação. Para conectar o Expo Go ao servidor, deve-se digitar dentro do Expo GO a URL no formato exp://IP:19000, onde IP é o ip da máquina em que está rodando o servidor.

<div id="licenca"> </div>

## 🔐 Licença

NutriPlanner é distribuído sob a licença MIT. Confira `LICENSE` para mais informações.

<div id="contato"> </div>

## ✉️ Contato

Marlon Moratti do Amaral - marlon.amaral@edu.ufes.br

Vinicius Nunes Pereira - vinicius.pereira.10@edu.ufes.br

Link do projeto: [https://github.com/DravenPie/NutriPlanner](https://github.com/DravenPie/NutriPlanner)