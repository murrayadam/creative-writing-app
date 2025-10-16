# Blankrite 📝

A modern, beautiful creative writing app that provides writing prompts and a distraction-free writing environment. Inspired by 90s school supplies with a wide-ruled notebook aesthetic.

## Features

✨ **Smart Prompts**: Browse prompts across 6 categories (Fantasy, Sci-Fi, Romance, Horror, Poetry, Nonfiction)

📝 **Distraction-Free Mode**: Enter fullscreen writing mode for focused, immersive writing

💾 **Auto-Save**: Your responses auto-save per prompt in the browser using localStorage

📊 **Word Goals**: Set custom word count goals (250, 500, 1000 words) with progress tracking

📋 **Export Options**:

- Copy responses directly to clipboard
- Export to Markdown (.md)
- Export to PDF with formatting

🎲 **Random Prompt**: Get a new prompt instantly with the Random button

🎨 **Retro Design**: Hand-crafted 90s school supplies aesthetic with wide-ruled notebook paper background

## Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA mode)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 3
- **UI Components**: Radix UI + custom components
- **Forms**: React Hook Form + Zod
- **Export**: jsPDF for PDF generation
- **Notifications**: Sonner (toast notifications)
- **Backend**: Express (optional server endpoints)

## Project Structure

```
client/
├── components/
│   ├── ui/              # Radix UI component library
│   ├── Layout.tsx       # Main layout wrapper with header/footer
��── pages/
│   ├── Index.tsx        # Main creative writing interface
│   └── NotFound.tsx     # 404 page
├── data/
│   └── prompts.ts       # Prompt categories and content
├── lib/
│   ├── utils.ts         # Utility functions (cn, etc.)
│   └── export.ts        # Export to Markdown/PDF utilities
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.tsx
└── App.tsx              # Router setup

server/                   # Optional Express backend
├── index.ts
└── routes/

shared/                   # Types shared between client/server
└── api.ts
```

## Getting Started

### Prerequisites

- **Node.js**: 18+ (includes pnpm)
- **pnpm**: 10.14.0+ (uses the local lock file)

### Installation

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The app opens at `http://localhost:8080` with hot reload enabled.

### Build for Production

```bash
# Build client and server
pnpm build

# Start production server
pnpm start
```

### Run Tests

```bash
pnpm test
```

### TypeScript Validation

```bash
pnpm typecheck
```

## How to Test

### 1. **Browse Prompts**

- Click the **Category** dropdown in the left sidebar to switch between Fantasy, Sci-Fi, Romance, Horror, Poetry, and Nonfiction
- See the category description appear below the selector
- Click any prompt in the **Prompts** list to load it

### 2. **Test Auto-Save**

- Type a response in the textarea
- Refresh the page
- Your response should still be there (stored per prompt)

### 3. **Copy Response**

- Write some text in the textarea
- Click the **Copy** button
- Paste (Ctrl+V or Cmd+V) into any text editor to verify

### 4. **Export to Markdown**

- Write a response
- Click **Markdown** button
- A `.md` file downloads with the prompt, category, and response

### 5. **Export to PDF**

- Write a response
- Click **PDF** button
- A `.pdf` file downloads with formatted content

### 6. **Fullscreen Mode**

- Click the expand icon (↗️) on the right side of the action buttons
- The sidebar hides and the textarea expands
- Word count, character count, and word goal display in the top-right
- Click the minimize icon or press Esc to exit

### 7. **Word Goals**

- In the **Word Goal** card, click a goal button (250, 500, 1000 words)
- A progress bar appears showing words written / goal
- When you reach the goal, a celebration toast notification appears
- Click **Clear** to remove the goal

### 8. **Random Prompt**

- Click the **Random** button in the Prompts sidebar
- The current prompt switches to a random one from the same category

### 9. **Mobile Responsiveness**

- Open the app on mobile or resize the browser to < 1024px
- The sidebar collapses (on smallest screens) or adjusts layout
- Fullscreen mode works on mobile too

### 10. **Keyboard Navigation**

- Tab through buttons and interactive elements
- Use arrow keys in the dropdown selectors
- All interactive elements are keyboard accessible

## Features Deep Dive

### Auto-Save & Local Storage

Responses are saved per prompt using the prompt ID as a key:

- Key format: `inkspire:${promptId}`
- Word goals are stored in `inkspire:wordGoal`
- Data persists across browser sessions

### Export Utilities

**Markdown Export** (`client/lib/export.ts`):

```
# [Title]
- Category: [category]
- Prompt: [original prompt]

---

[user response]
```

**PDF Export** (`client/lib/export.ts`):

- Uses jsPDF for client-side generation
- Includes title, category, prompt, and response
- Auto-wraps text for A4 page layout
- Multi-page support for long responses

### Fullscreen Writing Mode

Custom fullscreen implementation (no browser fullscreen API):

- Fixed overlay that hides layout chrome
- Expanded textarea with dark background
- Shows word count + word goal progress in header
- Exit with minimize button or by closing the overlay

### Design System

- **Colors**: Neon purple (#4A2FBF), teal (#0FB0AE), highlighter yellow (#F4D966)
- **Font**: Rubik (modern, readable)
- **Paper Effect**: Wide-ruled blue lines + red margin line on the left
- **Component Style**: Soft notebook cards with subtle shadows

## Environment Variables

The dev server runs with:

- `VITE_API_BASE=/api` (optional, for backend calls)

For production, use Netlify or Vercel environment variables if deploying.

## Troubleshooting

### App won't load

- Check `pnpm dev` is running without errors
- Clear browser cache and hard-reload (Ctrl+Shift+R or Cmd+Shift+R)
- Verify TypeScript: `pnpm typecheck`

### Exports not working

- Check browser console for errors
- Ensure popup/download permissions are enabled
- Try a different browser if issues persist

### Auto-save not working

- Check browser localStorage is enabled
- Open DevTools > Application > Local Storage
- Look for keys starting with `inkspire:`

### Styling issues (colors too bright or muted)

- Clear CSS cache: `rm -rf dist/`
- Rebuild: `pnpm build`
- Check that Tailwind variables are set correctly in `client/global.css`

## Future Ideas

- 🌙 Dark mode toggle
- ☁️ Cloud sync (Firebase, Supabase)
- 📱 Mobile app (React Native)
- 🤝 Community prompts/sharing
- 📈 Writing statistics dashboard
- 🎯 Timed writing sessions
- 💬 Prompt feedback & ratings

## License

Open source — feel free to fork and modify!

---

**Made with ✏️ and ☕**

For questions or feedback, open an issue or reach out. Happy writing!
