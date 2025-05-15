# WhatsApp Backup Script

Script para fazer backup de todas as conversas do WhatsApp usando a biblioteca whatsapp-web.js.

## Descrição

Este projeto é uma ferramenta para criar backups de todas as suas conversas do WhatsApp. Ele conecta-se à sua conta do WhatsApp Web via QR Code e salva as mensagens em arquivos JSON.

## Funcionalidades

- Conexão automática ao WhatsApp Web via QR Code
- Backup de todas as conversas do usuário
- Salva mensagens, incluindo informações como:
  - ID da mensagem
  - Remetente
  - Corpo da mensagem
  - Data e hora
  - Informações sobre mídia e reações
- Os dados são salvos em formato JSON para fácil portabilidade e análise

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (gerenciador de pacotes do Node.js)
- Acesso à internet para conectar ao WhatsApp Web
- Um dispositivo móvel com WhatsApp instalado para escanear o QR Code

## Instalação

1. Clone este repositório ou baixe os arquivos
2. Navegue até a pasta do projeto
3. Instale as dependências:

```bash
npm install
```

## Como usar

1. Execute o script:

```bash
npx tsx main.ts
```

2. Quando o QR Code aparecer no terminal, escaneie-o com seu WhatsApp no celular
   - Abra o WhatsApp no seu celular
   - Toque em ⋮ (três pontos) ou Configurações
   - Selecione "WhatsApp Web" ou "Dispositivos conectados"
   - Aponte a câmera do seu celular para o QR Code no terminal

3. Após a conexão bem-sucedida, o script exibirá "Client is ready!" no terminal
4. Pressione Enter quando solicitado para iniciar o processo de backup
5. O backup das conversas será salvo na pasta `output` como arquivo JSON

## Estrutura do Projeto

- `main.ts` - Arquivo principal que coordena o processo de backup
- `Client/Zap.ts` - Configuração e inicialização do cliente WhatsApp
- `Client/GetChats.ts` - Funções para obter e formatar as conversas
- `data/FileJson.ts` - Funções para salvar os dados em formato JSON
- `output/` - Pasta onde os backups são armazenados

## Personalização

- Para alterar o número máximo de contatos a serem processados, modifique o parâmetro `MaxContacts` na função `GetChatsMax` no arquivo `main.ts`
- Para alterar o nome ou local do arquivo de saída, edite a função `saveJsonToFile` no arquivo `data/FileJson.ts`

## Limitações

- Este script depende da biblioteca whatsapp-web.js, que pode ser afetada por mudanças na API do WhatsApp
- O backup é feito apenas para texto e metadados de mensagens; mídias como fotos e vídeos não são baixadas
- A execução do script abre uma instância do navegador para se conectar ao WhatsApp Web

## Tecnologias utilizadas

- TypeScript
- Node.js
- whatsapp-web.js
- qrcode-terminal

## Licença

ISC

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.