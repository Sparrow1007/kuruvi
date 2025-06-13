# Kuruvi AI - Lightweight AI Assistant

A beautiful, lightweight AI assistant interface built with React, TypeScript, and Tailwind CSS.

## Features

- 🤖 Multiple AI modes (General Q&A, Customer Support, Personal Assistant, Domain Expert)
- 💬 Real-time chat interface with typing indicators
- 📱 Fully responsive design
- 🎨 Beautiful, production-ready UI
- ⚡ Fast and lightweight
- 🌙 Dark mode support (coming soon)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kuruvi-ai.git
cd kuruvi-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push your code to the `main` branch
2. Enable GitHub Pages in your repository settings
3. Set the source to "GitHub Actions"
4. The site will be automatically deployed on every push to main

### Manual Deployment

You can also deploy the built files to any static hosting service like Netlify, Vercel, or traditional web hosting.

## Customization

### AI Integration

Currently, the app uses mock responses. To integrate with a real AI service:

1. Update the `generateResponse` function in `src/hooks/useChat.ts`
2. Add your AI API credentials to environment variables
3. Install necessary SDK packages for your chosen AI service

### Styling

The app uses Tailwind CSS for styling. You can customize:

- Colors and themes in `tailwind.config.js`
- Component styles in individual component files
- Global styles in `src/index.css`

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with modern React and TypeScript
- Styled with Tailwind CSS
- Icons from Lucide React