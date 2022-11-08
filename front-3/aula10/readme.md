# Criar uma aplicação Backend

1. Criar o pacote
```bash
npm init -y
```

2. Instala a biblioteca do express que gerencia as requisiçoes HTTP
```bash
npm install express
```

3. Instalar as dependencias de desenvolvimento
```bash
npm install typescript --save-dev
npm install ts-node-dev --save-dev
npm install @types/express --save-dev
npm install @types/node --save-dev
```

4. Configurar o tsconfig
```bash
npx tsc --init
```

5. Configura script de desenvolvimento
```json
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only ./src/index.ts"
  },
```