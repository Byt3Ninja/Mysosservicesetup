# MySOS Application Screenshots

This folder contains screenshots of all screens in the MySOS Customer Mobile App.

## How to Generate Screenshots

### Automated Method (Recommended)

1. **Install Playwright:**
   ```bash
   pnpm add -D playwright @playwright/test
   npx playwright install
   ```

2. **Start the development server:**
   ```bash
   pnpm dev
   ```
   
   The app should be running at http://localhost:5173

3. **Run the screenshot script (in a new terminal):**
   ```bash
   node take-screenshots.js
   ```

Screenshots will be automatically saved to this folder.

---

### Manual Method

If you prefer to take screenshots manually:

1. **Start the dev server:**
   ```bash
   pnpm dev
   ```

2. **Open browser DevTools:**
   - Press F12 or right-click → Inspect
   - Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
   - Select "iPhone 14 Pro" or similar mobile device

3. **Navigate through the app and take screenshots:**
   - Use browser's built-in screenshot tool
   - Or use browser extensions like "Full Page Screen Capture"

---

## Screenshot List

### English Screens
- `01-splash-screen.png` - App splash screen with logo
- `02-login-screen.png` - Login screen (empty)
- `03-login-screen-with-input.png` - Login screen with credentials entered
- `04-signup-screen.png` - Signup/registration screen
- `05-signup-screen-filled.png` - Signup screen with data filled
- `06-landing-screen.png` - Main landing screen with SOS button
- `07-hospital-map-screen.png` - Hospital selection map
- `08-service-selection-screen.png` - Service category selection
- `09-service-selection-with-services.png` - Services selected
- `10-payment-screen.png` - Payment method selection
- `11-tracking-screen.png` - Real-time order tracking
- `12-chat-screen.png` - In-app chat with team
- `13-add-address-screen.png` - Add new address form

### Arabic Screens (RTL)
- `14-login-screen-arabic.png` - Login screen in Arabic
- `15-landing-screen-arabic.png` - Landing screen in Arabic
- *(Add more Arabic screenshots as needed)*

---

## Screenshot Specifications

- **Dimensions:** 390 × 844 px (iPhone 14 Pro)
- **Format:** PNG
- **Device Scale:** 3x (Retina)
- **Orientation:** Portrait
- **File Naming:** Sequential with descriptive names

---

## Usage

These screenshots are used for:
- 📱 App Store / Play Store listings
- 📄 Documentation and user guides
- 🎨 Design reviews and presentations
- 🧪 Visual regression testing
- 📊 Stakeholder demos

---

## Notes

- Screenshots should be updated whenever UI changes significantly
- Always capture both English and Arabic versions
- Test on multiple screen sizes if needed
- Ensure no sensitive data is visible in screenshots

---

Last Updated: April 25, 2026
