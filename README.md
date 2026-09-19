# 📱 EBAC Store Mobile Tests

Projeto de automação de testes mobile da aplicação **EBAC Store**, utilizando **WebdriverIO**, **Appium**, **Mocha** e **Allure Report**.

O projeto possui testes automatizados para os principais fluxos da aplicação, utilizando **Page Object Model (POM)** e configurações específicas para execução local e em dispositivos mobile na **Sauce Labs**.

---

## 🎯 Objetivo

Automatizar testes funcionais da aplicação EBAC Store, contemplando os seguintes fluxos:

- Login
- Produtos
- Busca de produtos
- Checkout

O projeto também possui configuração para execução da aplicação iOS na Sauce Labs.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript
- WebdriverIO
- Appium
- Mocha
- Allure Report
- Android Emulator
- iOS / XCUITest
- Sauce Labs
- Git e GitHub

---

## 📂 Estrutura do projeto

```text
ebac-store-mobile-tests/
│
├── app/
│   ├── ebacshop.aab
│   ├── LojaEBAC.ipa
│   ├── LojaEBAC.app/
│   ├── LojaEBAC-sim.app/
│   ├── LojaEBAC.zip
│   ├── LojaEBAC-sim.zip
│   └── ebac.keystore
│
├── config/
│   ├── general.conf.js
│   ├── hooks.conf.js
│   ├── local.conf.js
│   ├── reports.conf.js
│   ├── sauce.conf.js
│   ├── specs.conf.js
│   ├── suites.conf.js
│   └── wdio.conf.js
│
├── test/
│   ├── pageobjects/
│   │   ├── browse.page.js
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   ├── product.page.js
│   │   └── profile.page.js
│   │
│   └── specs/
│       ├── checkout.test.js
│       ├── login.test.js
│       ├── product.test.js
│       └── search.test.js
│
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

---

## 📋 Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

- Node.js
- npm
- Java/JDK
- Android Studio, caso utilize execução local Android
- Android Emulator, caso utilize execução local Android
- Appium, conforme configuração do ambiente
- Conta Sauce Labs, caso utilize execução remota

Verifique o Node.js:

```bash
node --version
```

Verifique o npm:

```bash
npm --version
```

---

## 📦 Instalação das dependências

Clone o repositório:

```bash
git clone https://github.com/Edsonk2/ebac-store-mobile-tests.git
```

Entre na pasta:

```bash
cd ebac-store-mobile-tests
```

Instale as dependências:

```bash
npm install
```

---

# 🤖 Android

O projeto possui suporte à aplicação Android por meio do arquivo:

```text
app/ebacshop.aab
```

Também existe o arquivo de keystore:

```text
app/ebac.keystore
```

Para execução local Android, é necessário iniciar um emulador compatível e utilizar a configuração correspondente em:

```text
config/local.conf.js
```

---

# 🍎 iOS

O projeto possui a aplicação iOS:

```text
app/LojaEBAC.ipa
```

Também existem os arquivos:

```text
app/LojaEBAC.app/
app/LojaEBAC-sim.app/
app/LojaEBAC.zip
app/LojaEBAC-sim.zip
```

A execução remota iOS é configurada em:

```text
config/sauce.conf.js
```

A automação utiliza:

```text
platformName: iOS
automationName: XCUITest
```

A aplicação iOS utilizada na configuração remota é:

```text
storage:filename=LojaEBAC.ipa
```

A IPA `LojaEBAC.ipa` foi disponibilizada no armazenamento da Sauce Labs.

---

# ☁️ Sauce Labs

A configuração para execução remota está localizada em:

```text
config/sauce.conf.js
```

A seleção do ambiente é controlada pela variável:

```text
ENVIRONMENT=saucelabs
```

E a plataforma:

```text
PLATFORM=ios
```

As credenciais devem ser configuradas no arquivo `.env`.

### Exemplo

```env
PLATFORM=ios
ENVIRONMENT=saucelabs
REPORT=false

