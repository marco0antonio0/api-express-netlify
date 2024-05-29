
# Express on Netlify with Layered Architecture

![img](https://github.com/marco0antonio0/About-express-netlify/raw/main/imageReadme/imageREADME.png)

Este projeto é uma API para geração de atas acadêmicas, construída utilizando Express e implementada com TypeScript. A arquitetura do projeto segue o padrão em camadas, semelhante ao framework NestJS, para facilitar a organização e manutenção do código.

## Estrutura do Projeto

```plaintext
project/
│
├── netlify/
│   └── functions/
│       └── api.ts
│
├── package.json
├── netlify.toml
├── tsconfig.json
├── node_modules/
├── app/
│   ├── controller/
│   │   └── hello.controller.ts
│   ├── service/
│       └── hello.service.ts
│   └── app.module.ts
├── dist/
└── index.ts
```

## Descrição das Pastas e Arquivos

- **netlify/functions/api.ts**: Configuração do servidor para ser utilizado com o Netlify Functions e Serverless.
- **app/app.module.ts**: Módulo principal que registra todos os controladores e serviços.
- **app/controller/hello.controller.ts**: Controlador que trata as requisições HTTP para a rota `/hello`.
- **app/service/hello.service.ts**: Serviço que contém a lógica de negócios para gerar a mensagem "Hello World!".
- **index.ts**: Ponto de entrada da aplicação, inicializa o servidor Express.
- **tsconfig.json**: Configurações do TypeScript.
- **package.json**: Configurações do npm e lista de dependências.

## Arquitetura do Projeto

Este projeto segue a **Arquitetura em Camadas**, que divide a aplicação em módulos distintos, cada um com uma responsabilidade específica.

### Camadas

1. **App**: Configuração e inicialização da aplicação.
2. **Controller (Controladores)**: Manipula as requisições HTTP e retorna as respostas apropriadas.
3. **Service (Serviços)**: Contém a lógica de negócios da aplicação.

### Benefícios da Arquitetura em Camadas

- **Separação de Preocupações**: Facilita a manutenção e a compreensão do código.
- **Modularidade**: Componentes desacoplados permitem modificações independentes.
- **Reutilização de Código**: Serviços podem ser reutilizados em diferentes partes da aplicação.
- **Facilidade de Testes**: Separação clara de responsabilidades facilita a escrita de testes.

## Criação de Rotas com App, Controller e Service

### Passo 1: Definir a Rota no Controlador

No arquivo `hello.controller.ts`, definimos um controlador que manipula as requisições HTTP para a rota `/hello`:

```typescript
import { Router, Request, Response } from 'express';
import { helloService } from '../service/hello.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const message = helloService.getHelloMessage();
  res.send(message);
});

export const helloController = router;
```

### Passo 2: Implementar a Lógica de Negócios no Serviço

No arquivo `hello.service.ts`, implementamos a lógica de negócios necessária para atender a solicitação:

```typescript
const getHelloMessage = (): string => {
  return 'Hello World!';
};

export const helloService = { getHelloMessage };
```

### Passo 3: Registrar o Controlador no Módulo Principal

No arquivo `app.module.ts`, registramos o controlador:

```typescript
import { Application } from 'express';
import { helloController } from './controller/hello.controller';

export const AppModule = (app: Application) => {
  app.use('/api/hello', helloController);
};
```

### Passo 4: Inicializar o Servidor

No arquivo `index.ts`, inicializamos o servidor Express e aplicamos o módulo principal:

```typescript
import express from 'express';
import { AppModule } from './app/app.module';

const app = express();
const port = process.env.PORT || 3000;

AppModule(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo para contribuir:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto é licenciado sob a licença ISC. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
