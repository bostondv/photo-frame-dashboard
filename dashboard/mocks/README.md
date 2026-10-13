# Dashboard design mocks

Static HTML screens for the family dashboard redesign. They follow the family dashboard plan at `~/Plans/family-dashboard/family-dashboard.md` (calendar, chores in our own store modelled on Skylight, lists from Google Tasks, meals from our own meal app, photos from R2, Open-Meteo weather, email OTP sign-in and frame pairing). Home controls are out of scope. The look borrows from Skylight Calendar.

They are design references, not app code. The family, events and times are made up, and "now" is fixed at Monday 12 October 2026, 3:20 PM. Every screen is responsive. Wider than 700 px it shows the frame layout, drawn at 1280×800 and scaled to fit. Narrower, the same page switches to the phone layout: a bottom tab bar, a header menu button and one scrolling column. Resize the window to see it switch. Each page's phone rules sit in a `@media (max-width: 700px)` block in its `<head>`.

Open `index.html` for a gallery of every screen. Serve the folder over HTTP, not `file://`. Use `npm run dev` in `dashboard/` and go to `/mocks/`, or run `python3 -m http.server -d dashboard/mocks`.

| File | Screen |
|---|---|
| `home.html` | Today: agenda, weather, chores progress, dinner, on-this-day photo |
| `calendar-week.html`, `calendar-day.html`, `calendar-month.html` | Calendar views |
| `add-event.html` | New-event sheet (write-back) |
| `chores.html`, `add-chore.html`, `rewards.html` | Chores and routines by person, the add sheet, stars and rewards |
| `lists.html` | Groceries and other lists |
| `add-menu.html` | Global Add menu (the button in the rail) |
| `meals.html`, `plan-meal.html` | Weekly meal plan and planning a meal |
| `recipes.html`, `add-recipe.html`, `recipe.html`, `cook.html` | Recipes tab, adding a recipe, recipe, cook mode |
| `settings.html` | Household (from config) and devices |
| `menu.html` | Phone header menu: Chores, Recipes, Photos, Weather, Household, Devices |
| `review-recipe.html`, `edit-recipe.html` | Import review and the recipe editor |
| `add-groceries.html`, `shop-week.html` | Sending one recipe, or the week, to Groceries |
| `upload-photos.html` | Adding photos to an album |
| `photos.html` | Photo albums |
| `weather.html` | Weather detail |
| `screensaver.html` | Photo screensaver |
| `pair.html` | Pairing code shown on an unpaired frame |
| `phone.html` | Phone sign-in and frame approval |

Shared code: `mocks.css` (tokens and components), `calendar.css`, `chores.css`, `recipe-form.css` and `grocery-preview.css` (shared by the recipe and grocery screens), `recipe-data.js` (sample recipe), and `shell.js` (icons, nav rail, top bar, scale-to-fit).
