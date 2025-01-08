"use client";
import dynamic from "next/dynamic";

// Dynamically import the component with no SSR
export const DocleChat = dynamic(
  async () => {
    const { DocleChat: DocleChatComponent } = await import("@docle/chat/react");
    return DocleChatComponent;
  },
  { ssr: false } // This ensures the component only renders on the client side
);
