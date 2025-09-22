## Recipe Page (React + Vite)

A simple, responsive recipe page built with React and Vite, styled using Tailwind CSS. It showcases a recipe card with image, preparation time, ingredients, instructions, and nutrition facts.

### Live Demo

Visit the deployed app on Vercel: [recipe-page-virid-eta.vercel.app](https://recipe-page-virid-eta.vercel.app/)

### Preview

![Recipe Page Preview](public/preview.jpg)

### Features

-   **React 19 + Vite 7**: Fast dev server and HMR
-   **Tailwind CSS v4 (via @tailwindcss/vite)**: Utility-first styling
-   **Custom fonts**: Young Serif and Outfit bundled locally
-   **ESLint 9**: Basic linting configuration

### Design Source

-   UI design challenge from [Frontend Mentor](https://www.frontendmentor.io/)
-   Specific challenge: [Recipe page](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm)

### Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Start the dev server**

```bash
npm run dev
```

3. **Build for production**

```bash
npm run build
```

4. **Preview the production build**

```bash
npm run preview
```

5. **Run lint**

```bash
npm run lint
```

### Tech Stack

-   **React**: ^19.1.1
-   **Vite**: ^7.1.6
-   **Tailwind CSS**: ^4.1.13 with `@tailwindcss/vite`
-   **ESLint**: ^9.x with React plugins

### Project Structure

```
root/
  public/
    preview.jpg
  src/
    assets/
      fonts/
        outfit/
        young-serif/
      images/
        image-omelette.jpeg
    components/
      Ingredients.jsx
      Instruction.jsx
      Nutrition.jsx
      PreparationTime.jsx
      RecipeCard.jsx
    App.css
    App.jsx
    main.jsx
```

### Styling and Fonts

-   Tailwind is enabled via `@tailwindcss/vite` in `vite.config.js`, and imported in `src/App.css` using:
    -   `@import "tailwindcss";`
-   Custom fonts are declared in `src/App.css` with `@font-face` and exposed as utility fonts:
    -   `--font-outfit` mapped to `font-outfit`
    -   `--font-young-serif` mapped to `font-young-serif`

### Notes

-   Ensure a recent Node.js LTS version.
-   The main UI is rendered by `src/components/RecipeCard.jsx` inside `src/App.jsx`.

### License

This project is for educational/demo purposes. Font files are included under their respective licenses found in `src/assets/fonts/*/OFL.txt`.
