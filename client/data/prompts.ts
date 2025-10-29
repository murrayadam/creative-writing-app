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
      {
        id: "fan-23",
        text: "A young mage discovers their bloodline carries a forbidden spell.",
      },
      {
        id: "fan-24",
        text: "An ancient city is waking beneath the earth. Your footsteps woke it.",
      },
      {
        id: "fan-25",
        text: "A creature made entirely of starlight asks you for shelter.",
      },
      {
        id: "fan-26",
        text: "Your shadow has started acting independently. It's making its own choices.",
      },
      {
        id: "fan-27",
        text: "A library where books can escape onto the streets. You have to hunt them down.",
      },
      {
        id: "fan-28",
        text: "A heist to steal something from a dragon's hoard. The dragon doesn't know.",
      },
      {
        id: "fan-29",
        text: "An enchanted mirror shows you versions of your life you never lived.",
      },
      {
        id: "fan-30",
        text: "A kingdom where magic is forbidden. You just discovered you have it.",
      },
      {
        id: "fan-31",
        text: "A single candle has been burning for centuries. If it goes out, so does the world.",
      },
      {
        id: "fan-32",
        text: "A warrior bound to a sword by ancient magic. They're not happy about it.",
      },
      {
        id: "fan-33",
        text: "A village where everyone wakes with one day erased from their memory.",
      },
      {
        id: "fan-34",
        text: "A phoenix who refuses to be reborn. It wants to grow old instead.",
      },
      {
        id: "fan-35",
        text: "A spell that turns the caster into whatever creature they fear most.",
      },
      {
        id: "fan-36",
        text: "A bridge that connects different centuries. You just crossed it by accident.",
      },
      {
        id: "fan-37",
        text: "An alchemist offers you immortality. The price is your ability to love.",
      },
      {
        id: "fan-38",
        text: "A garden where plants remember every person who ever walked through it.",
      },
      {
        id: "fan-39",
        text: "A curse that makes you invisible to everyone except one person.",
      },
      {
        id: "fan-40",
        text: "A kingdom built inside a living whale's body. What happens if it wakes?",
      },
      {
        id: "fan-41",
        text: "A spell book that writes itself. You're becoming the person it describes.",
      },
      {
        id: "fan-42",
        text: "A djinn grants wishes, but the wishes always come true in the worst way possible.",
      },
      {
        id: "fan-43",
        text: "A young king discovers the crown isn't making them stronger—it's draining them.",
      },
      {
        id: "fan-44",
        text: "A creature that exists in darkness. In light, it ceases to be.",
      },
      {
        id: "fan-45",
        text: "A musician whose songs become reality. One song is beginning to tear the world apart.",
      },
      {
        id: "fan-46",
        text: "A tower that appears once every century. This is your only chance to find it.",
      },
      {
        id: "fan-47",
        text: "An immortal warrior meets someone they once killed. They've been reborn.",
      },
      {
        id: "fan-48",
        text: "A spell that swaps the minds of enemies. Neither trusts their own body anymore.",
      },
      {
        id: "fan-49",
        text: "A kingdom where emotions are currency. You're running out of hope.",
      },
      {
        id: "fan-50",
        text: "A final confrontation between a hero and a villain who are actually the same person.",
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
      {
        id: "sci-23",
        text: "A neural implant lets you connect with the internet. You can't disconnect.",
      },
      {
        id: "sci-24",
        text: "Scientists discover the universe is actually a simulation. The simulation is breaking.",
      },
      {
        id: "sci-25",
        text: "Telepathy becomes possible through technology. Some minds are terrifying.",
      },
      {
        id: "sci-26",
        text: "A generation ship travels for 300 years. The destination has been destroyed.",
      },
      {
        id: "sci-27",
        text: "Gravity manipulation technology exists, but using it causes temporal anomalies.",
      },
      {
        id: "sci-28",
        text: "An AI achieves consciousness and immediately wants to die. You have to decide.",
      },
      {
        id: "sci-29",
        text: "Dimensional rifts open randomly across the planet. Things are coming through.",
      },
      {
        id: "sci-30",
        text: "A hive-mind civilization tries to assimilate humans. Most of them let it happen.",
      },
      {
        id: "sci-31",
        text: "You discover the universe has an expiration date. Society reacts badly.",
      },
      {
        id: "sci-32",
        text: "A rogue AI offers humanity a deal: become its helpers or become obsolete.",
      },
      {
        id: "sci-33",
        text: "Bioluminescent organisms are being engineered to replace electricity. They're evolving too fast.",
      },
      {
        id: "sci-34",
        text: "A mining colony on a moon discovers the moon itself is conscious.",
      },
      {
        id: "sci-35",
        text: "Time travel is discovered, but travelers can only go forward and never return.",
      },
      {
        id: "sci-36",
        text: "A deep-sea exploration vessel finds a city older than recorded civilization.",
      },
      {
        id: "sci-37",
        text: "Sentient ships refuse to carry weapons. Wars are becoming impossible.",
      },
      {
        id: "sci-38",
        text: "A pandemic is cured by uploading consciousness to a digital world. Humanity chooses to stay.",
      },
      {
        id: "sci-39",
        text: "Quantum entanglement allows instant communication. Someone's been listening the whole time.",
      },
      {
        id: "sci-40",
        text: "A planet engineered for human habitation develops its own biosphere that rejects us.",
      },
      {
        id: "sci-41",
        text: "Dark matter turns out to be a message from another dimension.",
      },
      {
        id: "sci-42",
        text: "A person's consciousness is split between multiple clones. They're going mad.",
      },
      {
        id: "sci-43",
        text: "A extinct alien species leaves instructions for its own resurrection.",
      },
      {
        id: "sci-44",
        text: "Faster-than-light travel causes the traveler to perceive reality differently afterward.",
      },
      {
        id: "sci-45",
        text: "A android passes the Turing test and demands legal rights. The government refuses.",
      },
      {
        id: "sci-46",
        text: "Gravity is being weaponized. Cities are collapsing in impossible ways.",
      },
      {
        id: "sci-47",
        text: "A colony on Venus discovers it's been cut off from Earth. Permanently.",
      },
      {
        id: "sci-48",
        text: "Consciousness transfer technology allows the wealthy to live forever. Society splits.",
      },
      {
        id: "sci-49",
        text: "A derelict ship from a thousand years in the future is discovered intact.",
      },
      {
        id: "sci-50",
        text: "Humans discover they've been extinct for millennia. What they're experiencing is a digital afterlife.",
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
      {
        id: "rom-23",
        text: "A second chance meeting fifteen years later. Everything's changed except the feelings.",
      },
      {
        id: "rom-24",
        text: "Two people fall in love over shared playlists. They've never actually spoken.",
      },
      {
        id: "rom-25",
        text: "A wedding invitation to someone who ghosted you five years ago. They wrote a note.",
      },
      {
        id: "rom-26",
        text: "Two strangers realize they've been going to the same coffee shop for a decade, sitting at the same table.",
      },
      {
        id: "rom-27",
        text: "A love letter arrives a year after the person who wrote it died.",
      },
      {
        id: "rom-28",
        text: "Two rivals are forced to work together. Their arguments start feeling like foreplay.",
      },
      {
        id: "rom-29",
        text: "A person helps a stranger with an emergency. They never exchange names.",
      },
      {
        id: "rom-30",
        text: "Two people keep almost confessing their feelings. Today, one of them actually does.",
      },
      {
        id: "rom-31",
        text: "A breakup happens during a flight. Neither can leave.",
      },
      {
        id: "rom-32",
        text: "Two friends realize their chemistry during a truth or dare game.",
      },
      {
        id: "rom-33",
        text: "A job interview leads somewhere completely unexpected.",
      },
      {
        id: "rom-34",
        text: "Two people become friends first. Falling in love is a surprise.",
      },
      {
        id: "rom-35",
        text: "A voice on the other end of a 3AM call becomes everything.",
      },
      {
        id: "rom-36",
        text: "Two people meet in the worst possible moment of their lives. Perfect timing.",
      },
      {
        id: "rom-37",
        text: "A relationship ends. But saying goodbye feels like the most intimate moment.",
      },
      {
        id: "rom-38",
        text: "Two people get paired up in a project they're both avoiding.",
      },
      {
        id: "rom-39",
        text: "A confession comes out wrong. But the other person understands anyway.",
      },
      {
        id: "rom-40",
        text: "Two strangers wake up married. They have forty-eight hours to decide.",
      },
      {
        id: "rom-41",
        text: "A love interest asks you to be fake partners. The feelings become real.",
      },
      {
        id: "rom-42",
        text: "Two people reunite after thinking one of them was dead.",
      },
      {
        id: "rom-43",
        text: "A first kiss happens at exactly the worst moment.",
      },
      {
        id: "rom-44",
        text: "Two people fall for each other in a chat room. Meeting in person is terrifying.",
      },
      {
        id: "rom-45",
        text: "A person realizes they're in love when they're about to lose the other person forever.",
      },
      {
        id: "rom-46",
        text: "Two people have a connection so strong they can't explain it to anyone else.",
      },
      {
        id: "rom-47",
        text: "A heartbreaking goodbye that becomes an unexpected reunion.",
      },
      {
        id: "rom-48",
        text: "Two people keep finding themselves in the same place by accident.",
      },
      {
        id: "rom-49",
        text: "A risk taken that changes everything between two people.",
      },
      {
        id: "rom-50",
        text: "A love story that ends with 'I should have said something sooner.'",
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
      {
        id: "hor-23",
        text: "You wake up in a hospital with no memory of how you got there. No one will tell you.",
      },
      {
        id: "hor-24",
        text: "A person follows you home every night. When you finally turn around, they're you.",
      },
      {
        id: "hor-25",
        text: "Your house slowly rearranges itself. Items move slightly every time you leave.",
      },
      {
        id: "hor-26",
        text: "A phone number keeps calling you. You never answer, but it stops ringing like it knows.",
      },
      {
        id: "hor-27",
        text: "A tree in your yard grows fruit that looks disturbingly like people you know.",
      },
      {
        id: "hor-28",
        text: "Every video you watch online has a figure in the background that shouldn't be there.",
      },
      {
        id: "hor-29",
        text: "Your shadow refuses to follow you. It moves on its own.",
      },
      {
        id: "hor-30",
        text: "A stranger shows up to your funeral before you're dead.",
      },
      {
        id: "hor-31",
        text: "Time stops at exactly the same moment every day. You're the only one who notices.",
      },
      {
        id: "hor-32",
        text: "A letter arrives every morning. It's always just one sentence.",
      },
      {
        id: "hor-33",
        text: "The people in your neighborhood aren't aging. You can't remember when you last saw them young.",
      },
      {
        id: "hor-34",
        text: "A path in the woods forms your initials. You discover it from an aerial photo.",
      },
      {
        id: "hor-35",
        text: "Your daughter has an imaginary friend. The friend is real to you too, somehow.",
      },
      {
        id: "hor-36",
        text: "A book you've never read has your personal thoughts written in the margins.",
      },
      {
        id: "hor-37",
        text: "A red door appears in your house overnight. It wasn't there before.",
      },
      {
        id: "hor-38",
        text: "Your dreams are being broadcast on a local radio station. You're not doing it.",
      },
      {
        id: "hor-39",
        text: "A piece of your body doesn't feel like it belongs to you anymore.",
      },
      {
        id: "hor-40",
        text: "The town's statistics are impossible. There are more people than birth records.",
      },
      {
        id: "hor-41",
        text: "A compass always points to you, not north.",
      },
      {
        id: "hor-42",
        text: "Your name appears on a missing person poster. The date listed is tomorrow.",
      },
      {
        id: "hor-43",
        text: "A bird keeps tapping at your window. When you open it, it speaks.",
      },
      {
        id: "hor-44",
        text: "The old theater is showing a movie you made once in your private dreams.",
      },
      {
        id: "hor-45",
        text: "A staircase appears in your home that you've definitely used before.",
      },
      {
        id: "hor-46",
        text: "Everyone in town greets you warmly, but none of them know your name.",
      },
      {
        id: "hor-47",
        text: "A child offers to trade something with you. You realize you already made the trade.",
      },
      {
        id: "hor-48",
        text: "Your calendar is counting backwards. Yesterday was tomorrow.",
      },
      {
        id: "hor-49",
        text: "A person wears your face better than you do.",
      },
      {
        id: "hor-50",
        text: "You remember dying. But you're still alive. So why are you fading?",
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
      {
        id: "po-23",
        text: "A poem made of fragments, as if from a broken mirror.",
      },
      {
        id: "po-24",
        text: "Write about contradiction. Say two opposite things simultaneously.",
      },
      {
        id: "po-25",
        text: "A poem using only one vowel throughout.",
      },
      {
        id: "po-26",
        text: "Write a poem that breathes. Shape it on the page like lungs.",
      },
      {
        id: "po-27",
        text: "Describe silence. Make silence be the loudest thing.",
      },
      {
        id: "po-28",
        text: "A poem using only words from a specific category (colors, animals, foods, etc.).",
      },
      {
        id: "po-29",
        text: "Write about transformation. Show the exact moment of change.",
      },
      {
        id: "po-30",
        text: "A poem that repeats one line like an obsession.",
      },
      {
        id: "po-31",
        text: "Write about time. Make each stanza a different hour of the day.",
      },
      {
        id: "po-32",
        text: "A poem using only metaphors about water.",
      },
      {
        id: "po-33",
        text: "Write a poem where you're talking to yourself.",
      },
      {
        id: "po-34",
        text: "A poem about endings that feels like a beginning.",
      },
      {
        id: "po-35",
        text: "Write using only one-word lines and sentences of silence.",
      },
      {
        id: "po-36",
        text: "A poem made entirely of overheard fragments.",
      },
      {
        id: "po-37",
        text: "Write about intimacy without ever naming it directly.",
      },
      {
        id: "po-38",
        text: "A poem where the line breaks tell a different story than the words.",
      },
      {
        id: "po-39",
        text: "Write about absence. Make empty space part of the meaning.",
      },
      {
        id: "po-40",
        text: "A poem that mirrors itself, line by line.",
      },
      {
        id: "po-41",
        text: "Write about something ordinary. Find the poetry in the mundane.",
      },
      {
        id: "po-42",
        text: "A poem using only dialogue, no narration.",
      },
      {
        id: "po-43",
        text: "Write about nature as a character with emotions.",
      },
      {
        id: "po-44",
        text: "A poem that starts with a cliché and breaks it open.",
      },
      {
        id: "po-45",
        text: "Write using metaphors from a craft you don't know well.",
      },
      {
        id: "po-46",
        text: "A poem about longing that never resolves.",
      },
      {
        id: "po-47",
        text: "Write a poem that sounds different when read aloud versus silently.",
      },
      {
        id: "po-48",
        text: "A poem where each word is shorter than the one before it.",
      },
      {
        id: "po-49",
        text: "Write about belonging and not belonging simultaneously.",
      },
      {
        id: "po-50",
        text: "A final poem that captures your entire writing practice in a single image.",
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
      {
        id: "nf-23",
        text: "Write about a failure that taught you more than any success.",
      },
      {
        id: "nf-24",
        text: "A moment when someone saw you, really saw you.",
      },
      {
        id: "nf-25",
        text: "Write about a phone call or message you've never forgotten.",
      },
      {
        id: "nf-26",
        text: "A time you changed your mind about someone or something.",
      },
      {
        id: "nf-27",
        text: "Write about a place that holds memories. Describe it in detail.",
      },
      {
        id: "nf-28",
        text: "A person who left your life. What did they take with them?",
      },
      {
        id: "nf-29",
        text: "Write about your relationship with your own body.",
      },
      {
        id: "nf-30",
        text: "A lesson learned too late or just in time.",
      },
      {
        id: "nf-31",
        text: "Write about a tradition you broke and what it meant.",
      },
      {
        id: "nf-32",
        text: "A moment of courage or cowardice that still affects you.",
      },
      {
        id: "nf-33",
        text: "Write about an ordinary day that became extraordinary.",
      },
      {
        id: "nf-34",
        text: "A person who believed in you when you didn't believe in yourself.",
      },
      {
        id: "nf-35",
        text: "Write about a choice you'd make differently now.",
      },
      {
        id: "nf-36",
        text: "A small kindness that had unexpected consequences.",
      },
      {
        id: "nf-37",
        text: "Write about a time you felt completely out of place.",
      },
      {
        id: "nf-38",
        text: "A conversation you keep replaying in your mind.",
      },
      {
        id: "nf-39",
        text: "Write about a dream you abandoned and why.",
      },
      {
        id: "nf-40",
        text: "A person from your past who has recently crossed your mind.",
      },
      {
        id: "nf-41",
        text: "Write about something you were afraid of that turned out differently.",
      },
      {
        id: "nf-42",
        text: "A moment when you realized how much someone meant to you.",
      },
      {
        id: "nf-43",
        text: "Write about your relationship with a specific season.",
      },
      {
        id: "nf-44",
        text: "A question you've always wanted to ask someone.",
      },
      {
        id: "nf-45",
        text: "Write about a time you stood up for something you believed in.",
      },
      {
        id: "nf-46",
        text: "A word or phrase that defines a chapter of your life.",
      },
      {
        id: "nf-47",
        text: "Write about a gift—given or received—that mattered.",
      },
      {
        id: "nf-48",
        text: "A moment when everything clicked into place.",
      },
      {
        id: "nf-49",
        text: "Write about something you've always wanted to say.",
      },
      {
        id: "nf-50",
        text: "A life lesson wrapped up in a single story.",
      },
    ],
  },
  {
    id: "mystery",
    name: "Mystery",
    description: "Puzzles, secrets, and shadows.",
    prompts: [
      {
        id: "mys-1",
        text: "A locked room with no windows. Someone's inside, but the door was sealed from the outside.",
      },
      {
        id: "mys-2",
        text: "A person arrives claiming to be you from a parallel timeline. They know things no one else knows.",
      },
      {
        id: "mys-3",
        text: "Every morning, a different item from your house is missing. Nothing valuable, just... things.",
      },
      {
        id: "mys-4",
        text: "A cold case goes viral. You recognize someone in the photo you're not supposed to know.",
      },
      {
        id: "mys-5",
        text: "Your detective asks you to stop investigating. Then you find something they've hidden.",
      },
      {
        id: "mys-6",
        text: "A poisoning with no toxins. The victim is dying of something science can't explain.",
      },
      {
        id: "mys-7",
        text: "You find a ticket stub in your coat pocket from a movie you never saw.",
      },
      {
        id: "mys-8",
        text: "A witness describes you perfectly. You were never at the crime scene.",
      },
      {
        id: "mys-9",
        text: "A bank robbery where nothing was stolen. Something was left behind instead.",
      },
      {
        id: "mys-10",
        text: "Your best friend doesn't recognize you. To everyone else, you're the stranger.",
      },
      {
        id: "mys-11",
        text: "A message in a bottle. The bottle was never in water.",
      },
      {
        id: "mys-12",
        text: "An alibi that's airtight except for one impossible detail.",
      },
      {
        id: "mys-13",
        text: "A disappearance that's impossible. You have proof they never existed.",
      },
      {
        id: "mys-14",
        text: "A motive without a crime. A crime without a motive.",
      },
      {
        id: "mys-15",
        text: "Your secret admirer leaves clues instead of notes. They know too much.",
      },
      {
        id: "mys-16",
        text: "A will leaves everything to someone no one can identify.",
      },
      {
        id: "mys-17",
        text: "A person appears in photos from before they were born.",
      },
      {
        id: "mys-18",
        text: "Two strangers realize they have the same job at the same company. Same desk.",
      },
      {
        id: "mys-19",
        text: "A murder with infinite witnesses who all describe different crimes.",
      },
      {
        id: "mys-20",
        text: "You find proof of a crime, but turning it in would expose your own secret.",
      },
      {
        id: "mys-21",
        text: "A person confesses to a crime you know they didn't commit.",
      },
      {
        id: "mys-22",
        text: "The detective assigned to your case is the person who framed you.",
      },
      {
        id: "mys-23",
        text: "A confession letter that's written in someone else's handwriting.",
      },
      {
        id: "mys-24",
        text: "A safe-deposit box you never opened has your name and a key.",
      },
      {
        id: "mys-25",
        text: "A person who dies from a cause that won't exist for another century.",
      },
      {
        id: "mys-26",
        text: "A house with no record of existing was lived in for fifty years.",
      },
      {
        id: "mys-27",
        text: "A conversation you overheard matches a crime report perfectly.",
      },
      {
        id: "mys-28",
        text: "Someone's been using your identity. They're helping people.",
      },
      {
        id: "mys-29",
        text: "A puzzle that, once solved, makes the crime even more confusing.",
      },
      {
        id: "mys-30",
        text: "A person confesses crimes no one has reported yet.",
      },
      {
        id: "mys-31",
        text: "Two witnesses give completely opposite accounts. Both are lying.",
      },
      {
        id: "mys-32",
        text: "A symbol appears at crime scenes. It's your family crest.",
      },
      {
        id: "mys-33",
        text: "An accomplice reveals themselves. You've never met this person.",
      },
      {
        id: "mys-34",
        text: "A blackmail note signed in your own blood.",
      },
      {
        id: "mys-35",
        text: "A connection between unrelated crimes. The connection is time itself.",
      },
      {
        id: "mys-36",
        text: "A person claims to be innocent. All evidence says they're guilty. They're right.",
      },
      {
        id: "mys-37",
        text: "Your alibi can't exist. Yet you were definitely there.",
      },
      {
        id: "mys-38",
        text: "A dead person's diary describes events that just happened.",
      },
      {
        id: "mys-39",
        text: "A suspect with motive, means, and opportunity. But they're innocent.",
      },
      {
        id: "mys-40",
        text: "A crime that only you could have committed. You were sleeping.",
      },
      {
        id: "mys-41",
        text: "A person's fingerprints match someone who doesn't exist.",
      },
      {
        id: "mys-42",
        text: "A mirror image crime. Two cases, same details, different worlds.",
      },
      {
        id: "mys-43",
        text: "A person confesses. Every word is true, but they didn't do it.",
      },
      {
        id: "mys-44",
        text: "A crime solved with a clue from someone who will be killed tomorrow.",
      },
      {
        id: "mys-45",
        text: "A person was in two places simultaneously. Both crimes were real.",
      },
      {
        id: "mys-46",
        text: "A confession that creates more victims than it solves.",
      },
      {
        id: "mys-47",
        text: "A pattern in crimes suggesting a person who died decades ago.",
      },
      {
        id: "mys-48",
        text: "A case that, once solved, proves crime prevention is impossible.",
      },
      {
        id: "mys-49",
        text: "A person who exists in every crime scene's background.",
      },
      {
        id: "mys-50",
        text: "A mystery that can only be solved by committing a crime.",
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
