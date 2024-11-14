import * as fs from 'fs';
import * as path from 'path';

export function saveJsonToFile(jsonData: object): void {
  const outputDir = './output';  // Diretório onde o arquivo será salvo
  const filePath = path.join(outputDir, 'data.json');  // Caminho completo para o arquivo

  // Verifica se o diretório de saída existe, se não, cria o diretório
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Converte o objeto JSON em uma string e salva no arquivo
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
  
  console.log('Arquivo salvo em:', filePath);
}


