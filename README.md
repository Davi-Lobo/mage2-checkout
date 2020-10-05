<h1 align="center">
    <strong>MagentoCheckout</strong>
</h1>

<p align="center">
    <a href="https://www.linkedin.com/in/davi-lobo-gomes/">
      <img alt="Davi Lobo" src="https://img.shields.io/badge/-Davi%20Lobo-4287f5?style=flat&logo=Linkedin&logoColor=white"/>
    </a>
    <img src="https://img.shields.io/github/last-commit/Davi-Lobo/mage2-checkout?color=%234287f5"/>
    <img src="https://img.shields.io/github/stars/Davi-Lobo/mage2-checkout?style=social"/>
</p>

## Tecnologias e Ferramentas utilizadas no desenvolvimento
[Magento 2 - Versão 2.3.5 p2](https://magento.com/tech-resources/download)<br>
[NodeJS - Versão 12.8.4](https://nodejs.org/en/)<br>
[GulpJS](https://gulpjs.com/)<br>

## Instalação

Na raíz da sua instalação Magento2 acessar o diretório: ````app/code/````

No diretório citado acima, execute o seguinte comando:
````
git clone https://github.com/Davi-Lobo/mage2-checkout.git DaviLobo
````

Após clonar o repositório devidamente, retorne a raíz da instalação e execute os comandos:
````
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy pt_BR -f
````
Após o deploy, o módulo já deverá estar funcionando normalmente,
aproveite a aplicação.