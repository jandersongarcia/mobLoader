# MobLoader

O MobLoader é um componente simples de preloader desenvolvido para ser facilmente integrado ao framework Mob, proporcionando uma experiência suave de carregamento para a sua aplicação. Siga as instruções abaixo para instalação, utilização e personalização conforme suas necessidades.

## Instalação

Adicione o MobLoader à sua aplicação Mob utilizando o seguinte comando no prompt do diretório do Mob:

```bash
composer mob-generator install mobloader
```

Este comando baixará e instalará os arquivos necessários do MobLoader em sua aplicação.

### Atualização para Nova Versão

Para reinstalar ou atualizar o MobLoader para uma nova versão, execute o comando:

```bash
composer mob-generator update mobloader
```

## Utilização

Após a instalação, o MobLoader entra automaticamente em funcionamento.

## Desativação

Para desativar o MobLoader, execute o comando:

```bash
composer mob-generator enabled mobloader
```

Para reativá-lo:

```bash
composer mob-generator disabled mobloader
```

## Desinstalação

Se desejar remover completamente o MobLoader, execute o seguinte comando:

```bash
composer mob-generator delete mobloader
```

## Personalização

Os arquivos do MobLoader estão localizados em `\packeges\MobLoader`. Sinta-se à vontade para personalizar esses arquivos de acordo com as necessidades específicas da sua aplicação.

## Arquivos

- **mobloader.css**: Estilos CSS para o MobLoader.
- **mobloader.js**: Lógica JavaScript para o MobLoader.
- **mobloader.php**: Arquivo PHP para o MobLoader.

Certifique-se de ajustar as configurações para melhor atender às necessidades específicas da sua aplicação.