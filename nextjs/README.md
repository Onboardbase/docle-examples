# Using Docle Chat with Next.js

A simple guide to integrate Docle Chat into your Next.js project.

## 🚀 Installation

1. Install Docle Chat in your Next.js project:

```sh
npm install @docle/chat
```

2. Create a client component (e.g., `src/components/DocleChat.tsx`):

```tsx:src/components/DocleChat.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import the component with no SSR
const DocleChat = dynamic(
  () => import('@docle/chat/react').then((mod) => mod.DocleChat),
  { ssr: false }
);

export default DocleChat;
```

3. Use the component in your page (e.g., `src/app/page.tsx`):

```tsx:src/app/page.tsx
import DocleChat from '@/components/DocleChat';

export default function Home() {
  return (
    <main>
      <h1>My Next.js Site</h1>
      <DocleChat
        appName="YourAppName"
        apiToken="your_api_token_here"
        suggestionQuestions="How to get started?,What are the features?"
      />
    </main>
  );
}
```

## ⚙️ Key Implementation Notes

1. The component must be client-side rendered using `'use client'`
2. Use `next/dynamic` to prevent SSR issues

## ⚙️ Configuration

Replace the following values in your docle-chat element:
- `appName`: Your application name
- `apiToken`: Your Docle API token
- `suggestionQuestions`: Comma-separated list of suggested questions

## 📚 Documentation

For more details about Docle Chat configuration options, visit [Docle's documentation](https://docle.co).