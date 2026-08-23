const WORKFLOWS = [
  {
    id: "social-media-post",
    title: "Create a Social Media Post",
    category: "Social Media",
    level: "Beginner",
    time: "10–20 min",
    goal: "Create a complete social media post from a simple idea.",
    inputs: [
      "Topic or idea",
      "Target audience",
      "Preferred platform"
    ],
    steps: [
      "Define the topic and audience",
      "Generate the post structure",
      "Write the final copy",
      "Create or select a visual",
      "Review and publish"
    ],
    tools: [
      "Writing",
      "Image",
      "Marketing"
    ],
    prompts: [
      "Create 5 engaging social media hooks for this topic.",
      "Write a concise social media post for this audience.",
      "Improve this post for clarity and engagement."
    ],
    result: "A ready-to-publish social media post."
  },

  {
    id: "ai-image",
    title: "Create an AI Image",
    category: "Image",
    level: "Beginner",
    time: "10–15 min",
    goal: "Turn an idea into a polished AI-generated image.",
    inputs: [
      "Image concept",
      "Visual style",
      "Format"
    ],
    steps: [
      "Define the visual objective",
      "Create the image prompt",
      "Generate the image",
      "Review the result",
      "Refine and export"
    ],
    tools: [
      "Image"
    ],
    prompts: [
      "Create a detailed image prompt for this concept.",
      "Improve this prompt for a professional visual result.",
      "Create three alternative visual directions."
    ],
    result: "A finished AI-generated visual ready for use."
  },

  {
    id: "professional-email",
    title: "Write a Professional Email",
    category: "Writing",
    level: "Beginner",
    time: "5–10 min",
    goal: "Create a clear and professional email from a simple objective.",
    inputs: [
      "Email objective",
      "Recipient",
      "Tone",
      "Key information"
    ],
    steps: [
      "Define the objective",
      "Create the email structure",
      "Generate the draft",
      "Improve clarity and tone",
      "Proofread and send"
    ],
    tools: [
      "Writing",
      "Productivity"
    ],
    prompts: [
      "Write a professional email based on this objective.",
      "Make this email clearer and more concise.",
      "Adapt this email to a professional but friendly tone."
    ],
    result: "A polished professional email ready to send."
  },

  {
    id: "seo-article",
    title: "Create an SEO Article",
    category: "SEO",
    level: "Intermediate",
    time: "45–90 min",
    goal: "Build an SEO-focused article from a target topic or keyword.",
    inputs: [
      "Target keyword",
      "Search intent",
      "Target audience",
      "Article objective"
    ],
    steps: [
      "Define the target keyword",
      "Identify search intent",
      "Research competing content",
      "Build the article outline",
      "Write the article",
      "Optimize headings and key elements",
      "Review and publish"
    ],
    tools: [
      "SEO",
      "Writing",
      "Image"
    ],
    prompts: [
      "Analyze the search intent for this keyword.",
      "Create a detailed SEO article outline.",
      "Improve this article for readability and search relevance."
    ],
    result: "A structured SEO-ready article."
  },

  {
    id: "youtube-video",
    title: "Create a YouTube Video",
    category: "Video",
    level: "Intermediate",
    time: "1–3 hours",
    goal: "Turn a video idea into a complete YouTube production workflow.",
    inputs: [
      "Video topic",
      "Target audience",
      "Video format",
      "Desired duration"
    ],
    steps: [
      "Research the topic",
      "Create the video structure",
      "Write the script",
      "Prepare visual assets",
      "Generate or record the video",
      "Create the thumbnail",
      "Optimize title and description",
      "Review and publish"
    ],
    tools: [
      "Research",
      "Writing",
      "Video",
      "Image",
      "SEO"
    ],
    prompts: [
      "Create a YouTube video structure for this topic.",
      "Write an engaging YouTube script.",
      "Generate 10 SEO-friendly YouTube titles."
    ],
    result: "A complete YouTube video package ready for publishing."
  },

  {
    id: "marketing-campaign",
    title: "Build an AI Marketing Campaign",
    category: "Marketing",
    level: "Advanced",
    time: "2–4 hours",
    goal: "Build a structured marketing campaign using AI-assisted research and content creation.",
    inputs: [
      "Product or service",
      "Target audience",
      "Campaign objective",
      "Offer"
    ],
    steps: [
      "Research the target audience",
      "Define positioning",
      "Develop the campaign message",
      "Create marketing copy",
      "Create visual assets",
      "Prepare distribution channels",
      "Launch and monitor",
      "Review performance"
    ],
    tools: [
      "Marketing",
      "Writing",
      "Image",
      "Research"
    ],
    prompts: [
      "Define the ideal customer profile for this offer.",
      "Create a campaign positioning strategy.",
      "Generate campaign messages for multiple channels."
    ],
    result: "A structured AI-assisted marketing campaign."
  },

  {
    id: "competitor-research",
    title: "Run an AI Competitor Research",
    category: "Research",
    level: "Advanced",
    time: "1–2 hours",
    goal: "Analyze competitors and turn research into actionable insights.",
    inputs: [
      "Market",
      "Competitors",
      "Research objective"
    ],
    steps: [
      "Define the research questions",
      "Collect competitor information",
      "Organize the findings",
      "Compare competitors",
      "Identify strengths and weaknesses",
      "Extract opportunities",
      "Create recommendations"
    ],
    tools: [
      "Research",
      "Writing",
      "Marketing"
    ],
    prompts: [
      "Create a competitor research framework.",
      "Compare these competitors across the selected criteria.",
      "Turn these findings into actionable business recommendations."
    ],
    result: "A structured competitor analysis with actionable insights."
  },

  {
    id: "business-research",
    title: "Create an AI Business Research Report",
    category: "Business",
    level: "Expert",
    time: "2–5 hours",
    goal: "Transform multiple research inputs into a structured business report.",
    inputs: [
      "Business question",
      "Market",
      "Available sources",
      "Decision objective"
    ],
    steps: [
      "Define the business question",
      "Collect relevant information",
      "Organize and compare findings",
      "Identify patterns",
      "Evaluate opportunities and risks",
      "Develop recommendations",
      "Create the final report"
    ],
    tools: [
      "Research",
      "Writing",
      "Productivity"
    ],
    prompts: [
      "Create a business research framework for this question.",
      "Organize these findings into an executive analysis.",
      "Generate evidence-based recommendations from these findings."
    ],
    result: "A structured business research report."
  }
];
