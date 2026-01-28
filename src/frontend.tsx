/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { About } from "./About";
import { Battersea } from "./Battersea";
import { CoventGarden } from "./CoventGarden";
import { Dates } from "./Dates";
import { NavBar } from"./components/NavBar";
import { Toaster } from "./components/ui/sonner";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<About />} />
			<Route path="/battersea" element={<Battersea />} />
			<Route path="/covent-garden" element={<CoventGarden />} />
			<Route path="/dates" element={<Dates />} />
		</Routes>
		<Toaster />
	</BrowserRouter>
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
