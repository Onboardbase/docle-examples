# Using Docle Chat with React + Vite

A simple guide to integrate Docle Chat into your React + Vite project.

## 🚀 Installation

1. Install Docle Chat in your React + Vite project:

```sh
npm install @docle/chat
```

2. Import and use the component in your React file (e.g., `src/App.tsx`):

```tsx:src/App.tsx
import { DocleChat } from "@docle/chat/react";

function App() {
  return (
    <DocleChat
      appName="YourAppName"
      apiToken="your_api_token_here"
      suggestionQuestions="How to get started?,What are the features?"
      style={{
        textAlign: "start",
      }}
    />
  );
}

export default App;
```

## ⚙️ Configuration

Replace the following values in your docle-chat element:
- `appName`: Your application name
- `apiToken`: Your Docle API token
- `suggestionQuestions`: Comma-separated list of suggested questions

## 📚 Documentation

For more details about Docle Chat configuration options, visit [Docle's documentation](https://docle.dev).