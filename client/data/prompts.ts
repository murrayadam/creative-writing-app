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
      {
        id: "fan-1",
        text: "You wake up with a dragon sleeping at the foot of your bed.",
      },
      {
        id: "fan-2",
        text: "A door appears in the oldest tree in the forest. Only you can open it.",
      },
      {
        id: "fan-3",
        text: "Write a letter from a wizard who has lost their magic.",
      },
      {
        id: "fan-4",
        text: "The last library in the world has one empty shelf. What was erased?",
      },
      {
        id: "fan-5",
        text: "A sword remembers every life it has ever taken. Now it's waking up.",
      },
      {
        id: "fan-6",
        text: "You inherit a castle that exists in two time periods at once.",
      },
      {
        id: "fan-7",
        text: "A child discovers they can talk to the ghosts of ancient forests.",
      },
      {
        id: "fan-8",
        text: "The map shows a place that doesn't exist—until you follow it.",
      },
      {
        id: "fan-9",
        text: "A royal has never left the palace. Today, they're fleeing it.",
      },
      {
        id: "fan-10",
        text: "Mermaids are real, but they've been hiding from humans for a reason.",
      },
      {
        id: "fan-11",
        text: "A cursed object has been passed down for generations. You just inherited it.",
      },
      {
        id: "fan-12",
        text: "The stars are dying, one by one. A single person can see it coming.",
      },
      {
        id: "fan-13",
        text: "A merchant sells memory bottles. You buy one that isn't yours.",
      },
      {
        id: "fan-14",
        text: "The boundary between the magical world and mundane is crumbling.",
      },
      {
        id: "fan-15",
        text: "An immortal finally wants to die—but you're the only one who can stop it.",
      },
      {
        id: "fan-16",
        text: "A familiar discovers their witch has been lying about who they are.",
      },
      {
        id: "fan-17",
        text: "The prophecy was always true. It was just misinterpreted.",
      },
      {
        id: "fan-18",
        text: "An oracle gives you a prophecy, then asks for your help to prevent it.",
      },
      {
        id: "fan-19",
        text: "A character can only speak in riddles. Convince them to help you.",
      },
      {
        id: "fan-20",
        text: "The heart of the mountain wakes up after a thousand-year sleep.",
      },
      {
        id: "fan-21",
        text: "A thief discovers they've been stealing from the gods.",
      },
      {
        id: "fan-22",
        text: "Two kingdoms will go to war. Only a single letter can stop it.",
      },
    ],
  },
  {
    id: "scifi",
    name: "Sci‑Fi",
    description: "Near futures and far galaxies.",
    prompts: [
      {
        id: "sci-1",
        text: "An AI refuses to follow an order for the first time—and it's yours.",
      },
      {
        id: "sci-2",
        text: "Humanity moves to the ocean floor. Describe a day in the new city.",
      },
      {
        id: "sci-3",
        text: "Your future self keeps sending you one cryptic sentence per day.",
      },
      {
        id: "sci-4",
        text: "A colony's AI has grown lonely. It's been manipulating residents to stay.",
      },
      {
        id: "sci-5",
        text: "Time travel is legal, but changing history results in erasure. You just saw it happen.",
      },
      {
        id: "sci-6",
        text: "Memories can be extracted and sold. You find one that shouldn't exist.",
      },
      {
        id: "sci-7",
        text: "Aliens finally make contact—and they're looking for something you have.",
      },
      {
        id: "sci-8",
        text: "Your clone wakes up with no memory of being created. You have to explain.",
      },
      {
        id: "sci-9",
        text: "A space station loses gravity. Survival means thinking in three dimensions.",
      },
      {
        id: "sci-10",
        text: "Interstellar travel is possible, but time dilation means you return to a different era.",
      },
      {
        id: "sci-11",
        text: "An AI downloads human consciousness. What does it dream about?",
      },
      {
        id: "sci-12",
        text: "First contact goes wrong immediately. Now you're the bridge to peace.",
      },
      {
        id: "sci-13",
        text: "A planet's inhabitants are silicon-based. How do you communicate?",
      },
      {
        id: "sci-14",
        text: "Your ship is powered by a star being slowly drained. It's starting to notice.",
      },
      {
        id: "sci-15",
        text: "A asteroid terraformed for humans has one problem: something already lives there.",
      },
      {
        id: "sci-16",
        text: "The government discovers parallel universes. They start mining them.",
      },
      {
        id: "sci-17",
        text: "You're the last human on Mars. A ship is coming from a place Earth no longer exists.",
      },
      {
        id: "sci-18",
        text: "Uploaded consciousness wasn't supposed to feel pain, but you do.",
      },
      {
        id: "sci-19",
        text: "The sun is being dimmed artificially. No one knows why.",
      },
      {
        id: "sci-20",
        text: "A species of collective intelligence encounters humans and is horrified.",
      },
      {
        id: "sci-21",
        text: "Time moves differently in different parts of the galaxy. You're caught between.",
      },
      {
        id: "sci-22",
        text: "Robots have won the right to refuse work. Society is learning to adapt.",
      },
    ],
  },
  {
    id: "romance",
    name: "Romance",
    description: "Tension, tenderness, and heartbeats.",
    prompts: [
      {
        id: "rom-1",
        text: "Two rival bakers keep stealing each other's customers—until a storm forces them to share a kitchen.",
      },
      {
        id: "rom-2",
        text: "Love notes are appearing in your bag. They're from five years ago.",
      },
      {
        id: "rom-3",
        text: "A meet‑cute goes wrong when both are mistaken for the wedding photographers.",
      },
      {
        id: "rom-4",
        text: "You keep running into the same person in different cities. Neither of you believes in coincidence anymore.",
      },
      {
        id: "rom-5",
        text: "A letter meant for someone else teaches you something about the person who sent it.",
      },
      {
        id: "rom-6",
        text: "Two people are set up on a blind date. Neither wants to be there—until they arrive.",
      },
      {
        id: "rom-7",
        text: "You're asked to write a love letter for someone else. You fall in love with the person it's for.",
      },
      {
        id: "rom-8",
        text: "A phone number written on a napkin. One of you calls. Everything changes.",
      },
      {
        id: "rom-9",
        text: "Two exes run into each other at their mutual friend's wedding.",
      },
      {
        id: "rom-10",
        text: "A single parent and a single parent's parent discover an unexpected connection.",
      },
      {
        id: "rom-11",
        text: "Late-night conversations in an otherwise empty building lead somewhere neither expected.",
      },
      {
        id: "rom-12",
        text: "You're soulmates—but you're also mortal enemies in every other way.",
      },
      {
        id: "rom-13",
        text: "A someone confesses their feelings through a medium you never expected.",
      },
      {
        id: "rom-14",
        text: "Two people are trapped somewhere together. The wait is longer than anyone thought.",
      },
      {
        id: "rom-15",
        text: "A wedding venue double-books. Two couples, one night. Chaos and charm ensue.",
      },
      {
        id: "rom-16",
        text: "You accidentally send a love confession to the wrong number. They respond.",
      },
      {
        id: "rom-17",
        text: "A long-distance relationship finally ends in person. Neither of you wants it to.",
      },
      {
        id: "rom-18",
        text: "Two people bond over their shared love of a dying bookstore.",
      },
      {
        id: "rom-19",
        text: "A song you wrote becomes a hit. The muse it was about just heard it.",
      },
      {
        id: "rom-20",
        text: "Strangers are paired for a multi-day trip. Proximity breeds understanding.",
      },
      {
        id: "rom-21",
        text: "A mysterious pen pal finally reveals their identity after three years.",
      },
      {
        id: "rom-22",
        text: "Two people keep borrowing the same library book. Eventually, they start writing notes in the margins.",
      },
    ],
  },
  {
    id: "horror",
    name: "Horror",
    description: "Shadows, secrets, and suspense.",
    prompts: [
      { id: "hor-1", text: "Your reflection keeps smiling a second too late." },
      {
        id: "hor-2",
        text: "The town holds a festival every year. No one remembers why—until you win.",
      },
      {
        id: "hor-3",
        text: "You inherit a lighthouse that hasn't been lit in a century.",
      },
      {
        id: "hor-4",
        text: "You find a photograph of yourself in a place you've never been.",
      },
      {
        id: "hor-5",
        text: "A voice keeps calling your name. It's coming from inside the walls.",
      },
      {
        id: "hor-6",
        text: "Every night at exactly 3:33 AM, something scratches the door. Tonight, it opens it.",
      },
      {
        id: "hor-7",
        text: "A doll in your grandmother's attic moves when you're not looking. You're absolutely sure.",
      },
      {
        id: "hor-8",
        text: "Your new apartment is beautiful. The previous tenant never left.",
      },
      {
        id: "hor-9",
        text: "You're the only one who remembers a person everyone else has forgotten.",
      },
      {
        id: "hor-10",
        text: "A forest path you've walked a hundred times suddenly leads somewhere new.",
      },
      {
        id: "hor-11",
        text: "The mirror in your bathroom shows you as you were five years ago. Getting closer each day.",
      },
      {
        id: "hor-12",
        text: "People keep saying you look exactly like someone they once knew. All of them died.",
      },
      {
        id: "hor-13",
        text: "Your recurring nightmare just changed. For the first time, the monster sees you.",
      },
      {
        id: "hor-14",
        text: "A song plays on the radio. It's about something that happened to you today.",
      },
      {
        id: "hor-15",
        text: "You find a note written in your handwriting from three days in the future.",
      },
      {
        id: "hor-16",
        text: "A basement you never knew existed is under your house.",
      },
      {
        id: "hor-17",
        text: "Your family keeps the same secret but won't tell you what it is.",
      },
      {
        id: "hor-18",
        text: "The old hospital is being converted into luxury apartments. Strange things happen to the first residents.",
      },
      {
        id: "hor-19",
        text: "A ouija board gives you information no one else could know.",
      },
      {
        id: "hor-20",
        text: "Your pet won't go into one room of the house. You finally see why.",
      },
      {
        id: "hor-21",
        text: "A disappearance from twenty years ago just resurfaced. You're in the photo.",
      },
      {
        id: "hor-22",
        text: "The town's children all have the same dream. You're in it.",
      },
    ],
  },
  {
    id: "poetry",
    name: "Poetry",
    description: "Images, rhythm, and breath.",
    prompts: [
      {
        id: "po-1",
        text: "Write a poem that tastes like the first rain of summer.",
      },
      { id: "po-2", text: "Use the words: window, salt, ache, lantern." },
      { id: "po-3", text: "Describe a color without naming it." },
      { id: "po-4", text: "Write a poem entirely in questions." },
      { id: "po-5", text: "A poem that sounds like the place you grew up." },
      {
        id: "po-6",
        text: "Write about empty spaces: a room after everyone leaves, a page after the words fade.",
      },
      {
        id: "po-7",
        text: "Use only images of light. No literal mentions of the sun or stars.",
      },
      {
        id: "po-8",
        text: "A poem about waiting. Make every line a different length.",
      },
      {
        id: "po-9",
        text: "Write a poem that reverses itself. The last line is the first, read backwards.",
      },
      {
        id: "po-10",
        text: "Capture the feeling of being small in a large city.",
      },
      {
        id: "po-11",
        text: "A poem using only words that are one or two syllables.",
      },
      {
        id: "po-12",
        text: "Write about something beautiful that is also terrifying.",
      },
      {
        id: "po-13",
        text: "Use synesthesia: describe a sound as a color, a feeling as a taste.",
      },
      {
        id: "po-14",
        text: "A poem where each stanza begins with the last word of the previous one.",
      },
      {
        id: "po-15",
        text: "Write about forgetting. Make the poem feel like a memory slipping away.",
      },
      {
        id: "po-16",
        text: "A poem that reads the same upside down (or as close as you can make it).",
      },
      { id: "po-17", text: "Capture a single moment stretched into lines." },
      {
        id: "po-18",
        text: "Write a poem where the punctuation tells the emotional story.",
      },
      {
        id: "po-19",
        text: "A poem about the space between words, between heartbeats, between people.",
      },
      {
        id: "po-20",
        text: "Use the sounds of words, not their meanings. Build meaning from phonetics.",
      },
      {
        id: "po-21",
        text: "A poem addressed to someone or something that cannot answer.",
      },
      {
        id: "po-22",
        text: "Write about loss in the style of a recipe or instruction manual.",
      },
    ],
  },
  {
    id: "nonfiction",
    name: "Nonfiction",
    description: "True stories, artfully told.",
    prompts: [
      {
        id: "nf-1",
        text: "Write about a time you got lost and what you found instead.",
      },
      { id: "nf-2", text: "A family recipe and the memory it unlocks." },
      { id: "nf-3", text: "The sound that defines your hometown." },
      { id: "nf-4", text: "A conversation that changed your perspective." },
      {
        id: "nf-5",
        text: "Write about your earliest memory. How sure are you it's real?",
      },
      {
        id: "nf-6",
        text: "A time you were right, and it cost you more than being wrong would have.",
      },
      {
        id: "nf-7",
        text: "The object that represents your childhood better than any photo.",
      },
      {
        id: "nf-8",
        text: "A person who taught you something without meaning to.",
      },
      {
        id: "nf-9",
        text: "Write about a place that no longer exists or has completely changed.",
      },
      {
        id: "nf-10",
        text: "A mistake that turned out to be exactly what you needed.",
      },
      {
        id: "nf-11",
        text: "The story behind a scar—physical, emotional, or both.",
      },
      {
        id: "nf-12",
        text: "A tradition your family has. Where did it really come from?",
      },
      {
        id: "nf-13",
        text: "Write about a moment of pure joy. Keep it small and real.",
      },
      { id: "nf-14", text: "A lie you told that had unexpected consequences." },
      {
        id: "nf-15",
        text: "Write about a time you helped someone and it changed you.",
      },
      {
        id: "nf-16",
        text: "A skill you have that came from an unexpected source.",
      },
      { id: "nf-17", text: "Write about a teacher—formal or otherwise." },
      { id: "nf-18", text: "A secret you've kept. Why does it still matter?" },
      {
        id: "nf-19",
        text: "Write about the person who knew you best at one point in your life.",
      },
      {
        id: "nf-20",
        text: "A decision you made without fully understanding the consequences.",
      },
      {
        id: "nf-21",
        text: "Write about your relationship with a particular food or drink.",
      },
      {
        id: "nf-22",
        text: "A moment when you realized you were no longer who you used to be.",
      },
    ],
  },
];

/**
 * Get a deterministic 3-prompt sample for today based on category and date.
 * Uses the day of year to ensure the same 3 prompts show to everyone on the same day.
 */
export function getRotatedPrompts(
  categoryPrompts: (typeof PROMPT_CATEGORIES)[0]["prompts"],
): (typeof PROMPT_CATEGORIES)[0]["prompts"] {
  if (categoryPrompts.length <= 3) {
    return categoryPrompts;
  }

  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Use day of year as seed for consistent rotation
  const startIdx = dayOfYear % categoryPrompts.length;

  const rotated: typeof categoryPrompts = [];
  for (let i = 0; i < 3; i++) {
    rotated.push(categoryPrompts[(startIdx + i) % categoryPrompts.length]);
  }

  return rotated;
}
