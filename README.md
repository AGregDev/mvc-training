# MVC & TDD Training Project 🍽️

A hands-on training project to learn **Model-View-Controller (MVC)** architecture and **Test-Driven Development (TDD)** by building a restaurant menu application.

## 🚀 Quick Start

```bash
npm install    # Install dependencies
npm test       # Run tests (see what passes/fails)
npm start      # Start the application at http://localhost:3000
```

---

## 📁 Project Structure

```
app/
├── models/       # Data & business logic
│   ├── pizza.js      ✅ Complete - Your reference!
│   ├── pasta.js      🔨 TODO: getMostExpensive
│   ├── starter.js    🚧 TODO: getTopRated, validate
│   └── dessert.js    🚧 TODO: All helper methods
├── views/        # UI rendering (no logic)
│   ├── pizzaView.js  ✅ Complete
│   ├── pastaView.js  🔨 TODO: Fix renderRow, renderStars
│   ├── starterView.js 🚧 TODO: Implement all methods
│   └── dessertView.js 🚧 TODO: Implement (try cards!)
├── controllers/  # Coordinates Model & View
│   └── ...       (various TODO methods)
└── utils/        # 🔥 Shared utilities (advanced challenge)

test/             # Test files with some TODOs
db/               # JSON database files
```

---

## 🎓 Training Path

### Level 1: Study Pizza Module (15 min) ⭐

**Understand MVC by example**

1. **Model** (`app/models/pizza.js`)
   - Fetches data, performs calculations
   - No UI code

2. **View** (`app/views/pizzaView.js`)
   - Renders HTML
   - No data fetching

3. **Controller** (`app/controllers/pizzaController.js`)
   - Coordinates Model + View
   - Updates DOM

**Try it:**
```bash
npm test pizza    # See tests
npm start         # Click "Pizzas" in browser
```

---

### Level 2: Fix Pasta View (20 min) ⭐

**Visual TODOs in browser!**

Navigate to Pastas → see yellow warning banner

**Tasks:**
- Open `app/views/pastaView.js`
- Fix `renderRow()` - format price as `$1.80`
- Fix `renderStars()` - show star icons
- Pattern: Copy from `pizzaView.js`

**Verify:** Page looks like Pizzas page

---

### Level 3: Pasta Model + TDD (20 min) ⭐⭐

**Test-Driven Development practice**

```bash
npm test pasta.model  # See failing test
```

**Tasks:**
1. Open `app/models/pasta.js`
2. Implement `getMostExpensive(pastas)`
3. Run tests → should pass ✅

**Bonus:** Complete TODO test in `test/models/pasta.model.test.js`

**TDD Cycle:**
- 🔴 Red: Test fails
- 🟢 Green: Make it pass
- 🔄 Refactor: Improve code

---

### Level 4: Complete Starter Module (45 min) ⭐⭐

**Full MVC implementation**

Navigate to Starters → see blue info box with instructions

**Model** (`app/models/starter.js`):
- Implement `getTopRated(starters, limit)`
- Implement `validate(starter)`

**View** (`app/views/starterView.js`):
- Implement `renderList(starters)`
- Implement `renderRow(starter, index)`
- Implement `renderStars(rating)`

**Tests**:
- Complete 2 TODOs in `test/models/starter.model.test.js`

**Verify:**
```bash
npm test starter       # All pass?
npm start              # Navigate to Starters
```

---

### Level 5: Build Dessert Module (60 min) ⭐⭐⭐

**Create from scratch**

Navigate to Desserts → see creative challenge

**Model** (`app/models/dessert.js`):
- Implement `filterByType(desserts, type)`
- Implement `isSpecial(dessert)` - rating >= 4.5
- Implement `validate(dessert)`

**View** (`app/views/dessertView.js`):
- **Challenge:** Use Bootstrap cards, not table!
- Hint provided in blue box on page

**Controller** (`app/controllers/dessertController.js`):
- Implement `getDessertsByType(type)`
- Implement `getSpecialDesserts()`
- Implement `groupByType(desserts)`

**Tests:**
- Complete TODOs in `test/models/dessert.model.test.js`
- Add test in `test/controllers/dessert.controller.test.js`

