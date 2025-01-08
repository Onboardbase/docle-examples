# Docle Chat Examples

This repository contains example integrations of Docle Chat with various frameworks and platforms. Each example demonstrates how to properly integrate and configure Docle Chat in different environments.

## 📦 Available Examples

- [Next.js](/nextjs) - Integration with Next.js using client components
- [React + Vite](/react-with-vite) - Integration with React and Vite
- [Astro](/astro) - Integration with Astro using web components
- [Vue](/vue) - Integration with Vue3 using web components
- [HTML (CDN)](/html-with-cdn) - Simple HTML integration using CDN

## 🔑 Common Configuration

All examples require the following configuration:
```js
{
  appName: "YourAppName",        // Your application name
  apiToken: "your_api_token",    // Your Docle API token
  suggestionQuestions: "How to use Docle Chat?,What is Docle Chat?,How to get started with Docle Chat?,What are the features of Docle Chat?"     // Comma-separated suggested questions
}
```

## 📚 Documentation

For detailed configuration options and API reference, visit [Docle's documentation](https://docle.dev).

## 🤝 Contributing

Feel free to contribute additional framework examples or improvements to existing ones by submitting a pull request.