SAUCE_USERNAME=seu_usuario
SAUCE_ACCESS_KEY=sua_access_key
```

> ⚠️ O arquivo `.env` não deve ser versionado no GitHub. As credenciais devem ser mantidas em ambiente seguro.

---

# 🧪 Execução dos testes

## Executar todos os testes

```bash
npm test
```

## Executar somente Login

```bash
npm run test:login
```

## Executar somente Produtos

```bash
npm run test:product
```

## Executar somente Busca

```bash
npm run test:search
```

## Executar somente Checkout

```bash
npm run test:checkout
```

---

# 🧩 Suítes disponíveis

| Suíte    | Arquivo                       |
| -------- | ----------------------------- |
| Login    | `test/specs/login.test.js`    |
| Produtos | `test/specs/product.test.js`  |
| Busca    | `test/specs/search.test.js`   |
| Checkout | `test/specs/checkout.test.js` |

---

# 🏗️ Page Object Model

O projeto utiliza o padrão **Page Object Model (POM)** para separar os elementos e comportamentos das telas da implementação dos testes.

Os Page Objects estão localizados em:

```text
test/pageobjects/
```

Principais Page Objects:

- `login.page.js`
- `home.page.js`
- `browse.page.js`
- `product.page.js`
- `profile.page.js`

Essa organização facilita:

- manutenção dos testes;
- reutilização de elementos;
- redução de duplicidade;
- legibilidade;
- evolução da automação.

---

# 📊 Relatórios

O projeto possui configuração para geração de relatórios utilizando **Allure**.

A configuração está em:

```text
config/reports.conf.js
```

O projeto também possui a dependência:

```text
@wdio/allure-reporter
```

e:

```text
allure-commandline
```

Os relatórios podem ser gerados conforme a configuração definida no projeto.

---

# ⚙️ Configurações do WebdriverIO

O arquivo principal de configuração é:

```text
config/wdio.conf.js
```

Ele seleciona o ambiente de execução por meio da variável:

```env
ENVIRONMENT
```

Atualmente estão disponíveis configurações para:

```text
local
saucelabs
```

As configurações específicas estão separadas em:

```text
config/local.conf.js
config/sauce.conf.js
```

---

# 🔐 Segurança

Não versione credenciais da Sauce Labs.

O arquivo `.env` deve permanecer fora do controle de versão.

Exemplo:

```text
.env
```

Também é recomendado utilizar variáveis de ambiente em pipelines de CI/CD em vez de armazenar credenciais diretamente nos arquivos de configuração.

---

# 🌐 Repositório

GitHub:

https://github.com/Edsonk2/ebac-store-mobile-tests

---

# 🌿 Branches

O projeto possui as seguintes branches principais:

```text
main
ios
ci
```

A implementação do fluxo iOS foi integrada à branch principal por meio de merge.

---

# ✅ Status do projeto

### Implementação

- [x] Configuração WebdriverIO
- [x] Configuração Appium
- [x] Page Object Model
- [x] Testes de Login
- [x] Testes de Produtos
- [x] Testes de Busca
- [x] Testes de Checkout
- [x] Configuração Android
- [x] Configuração iOS
- [x] Integração com Sauce Labs
- [x] Aplicação iOS (`LojaEBAC.ipa`)
- [x] Estrutura de suítes
- [x] Configuração de relatórios
- [x] Versionamento com Git

### Execução iOS na Sauce Labs

A execução remota iOS foi configurada e o aplicativo foi disponibilizado no armazenamento da Sauce Labs.

Durante a validação da execução, a Sauce Labs retornou:

```text
Job not started.
Your organization has reached its concurrent session limit.
```

No painel da Sauce Labs também foi identificado:

```text
No minutes available.
You have exhausted all minutes.
```

Dessa forma, a execução remota iOS ficou limitada pelo plano/limite de utilização da conta, e não por uma falha identificada na implementação dos testes.

---

# 📌 Conclusão

Este projeto apresenta uma estrutura de automação mobile utilizando **WebdriverIO + Appium**, com organização baseada em **Page Object Model**, suítes independentes de testes e configurações para execução local e remota.

Os fluxos automatizados abrangem:

```text
Login
Produtos
Busca
Checkout
```

O projeto também possui configuração para automação iOS utilizando **XCUITest** e integração com **Sauce Labs**.

---
