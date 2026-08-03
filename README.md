# Flag Quiz App
Test your world geography knowledge across 4 different game modes.

---

## Overview

**Flag Quiz App** is an interactive geography quiz game where players test
their knowledge of world flags across 4 game modes. Instead of a single
quiz format, the app tests recognition from different angles — matching a
flag to its country, currency, or continent, plus a memory-matching mode —
so players engage with the same information in more than one way.

To keep players coming back, the app adds a light progression layer on top
of the quiz itself: a profile with levels and experience points, a
leaderboard to compare scores, and an in-app store to spend earned points.
None of this needs a server — everything runs and persists entirely in the
browser.

## Features

- **User profile** — level, experience points & stats
- **Leaderboard** — compete with other players
- **In-app store** — unlock items with earned points
- **Progress tracking** — see your rating improve over time

## Game Modes

| Mode | How it works |
|---|---|
| **Flag - Country** | A flag is displayed; choose the correct country from the options |
| **Flag - Currency** | A flag is displayed; identify the official currency used by that country |
| **Flag - Continent** | A flag is displayed; determine which continent the country belongs to |
| **Memory Game** | Flip cards to find and match pairs of flags with their countries |

---

## Architecture

All game state — profile, XP, leaderboard entries, and store purchases — is
persisted in the browser via **localStorage**. There's no backend: each
player's progress lives on their own device, and the leaderboard reflects
local play sessions rather than a shared, server-synced ranking.

This was a deliberate trade-off for a first version: it keeps the app fully
static (no server cost, no auth to build), at the cost of progress not
following the player across devices. If the leaderboard becomes a shared,
global one (see [Future Improvements](#future-improvements)), this is the
first piece that would move to a real backend.

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/DashginAsgarli/flag-quiz-app.git

# 2. Navigate into the project
cd flag-quiz-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) `v16+`
- [npm](https://www.npmjs.com/) `v8+` or [yarn](https://yarnpkg.com/)

---

## Contributing

Contributions are welcome! Here's how to get started:

```bash
# 1. Fork the repository
# 2. Create a new branch
git checkout -b feature/your-feature-name
# 3. Commit your changes
git commit -m "Add: your feature description"
# 4. Push to your branch
git push origin feature/your-feature-name
# 5. Open a Pull Request
```

> [!IMPORTANT]
> Please make sure your code is clean and well-commented before submitting a PR.

---

## Future Improvements

- Move leaderboard to a shared backend so rankings are global, not per-device
- Add more flag categories (capitals, historical flags)
- Add sound effects and animations for correct/incorrect answers

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

<div>

[![Email](https://img.shields.io/badge/Gmail-dashqinasgarli%40gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dashqinasgarli@gmail.com)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-DashginAsgarli-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DashginAsgarli)
&nbsp;
[![Issues](https://img.shields.io/badge/Report-Issue-e11d48?style=for-the-badge&logo=github)](https://github.com/DashginAsgarli/flag-quiz-app/issues)

</div>
