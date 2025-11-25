# MVC & TDD Training Project 🍽️

A hands-on training project to learn **Model-View-Controller (MVC)** architecture and **Test-Driven Development (TDD)** by building a restaurant menu application.

## 🚀 Quick Start

```bash
npm install    # Install dependencies
npm test       # Run tests (you'll see failures - that's expected!)
npm start      # Start at http://localhost:3000
```

---

## 🎯 What You'll See

Navigate through the site and observe:

### ✅ Pizzas (Complete)
- **Working stats cards**: Total count, average price, top rated
- All features functional
- Study this as your reference!

### ✅ Starters (Complete)
- **Working stats cards**: Total count, average price, best value
- All features functional
- Another complete example

### 🔨 Pastas (Broken Stats)
- Table displays correctly
- **Stats cards show ???** - Need to implement `calculateStats()` and `getMostExpensive()`
- Yellow warning tells you what to fix

### 🚧 Desserts (Not Grouped)
- Basic display works
- **Not grouped by type** - Need to implement `groupByType()` and `filterByType()`
- Blue info box explains what's needed

---

## 📚 Training Path

### Step 1: Study Complete Examples (20 min)

**Pizza Module** - Complete reference implementation
- `app/models/pizza.js` - See how methods are used
- `app/views/pizzaView.js` - See how stats are calculated and displayed
- `app/controllers/pizzaController.js` - See the coordination

**Starters Module** - Another complete example
- Compare with Pizza to see the pattern
- Notice similar structure

**Key Observation**: Every method is actually used to display features on the page!

---

### Step 2: Fix Pasta Stats (30 min) 🔨

**What's Broken**: Navigate to Pastas → stats cards show "???"

**Why**: `calculateStats()` returns zeros because it's not implemented

**Your Task**:

1. **Run tests first** (TDD approach):
   ```bash
   npm test pasta
   ```
   You'll see failures for `getMostExpensive()` and `calculateStats()`

2. **Implement `getMostExpensive(pastas)`** in `app/models/pasta.js`:
   - Return the pasta with the highest price
   - Return null for empty array
   - Tests should pass ✅

3. **Implement `calculateStats(pastas)`** in `app/models/pasta.js`:
   - Calculate average price
   - Get total count
   - Find most expensive using your `getMostExpensive()` method
   - Return object: `{ avgPrice, totalCount, mostExpensive }`
   
4. **Verify in browser**:
   - Navigate to Pastas
   - Stats cards should now show real data!
   - No more "???"

**TDD Cycle**:
- 🔴 Red: Tests fail
- 🟢 Green: Implement code, tests pass
- 🔄 Refactor: Improve if needed
- ✨ See it work in the browser!

---

### Step 3: Group Desserts by Type (45 min) 🚧

**What's Missing**: Desserts show info box instead of categorized display

**Why**: `groupByType()` returns empty object

**Your Task**:

1. **Run tests**:
   ```bash
   npm test dessert
   ```
   
2. **Implement `filterByType(desserts, type)`** in `app/models/dessert.js`:
   - Filter desserts array by type property
   - Return matching desserts

3. **Implement `groupByType(desserts)`** in `app/models/dessert.js`:
   - Group desserts into object by type
   - Return: `{ "cake": [...], "ice-cream": [...], "pudding": [...] }`
   - Hint: Use `reduce()` or loop through and build object

4. **See the magic** in browser:
   - Navigate to Desserts
   - Should now show desserts in card sections by type!
   - "Cakes", "Ice Cream", "Pudding" sections

---

## 🎯 Success Criteria

✅ Training complete when:
- Pasta stats cards show real data (not "???")
- Desserts display in categorized card sections
- All tests pass (`npm test` → 0 failures)
- You understand how Model methods are used in Views

---

## 🧪 Testing Commands

```bash
npm test              # Run all tests
npm test pizza        # Run pizza tests (should all pass)
npm test pasta        # Run pasta tests (will fail initially)
npm test dessert      # Run dessert tests (will fail initially)
```

---

## 🔍 Key Concepts

### MVC Architecture
- **Model**: Business logic that Views actually use
  - Example: `calculateStats()` used by view to show cards
- **View**: Renders UI using Model data
  - Example: Shows stats cards if Model provides data
- **Controller**: Fetches from Model, passes to View

### TDD Workflow
1. 🔴 Run tests → see failures
2. 🟢 Write code → tests pass
3. ✅ Check browser → feature works
4. 🔄 Refactor if needed

### Why This Approach?
Every method you implement has a **visible impact**:
- Fix `calculateStats()` → stats cards appear
- Fix `groupByType()` → desserts get organized
- **Your code matters** - you see it work!

---

## 🆘 Troubleshooting

**Pasta stats still showing "???"**
- Did you implement BOTH methods?
- Check if `getMostExpensive()` returns the right pasta
- Make sure `calculateStats()` uses `getMostExpensive()`

**Desserts not showing in sections**
- Check if `groupByType()` returns proper object structure
- Try `console.log()` to see what you're returning
- Look at the test to see expected format

**Tests failing**
- Read the error message - it tells you what's expected
- Look at Pizza/Starters for working examples
- Compare your implementation with the pattern

---

## ⏱️ Time Estimates

| Task | Time | 
|------|------|
| Study examples | 20 min |
| Fix Pasta stats | 30 min |
| Group Desserts | 45 min |
| **Total** | **~2 hours** |

---

## 📝 What Makes This Training Special

1. **Real Impact**: Every method you write changes what you see
2. **Visual Feedback**: Broken features are obvious (??? or info boxes)
3. **Complete Examples**: Pizza & Starters show you how
4. **TDD Practice**: Tests guide your implementation
5. **Meaningful Code**: Nothing is "just for practice"

---

## 🌟 After Training

Now that you understand the pattern, try:
- Add a search feature (users can find items)
- Add filtering UI (show only 5-star items)
- Add a shopping cart
- Create your own category!

---

**Happy Learning! 🚀**

*Remember: If you can't see why you're implementing something, ask yourself: "Where is this used in the view?"*
