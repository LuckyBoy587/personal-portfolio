# Implementation Plan: Project Filtering Feature

## 1. High-Level Feature Breakdown

The filtering system will consist of three main layers:
*   **Data Layer:** Enhancing the JSON data with explicit categories to group projects meaningfully.
*   **Logic Layer:** A simple filtering mechanism using standard React state (`useState`) and memoization (`useMemo`) to determine which projects to display.
*   **UI Layer:** A responsive "Filter Bar" component placed above the grid, with smooth animations for switching categories.

## 2. Suggested Data Structure Changes

The current `projects.json` relies on raw tech tags. I will add a high-level `category` field to each object in `src/projects.json`.

**Example Change:**
```json
{
  "title": "Music Player App",
  "category": "Mobile App", // <--- ADD THIS
  "tech": ["Kotlin", "XML", "Android Studio"],
  ...
},
{
  "title": "Chatbot with Keras",
  "category": "AI/ML",      // <--- ADD THIS
  ...
}
```

**Recommended Categories:**
*   `Web Dev` (for React, Spring Boot, Node.js projects)
*   `AI/ML` (for Chatbot, Chess AI)
*   `Mobile` (for Music Player)
*   `Game Dev` (for Tetris)

## 3. State Management Approach

**Location:** `src/projects.jsx`

```javascript
// State
const [activeCategory, setActiveCategory] = useState("All");

// Derived State (The Logic)
const filteredProjects = useMemo(() => {
  if (activeCategory === "All") return projects;
  return projects.filter(project => project.category === activeCategory);
}, [activeCategory]);

// Dynamic Categories
// Extracts unique categories automatically so we don't have to hardcode buttons
const categories = ["All", ...new Set(projects.map(p => p.category))];
```

## 4. UI/UX Behavior

**The Filter Bar:**
*   **Layout:** A flex container centered above the grid.
*   **Interaction:** Clicking a category updates `activeCategory`.
*   **Visuals:**
    *   **Inactive:** Transparent background, thin border (glassmorphism style).
    *   **Active:** Filled background (accent color), bold text.
    *   **Mobile:** Horizontal scroll if categories overflow.

**The Grid:**
*   **Animations:** Use `framer-motion`.
    *   Wrap the grid in `<AnimatePresence mode="wait">`.
    *   Add `layout` prop to the project cards for automatic position transitions.
*   **Empty State:** Show a simple "No projects found" message if a category is empty.

## 5. Performance Considerations

*   **Memoization:** `useMemo` prevents re-filtering on every re-render.
*   **Keys:** **CRITICAL.** Switch from `key={index}` to `key={project.title}` (or a unique ID) to ensure React animates the specific items correctly when the list order changes.

## 6. Common Pitfalls to Avoid

1.  **Case Sensitivity:** Ensure JSON categories are consistent ("Web Dev" vs "web dev").
2.  **Hardcoded Buttons:** Dynamically generate buttons from data to support future categories automatically.
3.  **Layout Shift:** Ensure the parent container handles height changes smoothly.

## TL;DR Summary

*   **Modify JSON:** Add a `"category"` field to `projects.json`.
*   **State:** Use `useState("All")` in `Projects.jsx`.
*   **Logic:** Create `filteredProjects` using `projects.filter(...)`.
*   **Uniqueness:** specific unique categories dynamically using `new Set()`.
*   **UI:** Render a list of buttons for categories above the grid.
*   **Keys:** Switch from `key={index}` to `key={project.title}`.
*   **Animation:** Add `layout` prop to `motion.div` cards.
