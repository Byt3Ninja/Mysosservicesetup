# MySOS Screenshot Generation Instructions

This document explains how to generate screenshots for all screens in the MySOS Customer Mobile App.

---

## ⚠️ Important Note

**I cannot directly generate screenshots** because:
- The app needs to be running in a browser
- Screenshot generation requires a display/GUI environment
- I'm running in a backend/terminal environment

However, I've created automated tools to help you generate them easily!

---

## 🚀 Quick Start (Automated Method)

### Step 1: Install Dependencies

```bash
# Install Playwright for automated screenshots
pnpm add -D playwright @playwright/test tsx

# Install browser binaries
npx playwright install chromium
```

### Step 2: Start Development Server

Open a terminal and run:

```bash
pnpm dev
```

Keep this terminal running. The app should be at http://localhost:5173

### Step 3: Run Screenshot Script

In a **new terminal**, run:

```bash
npx tsx take-screenshots.ts
```

This will automatically:
- Navigate through all screens
- Fill in forms
- Click buttons
- Capture screenshots
- Save to `screenshots/` folder

---

## 📸 Manual Method (Alternative)

If you prefer manual screenshots or the automated method doesn't work:

### 1. Start the Dev Server

```bash
pnpm dev
```

### 2. Open in Browser

Navigate to: http://localhost:5173

### 3. Open DevTools

- **Chrome/Edge:** Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- Click the "Toggle device toolbar" icon or press `Ctrl+Shift+M` / `Cmd+Shift+M`

### 4. Set Mobile Device

- Select **iPhone 14 Pro** from the device dropdown
- Or set custom dimensions: **390 × 844 px**

### 5. Navigate and Screenshot

Go through each screen and take screenshots:

#### English Screens:

1. **Splash Screen** (wait 1 second after loading)
   - Save as: `01-splash-screen.png`

2. **Login Screen**
   - Save as: `02-login-screen.png`

3. **Login with Input**
   - Fill: Mobile: +20 100 123 4567, PIN: 123456
   - Save as: `03-login-screen-with-input.png`

4. **Signup Screen**
   - Click "Sign Up"
   - Save as: `04-signup-screen.png`

5. **Signup Filled**
   - Fill all fields
   - Save as: `05-signup-screen-filled.png`

6. **Landing Screen**
   - Login and reach home
   - Save as: `06-landing-screen.png`

7. **Hospital Map**
   - Click SOS button
   - Save as: `07-hospital-map-screen.png`

8. **Service Selection**
   - Select a hospital
   - Save as: `08-service-selection-screen.png`

9. **Services Selected**
   - Check some services
   - Save as: `09-service-selection-with-services.png`

10. **Payment Screen**
    - Click Confirm Services
    - Save as: `10-payment-screen.png`

11. **Tracking Screen**
    - Complete payment
    - Save as: `11-tracking-screen.png`

12. **Chat Screen**
    - Click chat button on tracking screen
    - Save as: `12-chat-screen.png`

13. **Add Address Screen**
    - Navigate to add address
    - Save as: `13-add-address-screen.png`

#### Arabic Screens (RTL):

14. **Login (Arabic)**
    - Switch language to Arabic
    - Save as: `14-login-screen-arabic.png`

15. **Landing (Arabic)**
    - Login and switch to Arabic
    - Save as: `15-landing-screen-arabic.png`

*Continue for other screens as needed*

### 6. Save Screenshots

Use browser's built-in screenshot tool:
- **Chrome:** DevTools → Three dots menu → "Capture screenshot"
- **Firefox:** Right-click → "Take a Screenshot"
- **Or use extensions:** Awesome Screenshot, Full Page Screen Capture

Save all screenshots to: `/workspaces/default/code/screenshots/`

---

## 📱 Screenshot Specifications

All screenshots should follow these specs:

| Property | Value |
|----------|-------|
| **Width** | 390 px |
| **Height** | 844 px |
| **Device** | iPhone 14 Pro |
| **Scale** | 3x (Retina) |
| **Format** | PNG |
| **Orientation** | Portrait |
| **File Naming** | `##-screen-name.png` |

---

## 🎯 What to Capture

### Must-Have Screenshots:

✅ **Authentication Flow**
- Splash screen
- Login (empty and filled)
- Signup (empty and filled)

✅ **Main Features**
- Landing/Home screen
- Hospital map
- Service selection
- Payment screen
- Order tracking
- In-app chat

✅ **Additional Screens**
- Add address form
- Order history (if implemented)
- Profile/settings (if implemented)

✅ **Bilingual**
- At least 2-3 screens in Arabic (RTL)

---

## 🛠️ Troubleshooting

### "Development server not running" Error

Make sure:
```bash
pnpm dev
```
is running in another terminal and app is accessible at http://localhost:5173

### Automated Script Fails

- Check that Playwright is installed: `npx playwright --version`
- Install browsers: `npx playwright install chromium`
- Make sure port 5173 is not blocked

### Screenshots Look Wrong

- Clear browser cache
- Check mobile viewport is active (390×844)
- Ensure you're viewing at 3x scale factor
- Wait for animations to complete

### Missing Screens

Some screens might not be accessible through the current flow. You may need to:
- Modify the automated script
- Take those screenshots manually
- Check if the feature is implemented

---

## 📊 Verification Checklist

After generating screenshots, verify:

- [ ] All 15+ screenshots generated
- [ ] Files saved to `screenshots/` folder
- [ ] Naming convention followed (`##-name.png`)
- [ ] Both English and Arabic versions included
- [ ] Mobile viewport (390×844) used
- [ ] No personal/sensitive data visible
- [ ] Screenshots are clear and readable
- [ ] All UI elements visible (not cut off)

---

## 🎨 Using Screenshots

Generated screenshots can be used for:

📱 **App Store Listings**
- Upload to Apple App Store / Google Play Store

📄 **Documentation**
- User guides and tutorials
- Technical documentation

🎨 **Design Reviews**
- Stakeholder presentations
- Design feedback sessions

🧪 **Visual Regression Testing**
- Automated UI testing
- Version comparisons

---

## 💡 Tips

1. **Consistent Timing:** Wait for animations to complete before screenshotting
2. **Clean State:** Start with fresh browser session for consistency
3. **Real Data:** Use realistic test data (names, numbers)
4. **No Placeholders:** Ensure all content is loaded, not "Lorem ipsum"
5. **Update Regularly:** Regenerate after significant UI changes
6. **Version Control:** Consider committing screenshots to git for tracking

---

## 📞 Need Help?

If you encounter issues:

1. Check that dev server is running: http://localhost:5173
2. Review browser console for errors (F12)
3. Try manual method if automated fails
4. Verify Playwright installation
5. Check this documentation: `screenshots/README.md`

---

**Last Updated:** April 26, 2026  
**Script Location:** `/take-screenshots.ts`  
**Output Folder:** `/screenshots/`

---

## Quick Command Reference

```bash
# Install dependencies
pnpm add -D playwright @playwright/test tsx
npx playwright install chromium

# Start dev server (Terminal 1)
pnpm dev

# Generate screenshots (Terminal 2)
npx tsx take-screenshots.ts

# Manual approach
# Just open http://localhost:5173 in browser
# and use DevTools to take screenshots
```
