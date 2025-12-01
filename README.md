# Lacrei Saúde – Desafio Técnico (Voluntariado)

![Preview da Página](./public/assets/img/preview.png)

Aplicação desenvolvida como parte do desafio técnico da **Lacrei Saúde**, com foco na **captação de novos voluntários**.  
O projeto apresenta informações sobre o programa de voluntariado e permite que o usuário se candidate preenchendo um formulário simples e acessível.

## 🚀 Tecnologias Utilizadas

- **Next.js (App Router)**
- **TypeScript**
- **Styled-Components**
- **Redux Toolkit** (ajuda para controlar o estado global da aplicação, evitando props desnecessárias)
- **Zod + React Hook Form** (validação dos campos de maneira clara e objetiva)
- **Jest + Testing Library**
- **LocalStorage** (armazenamento do tema da aplicação)
- **Design System Marsha** + referências visuais do site da [Lacrei Saúde](https://lacreisaude.com.br/)
- Técnica **Mobile First**

## 📄 Funcionalidades

- Página principal com:
  - Formulário de candidatura (nome + e-mail)
  - Tratativa de erros e mensagens de feedback
  - Componentes reutilizáveis (botão, inputs)
- Página de ajuda com detalhes do projeto
- Troca de tema (claro/escuro) utilizando **Redux** + **LocalStorage**
- Layout completamente responsivo
- Cuidados com **acessibilidade**, incluindo:
  - `aria-labels`
  - HTML semântico
  - Contraste adequado
  - Navegação confortável por teclado

## 🧩 Estrutura do Projeto

```bash
/app
/components
/styles → estilos globais
/store → Redux Toolkit
/providers → Theme provider, redux provider, etc.
/schemas → Local separado para schemas do Zod e tipagem do formulário
```

O formulário foi construído em um único componente principal, utilizando inputs e botões reaproveitáveis e validados com **Zod** + **React Hook Form**.

## 🧪 Testes

![CI](https://github.com/hudpr10/desafio-tecnico-lacrei-saude/actions/workflows/main.yml/badge.svg)

Os testes foram desenvolvidos com **Jest** e **React Testing Library**, cobrindo todos os componentes unitários:

### **Home**

- Teste completo do fluxo do formulário
- Preenchimento dos campos
- Clique no botão de envio
- Retorno ao estado inicial após submissão

### **Header**

- Renderização correta
- Alteração do tema

### **Footer**

- Renderização correta

### **Form**

- Digitação nos campos
- Clique no botão de submit

### **Input**

- Mensagem de Erro e Label customizadas

### **Button**

- Executa função genérica
- Não executa função quando está disabled
- Diferetes Estilos

![Testes Realizados](./public/assets/img/testes.png)

## ⚙️ CI/CD

Link para Actions: https://github.com/hudpr10/desafio-tecnico-lacrei-saude/actions

Link para Deploys: https://github.com/hudpr10/desafio-tecnico-lacrei-saude/deployments

A cada push ou Pull Request, o GitHub Actions executa:

- Lint (ESLint)
- Testes (Jest)
- Build do projeto

A cada push na **main**, a Vercel faz automaticamente o deploy

### Evidências

![Testes](https://github.com/hudpr10/desafio-tecnico-lacrei-saude/actions/workflows/main.yml/badge.svg)
![Deploy](https://img.shields.io/website?url=https://desafio-tecnico-lacrei-saude-ecru.vercel.app/)

## Notas no Lighthouse

Relatório gerado pelo Lighthouse: https://pagespeed.web.dev/analysis/https-desafio-tecnico-lacrei-saude-ecru-vercel-app/xzyv8049sl?hl=pt-br&form_factor=mobile

### Celular

![Notas no Celular](./public/assets/img/celular.png)

<!-- ![Desempenho](./public/assets/img/celular.png)
![Acessibilidade](./public/assets/img/celular.png)
![Práticas recomendadas](./public/assets/img/celular.png) -->

### Computador

![Notas no Computador](./public/assets/img/computador.png)

## 🛠️ Como Rodar o Projeto

1. Certifique-se de ter o **Node.js** instalado.
2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor local:

```bash
npm run dev
```

4. Acesse o navegador

```bash
http://localhost:3000
```

5. Para executar os testes basta rodar:

```bash
npm test
```

Obs: Nenhuma variável de ambiente é necessária.

## 🌐 Deploy

O projeto está hospedado na Vercel:

- Link: https://desafio-tecnico-lacrei-saude-ecru.vercel.app/

## 👈 Rollback

O Rollback na Vercel é muito simples, a plataforma a cada `push` feito no github a Vercel realiza um deploy novo do projeto e todos os deploys anteriores ficam guardados na plataforma, basta clicar no deploy desejado e "promover" ele. Essa operação também pode ser realizada pela CLI digitando o comando:

```bash
vercel rollback deploy_id
```

Vale mencionar que quando feito pelo CLI é necessário ter o id respectivo do deploy desejado.
