/**
 * MySOS Screenshot Generator
 *
 * This script uses Playwright to automatically capture screenshots of all app screens.
 *
 * Prerequisites:
 * 1. Install dependencies: pnpm add -D playwright @playwright/test
 * 2. Install browsers: npx playwright install
 *
 * Usage:
 * 1. Start dev server: pnpm dev
 * 2. Run script: npx tsx take-screenshots.ts
 */

import { chromium, Browser, BrowserContext, Page } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots');
const APP_URL = 'http://localhost:5173'; // Vite default port

interface ScreenConfig {
  name: string;
  description: string;
  waitTime?: number;
  setup: (page: Page) => Promise<void>;
}

// Screen configurations
const screens: ScreenConfig[] = [
  {
    name: '01-splash-screen',
    description: 'Splash Screen',
    waitTime: 1000,
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(500);
    }
  },
  {
    name: '02-login-screen',
    description: 'Login Screen',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500); // Wait for splash to finish
    }
  },
  {
    name: '03-login-screen-with-input',
    description: 'Login Screen with Input',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
    }
  },
  {
    name: '04-signup-screen',
    description: 'Signup Screen',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      const signupButton = await page.getByText('Sign Up').first();
      await signupButton.click();
      await page.waitForTimeout(500);
    }
  },
  {
    name: '05-signup-screen-filled',
    description: 'Signup Screen with Data',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      const signupButton = await page.getByText('Sign Up').first();
      await signupButton.click();
      await page.waitForTimeout(500);

      const inputs = await page.$$('input');
      if (inputs[0]) await inputs[0].fill('Mohamed');
      if (inputs[1]) await inputs[1].fill('Ali');
      if (inputs[2]) await inputs[2].fill('+20 100 123 4567');
      if (inputs[3]) await inputs[3].fill('123456');
      if (inputs[4]) await inputs[4].fill('123456');
    }
  },
  {
    name: '06-landing-screen',
    description: 'Landing Screen / Home',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      // Auto-login
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);
    }
  },
  {
    name: '07-hospital-map-screen',
    description: 'Hospital Map Screen',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);

      // Click SOS button
      const sosButton = await page.getByText('SOS').first();
      await sosButton.click();
      await page.waitForTimeout(1500);
    }
  },
  {
    name: '08-service-selection-screen',
    description: 'Service Selection Screen',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);

      const sosButton = await page.getByText('SOS').first();
      await sosButton.click();
      await page.waitForTimeout(1500);

      // Click first hospital card
      const hospitalCards = await page.$$('[class*="cursor-pointer"]');
      if (hospitalCards.length > 0) {
        await hospitalCards[0].click();
        await page.waitForTimeout(1000);
      }
    }
  },
  {
    name: '09-service-selection-with-services',
    description: 'Service Selection with Selected Services',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);

      const sosButton = await page.getByText('SOS').first();
      await sosButton.click();
      await page.waitForTimeout(1500);

      const hospitalCards = await page.$$('[class*="cursor-pointer"]');
      if (hospitalCards.length > 0) {
        await hospitalCards[0].click();
        await page.waitForTimeout(1000);
      }

      // Select some services
      const checkboxes = await page.$$('input[type="checkbox"]');
      if (checkboxes.length > 0) await checkboxes[0].click();
      if (checkboxes.length > 1) await checkboxes[1].click();
      await page.waitForTimeout(500);
    }
  },
  {
    name: '10-payment-screen',
    description: 'Payment Screen',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);

      const sosButton = await page.getByText('SOS').first();
      await sosButton.click();
      await page.waitForTimeout(1500);

      const hospitalCards = await page.$$('[class*="cursor-pointer"]');
      if (hospitalCards.length > 0) {
        await hospitalCards[0].click();
        await page.waitForTimeout(1000);
      }

      const checkboxes = await page.$$('input[type="checkbox"]');
      if (checkboxes.length > 0) await checkboxes[0].click();
      await page.waitForTimeout(500);

      // Click confirm services button
      const confirmButton = await page.getByRole('button', { name: /confirm/i }).first();
      await confirmButton.click();
      await page.waitForTimeout(1000);
    }
  },
  {
    name: '11-tracking-screen',
    description: 'Order Tracking Screen',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);

      const sosButton = await page.getByText('SOS').first();
      await sosButton.click();
      await page.waitForTimeout(1500);

      const hospitalCards = await page.$$('[class*="cursor-pointer"]');
      if (hospitalCards.length > 0) {
        await hospitalCards[0].click();
        await page.waitForTimeout(1000);
      }

      const checkboxes = await page.$$('input[type="checkbox"]');
      if (checkboxes.length > 0) await checkboxes[0].click();
      await page.waitForTimeout(500);

      const confirmButton = await page.getByRole('button', { name: /confirm/i }).first();
      await confirmButton.click();
      await page.waitForTimeout(1000);

      // Complete payment
      const payButton = await page.getByRole('button', { name: /payment/i }).first();
      await payButton.click();
      await page.waitForTimeout(2000);
    }
  },
  {
    name: '12-chat-screen',
    description: 'In-App Chat Screen',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);

      const sosButton = await page.getByText('SOS').first();
      await sosButton.click();
      await page.waitForTimeout(1500);

      const hospitalCards = await page.$$('[class*="cursor-pointer"]');
      if (hospitalCards.length > 0) {
        await hospitalCards[0].click();
        await page.waitForTimeout(1000);
      }

      const checkboxes = await page.$$('input[type="checkbox"]');
      if (checkboxes.length > 0) await checkboxes[0].click();
      await page.waitForTimeout(500);

      const confirmButton = await page.getByRole('button', { name: /confirm/i }).first();
      await confirmButton.click();
      await page.waitForTimeout(1000);

      const payButton = await page.getByRole('button', { name: /payment/i }).first();
      await payButton.click();
      await page.waitForTimeout(2000);

      // Click chat button (message circle icon)
      const chatButtons = await page.$$('button');
      for (const btn of chatButtons) {
        const svg = await btn.$('svg');
        if (svg) {
          const className = await svg.getAttribute('class');
          if (className?.includes('lucide-message-circle')) {
            await btn.click();
            await page.waitForTimeout(1000);
            break;
          }
        }
      }
    }
  },
  // Arabic versions
  {
    name: '14-login-screen-arabic',
    description: 'Login Screen (Arabic)',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);

      // Switch to Arabic - look for language switcher button
      const buttons = await page.$$('button');
      for (const btn of buttons) {
        const text = await btn.textContent();
        if (text?.includes('العربية') || text?.includes('AR')) {
          await btn.click();
          await page.waitForTimeout(500);
          break;
        }
      }
    }
  },
  {
    name: '15-landing-screen-arabic',
    description: 'Landing Screen (Arabic)',
    setup: async (page) => {
      await page.goto(APP_URL);
      await page.waitForTimeout(3500);
      await page.fill('input[type="tel"]', '+20 100 123 4567');
      await page.fill('input[type="password"]', '123456');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(1500);

      // Switch to Arabic
      const buttons = await page.$$('button');
      for (const btn of buttons) {
        const text = await btn.textContent();
        if (text?.includes('العربية') || text?.includes('AR')) {
          await btn.click();
          await page.waitForTimeout(500);
          break;
        }
      }
    }
  }
];

