<!-- Instrções customizadas para o projeto Vulpis Studio -->

# Vulpis Studio - Instruções do Projeto

## Sobre o Projeto
Website moderno e minimalista para estúdio de design digital, inspirado em agências premium. Características:
- Design centrado e tipografia grande
- Hero minimalista com CTA
- Showcase de cases/projetos
- Seções de serviços, depoimentos e processo
- Plano de pricing e FAQ
- Animações suaves via Intersection Observer
- Fully responsivo (HTML/CSS/JavaScript Vanilla)

## Arquitetura
- `index.html` - Marcação semântica com sections para cada seção (Hero, Cases, Services, Testimonials, Process, Pricing, FAQ, Contact)
- `css/styles.css` - Design minimalista com grid/flexbox, variáveis CSS e animações
- `js/main.js` - JavaScript vanilla para scroll suave, observação de viewport, animações
- `images/` - Pasta para assets visuais (com placeholders gradientes)

## Design System
- **Cores**: Primária (#000), Accent (#ff6b35), Light (#f5f5f5)
- **Tipografia**: Segoe UI para primária
- **Animações**: Fade-in ao scroll, Hover effects nos cards
- **Responsividade**: Breakpoints em 768px e 480px

## Seções
1. **Hero**: Título grande centralizado + subtítulo + CTA
2. **Cases**: Grid de trabalhos recentes
3. **Services**: 4 cards de serviços principais
4. **Testimonials**: 3 depoimentos de clientes
5. **Process**: 4 passos numerados do processo
6. **Pricing**: Plano de assinatura mensal
7. **FAQ**: 6 perguntas frequentes respondidas
8. **Contact**: Formulário + info de contato

## Desenvolvimento
- **Sem dependências**: Apenas HTML/CSS/JavaScript vanilla
- **Performance**: Lazy loading de animações com Intersection Observer
- **SEO**: HTML semântico e meta tags
- **Mobile-first**: Design otimizado desde o mobile

## Próximas Melhorias
- Integração com backend para formulário
- Carrossel de depoimentos
- Dark mode
- Casos dinâmicos via API
- Analytics e tracking

