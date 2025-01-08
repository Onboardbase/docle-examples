# Using Docle Chat with Vue 3

A simple guide to integrate Docle Chat into your Vue 3 project.

## 🚀 Installation

1. Install Docle Chat in your Vue project:

```sh
npm install @docle/chat
```

2. Create a new component (e.g., `src/components/DocleChat.vue`):

```vue:src/components/DocleChat.vue
<template>
  <docle-chat
    appName="YourAppName"
    apiToken="your_api_token_here"
    suggestionQuestions="How to get started?,What are the features?"
  ></docle-chat>
</template>

<script setup>
  import('@docle/chat')
</script>
```

3. Update your Vite config to recognize the custom element (e.g., `vite.config.js`):

```js:vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'docle-chat'
        }
      }
    })
  ]
})
```

4. Use the component in your page (e.g., `src/App.vue`):

```vue:src/App.vue
<script setup>
import DocleChat from './components/DocleChat.vue'
</script>

<template>
  <DocleChat />
</template>
```

## ⚙️ Key Implementation Notes

- Configure Vite to recognize `docle-chat` as a custom element


## ⚙️ Configuration

Replace the following values in your docle-chat element:
- `appName`: Your application name
- `apiToken`: Your Docle API token
- `suggestionQuestions`: Comma-separated list of suggested questions

## 📚 Documentation

For more details about Docle Chat configuration options, visit [Docle's documentation](https://docle.co).