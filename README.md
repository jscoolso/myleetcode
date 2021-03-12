## 
TypeScript + Koa + Babel
搭建一个用于练习TypeScrpit算法的项目，支持热加载与调试。
### 项目初始化init
```bash
npm init -y
git init
tsc --init
```

### 安装koa ts
```bash
npm i --save koa koa-router
npm i --save-dev @types/koa @types/koa-router
npm i --save-dev typescript nodemon

```

### 代码lint+format
eslint+prettier
```bash
vscode EsLint Prettier插件
eslint --init
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};

prettier规则
{
  "tabWidth": 2,
  "printWidth": 150,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "arrowParens": "always",
  "overrides": [
    {
      "files": ["*.json", ".eslintrc", ".tslintrc", ".prettierrc", ".tern-project"],
      "options": {
        "parser": "json",
        "tabWidth": 2
      }
    },
    {
      "files": "*.{css,sass,scss,less}",
      "options": {
        "parser": "scss",
        "tabWidth": 2
      }
    },
    {
      "files": "*.vue",
      "options": {
        "parser": "vue",
        "tabWidth": 2
      }
    },
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript",
        "tabWidth": 2
      }
    },
    {
      "files": "*.tsx",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}



```

### ts+babel
```bash

npm i --save @babel/runtime
npm i --save-dev @babel/cli @babel/core @babel/node  babel-plugin-module-resolver
npm i --save-dev @babel/preset-env @babel/preset-typescript @babel/plugin-transform-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-transform-runtime 
#处理babel转tsconfig.json中的别名paths['@src/']
npm i --save-dev babel-plugin-module-resolver

module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-typescript',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      //处理babel转tsconfig.json中的别名paths['@src/']
      'module-resolver',
      {
        alias: {
          '@src': './src'
        }
      }
    ]
  ]
};

```

### 单元测试jest
```bash
npm i --save-dev  @types/jest jest babel-jest
# jest.config.js
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1'
  },
  // 开启覆盖统计功能
  collectCoverage: true,
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    '**/tests/base/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  preset: '@shelf/jest-mongodb'
};
```

### 工具库
```bash
npm i --save lodash
npm i --save-dev @types/lodash

```
### 开发调试
```bash
# package.json scripts
  "scripts": {
    "test": "jest",
    "start": "babel-node ./src/server.ts --extensions '.ts'",
    "serve": "nodemon --watch 'src/*' -e ts,tsx --exec babel-node ./src/server.ts --extensions '.ts'",
    "tojs": "rm -rf dist/* && tsc",
    "lint": "eslint src --ext .ts --fix"
  },
# vscode launch.json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "name": "TypeScript+Node调试",
        "request": "launch",
        "type": "node",
        "runtimeExecutable": "babel-node",
        "program": "${workspaceRoot}/src/server.ts",
        "args": ["--extensions", ".ts"],
        "restart": true,
        "console": "integratedTerminal"
      },
      {
        "type": "node",
        "request": "launch",
        "name": "Jest All",
        "program": "${workspaceFolder}/node_modules/.bin/jest",
        "args": ["--runInBand"],
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen",
        "disableOptimisticBPs": true,
        "windows": {
          "program": "${workspaceFolder}/node_modules/jest/bin/jest"
        }
      },
      {
        "type": "node",
        "request": "launch",
        "name": "Jest Current File",
        "program": "${workspaceFolder}/node_modules/.bin/jest",
        "args": ["${fileBasenameNoExtension}", "--config", "jest.config.js"],
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen",
        "disableOptimisticBPs": true,
        "windows": {
          "program": "${workspaceFolder}/node_modules/jest/bin/jest"
        }
      }
    ]
  }
  
```