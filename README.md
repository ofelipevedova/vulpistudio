# Vulpis Studio - Website de Design Digital

Um website moderno e minimalista para estúdio de design, inspirado em agências premium como Pixend Agency. Design limpo, grandes tipografias, e animações suaves.

## 🎨 Características

- **Design Minimalista**: Foco em espaço em branco, tipografia e hierarquia visual
- **Grandes Tipografias**: Títulos impactantes que dominam a página
- **Hero Centrado**: Seção de abertura com mensagem principal clara
- **Showcase de Trabalhos**: Galeria de cases com animações ao hover
- **Seção de Serviços**: Cards com descrição dos principais serviços
- **Depoimentos**: Testimonials de clientes satisfeitos
- **Processo Transparente**: Explicação clara dos 4 passos do trabalho
- **Plano de Pricing**: Apresentação de pacote de assinatura
- **FAQ**: Perguntas frequentes respondidas
- **Responsivo**: Funciona perfeitamente em mobile e desktop
- **Performance**: Otimizado com CSS e JavaScript vanilla

## 🚀 Tecnologias

- **HTML5** - Markup semântico e acessível
- **CSS3** - Grid, Flexbox, Animações e Transições
- **JavaScript Vanilla** - Interatividade, Intersection Observer, Smooth Scroll

## 📁 Estrutura do Projeto

```
vulpis-studio/
├── index.html          # Arquivo principal
├── css/
│   └── styles.css      # Estilos globais
├── js/
│   └── main.js         # Lógica e animações
├── images/             # Pasta para imagens
├── README.md           # Documentação
└── .github/
    └── copilot-instructions.md
```

## 🎯 Seções

### Hero
Introdução com título grande, subtítulo e CTA impactantes

### Trabalhos Recentes
Galeria de cases com efeito hover e animação ao scroll

### Serviços
4 serviços principais apresentados em cards elegantes

### Depoimentos
Testimonials de clientes com autor e cargo

### Processo
4 passos do processo de trabalho numerados e explicados

### Pricing
Plano de assinatura com features listadas

### FAQ
6 perguntas frequentes respondidas de forma direta

### Contato
Formulário + informações de contato

## 💻 Como Usar

1. **Abrir no navegador**: Abra `index.html` no seu navegador
2. **Editar conteúdo**: Modifique o texto no `index.html`
3. **Customizar cores**: Altere as variáveis CSS em `css/styles.css`:
   ```css
   :root {
       --color-accent: #ff6b35;  /* Cor de destaque (laranja) */
       --color-primary: #000;     /* Cor primária (preto) */
       --color-light: #f5f5f5;    /* Cor de fundo claro */
   }
   ```

## 🖼️ Imagens

As imagens são placeholders com backgrounds gradientes. Para adicionar suas próprias:

1. Coloque as imagens na pasta `images/`
2. Atualize o HTML substituindo os `.placeholder-image` divs por `<img>` tags
3. Ou use CSS `background-image` nos placeholders

Exemplo:
```html
<img src="images/projeto-01.jpg" alt="Projeto 1">
```

## 🎬 Animações

- **Slide In Up**: Elementos aparecem com movimento para cima ao scroll
- **Hover Effects**: Cards elevam-se ao passar o mouse
- **Fade In**: Imagens aparecem suavemente
- **Intersection Observer**: Animações ativadas ao entrar na viewport
- **Smooth Scroll**: Navegação suave entre seções

## 📱 Responsividade

- **Desktop (1400px+)**: Layout completo otimizado
- **Tablet (768px)**: Ajustes de grid e espaçamento
- **Mobile (480px)**: Layout single column, tipografia reduzida

## 🎨 Customização Rápida

### Cores Principais
```css
--color-primary: #000;      /* Preto */
--color-accent: #ff6b35;    /* Laranja */
--color-light: #f5f5f5;     /* Cinza claro */
--color-text: #333;         /* Texto escuro */
--color-border: #e0e0e0;    /* Bordas */
```

### Tipografia
```css
--font-family-primary: 'Segoe UI', sans-serif;
```

### Transições
```css
--transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

## 📋 Seções Detalhadas

### Hero
- Título grande quebrado em múltiplas linhas
- Subtítulo com cor cinza
- Botão CTA com hover effect

### Services
4 cards em grid, com hover elevação

### Testimonials
3 depoimentos em cards com citação, autor e cargo

### Process
4 passos com números grandes, título e descrição

### Pricing
Plano mensal com valor, features e CTA

### FAQ
6 itens com pergunta e resposta

### Contact
Formulário de contato + informações

## 📞 Próximas Funcionalidades

- [ ] Integrar formulário com backend
- [ ] Adicionar animação de carrossel nos depoimentos
- [ ] Implementar dark mode
- [ ] Adicionar mais casos/projetos dinamicamente
- [ ] Otimizar imagens e performance
- [ ] Adicionar tracking de analytics
- [ ] Integrar com Google Maps

## 🔧 Desenvolvimento

### Adicionar Novo Caso
```html
<div class="case-card">
    <div class="case-image">
        <div class="placeholder-image">Projeto</div>
    </div>
    <div class="case-info">
        <h3 class="case-title">Nome do Projeto</h3>
        <p class="case-category">Categoria</p>
    </div>
</div>
```

### Adicionar Novo Serviço
```html
<div class="service-card">
    <h3>Nome do Serviço</h3>
    <p>Descrição do serviço...</p>
</div>
```

## 📝 Notes

- Todas as animações usam Intersection Observer para performance
- Design mobile-first com breakpoints em 768px e 480px
- Sem dependências externas - apenas HTML/CSS/JavaScript vanilla
- Otimizado para SEO com HTML semântico

---

**Desenvolvido com ❤️ - Vulpis Studio Design**

