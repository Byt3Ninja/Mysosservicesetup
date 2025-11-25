# MySOS Mobile Emergency Service Application
## Complete User Experience Documentation

---

## Table of Contents
1. [App Overview](#app-overview)
2. [Launch & Onboarding](#launch--onboarding)
3. [Authentication Flow](#authentication-flow)
4. [Main Dashboard](#main-dashboard)
5. [Emergency SOS Flow](#emergency-sos-flow)
6. [Service Selection](#service-selection)
7. [Hospital Selection & Map View](#hospital-selection--map-view)
8. [Real-Time Tracking](#real-time-tracking)
9. [Payment Processing](#payment-processing)
10. [Profile Management](#profile-management)
11. [Address Management](#address-management)
12. [Language & Localization](#language--localization)
13. [Technical Specifications](#technical-specifications)

---

## App Overview

**MySOS** is a mobile-first emergency medical services application designed for the Egyptian market. It enables customers to request emergency medical services and track response teams in real-time, similar to ride-hailing applications like Uber.

### Key Features:
- 🚨 One-tap emergency SOS button
- 📍 Real-time location tracking
- 🏥 Nearest hospital identification
- 🚑 Multiple service category selection
- 💳 Integrated payment processing
- 🌐 Full bilingual support (Arabic/English)
- 🔐 Biometric authentication support
- 📞 Emergency hotline: **12345**
- 💰 All pricing in **EGP** (Egyptian Pounds)

---

## Launch & Onboarding

### Step 1: Splash Screen
**Duration**: 3-4 seconds

**Visual Elements:**
- Animated gradient background (red to orange)
- MySOS transparent logo (centered, 128px height)
- Floating logo animation with gentle bounce effect
- Animated background circles with pulsing effects
- Tagline text:
  - "Emergency services at your fingertips"
  - "Help when you need it most"
- Three animated loading dots
- Emergency hotline number displayed at bottom: **12345**

**Animation Sequence:**
1. Logo scales in with bounce effect (0.8s)
2. Tagline fades in from bottom (0.6s delay)
3. Loading dots appear with sequential animation (1s delay)
4. Emergency hotline fades in (1.5s delay)
5. Background circles continuously pulse

**User Action**: None (automatic transition)

---

### Step 2: Landing Screen
**Purpose**: First decision point for new vs returning users

**Layout:**
- **Header**: MySOS logo (transparent PNG, top-left) + Language Switcher (top-right)
- **Hero Section**: 
  - Large emergency icon with pulsing animation
  - Main headline: "Emergency Services at Your Fingertips"
  - Subtitle: "Fast, reliable medical assistance when you need it most"
- **Action Buttons**:
  1. **"Get Started"** (Primary Red Button) → Sign Up
  2. **"I Have an Account"** (Outline Button) → Login
- **Emergency Banner**: "Emergency? Call 12345" with phone icon
- **Features Section**: 3 feature cards displaying:
  - 🚑 Fast Response: "Quick ambulance arrival"
  - 📍 Real-Time Tracking: "Track your medical team"
  - 🏥 Nearest Hospitals: "Find closest facilities"

**User Actions:**
- Tap "Get Started" → Navigate to Sign Up
- Tap "I Have an Account" → Navigate to Login
- Tap emergency banner → Initiate phone call to 12345
- Toggle language switcher → Change app language

---

## Authentication Flow

### Option A: Sign Up Flow

#### Step 1: Sign Up Screen
**Purpose**: Create new user account

**Form Fields:**
1. **First Name** (Required)
   - Placeholder: "Enter your first name"
   - Validation: Must not be empty

2. **Last Name** (Required)
   - Placeholder: "Enter your last name"
   - Validation: Must not be empty

3. **Mobile Number** (Required)
   - Placeholder: "+20 XXX XXX XXXX"
   - Format: Egyptian phone number format
   - Validation: Must be valid Egyptian number

4. **PIN Code** (Required, 4 digits)
   - Placeholder: "Enter 4-digit PIN"
   - Type: Password (hidden)
   - Validation: Exactly 4 digits

5. **Confirm PIN** (Required, 4 digits)
   - Placeholder: "Re-enter PIN"
   - Type: Password (hidden)
   - Validation: Must match first PIN

**Biometric Setup:**
- Toggle switch: "Enable Biometric Login"
- Icon changes based on support: Face ID or Fingerprint
- Optional feature (can be enabled later)

**Buttons:**
- **"Sign Up"** (Primary Red Button) → Create account and proceed
- **"Back to Login"** (Text Link) → Return to login screen

**Validation Rules:**
- All fields required
- PIN must match confirmation
- Mobile number must be unique
- Real-time validation feedback

**Success Flow:**
1. Form validation passes
2. Loading spinner appears (1.5s)
3. Account created
4. Navigate to Main Dashboard
5. Success toast: "Welcome to MySOS!"

---

### Option B: Login Flow

#### Step 1: Login Screen
**Purpose**: Authenticate returning users

**Two Login Methods:**

##### Method 1: PIN Login
**Form Fields:**
1. **Mobile Number** (Required)
   - Placeholder: "+20 XXX XXX XXXX"
   - Format: Egyptian phone number

2. **PIN Code** (Required, 4 digits)
   - Placeholder: "Enter your PIN"
   - Type: Password (hidden)

**Buttons:**
- **"Login"** (Primary Red Button) → Authenticate
- **"Forgot PIN?"** (Text Link) → PIN recovery (future feature)
- **"Create Account"** (Outline Button) → Navigate to Sign Up

##### Method 2: Biometric Login
**Display:**
- Large biometric icon (Fingerprint/Face ID)
- Text: "Use biometrics to login quickly"
- **"Use Biometric"** button

**Biometric Flow:**
1. User taps "Use Biometric"
2. System prompt appears (fingerprint/face scan)
3. Biometric authentication occurs
4. Success: Navigate to dashboard
5. Failure: Error message + retry option

**Test User Credentials:**
- Mobile: Any valid Egyptian number
- PIN: 1234
- Biometric: Auto-login as "Mohamed Doe"

**Success Flow:**
1. Authentication successful
2. Loading spinner (1.5s)
3. Navigate to Main Dashboard
4. Welcome message: "Welcome, Mohamed!"

---

## Main Dashboard

### Layout Overview
**Purpose**: Central hub for all app features

**Header Section:**
- MySOS logo (left)
- Language switcher (right)
- Welcome message: "Welcome, Mohamed!"
- Current location display with GPS icon

**Emergency SOS Button:**
- Large red circular button (center)
- Pulsing animation effect
- Text: "SOS - Request Emergency"
- Icon: Emergency light
- Size: Prominent (120px diameter)
- Action: Tap to initiate emergency flow

**Quick Actions Grid:** (2x2 grid)
1. **My Orders**
   - Icon: Package
   - Text: "View order history"
   - Badge: Shows active order count
   - Action: View past emergencies

2. **Saved Addresses**
   - Icon: Map Pin
   - Text: "Manage locations"
   - Count: Shows number of saved addresses
   - Action: Navigate to address management

3. **Payment Methods**
   - Icon: Credit Card
   - Text: "Manage payments"
   - Action: View/add payment methods

4. **Emergency Contacts**
   - Icon: Phone
   - Text: "Quick dial"
   - Action: Call emergency services

**Service Categories Section:**
Four cards displaying service types:
1. **Emergency Services**
   - Icon: Stethoscope
   - Count: 2 services available
   - Services: ER Doctor, ER Nurse

2. **Ambulance Services**
   - Icon: Ambulance
   - Count: 2 services available
   - Services: BLS, ALS

3. **Portable Diagnostics**
   - Icon: Activity
   - Count: 4 services available
   - Services: Ultrasound, X-Ray, ECHO, Doppler

4. **Laboratory Services**
   - Icon: Flask Conical
   - Count: Multiple tests available
   - Services: Blood work, diagnostics

**Emergency Hotline Banner:**
- Red background
- Text: "Need immediate help?"
- Phone number: 12345
- Phone icon button
- Action: Direct call initiation

**User Actions:**
- Tap SOS button → Start emergency flow
- Tap quick action cards → Navigate to respective sections
- Tap service categories → View service details
- Tap emergency banner → Call 12345
- Toggle language → Switch app language

---

## Emergency SOS Flow

### Step 1: SOS Button Activation
**User Action**: Tap large red SOS button on dashboard

**System Response:**
- Button scales with haptic feedback
- Immediate navigation to Hospital Map Screen
- Default address auto-selected (current location)
- No address selection step required (streamlined for emergency)

**Design Decision**: Address selection step removed to minimize time to emergency response

---

### Step 2: Hospital Map & Selection
**Purpose**: Show nearest hospitals and select destination

**Map View:**
- Full-screen interactive map
- User's current location marked (blue dot with pulse)
- Hospital markers (red pins with white cross)
- Zoom controls
- Center-on-location button

**Hospital List (Bottom Sheet):**
Displays 7 real Cairo hospitals with details:

#### Hospital 1: Cairo University Hospital
- **Logo**: Actual hospital logo
- **Rating**: 4.8 ⭐ (2,450 reviews)
- **Type**: Government Hospital
- **Arrival Time**: 15 minutes
- **Address**: El-Manial, Cairo
- **Button**: "Select Hospital" (Red)

#### Hospital 2: Dar Al Fouad Hospital
- **Logo**: Actual hospital logo
- **Rating**: 4.9 ⭐ (3,120 reviews)
- **Type**: Private Hospital
- **Arrival Time**: 18 minutes
- **Address**: 6th of October City
- **Button**: "Select Hospital" (Red)

#### Hospital 3: Ain Shams University Hospital
- **Logo**: Actual hospital logo
- **Rating**: 4.7 ⭐ (1,890 reviews)
- **Type**: Government Hospital
- **Arrival Time**: 20 minutes
- **Address**: Abbassia, Cairo
- **Button**: "Select Hospital" (Red)

#### Hospital 4: Al-Salam International Hospital
- **Logo**: Actual hospital logo
- **Rating**: 4.8 ⭐ (2,670 reviews)
- **Type**: Private Hospital
- **Arrival Time**: 22 minutes
- **Address**: Maadi, Cairo
- **Button**: "Select Hospital" (Red)

#### Hospital 5: Cleopatra Hospital
- **Logo**: Actual hospital logo
- **Rating**: 4.6 ⭐ (1,540 reviews)
- **Type**: Private Hospital
- **Arrival Time**: 25 minutes
- **Address**: Nasr City
- **Button**: "Select Hospital" (Red)

#### Hospital 6: Nile Badrawi Hospital
- **Logo**: Actual hospital logo
- **Rating**: 4.9 ⭐ (2,980 reviews)
- **Type**: Private Hospital
- **Arrival Time**: 28 minutes
- **Address**: Maadi, Cairo
- **Button**: "Select Hospital" (Red)

#### Hospital 7: Sheikh Zayed Specialized Hospital
- **Logo**: Actual hospital logo
- **Rating**: 4.7 ⭐ (1,760 reviews)
- **Type**: Government Hospital
- **Arrival Time**: 30 minutes
- **Address**: Sheikh Zayed City
- **Button**: "Select Hospital" (Red)

**Hospital Card Details:**
- Hospital logo (40px circular)
- Hospital name
- Star rating + review count
- Hospital type badge (Government/Private)
- Estimated arrival time
- Distance from current location
- Address
- Select button

**Interaction:**
- Scroll hospital list vertically
- Tap hospital card → Highlight selection
- Tap "Select Hospital" → Proceed to service selection
- Tap map marker → Show hospital info popup
- Pinch to zoom map
- Drag to pan map

**Header Actions:**
- Back arrow (left) → Return to dashboard
- Language switcher (right)
- Emergency banner: "Team will arrive in 15-30 mins"

---

## Service Selection

### Step 1: Service Categories Screen
**Purpose**: Select required medical services

**Layout:**
- Header with back button and language switcher
- Progress indicator: "Step 1 of 3"
- Title: "Select Services You Need"
- Subtitle: "Choose one or more services"

**Service Categories:**

#### 1. Emergency Services
**Icon**: Stethoscope (Red background)
**Available Services**:
- **ER Doctor Visit** - 500 EGP
  - Checkbox for selection
  - Description: "Immediate doctor consultation"
  - Badge: "Available 24/7"
  
- **ER Nurse Visit** - 300 EGP
  - Checkbox for selection
  - Description: "Professional nursing care"
  - Badge: "Available 24/7"

#### 2. Ambulance Services
**Icon**: Ambulance (Orange background)
**Available Services**:
- **BLS Ambulance** - 800 EGP
  - Checkbox for selection
  - Description: "Basic Life Support ambulance"
  - Badge: "Fully equipped"
  
- **ALS Ambulance** - 1,500 EGP
  - Checkbox for selection
  - Description: "Advanced Life Support ambulance"
  - Badge: "Critical care"

#### 3. Portable Diagnostic Services
**Icon**: Activity Monitor (Blue background)
**Available Services**:
- **Portable Ultrasound** - 600 EGP
  - Checkbox for selection
  - Description: "Mobile ultrasound scanning"
  
- **Portable X-Ray** - 700 EGP
  - Checkbox for selection
  - Description: "On-site X-ray imaging"
  
- **Portable ECHO** - 900 EGP
  - Checkbox for selection
  - Description: "Echocardiogram service"
  
- **Portable Doppler** - 800 EGP
  - Checkbox for selection
  - Description: "Blood flow analysis"

#### 4. Laboratory Services
**Icon**: Flask (Green background)
**Available Services**:
- **Home Blood Draw** - 200 EGP
  - Checkbox for selection
  - Description: "Sample collection at home"
  
- **Complete Blood Count (CBC)** - 250 EGP
  - Checkbox for selection
  - Description: "Comprehensive blood analysis"
  
- **Blood Chemistry Panel** - 400 EGP
  - Checkbox for selection
  - Description: "Metabolic health screening"

**Selection Behavior:**
- Multi-select enabled (checkboxes)
- Minimum: 1 service required
- Maximum: No limit (select as many as needed)
- Real-time price calculation in footer

**Footer (Fixed):**
- **Selected Services**: Count display (e.g., "3 services selected")
- **Total Price**: Running total (e.g., "Total: 1,500 EGP")
- **Continue Button**: Primary red button
  - Disabled if no services selected
  - Shows "Select at least 1 service" when disabled
  - Active: "Continue to Payment" when services selected

**User Actions:**
- Tap service checkbox → Toggle selection
- Tap service card → Expand details (optional)
- Tap "Continue" → Navigate to payment screen
- Tap back button → Return to hospital selection

**Validation:**
- Must select at least 1 service to proceed
- Price updates in real-time as services added/removed
- Visual feedback on selection (checkmark, border highlight)

---

## Real-Time Tracking

### Step 1: Tracking Screen
**Purpose**: Monitor emergency response team location and status

**Access Point**: Automatically shown after payment confirmation

**Map View:**
- Full-screen live map
- **User Location**: Blue dot with pulse animation
- **Response Team**: Red ambulance icon with heading indicator
- **Destination**: Hospital marker (red pin)
- **Route Line**: Dashed line showing path
- **ETA Badge**: Floating badge showing arrival time

**Top Section:**
- Header with MySOS logo
- Live status badge: "Team En Route" (animated)
- Language switcher

**Info Panel (Bottom Sheet):**

#### Team Information:
- **Team Profile**:
  - Driver photo (circular, 60px)
  - Name: "Dr. Ahmed Hassan"
  - Rating: 4.9 ⭐ (350 trips)
  - License number: "EMS-2845"
  
- **Vehicle Details**:
  - Ambulance type: "ALS Ambulance"
  - Plate number: "ABC 1234"
  - Unit ID: "#AMB-156"

#### Status Updates:
Real-time status messages with timestamps:
- ✓ "Emergency request received" - 10:45 AM
- ✓ "Team assigned" - 10:46 AM
- ✓ "Team en route to your location" - 10:47 AM
- 🚑 "Estimated arrival: 12 minutes" - Current
- ⏱️ "Team approaching destination" - Pending
- 📍 "Team arrived" - Pending

#### Quick Actions:
- **Call Team**: Primary button (Phone icon)
  - Direct call to response team
  - Shows phone number
  
- **Call Hospital**: Secondary button
  - Direct call to destination hospital
  - Shows hospital contact

- **Emergency Contact**: Red button
  - Call emergency hotline (12345)
  - Always available

#### Trip Details:
- **Origin**: Current location address
- **Destination**: Selected hospital name + address
- **Distance**: Real-time distance calculation
- **Duration**: Estimated time remaining
- **Services**: List of selected services

**Live Updates:**
- Map refreshes every 5 seconds
- Team marker moves along route
- ETA updates automatically
- Status messages appear in real-time
- Push notifications for status changes

**Animation Effects:**
- Ambulance icon animates along route
- Pulse effect on user location
- ETA badge gently bounces
- Status updates slide in from bottom

**User Actions:**
- Pan/zoom map to view route
- Tap "Call Team" → Initiate call to driver
- Tap "Call Hospital" → Contact destination
- Tap "Emergency" → Call 12345
- Pull up bottom sheet → View full details
- Tap status item → Expand details

**Completion:**
- When team arrives, status changes to "Arrived"
- Notification: "Your emergency team has arrived!"
- Button changes to "End Trip"
- Trip summary becomes available

---

## Payment Processing

### Step 1: Payment Screen
**Purpose**: Review order and complete payment

**Header:**
- Back button (returns to service selection)
- Title: "Review & Pay"
- Language switcher

**Order Summary Section:**
- **Hospital**: Selected hospital name + logo
- **Location**: Hospital address
- **Arrival Time**: Estimated time (e.g., "15 minutes")

**Selected Services:**
Itemized list with individual prices:
```
✓ ER Doctor Visit             500 EGP
✓ BLS Ambulance                800 EGP
✓ Portable Ultrasound          600 EGP
✓ Home Blood Draw              200 EGP
```

**Price Breakdown:**
- **Subtotal**: Sum of all services (e.g., 2,100 EGP)
- **Service Fee**: 10% of subtotal (e.g., 210 EGP)
- **Tax**: 5% (e.g., 105 EGP)
- **Divider Line**
- **Total**: Bold, larger text (e.g., **2,415 EGP**)

**Payment Method:**
- **Card Selection** (Default):
  - Card icon
  - "Visa ending in 4242"
  - "Change" link
  
- **Alternative Methods**:
  - Cash on service
  - Mobile wallet
  - Insurance (if configured)

**Promo Code:**
- Input field: "Enter promo code"
- Apply button
- Success message if valid
- Discount applied to total

**Terms & Conditions:**
- Checkbox: "I agree to terms and conditions"
- Link to full terms
- Required to proceed

**Action Buttons:**
1. **"Confirm & Request Emergency"** (Primary Red)
   - Full width
   - Disabled until terms accepted
   - Shows loading spinner on tap
   
2. **"Cancel"** (Ghost button)
   - Returns to dashboard
   - Confirmation dialog: "Are you sure?"

**Payment Processing Flow:**
1. User taps "Confirm & Request Emergency"
2. Payment validation (1-2 seconds)
3. Loading overlay: "Processing your request..."
4. Payment successful
5. Success animation (checkmark)
6. Auto-navigate to Tracking Screen
7. Success notification: "Emergency request confirmed!"

**Error Handling:**
- Payment declined → Error message + retry option
- Network error → Retry prompt
- Insufficient balance → Add funds prompt
- Invalid promo code → Clear field + error message

**Security Features:**
- Secure payment badge
- Encrypted transaction icon
- Card details masked
- PCI compliant notice

---

## Profile Management

### Step 1: Profile Screen
**Access**: Tap user avatar/name on dashboard

**Header:**
- Back button
- Title: "My Profile"
- Edit button (top-right)

**Profile Information:**
- **Profile Photo**: 
  - Circular, 100px
  - Default avatar or uploaded image
  - Tap to change photo
  
- **User Details**:
  - Full Name: "Mohamed Doe"
  - Mobile Number: "+20 XXX XXX XXXX"
  - Member Since: "January 2024"
  - Member ID: "MSO-2845"

**Emergency Profile Card:**
- Blood Type: Selectable (A+, B+, O+, etc.)
- Allergies: Text input, comma-separated
- Medical Conditions: Text input
- Emergency Contact:
  - Name
  - Relationship
  - Phone number

**Account Settings:**
List of setting items:

1. **Biometric Login**
   - Toggle switch
   - Status: Enabled/Disabled
   - Icon: Fingerprint/Face ID

2. **Push Notifications**
   - Toggle switch
   - Controls: Order updates, promotions

3. **Location Services**
   - Toggle switch
   - Required for core functionality
   - Warning if disabled

4. **Language Preference**
   - Current: English/العربية
   - Tap to change
   - Applies immediately

5. **Change PIN**
   - Tap to open PIN change dialog
   - Requires current PIN
   - Enter new PIN twice

6. **Privacy Settings**
   - Data sharing preferences
   - Location history
   - Profile visibility

7. **Help & Support**
   - FAQ
   - Contact support
   - Live chat

8. **About MySOS**
   - App version
   - Terms of service
   - Privacy policy
   - Licenses

9. **Logout**
   - Red text
   - Confirmation dialog
   - Clears session

**Edit Mode:**
- Tap "Edit" button
- Fields become editable
- Save/Cancel buttons appear
- Real-time validation
- Save changes → Update profile
- Success toast on save

**User Actions:**
- Update profile photo
- Edit personal information
- Configure emergency details
- Toggle settings
- Change language
- Update PIN
- Logout

---

## Address Management

### Step 1: Saved Addresses Screen
**Access**: Tap "Saved Addresses" on dashboard

**Purpose**: Manage saved locations for quick emergency access

**Header:**
- Back button
- Title: "Saved Addresses"
- Add button (+ icon, top-right)

**Address List:**
Shows all saved addresses (currently 4):

#### Address 1: Current Location
- **Icon**: GPS Navigation (blue)
- **Label**: "Current Location"
- **Badge**: "LIVE" (blue badge)
- **Name**: "My Location"
- **Street**: "Nasr City, Cairo"
- **City**: "Cairo, Egypt"
- **Actions**: View on map
- **Note**: Cannot edit/delete (dynamic)

#### Address 2: Home
- **Icon**: Home (red)
- **Label**: "Home"
- **Name**: "Mohamed's Home"
- **Street**: "456 Oak Avenue"
- **City**: "San Francisco, CA 94103"
- **Actions**: Edit | Delete | Set as default

#### Address 3: Mom
- **Icon**: User (purple)
- **Label**: "Mom"
- **Name**: "Mother's House"
- **Street**: "789 Pine Street"
- **City**: "San Francisco, CA 94104"
- **Actions**: Edit | Delete

#### Address 4: Dad
- **Icon**: User (green)
- **Label**: "Dad"
- **Name**: "Father's House"
- **Street**: "321 Elm Drive"
- **City**: "San Francisco, CA 94105"
- **Actions**: Edit | Delete

**Card Features:**
- Selection indicator (radio button)
- Quick actions (swipe left): Edit, Delete
- Tap card → Select for emergency
- Long press → Show options menu

**Add New Address Button:**
- Dashed border card
- Plus icon
- Text: "Add New Address"
- Subtitle: "Save a family member's location"
- Tap → Navigate to Add Address form

---

### Step 2: Add New Address Screen
**Purpose**: Create a new saved address

**Access**: 
- Tap "+" on Saved Addresses screen
- Tap "Add New Address" card

**Header:**
- Back button
- Title: "Add New Address"
- Language switcher

**Form Sections:**

#### 1. Address Label
- **Label Type Selector** (Radio buttons):
  - 🏠 Home
  - 💼 Work
  - 👤 Mom
  - 👤 Dad
  - 👨‍👩‍👧‍👦 Other Family
  - 🏥 Other

- **Custom Label** (if "Other" selected):
  - Text input
  - Placeholder: "e.g., Sister, Grandma, Friend"
  - Max 20 characters

#### 2. Person Information
- **Person Name** (Required):
  - Input field
  - Placeholder: "Full name of person at this address"
  - Example: "Sarah Mohamed"
  - Validation: Not empty

- **Phone Number** (Optional):
  - Input field
  - Placeholder: "+20 XXX XXX XXXX"
  - Format: Egyptian mobile number
  - For emergency contact purposes

#### 3. Location Details
- **Use Current Location** (Toggle/Button):
  - Button: "Use My Current Location"
  - Icon: GPS/Navigation
  - Auto-fills street and city fields
  - Shows loading spinner while detecting

- **Street Address** (Required):
  - Text area (multi-line)
  - Placeholder: "Building number, street name, area"
  - Example: "15 Ahmed Said Street, Nasr City"
  - Max 200 characters

- **Building/Apartment** (Optional):
  - Input field
  - Placeholder: "Building name, floor, apartment number"
  - Example: "Tower B, Floor 3, Apt 12"

- **City** (Required):
  - Dropdown or autocomplete
  - Pre-populated with Cairo districts
  - Options: Nasr City, Maadi, Zamalek, Heliopolis, etc.
  - Searchable

- **Postal Code** (Optional):
  - Input field
  - Placeholder: "XXXXX"
  - Format: 5 digits

- **Landmark** (Optional):
  - Input field
  - Placeholder: "Nearby landmark for easy location"
  - Example: "Near City Stars Mall"
  - Helpful for emergency responders

#### 4. Map Preview
- **Interactive Map**:
  - Shows selected location pin
  - Draggable pin to adjust exact location
  - Zoom controls
  - Center on location button
  - Address auto-updates when pin moved

**Validation:**
- Required fields marked with red asterisk (*)
- Real-time validation feedback
- Error messages below fields
- Cannot save until required fields filled

**Action Buttons:**
1. **"Save Address"** (Primary Red Button):
   - Full width
   - Disabled if validation fails
   - Shows loading spinner on save
   - Success: Return to Saved Addresses
   - Success toast: "Address saved successfully!"

2. **"Cancel"** (Ghost Button):
   - Returns to previous screen
   - Confirmation if fields filled: "Discard changes?"

**Additional Features:**
- Auto-save draft (every 30 seconds)
- GPS permission check
- Location accuracy indicator
- Recent addresses suggestion

**Success Flow:**
1. User fills all required fields
2. Optionally adjusts map pin
3. Taps "Save Address"
4. Validation passes
5. Loading spinner (1s)
6. Address saved to user profile
7. Navigate back to Saved Addresses
8. New address appears in list
9. Success toast notification

---

## Language & Localization

### Language Switching
**Access Points:**
- Landing screen (top-right)
- Dashboard header (top-right)
- All screen headers
- Profile settings

**Language Toggle:**
- Component: LanguageSwitcher
- Format: "EN | العربية"
- Current language highlighted
- Tap to toggle instantly

**Supported Languages:**

#### 1. English (EN)
- Left-to-right (LTR) layout
- Western Arabic numerals (1, 2, 3)
- Standard date format: MM/DD/YYYY
- Currency: EGP

#### 2. Arabic (العربية)
- Right-to-left (RTL) layout
- Eastern Arabic numerals (١، ٢، ٣)
- Date format: DD/MM/YYYY
- Currency: جنيه مصري

**RTL Layout Changes:**
- All UI elements flip horizontally
- Icons move to opposite side
- Text alignment: right-aligned
- Navigation: reverse direction
- Back buttons: point right (→)
- Animations: reverse direction

**Translated Elements:**
All app text including:
- Button labels
- Screen titles
- Form labels
- Error messages
- Success notifications
- Status updates
- Service names
- Help text
- Terms and conditions

**Persistence:**
- Language preference saved
- Persists across sessions
- Applies to all screens immediately
- No app restart required

**Translation Examples:**

| English | Arabic |
|---------|--------|
| Emergency Services | خدمات الطوارئ |
| Request Emergency | طلب إسعاف |
| Current Location | الموقع الحالي |
| Select Hospital | اختر المستشفى |
| Payment | الدفع |
| Track Team | تتبع الفريق |
| My Profile | ملفي الشخصي |
| Saved Addresses | العناوين المحفوظة |
| Cancel | إلغاء |
| Confirm | تأكيد |

---

## Technical Specifications

### Platform
- **Type**: Progressive Web App (PWA)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4.0
- **Animations**: Motion (Framer Motion)
- **State Management**: React Context API

### Design System
- **Approach**: Mobile-first responsive design
- **Screen Size**: Optimized for 375px - 414px width
- **Colors**:
  - Primary: Red (#DC2626)
  - Secondary: Orange (#F97316)
  - Success: Green (#10B981)
  - Warning: Yellow (#F59E0B)
  - Error: Red (#EF4444)
  - Background: Gray (#F9FAFB)
  
- **Typography**:
  - System fonts with fallbacks
  - Arabic: Cairo, Arabic fonts
  - English: Inter, system-ui

### Key Technologies
- **Icons**: Lucide React
- **Maps**: Google Maps API (or similar)
- **Real-time**: WebSocket connections
- **Authentication**: JWT tokens + Biometric API
- **Payments**: Payment gateway integration
- **Localization**: i18n framework
- **Analytics**: Event tracking

### Performance Targets
- **First Load**: < 3 seconds
- **Time to Interactive**: < 5 seconds
- **Smooth Animations**: 60 FPS
- **Offline Support**: Service workers
- **Data Caching**: Local storage

### Security Features
- **Authentication**: Multi-factor (PIN + Biometric)
- **Data Encryption**: End-to-end for sensitive data
- **Payment Security**: PCI DSS compliant
- **Session Management**: Secure tokens
- **Location Privacy**: User controlled permissions

### Accessibility
- **WCAG**: Level AA compliance
- **Screen Readers**: Full support
- **Keyboard Navigation**: Complete coverage
- **Color Contrast**: 4.5:1 minimum
- **Touch Targets**: 44x44px minimum

### Browser Support
- **iOS Safari**: 14+
- **Android Chrome**: 90+
- **Firefox**: Latest 2 versions
- **Edge**: Latest version

---

## User Flow Summary

### Complete Emergency Request Journey
**Total Time: ~3-5 minutes from SOS to tracking**

1. **Launch** (3s) → Splash Screen
2. **Landing** (5s) → Review options
3. **Authentication** (30s) → Login/Sign Up
4. **Dashboard** (10s) → Tap SOS button
5. **Hospital Map** (30s) → Select nearest hospital
6. **Service Selection** (60s) → Choose required services
7. **Payment** (45s) → Review and pay
8. **Tracking** (Active) → Monitor response team
9. **Arrival** (15-30 mins) → Team reaches location
10. **Service Delivery** (Variable) → Emergency care provided
11. **Completion** (10s) → End trip and rate

### Quick Actions
- **Emergency Call**: 2 taps (Dashboard → Emergency banner)
- **Repeat Last Order**: 3 taps (Dashboard → Orders → Reorder)
- **Add Address**: 4 taps (Dashboard → Addresses → Add → Save)
- **Change Language**: 1 tap (Any screen → Language switcher)

---

## Key User Experience Highlights

### 1. Speed Optimized
- One-tap SOS button on dashboard
- No address selection (uses current location)
- Auto-selected nearest hospital
- Saved payment methods
- Biometric quick login

### 2. Mobile-First Design
- Touch-friendly buttons (44px+)
- Swipe gestures supported
- Haptic feedback on actions
- Bottom-sheet UI patterns
- Thumb-zone optimization

### 3. Clarity & Transparency
- Real-time team location
- Clear pricing breakdown
- Status update timeline
- ETA calculations
- Service descriptions

### 4. Bilingual Excellence
- Full Arabic support
- Proper RTL layout
- Cultural appropriateness
- Localized content
- Regional pricing (EGP)

### 5. Trust & Safety
- Real hospital logos
- Team credentials visible
- Emergency hotline always accessible
- Secure payments
- Privacy controls

### 6. Accessibility
- High contrast design
- Clear iconography
- Readable typography
- Voice-over support
- Simple navigation

---

## Future Enhancements (Roadmap)

### Phase 2 Features:
- ⭐ Rating and review system
- 💬 In-app chat with response team
- 📊 Health records storage
- 🔔 Pre-scheduled appointments
- 👥 Multiple emergency contacts
- 🎫 Insurance integration
- 🏆 Loyalty rewards program

### Phase 3 Features:
- 🤖 AI symptom checker
- 📹 Video consultation
- 💊 Prescription management
- 🚁 Air ambulance option
- 🌍 Multi-city expansion
- 📱 Family account sharing
- 🎯 Predictive health alerts

---

## Support & Contact

**Emergency Hotline**: 12345 (24/7)

**Technical Support**: 
- Email: support@mysos.eg
- Phone: +20 XXX XXXX
- Live Chat: In-app support

**Operating Hours**: 24/7 Emergency Services

**Coverage Area**: Greater Cairo Region

---

**Document Version**: 1.0  
**Last Updated**: November 2024  
**App Version**: 1.0.0

---

*This documentation covers the complete user experience flow for the MySOS mobile emergency service application. For technical implementation details, refer to the developer documentation.*
