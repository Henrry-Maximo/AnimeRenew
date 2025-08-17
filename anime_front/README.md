# 🎌 MyBestAnime

> Sistema Web moderno para gerenciamento de animes e mangás com interface inspirada em jogos e estética anime.

## 📖 Sobre o Projeto

O **MyBestAnime** é uma aplicação web desenvolvida para otakus organizarem e gerenciarem suas listas de animes e mangás favoritos. Com uma interface moderna inspirada no GTA 5 e elementos visuais de anime, oferece uma experiência única para acompanhar seu progresso de visualização e leitura.

### ✨ Funcionalidades

- 📺 **Gerenciamento de Animes**: Organize sua lista pessoal de animes
- 📚 **Controle de Mangás**: Acompanhe capítulos lidos
- ⭐ **Sistema de Avaliação**: Avalie e comente títulos
- 🎯 **Progresso**: Monitore episódios assistidos
- 👥 **Comunidade**: Conecte-se com outros otakus
- 🔐 **Autenticação**: Sistema seguro de login/registro

## 🎨 Design

- **Estética Anime**: Interface com cores vibrantes e efeitos neon
- **Layout GTA 5**: Inspirado na tela de carregamento do jogo
- **Glassmorphism**: Efeitos de vidro fosco e transparências
- **Responsivo**: Adaptável para desktop e mobile
- **Vídeo Background**: Chainsaw Man como plano de fundo

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18.1.0** - Biblioteca principal
- **React Router DOM 6** - Roteamento SPA
- **React Bootstrap 2.4.0** - Componentes UI
- **Bootstrap 5.1.3** - Framework CSS
- **CSS Modules** - Estilização modular

### Utilitários
- **Axios 0.27.2** - Cliente HTTP para API
- **React Modal 3.16.1** - Componentes de modal
- **React Simple Typewriter 5.0.1** - Efeitos de digitação
- **Fontsource Roboto 5.0.8** - Tipografia

### Desenvolvimento
- **React Scripts 5.0.1** - Ferramentas de build
- **Testing Library** - Testes unitários
- **Web Vitals** - Métricas de performance

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Henrry-Maximo/AnimeRenew.git

# Navegue para o diretório
cd AnimeRenew/anime_front

# Instale as dependências
yarn install
# ou
npm install
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
yarn start:dev          # Inicia servidor de desenvolvimento

# Build
yarn generate:build     # Gera build de produção

# Testes
yarn test              # Executa testes unitários

# Ejetar configurações (irreversível)
yarn eject
```

## 🌐 Acesso

Após iniciar o servidor de desenvolvimento:
- **URL**: [http://localhost:3000](http://localhost:3000)
- **Hot Reload**: Ativado automaticamente
- **Lint**: Erros exibidos no console

## 📁 Estrutura do Projeto

```
anime_front/
├── public/
│   ├── chinsaw-man.mp4     # Vídeo de background
│   └── index.html
├── src/
│   ├── pages/
│   │   └── _Default/
│   │       ├── Login/      # Tela de login
│   │       └── Register/   # Tela de registro
│   ├── http/              # Configuração Axios
│   └── App.js
└── package.json
```

## 🔄 Migração para TypeScript

**Status**: Planejado para próximas versões

### Benefícios da migração:
- ✅ **Type Safety**: Detecção de erros em tempo de compilação
- ✅ **IntelliSense**: Melhor autocomplete e documentação
- ✅ **Refatoração**: Mudanças mais seguras no código
- ✅ **Manutenibilidade**: Código mais legível e documentado

### Dependências adicionais necessárias:
```json
{
  "@types/react": "^18.0.0",
  "@types/react-dom": "^18.0.0",
  "@types/react-modal": "^3.13.1",
  "typescript": "^4.9.0"
}
```

## 🎯 Roadmap

- [ ] 🔄 Migração para TypeScript
- [ ] 🎨 Tema dark/light
- [ ] 📱 App mobile (React Native)
- [ ] 🔍 Sistema de busca avançada
- [ ] 📊 Dashboard com estatísticas
- [ ] 🌐 Integração com APIs de anime
- [ ] 💬 Sistema de comentários
- [ ] 🏆 Sistema de conquistas

## 📸 Screenshots

![AnimeRenew Login](https://github.com/Henrry-Maximo/AnimeRenew/assets/99754637/b084fd9b-eebf-45eb-9907-777faeb61c4b)

![AnimeRenew Dashboard](https://github.com/Henrry-Maximo/AnimeRenew/assets/99754637/3891441f-cf50-4928-9b5b-da93f2bdddf6)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Henrry Máximo**
- GitHub: [@Henrry-Maximo](https://github.com/Henrry-Maximo)
- LinkedIn: [Henrry Máximo](https://linkedin.com/in/henrry-maximo)

---

⭐ **Status**: Em desenvolvimento ativo

🎌 Feito com ❤️ para a comunidade otaku