async function takeScreenshots() {
  console.log('🚀 Starting MySOS Screenshot Generator\n');
  console.log(`📁 Screenshots will be saved to: ${SCREENSHOTS_DIR}\n`);

  // Launch browser
  const browser: Browser = await chromium.launch({
    headless: true // Set to false to see the browser
  });

  const context: BrowserContext = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 14 Pro dimensions
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    locale: 'en-US'
  });

  const page: Page = await context.newPage();

  let successCount = 0;
  let errorCount = 0;

  for (const screen of screens) {
    try {
      console.log(`📸 Capturing: ${screen.description}...`);

      // Setup the screen
      await screen.setup(page);

      // Wait a bit for animations
      await page.waitForTimeout(screen.waitTime || 500);

      // Take screenshot
      const screenshotPath = path.join(SCREENSHOTS_DIR, `${screen.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: false // Mobile viewport screenshot
      });

      console.log(`✅ Saved: ${screen.name}.png`);
      successCount++;

    } catch (error) {
      console.error(`❌ Error capturing ${screen.name}:`, (error as Error).message);
      errorCount++;
    }
  }

  await browser.close();

  console.log('\n' + '='.repeat(50));
  console.log('📊 Screenshot Generation Complete!');
  console.log('='.repeat(50));
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${errorCount}`);
  console.log(`📁 Location: ${SCREENSHOTS_DIR}`);
  console.log('='.repeat(50) + '\n');
}

// Check if dev server is running
async function checkDevServer(): Promise<boolean> {
  try {
    const response = await fetch(APP_URL);
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Main execution
(async () => {
  console.log('🔍 Checking if development server is running...\n');

  const serverRunning = await checkDevServer();

  if (!serverRunning) {
    console.error('❌ Development server is not running!');
    console.error('\n📝 Please start the dev server first:');
    console.error('   pnpm dev\n');
    console.error('Then run this script again:\n');
    console.error('   npx tsx take-screenshots.ts\n');
    process.exit(1);
  }

  console.log('✅ Development server is running!\n');

  await takeScreenshots();
})();