**Example card layout:**
```html
<div class="row">
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5>${dessert.name}</h5>
        <span class="badge">${dessert.type}</span>
        <p>${formatPrice(dessert.price)}</p>
      </div>
    </div>
  </div>
</div>
```

---

### Level 6: Pizza Advanced (20 min) ⭐⭐

**Complete remaining features**

**Model** (`app/models/pizza.js`):
- Implement `findByName(pizzas, name)` - case insensitive
- Implement `validate(pizza)`

**Tests:**
- Complete TODO in `test/models/pizza.model.test.js`
- Complete TODO in `test/controllers/pizza.controller.test.js`

---

### 🔥 Level 7: ADVANCED CHALLENGE - Refactoring (45 min) ⭐⭐⭐⭐

**Problem:** Code duplication! 

`renderStars()` is identical in every view - this violates DRY (Don't Repeat Yourself).

**Your Mission:**

1. **Create shared utilities:**
   ```javascript
   // app/utils/viewHelpers.js
   export const renderStars = (rating) => {
     // Move logic here
   };
   
   export const formatPrice = (cents) => {
     return `$${(cents / 100).toFixed(2)}`;
   };
   ```

2. **Refactor all views:**
   ```javascript
   import { renderStars, formatPrice } from '../utils/viewHelpers.js';
   
   // Use in views
   <td>${formatPrice(item.price)}</td>
   <td>${renderStars(item.rating)}</td>
   ```

3. **Write tests:**
   - Complete `test/utils/viewHelpers.test.js`
   - Test `renderStars()` with ratings 0, 3, 5
   - Test `formatPrice()` with various amounts

4. **Verify everything works:**
   ```bash
   npm test              # All pass?
   npm start             # All pages work?
   ```

**Skills Practiced:**
- Identifying code smells
- Refactoring without breaking functionality  
- Creating reusable utilities
- Maintaining test coverage

---

## 🎯 Success Criteria

✅ Training complete when:
- All 4 menu pages display correctly
- All tests pass (`npm test` → 0 failures)
- You can explain Model, View, Controller roles
- You understand TDD workflow
- 🌟 **Bonus:** Completed refactoring challenge

---

## 🧪 Testing Commands

```bash
npm test                    # Run all tests
npm test pizza              # Run specific module
npm test pasta.model        # Run specific file
npm run test:watch          # Auto-rerun on changes
npm run test:coverage       # Coverage report
```

---

## 🔍 Key Concepts

### MVC Architecture
- **Model**: Data + business logic (no UI)
- **View**: Renders HTML (no data fetching)
- **Controller**: Coordinates (minimal logic)

### TDD Workflow
1. 🔴 Write test → see it fail
2. 🟢 Write code → test passes
3. 🔄 Refactor → tests stay green

### DRY Principle
Don't Repeat Yourself → extract shared code!

---

## 🆘 Troubleshooting

**Tests not running?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Page not loading?**
- Check browser console (F12)
- Verify `npm start` is running
- Try clearing cache (Ctrl+Shift+R)

**Don't understand MVC?**
- Study Pizza module thoroughly
- Draw flow diagram: User → Controller → Model → Controller → View
- Trace one request through the code

---

## ⏱️ Time Estimates

| Level | Time | Difficulty |
|-------|------|------------|
| 1. Study Pizza | 15 min | ⭐ |
| 2. Pasta View | 20 min | ⭐ |
| 3. Pasta Model | 20 min | ⭐⭐ |
| 4. Starter Module | 45 min | ⭐⭐ |
| 5. Dessert Module | 60 min | ⭐⭐⭐ |
| 6. Pizza Advanced | 20 min | ⭐⭐ |
| 7. Refactoring | 45 min | ⭐⭐⭐⭐ |
| **Total** | **4-7 hours** | |

---

## 🌟 Beyond Training

After completing:
- Add search/filter functionality
- Implement shopping cart
- Create admin CRUD panel
- Add user authentication
- Build real backend API

---

## 📝 Tips for Success

1. **Start with Pizza** - It's your reference for everything
2. **Read the tests** - They tell you exactly what to do
3. **Use browser TODOs** - Visual guides on each page
4. **Test often** - Run tests after each change
5. **Ask "why?"** - Understanding > completing

---

**Happy Learning! 🚀**

*Remember: The goal is understanding MVC and TDD, not just finishing tasks.*
