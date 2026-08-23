const WRITING_TOOLS = [
  {
    name: "ChatGPT",
    bestFor: "General writing, brainstorming, editing and research",
    pricing: "Free plan available; paid plans available",
    free: true,
    description: "A general-purpose AI assistant for drafting, rewriting, summarizing, brainstorming and content workflows.",
    pros: ["Very versatile", "Broad ecosystem", "Useful for many writing tasks"],
    cons: ["Limits vary by plan", "Important facts should be verified"],
    verdict: "Best all-round starting point for most writing workflows.",
    url: "https://chatgpt.com/"
  },
  {
    name: "Claude",
    bestFor: "Long-form writing, document work and careful editing",
    pricing: "Free access available; paid plans available",
    free: true,
    description: "An AI assistant well suited to long documents, drafting, rewriting and analytical writing.",
    pros: ["Strong long-form workflow", "Useful document handling", "Good editing assistant"],
    cons: ["Limits vary by plan", "Features change over time"],
    verdict: "A strong choice for long-form and document-heavy writing.",
    url: "https://claude.ai/"
  },
  {
    name: "Gemini",
    bestFor: "Writing, research and Google-connected workflows",
    pricing: "Free access available; paid options available",
    free: true,
    description: "Google's AI assistant for drafting, brainstorming, research and productivity workflows.",
    pros: ["Google ecosystem", "Useful research workflows", "Multimodal capabilities"],
    cons: ["Availability varies by region", "Features change over time"],
    verdict: "A strong option when your workflow already uses Google services.",
    url: "https://gemini.google.com/"
  },
  {
    name: "Jasper",
    bestFor: "Marketing content, brand voice and team workflows",
    pricing: "Paid plans; verify current pricing",
    free: false,
    description: "An AI platform focused on marketing and brand-oriented content creation.",
    pros: ["Marketing focused", "Brand workflow features", "Team oriented"],
    cons: ["Primarily paid", "More specialized than general assistants"],
    verdict: "Interesting for professional marketing teams.",
    url: "https://www.jasper.ai/"
  },
  {
    name: "Copy.ai",
    bestFor: "Marketing copy, sales and go-to-market workflows",
    pricing: "Free/paid options may vary; verify current pricing",
    free: true,
    description: "AI-powered workflows for marketing, sales and business content production.",
    pros: ["Workflow oriented", "Marketing use cases", "Business focused"],
    cons: ["Plan limits vary", "Advanced features may require paid access"],
    verdict: "A good candidate for structured marketing workflows.",
    url: "https://www.copy.ai/"
  },
  {
    name: "Grammarly",
    bestFor: "Grammar, rewriting, tone and everyday writing improvement",
    pricing: "Free and paid options; verify current pricing",
    free: true,
    description: "Writing assistance focused on clarity, grammar, tone and revision.",
    pros: ["Easy to use", "Strong editing workflow", "Useful for everyday writing"],
    cons: ["Advanced features require paid access", "More editor than generator"],
    verdict: "One of the most practical tools for polishing existing text.",
    url: "https://www.grammarly.com/"
  },
  {
    name: "Writesonic",
    bestFor: "AI content creation, SEO content and marketing",
    pricing: "Free/paid options may vary; verify current pricing",
    free: true,
    description: "An AI content platform covering writing, marketing and search-oriented content workflows.",
    pros: ["Content focused", "SEO-oriented features", "Marketing use cases"],
    cons: ["Usage limits depend on plan", "Features change frequently"],
    verdict: "Useful for content teams that want writing plus SEO workflows.",
    url: "https://writesonic.com/"
  },
  {
    name: "Sudowrite",
    bestFor: "Creative writing, fiction and story development",
    pricing: "Paid plans; verify current pricing",
    free: false,
    description: "An AI writing assistant designed for fiction and creative storytelling.",
    pros: ["Creative-writing focused", "Story development features", "Useful for authors"],
    cons: ["Niche audience", "Paid service"],
    verdict: "A specialist choice for fiction and creative writers.",
    url: "https://sudowrite.com/"
  },
  {
    name: "Notion AI",
    bestFor: "Writing inside notes, documents and knowledge workspaces",
    pricing: "AI availability depends on the current Notion plan",
    free: true,
    description: "AI assistance integrated into Notion documents and knowledge workflows.",
    pros: ["Integrated workspace", "Good for notes and documents", "Team collaboration"],
    cons: ["Best value inside Notion", "AI access depends on plan"],
    verdict: "Excellent when writing is part of a larger knowledge workflow.",
    url: "https://www.notion.com/product/ai"
  },
  {
    name: "QuillBot",
    bestFor: "Paraphrasing, rewriting, summarizing and editing",
    pricing: "Free and paid options; verify current pricing",
    free: true,
    description: "A writing assistant focused on paraphrasing, summarization and text improvement.",
    pros: ["Simple rewriting workflow", "Useful paraphrasing", "Accessible"],
    cons: ["Advanced limits on free access", "More specialized than general assistants"],
    verdict: "A practical tool for rewriting and polishing existing text.",
    url: "https://quillbot.com/"
  }
];