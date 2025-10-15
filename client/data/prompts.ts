export type PromptCategory = {
  id: string;
  name: string;
  description: string;
  prompts: { id: string; text: string }[];
};

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: "fantasy",
    name: "Fantasy",
    description: "Wander realms of magic and myth.",
    prompts: [
      { id: "fan-1", text: "You wake up with a dragon sleeping at the foot of your bed." },
      { id: "fan-2", text: "A door appears in the oldest tree in the forest. Only you can open it." },
      { id: "fan-3", text: "Write a letter from a wizard who has lost their magic." }
    ],
  },
  {
    id: "scifi",
    name: "Sci‑Fi",
    description: "Near futures and far galaxies.",
    prompts: [
      { id: "sci-1", text: "An AI refuses to follow an order for the first time—and it's yours." },
      { id: "sci-2", text: "Humanity moves to the ocean floor. Describe a day in the new city." },
      { id: "sci-3", text: "Your future self keeps sending you one cryptic sentence per day." }
    ],
  },
  {
    id: "romance",
    name: "Romance",
    description: "Tension, tenderness, and heartbeats.",
    prompts: [
      { id: "rom-1", text: "Two rival bakers keep stealing each other's customers—until a storm forces them to share a kitchen." },
      { id: "rom-2", text: "Love notes are appearing in your bag. They're from five years ago." },
      { id: "rom-3", text: "A meet‑cute goes wrong when both are mistaken for the wedding photographers." }
    ],
  },
  {
    id: "horror",
    name: "Horror",
    description: "Shadows, secrets, and suspense.",
    prompts: [
      { id: "hor-1", text: "Your reflection keeps smiling a second too late." },
      { id: "hor-2", text: "The town holds a festival every year. No one remembers why—until you win." },
      { id: "hor-3", text: "You inherit a lighthouse that hasn't been lit in a century." }
    ],
  },
  {
    id: "poetry",
    name: "Poetry",
    description: "Images, rhythm, and breath.",
    prompts: [
      { id: "po-1", text: "Write a poem that tastes like the first rain of summer." },
      { id: "po-2", text: "Use the words: window, salt, ache, lantern." },
      { id: "po-3", text: "Describe a color without naming it." }
    ],
  },
  {
    id: "nonfiction",
    name: "Nonfiction",
    description: "True stories, artfully told.",
    prompts: [
      { id: "nf-1", text: "Write about a time you got lost and what you found instead." },
      { id: "nf-2", text: "A family recipe and the memory it unlocks." },
      { id: "nf-3", text: "The sound that defines your hometown." }
    ],
  },
];
