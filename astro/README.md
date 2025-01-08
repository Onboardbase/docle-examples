# Using Docle Chat with Astro

A simple guide to integrate Docle Chat into your Astro project.

## 🚀 Installation

1. First, install Docle Chat in your Astro project:

```sh
npm install @docle/chat
```

2. Create a new component (e.g., `src/components/DocleChat.astro`):

```astro:src/components/DocleChat.astro
<docle-chat
  appName="YourAppName"
  apiToken="your_api_token_here"
  suggestionQuestions="How to get started?,What are the features?,How to customize?"
></docle-chat>

<script>
  // Import and register the web component on the client side
  import "@docle/chat";
</script>
```

3. Use the component in your page (e.g., `src/pages/index.astro`):

```astro:src/pages/index.astro
---
import DocleChat from '../components/DocleChat.astro';
---

<html>
  <body>
    <h1>My Astro Site</h1>
    <DocleChat />
  </body>
</html>
```

## ⚙️ Configuration

Replace the following values in your DocleChat component:
- `appName`: Your application name
- `apiToken`: Your Docle API token
- `suggestionQuestions`: Comma-separated list of suggested questions

## 📚 Documentation

For more details about Docle Chat configuration options, visit [Docle's documentation](https://docle.co).