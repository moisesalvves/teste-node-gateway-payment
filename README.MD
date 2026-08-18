# 💳 Gateway de Pagamento - Desafio Técnico Node.js

Olá! Este repositório contém a minha solução para um desafio técnico focado em construir e refatorar um gateway de pagamento (simulando a API da Pagar.me) utilizando Node.js. 

O objetivo principal deste projeto foi pegar um conceito de código legado (de 2016) e aplicar uma arquitetura moderna, escalável e **pronta para produção**.

## 🚀 O que foi construído e as Boas Práticas aplicadas

Durante o desenvolvimento, foquei em sair do básico e aplicar conceitos de nível profissional:

* **Arquitetura Modular (Separação de Contextos):** Separei o projeto em pastas lógicas (`routes`, `app` para controllers, `config` e `common`).
* **Padrões de Projeto (Design Patterns):** Utilizei o *Revealing Module Pattern* nos controllers e criei um *Wrapper* isolado para a comunicação externa com a Pagar.me.
* **Segurança na Web:** Implementação do middleware **Helmet** para proteger a API contra vulnerabilidades conhecidas do Express, e **Dotenv** para manter chaves e credenciais seguras.
* **Monitoramento e Performance:** Substituí o `console.log` tradicional pelo **Bunyan** para geração de logs estruturados (JSON/Arquivos) e configurei o **PM2** para gerenciar a aplicação, garantindo que ela reinicie automaticamente em caso de falhas e utilize todos os núcleos do processador (`cluster mode`).
* **Testes Automatizados (QA):** Como a qualidade é inegociável, construí testes de integração automatizados para validar as rotas e os retornos HTTP utilizando **Mocha**, **Chai** e **Supertest**.

## 🛠️ Tecnologias Utilizadas
- Node.js & Express
- PM2 (Gerenciamento de Processos)
- Bunyan (Logging)
- Helmet (Segurança)
- Mocha, Chai & Supertest (Testes Automatizados)

## ⚙️ Como rodar o projeto localmente

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Crie um arquivo `.env` na raiz e defina a porta (ex: `PORT=3000`).
4. Para rodar em desenvolvimento: `npm run dev`.
5. Para rodar os testes: `npm test`.

---
*Desenvolvido como etapa de aprimoramento em arquitetura Backend e Qualidade de Software.*