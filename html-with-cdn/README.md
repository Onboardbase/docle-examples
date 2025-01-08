# Using Docle Chat with HTML (CDN)

A simple guide to integrate Docle Chat into your HTML project using CDN.

## 🚀 Installation

Add Docle Chat to your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Import Docle Chat via CDN -->
    <script 
      type="module" 
      src="https://cdn.jsdelivr.net/npm/@docle/chat/dist/docle-chat.js"
    ></script>
</head>
<body>
    <!-- Docle Chat component -->
    <docle-chat
        appName="YourAppName"
        apiToken="your_api_token_here"
        suggestionQuestions="How to get started?,What are the features?,How to customize?"
    ></docle-chat>
</body>
</html>
```

## ⚙️ Configuration

Replace the following values in your docle-chat element:
- `appName`: Your application name
- `apiToken`: Your Docle API token
- `suggestionQuestions`: Comma-separated list of suggested questions

## 📚 Documentation

For more details about Docle Chat configuration options, visit [Docle's documentation](https://docle.dev).