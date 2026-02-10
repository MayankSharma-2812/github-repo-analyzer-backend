# GitHub Repo Analyzer - Server

A powerful, scalable backend API for analyzing GitHub repositories with AI-powered insights.

## 🚀 Features

- **RESTful API** - Clean, well-documented endpoints
- **GitHub Integration** - Direct GitHub API integration
- **AI Analysis** - Intelligent repository insights
- **Error Handling** - Comprehensive error management
- **CORS Support** - Cross-origin requests enabled
- **TypeScript** - Type-safe development
- **Bun Runtime** - Ultra-fast JavaScript runtime

## 🛠️ Tech Stack

- **Bun** - Ultra-fast JavaScript runtime
- **TypeScript** - Type-safe development
- **Express.js** - Fast, minimalist web framework
- **Octokit** - Official GitHub SDK
- **Zod** - Runtime type validation
- **Node.js** - Compatible runtime environment

## 📦 Installation

### Prerequisites

- Bun 1.0+
- Node.js 18+ (alternative)
- GitHub Personal Access Token

### Setup

```bash
# Clone the repository
git clone https://github.com/MayankSharma-2812/github-repo-analyzer.git
cd github-repo-analyzer/server

# Install dependencies with Bun
bun install

# Or with npm
npm install

# Start development server
bun run dev

# Start production server
bun start
```

## 🔧 Environment Variables

Create a `.env` file in the root:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# GitHub API
GITHUB_TOKEN=your_github_personal_access_token

# CORS Configuration
ALLOWED_ORIGINS=https://github-repo-analyzer-client.onrender.com,https://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### GitHub Token Setup

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token"
3. Select scopes: `public_repo`, `read:org`
4. Copy the token and add to `.env` file

## 🌐 Deployment

### Deploy to Render

```bash
# Deploy to Render
# Configure build command: bun install
# Configure start command: bun run index.ts
# Add environment variables in Render dashboard
```

### Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway up
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker Deployment

```bash
# Build Docker image
docker build -t github-repo-analyzer-server .

# Run container
docker run -p 3001:3001 --env-file .env github-repo-analyzer-server
```

## 📁 Project Structure

```
server/
├── src/
│   ├── analyzer/          # Analysis logic
│   │   ├── insightRules.ts
│   │   ├── techDetector.ts
│   │   └── complexityAnalyzer.ts
│   ├── routes/            # API routes
│   │   └── analyze.routes.ts
│   ├── services/          # External services
│   │   └── github.service.ts
│   ├── middleware/        # Express middleware
│   │   ├── cors.ts
│   │   ├── errorHandler.ts
│   │   └── rateLimiter.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   └── index.ts          # Server entry point
├── .env                 # Environment variables
├── .gitignore           # Git ignore rules
├── bun.lock            # Dependency lock file
├── package.json        # Dependencies
└── README.md           # This file
```

## 🔌 API Endpoints

### POST /api/analyze

Analyzes a GitHub repository and returns comprehensive insights.

**Request Body:**

```json
{
  "repoUrl": "https://github.com/owner/repo"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "repo": {
      "name": "repository-name",
      "description": "Repository description",
      "stars": 1234,
      "forks": 567,
      "language": "TypeScript"
    },
    "techStack": ["React", "TypeScript", "Node.js"],
    "complexity": "Intermediate",
    "metrics": {
      "files": 45,
      "folders": 12,
      "maxDepth": 4,
      "hasTests": true
    },
    "insights": [
      "Well-structured codebase with clear separation of concerns",
      "Active development with recent commits",
      "Good test coverage detected"
    ]
  }
}
```

**Error Response:**

```json
{
  "success": false,
  "error": "Repository not found or private"
}
```

## 🛡️ Security Features

- **Rate Limiting** - Prevents API abuse
- **Input Validation** - Zod schema validation
- **CORS Protection** - Configurable allowed origins
- **Error Sanitization** - No sensitive data leakage
- **GitHub Token Security** - Environment variable storage

## 📊 Performance

- **Bun Runtime** - 3x faster than Node.js
- **GitHub Caching** - Reduces API calls
- **Async Processing** - Non-blocking operations
- **Memory Management** - Efficient resource usage

## 🧪 Testing

```bash
# Run tests
bun test

# Run tests with coverage
bun run test:coverage

# Run integration tests
bun run test:integration
```

## 📝 Logging

Structured logging with different levels:

- **Error** - Critical issues
- **Warn** - Warning messages
- **Info** - General information
- **Debug** - Development debugging

## 🔍 Monitoring

### Health Check

```bash
curl http://localhost:3001/health
```

### Metrics Endpoint

```bash
curl http://localhost:3001/metrics
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Add proper error handling
- Include JSDoc comments
- Write tests for new features
- Follow conventional commits

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

**Mayank Sharma**

- GitHub: [@MayankSharma-2812](https://github.com/MayankSharma-2812)
- LinkedIn: [Mayank Sharma](https://www.linkedin.com/in/mayank-sharma-7b277b312)
- Portfolio: [Your Portfolio](https://your-portfolio.com)

## 🙏 Acknowledgments

- Bun team for the amazing runtime
- GitHub for the Octokit SDK
- Express.js team for the framework
- All contributors and users

---

**Built with ❤️ by [Mayank Sharma](https://github.com/MayankSharma-2812)**
