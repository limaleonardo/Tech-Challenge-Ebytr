# Tech-Challenge-Ebytr

Repositório destinado ao desenvolvimento dos requisitos solicitados pela Ebytr em seu processo seletivo
## Pré-requisitos:

Este é um trabalho em andamento e, por hora, só pode ser utilizado em ambiente de desenvolvimento
assim alguns requisitos são necessários:
 - Postman instalado e configurado
 - As instruções deste manual fora testadas utilizando Linux-Mint 20.01
 - node.js v16.6.2 ou superior
## Como Utilizar:

### Clone o repositório

Método ssh:
```bash
git clone git@github.com:limaleonardo/Tech-Challenge-Ebytr.git
```
método HTTPS: 
```bash
git clone https://github.com/limaleonardo/Tech-Challenge-Ebytr.git
```
obs: é necessário ter o git configurado em seu computador, mais informações em:
https://docs.github.com/pt/get-started/quickstart

### Acesse a pasta 'server e instale as dependencias

```bash
cd Tech-Challenge-Ebytr/server && npm install
```

###  Inicie a aplicação
```bash
npm run start-dev
```

### Envie suas requisições:

Atualmente é possivel enviar requisições dos tipos:
- Post
  - rota: localhost:5000/tasks
  - Espera um objeto:
    ```code
    {
      title: 'string',
      status: 'string'
    }
    ```
  e retorna o objeto criado: 
  ```code
    {
      _id: 'ObjectId'
      title: 'string',
      status: 'string'
      date: 'date string' (dd/mm/yyyy)
    }
    ```
- Get
  - Rota: localhost:5000/tasks
  - Não espera nenhum parâmetro adicional
  - Retorna um Array com todos os documentos presentes na coleção.

- Put
  - rota: localhost:5000/tasks/ID
  - espera um ID válido na rota
  - espera o mesmo body do método post e retorna o objeto atualizado

- Delete
   - rota: localhost:5000/tasks/ID
   - espera um ID válido na rota
   - Retorna o documento deletado



