# MySOS Emergency Medical Service Application
## Comprehensive Scope of Work Document

**Project Name:** MySOS Mobile Emergency Service Application  
**Version:** 1.0  
**Document Date:** January 27, 2026  
**Currency:** EGP (Egyptian Pounds)  
**Emergency Hotline:** 12345  
**Supported Languages:** Arabic (RTL) & English (LTR)

---

## 1. Executive Summary

MySOS is a mobile-first emergency medical service application designed for the Egyptian market. The platform connects users with emergency medical services including ambulances, emergency doctors/nurses, portable diagnostic equipment, and laboratory services. The application provides real-time tracking of emergency response teams similar to ride-hailing applications like Uber, with full bilingual support for Arabic and English languages.

### Key Objectives
- Provide immediate access to emergency medical services
- Enable real-time tracking of emergency response teams
- Support multiple service categories and multi-select options
- Offer bilingual interface with proper RTL support for Arabic
- Integrate secure payment processing in EGP
- Implement robust authentication with biometric support
- Manage multiple addresses for family members
- Display nearest hospitals on interactive map

---

## 2. Technical Architecture

### 2.1 Frontend Stack
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4
- **Routing:** React Router (Data Mode)
- **State Management:** React Hooks & Context API
- **UI Components:** Lucide React (icons), Custom component library
- **Maps Integration:** Mapbox/Google Maps API
- **Animation:** Motion/React (Framer Motion)
- **HTTP Client:** Fetch API with custom error handling

### 2.2 Backend Stack
- **Runtime:** Deno (Supabase Edge Functions)
- **Web Framework:** Hono
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage (for user documents, hospital logos)
- **Real-time:** WebSocket connections for live tracking
- **API Architecture:** RESTful API with CORS support

### 2.3 Infrastructure
- **Hosting:** Supabase Cloud
- **CDN:** Supabase CDN for static assets
- **Environment:** Production, Staging, Development
- **Monitoring:** Console logging and error tracking
- **Backup:** Automated database backups

---

## 3. Frontend Features & Specifications

### 3.1 Authentication System

#### 3.1.1 Splash Screen
- Display MySOS logo (without text)
- Auto-redirect to login after 2-3 seconds
- Smooth fade-in animation
- Mobile-optimized sizing

#### 3.1.2 Login Screen
**Features:**
- Mobile number input (Egyptian format validation)
- PIN code input (4-6 digits, masked)
- Biometric authentication toggle
- Language switcher (AR/EN)
- "Forgot PIN?" link
- "Sign Up" navigation link
- Form validation with error messages
- Remember me functionality

**Validation Rules:**
- Mobile: Egyptian phone number format (+20 XXX XXX XXXX)
- PIN: 4-6 digit numeric code
- Required field validation
- Real-time error display

#### 3.1.3 Signup Screen
**Form Fields:**
- First Name (required, 2-50 characters)
- Last Name (required, 2-50 characters)
- Mobile Number (required, unique, Egyptian format)
- PIN Code (required, 4-6 digits)
- Confirm PIN Code (must match)
- Terms & Conditions checkbox (required)

**Features:**
- Real-time validation
- Password strength indicator
- Duplicate mobile number checking
- Success confirmation message
- Auto-login after successful registration

#### 3.1.4 Biometric Authentication
- Face ID support (iOS)
- Fingerprint support (Android/iOS)
- Fallback to PIN code
- Enable/disable in user settings

### 3.2 Home Dashboard

#### 3.2.1 Header Section
- Greeting message: "Hello, Mohamed" (localized)
- Current date display
- Profile avatar (top-right)
- Emergency hotline: 12345 (prominent display)

#### 3.2.2 Emergency SOS Button
- Large, prominent red circular button
- "Emergency SOS" text (bilingual)
- Pulse animation effect
- Direct navigation to hospital map (no address selection)
- Default address automatically selected

#### 3.2.3 Service Categories
**1. Emergency Services**
- ER Doctor (EGP 500-800)
- ER Nurse (EGP 300-500)
- Icon: Activity/Stethoscope

**2. Ambulance Services**
- BLS Ambulance (Basic Life Support: EGP 400-600)
- ALS Ambulance (Advanced Life Support: EGP 800-1200)
- Icon: Ambulance

**3. Portable Diagnostic Services**
- Ultrasound (EGP 600-1000)
- X-Ray (EGP 400-700)
- ECHO (EGP 800-1200)
- Doppler (EGP 700-1000)
- Icon: Scanner/Activity

**4. Laboratory Services**
- Blood Test (EGP 200-400)
- Urine Analysis (EGP 100-200)
- Complete Blood Count (EGP 150-300)
- Icon: TestTube/Beaker

#### 3.2.4 Recent Orders Section
- Last 3-5 emergency orders
- Order status badges (Completed, In Progress, Cancelled)
- Quick navigation to order details
- Empty state message if no orders

#### 3.2.5 Bottom Navigation Bar
- Home (House icon)
- Orders (List icon)
- Addresses (MapPin icon)
- Profile (User icon)
- Active state indication
- Bilingual labels

### 3.3 Hospital Map Screen

#### 3.3.1 Map View
- Full-screen interactive map
- User's current location marker (blue dot)
- Hospital markers with custom icons
- Cluster markers for nearby hospitals
- Zoom controls
- Re-center button

#### 3.3.2 Hospital Markers
**7 Real Cairo Hospitals:**

1. **Dar Al Fouad Hospital**
   - Type: Private Hospital
   - Rating: 4.5/5 (1,234 reviews)
   - Arrival Time: 18 minutes
   - Logo: Actual hospital branding

2. **Cleopatra Hospital**
   - Type: Private Hospital
   - Rating: 4.3/5 (892 reviews)
   - Arrival Time: 22 minutes
   - Logo: Actual hospital branding

3. **Anglo American Hospital**
   - Type: Private Hospital
   - Rating: 4.6/5 (1,567 reviews)
   - Arrival Time: 15 minutes
   - Logo: Actual hospital branding

4. **El Salam International Hospital**
   - Type: Private Hospital
   - Rating: 4.4/5 (1,098 reviews)
   - Arrival Time: 20 minutes
   - Logo: Actual hospital branding

5. **Kasr El Aini Teaching Hospital**
   - Type: Public Teaching Hospital
   - Rating: 4.2/5 (2,345 reviews)
   - Arrival Time: 25 minutes
   - Logo: Actual hospital branding

6. **Ain Shams University Hospital**
   - Type: Public Teaching Hospital
   - Rating: 4.1/5 (1,876 reviews)
   - Arrival Time: 28 minutes
   - Logo: Actual hospital branding

7. **Saudi German Hospital Cairo**
   - Type: Private Hospital
   - Rating: 4.7/5 (2,123 reviews)
   - Arrival Time: 16 minutes
   - Logo: Actual hospital branding

#### 3.3.3 Hospital Cards (Bottom Sheet)
- Scrollable horizontal list
- Hospital name & logo
- Star rating & review count
- Hospital type badge
- Estimated arrival time
- "Select" button
- Detailed view on tap

#### 3.3.4 Address Display
- Default address shown at top
- Edit address functionality removed from flow
- Auto-detect current location

### 3.4 Service Selection Screen

#### 3.4.1 Multi-Select Interface
- Checkbox-based selection
- Category grouping with expand/collapse
- Service name & description
- Price range display (EGP)
- Search/filter functionality
- Select all/Deselect all options

#### 3.4.2 Selected Services Summary
- Sticky bottom card
- Total selected count
- Total estimated price range
- "Continue to Confirmation" button

#### 3.4.3 Validation
- Minimum 1 service required
- Maximum 10 services per order
- Compatible service checking
- Price calculation

### 3.5 Order Confirmation Screen

#### 3.5.1 Order Summary
- Selected hospital details
- Service address display
- List of selected services with individual prices
- Subtotal calculation
- Service fee (10% of subtotal)
- Total amount in EGP

#### 3.5.2 Payment Method Selection
- Cash on Arrival
- Credit/Debit Card
- Mobile Wallet (Vodafone Cash, Orange Money, Etisalat Cash)
- Saved payment methods

#### 3.5.3 Special Instructions
- Text area for additional notes
- 500 character limit
- Optional field
- Placeholder text (localized)

#### 3.5.4 Confirmation Actions
- "Confirm & Request" button
- "Cancel" button
- Loading state during submission
- Success/Error notifications

### 3.6 Live Tracking Screen

#### 3.6.1 Real-Time Map
- Live location of emergency team
- User's location marker
- Route visualization
- ETA display (updating)
- Distance remaining

#### 3.6.2 Team Information Card
- Team member photo & name
- Hospital/Service provider name
- Vehicle type & license plate
- Contact buttons (Call/Message)
- Rating display

#### 3.6.3 Status Updates
- Timeline of events:
  - Order Placed
  - Hospital Confirmed
  - Team Dispatched
  - Team En Route
  - Team Arrived
  - Service Completed
- Timestamp for each status
- Push notifications for status changes

#### 3.6.4 Emergency Actions
- Call emergency hotline (12345)
- Cancel order (with confirmation)
- Share location with family
- Report issue button

### 3.7 Orders History Screen

#### 3.7.1 Order List
- Chronological list (newest first)
- Order card showing:
  - Order ID
  - Date & time
  - Hospital name
  - Services list
  - Total amount (EGP)
  - Status badge
- Filter by status (All, Completed, In Progress, Cancelled)
- Search by order ID or hospital

#### 3.7.2 Order Details View
- Complete order information
- Hospital details
- Service address
- Selected services breakdown
- Payment details
- Team information (if assigned)
- Timeline of events
- Invoice download button
- Reorder functionality
- Rate & review option (for completed orders)

### 3.8 Address Management

#### 3.8.1 Address List Screen
- Saved addresses list
- Default address indicator (star icon)
- Address cards showing:
  - Label (Home, Family, etc.)
  - Person name
  - Full address
  - Phone number
- Edit/Delete buttons
- "Add New Address" button
- Set as default option

#### 3.8.2 Add New Address Screen
**Form Fields:**
- Address Label (Home, Work, Family, Other)
- Person Name (required)
- Mobile Number (required, Egyptian format)
- Street Address (required)
- Building Number (required)
- Floor & Apartment (optional)
- Landmark (optional, helps emergency team)
- Map location picker
- Save as default checkbox

**Features:**
- Auto-detect current location
- Search for address
- Drag map marker to adjust
- Address validation
- Duplicate address checking

#### 3.8.3 Edit Address Screen
- Pre-filled form with existing data
- Same validation as add screen
- Update confirmation
- Delete option with confirmation

### 3.9 User Profile Screen

#### 3.9.1 Profile Information
- Profile photo upload/change
- Full name display (Mohamed)
- Mobile number
- Email address (optional)
- Emergency contact
- Blood type (optional but recommended)
- Medical conditions/allergies (optional)

#### 3.9.2 Settings Section
- Language preference (Arabic/English)
- Biometric authentication toggle
- Notifications settings:
  - Order updates
  - Promotional offers
  - Emergency alerts
- Theme preference (Light/Dark)
- Emergency hotline display

#### 3.9.3 Payment Methods
- Saved cards list
- Add new card
- Set default payment method
- Remove payment method

#### 3.9.4 Account Actions
- Change PIN code
- Privacy policy link
- Terms & conditions link
- Help & Support
- About MySOS
- App version display
- Logout button

### 3.10 Bilingual Support & RTL

#### 3.10.1 Language Implementation
- Complete Arabic translations for all screens
- Complete English translations for all screens
- Language switcher accessible from all screens
- Persistent language preference

#### 3.10.2 RTL Layout (Arabic)
- Right-to-left text alignment
- Mirrored UI elements
- Reversed navigation flow
- Correct icon positioning
- Proper number formatting
- Date format localization

#### 3.10.3 Translation Coverage
- UI labels and buttons
- Error messages
- Success notifications
- Form placeholders
- System messages
- Navigation labels
- Service descriptions
- Status updates

---

## 4. Backend Features & Specifications

### 4.1 Backend Architecture

#### 4.1.1 Server Setup
**File:** `/supabase/functions/server/index.tsx`

```typescript
// Core server configuration
- Hono web framework
- CORS middleware (open headers)
- Logger middleware (console.log)
- Error handling middleware
- Request validation middleware
- Authentication middleware
- Rate limiting middleware
```

**Base URL:**
```
https://${projectId}.supabase.co/functions/v1/make-server-f04a3591/
```

**Route Prefix:** `/make-server-f04a3591`

#### 4.1.2 Environment Variables
```
SUPABASE_URL=<project-url>
SUPABASE_ANON_KEY=<public-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
```

### 4.2 Database Schema

#### 4.2.1 Pre-existing Table
**Table: `kv_store_f04a3591`**
- General purpose key-value store
- Used for caching and temporary data
- Accessed via `/supabase/functions/server/kv_store.tsx`

#### 4.2.2 Data Models (Stored in KV Store)

**User Profile:**
```typescript
interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email?: string;
  profilePhoto?: string;
  bloodType?: string;
  medicalConditions?: string[];
  allergies?: string[];
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  languagePreference: 'ar' | 'en';
  biometricEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}
```

**Address:**
```typescript
interface Address {
  addressId: string;
  userId: string;
  label: string; // 'home' | 'work' | 'family' | 'other'
  personName: string;
  mobileNumber: string;
  streetAddress: string;
  buildingNumber: string;
  floor?: string;
  apartment?: string;
  landmark?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}
```

**Order:**
```typescript
interface Order {
  orderId: string;
  userId: string;
  hospitalId: string;
  hospitalName: string;
  addressId: string;
  services: Service[];
  subtotal: number;
  serviceFee: number;
  totalAmount: number;
  paymentMethod: 'cash' | 'card' | 'wallet';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  specialInstructions?: string;
  status: 'pending' | 'confirmed' | 'dispatched' | 'enroute' | 'arrived' | 'completed' | 'cancelled';
  teamId?: string;
  estimatedArrival?: string;
  actualArrival?: string;
  completedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
  createdAt: string;
  updatedAt: string;
}
```

**Service:**
```typescript
interface Service {
  serviceId: string;
  category: 'emergency' | 'ambulance' | 'diagnostic' | 'laboratory';
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  priceMin: number;
  priceMax: number;
  estimatedDuration: number; // minutes
  available: boolean;
}
```

**Hospital:**
```typescript
interface Hospital {
  hospitalId: string;
  name: string;
  nameAr: string;
  type: 'private' | 'public' | 'teaching';
  logo: string; // Supabase Storage URL
  rating: number;
  reviewCount: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
  addressAr: string;
  phone: string;
  availableServices: string[]; // serviceIds
  operatingHours: {
    open: string; // "00:00" (24/7 for emergency)
    close: string; // "23:59"
  };
  averageArrivalTime: number; // minutes
  active: boolean;
}
```

**Emergency Team:**
```typescript
interface EmergencyTeam {
  teamId: string;
  hospitalId: string;
  members: TeamMember[];
  vehicleType: 'ambulance' | 'car' | 'motorcycle';
  licensePlate: string;
  currentLocation?: {
    latitude: number;
    longitude: number;
    heading: number;
    speed: number;
    timestamp: string;
  };
  status: 'available' | 'dispatched' | 'busy' | 'offline';
  rating: number;
  completedOrders: number;
}
```

**Team Member:**
```typescript
interface TeamMember {
  memberId: string;
  name: string;
  role: 'doctor' | 'nurse' | 'paramedic' | 'driver' | 'technician';
  photo: string;
  phone: string;
  certifications: string[];
}
```

**Payment Transaction:**
```typescript
interface PaymentTransaction {
  transactionId: string;
  orderId: string;
  userId: string;
  amount: number;
  currency: 'EGP';
  method: 'cash' | 'card' | 'wallet';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  cardLast4?: string;
  cardBrand?: string;
  walletProvider?: string;
  gatewayResponse?: any;
  createdAt: string;
  completedAt?: string;
}
```

**Saved Payment Method:**
```typescript
interface SavedPaymentMethod {
  paymentMethodId: string;
  userId: string;
  type: 'card' | 'wallet';
  cardBrand?: string;
  cardLast4?: string;
  cardExpiry?: string;
  walletProvider?: string;
  walletPhone?: string;
  isDefault: boolean;
  createdAt: string;
}
```

**Review:**
```typescript
interface Review {
  reviewId: string;
  orderId: string;
  userId: string;
  hospitalId: string;
  teamId?: string;
  rating: number; // 1-5
  comment?: string;
  aspectRatings?: {
    punctuality: number;
    professionalism: number;
    communication: number;
    service: number;
  };
  createdAt: string;
}
```

**Notification:**
```typescript
interface Notification {
  notificationId: string;
  userId: string;
  type: 'order_update' | 'team_assigned' | 'team_arrived' | 'payment' | 'promo';
  title: string;
  titleAr: string;
  message: string;
  messageAr: string;
  orderId?: string;
  read: boolean;
  createdAt: string;
}
```

### 4.3 API Endpoints

#### 4.3.1 Authentication Endpoints

**POST** `/auth/signup`
```typescript
Request:
{
  firstName: string;
  lastName: string;
  mobileNumber: string;
  pinCode: string;
  languagePreference: 'ar' | 'en';
}

Response:
{
  success: boolean;
  data: {
    userId: string;
    accessToken: string;
  };
  message: string;
}
```

**POST** `/auth/login`
```typescript
Request:
{
  mobileNumber: string;
  pinCode: string;
}

Response:
{
  success: boolean;
  data: {
    userId: string;
    accessToken: string;
    user: UserProfile;
  };
  message: string;
}
```

**POST** `/auth/logout`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  message: string;
}
```

**POST** `/auth/verify-biometric`
```typescript
Request:
{
  userId: string;
  biometricToken: string;
}

Response:
{
  success: boolean;
  data: {
    accessToken: string;
  };
}
```

**POST** `/auth/reset-pin`
```typescript
Request:
{
  mobileNumber: string;
  verificationCode: string;
  newPinCode: string;
}

Response:
{
  success: boolean;
  message: string;
}
```

**POST** `/auth/change-pin`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  currentPinCode: string;
  newPinCode: string;
}

Response:
{
  success: boolean;
  message: string;
}
```

#### 4.3.2 User Profile Endpoints

**GET** `/user/profile`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  data: UserProfile;
}
```

**PUT** `/user/profile`
```typescript
Headers: Authorization: Bearer {accessToken}

Request: Partial<UserProfile>

Response:
{
  success: boolean;
  data: UserProfile;
  message: string;
}
```

**POST** `/user/profile-photo`
```typescript
Headers: Authorization: Bearer {accessToken}
Content-Type: multipart/form-data

Request:
{
  photo: File;
}

Response:
{
  success: boolean;
  data: {
    photoUrl: string;
  };
}
```

#### 4.3.3 Address Endpoints

**GET** `/addresses`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  data: Address[];
}
```

**POST** `/addresses`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  label: string;
  personName: string;
  mobileNumber: string;
  streetAddress: string;
  buildingNumber: string;
  floor?: string;
  apartment?: string;
  landmark?: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  isDefault: boolean;
}

Response:
{
  success: boolean;
  data: Address;
  message: string;
}
```

**PUT** `/addresses/:addressId`
```typescript
Headers: Authorization: Bearer {accessToken}

Request: Partial<Address>

Response:
{
  success: boolean;
  data: Address;
  message: string;
}
```

**DELETE** `/addresses/:addressId`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  message: string;
}
```

**PUT** `/addresses/:addressId/set-default`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  message: string;
}
```

#### 4.3.4 Hospital Endpoints

**GET** `/hospitals`
```typescript
Query Parameters:
- latitude: number
- longitude: number
- radius?: number (km, default: 50)
- services?: string[] (filter by serviceIds)

Response:
{
  success: boolean;
  data: Hospital[];
}
```

**GET** `/hospitals/:hospitalId`
```typescript
Response:
{
  success: boolean;
  data: Hospital;
}
```

**GET** `/hospitals/:hospitalId/availability`
```typescript
Query Parameters:
- serviceIds: string[]
- date: string (ISO date)

Response:
{
  success: boolean;
  data: {
    available: boolean;
    estimatedArrival: number; // minutes
    availableTeams: number;
  };
}
```

#### 4.3.5 Service Endpoints

**GET** `/services`
```typescript
Query Parameters:
- category?: string
- hospitalId?: string

Response:
{
  success: boolean;
  data: Service[];
}
```

**GET** `/services/:serviceId`
```typescript
Response:
{
  success: boolean;
  data: Service;
}
```

#### 4.3.6 Order Endpoints

**POST** `/orders`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  hospitalId: string;
  addressId: string;
  serviceIds: string[];
  paymentMethod: 'cash' | 'card' | 'wallet';
  paymentMethodId?: string; // for saved payment methods
  specialInstructions?: string;
}

Response:
{
  success: boolean;
  data: Order;
  message: string;
}
```

**GET** `/orders`
```typescript
Headers: Authorization: Bearer {accessToken}

Query Parameters:
- status?: string
- limit?: number (default: 20)
- offset?: number (default: 0)

Response:
{
  success: boolean;
  data: {
    orders: Order[];
    total: number;
    hasMore: boolean;
  };
}
```

**GET** `/orders/:orderId`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  data: Order & {
    address: Address;
    hospital: Hospital;
    team?: EmergencyTeam;
    payment?: PaymentTransaction;
    timeline: OrderEvent[];
  };
}
```

**PUT** `/orders/:orderId/cancel`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  reason: string;
}

Response:
{
  success: boolean;
  message: string;
}
```

**POST** `/orders/:orderId/reorder`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  data: Order;
  message: string;
}
```

#### 4.3.7 Live Tracking Endpoints

**GET** `/orders/:orderId/tracking`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  data: {
    team: EmergencyTeam;
    currentLocation: {
      latitude: number;
      longitude: number;
      heading: number;
      timestamp: string;
    };
    estimatedArrival: number; // minutes
    distanceRemaining: number; // km
    route: {
      latitude: number;
      longitude: number;
    }[];
  };
}
```

**WebSocket** `/ws/tracking/:orderId`
```typescript
// Client connects with Authorization header
// Server pushes location updates every 5-10 seconds

Message Format:
{
  type: 'location_update' | 'status_change' | 'eta_update';
  data: {
    location?: {
      latitude: number;
      longitude: number;
      heading: number;
    };
    status?: OrderStatus;
    eta?: number;
    timestamp: string;
  };
}
```

#### 4.3.8 Payment Endpoints

**POST** `/payments/payment-methods`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  type: 'card' | 'wallet';
  // For cards:
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
  cardholderName?: string;
  // For wallets:
  walletProvider?: string; // 'vodafone' | 'orange' | 'etisalat'
  walletPhone?: string;
  isDefault: boolean;
}

Response:
{
  success: boolean;
  data: SavedPaymentMethod;
  message: string;
}
```

**GET** `/payments/payment-methods`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  data: SavedPaymentMethod[];
}
```

**DELETE** `/payments/payment-methods/:paymentMethodId`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  message: string;
}
```

**POST** `/payments/process`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  orderId: string;
  paymentMethodId?: string;
  // Payment gateway integration details
}

Response:
{
  success: boolean;
  data: PaymentTransaction;
  message: string;
}
```

**POST** `/payments/refund`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  orderId: string;
  reason: string;
}

Response:
{
  success: boolean;
  data: PaymentTransaction;
  message: string;
}
```

#### 4.3.9 Review Endpoints

**POST** `/reviews`
```typescript
Headers: Authorization: Bearer {accessToken}

Request:
{
  orderId: string;
  rating: number; // 1-5
  comment?: string;
  aspectRatings?: {
    punctuality: number;
    professionalism: number;
    communication: number;
    service: number;
  };
}

Response:
{
  success: boolean;
  data: Review;
  message: string;
}
```

**GET** `/reviews/hospital/:hospitalId`
```typescript
Query Parameters:
- limit?: number (default: 20)
- offset?: number (default: 0)

Response:
{
  success: boolean;
  data: {
    reviews: Review[];
    averageRating: number;
    total: number;
  };
}
```

#### 4.3.10 Notification Endpoints

**GET** `/notifications`
```typescript
Headers: Authorization: Bearer {accessToken}

Query Parameters:
- unreadOnly?: boolean (default: false)
- limit?: number (default: 50)

Response:
{
  success: boolean;
  data: {
    notifications: Notification[];
    unreadCount: number;
  };
}
```

**PUT** `/notifications/:notificationId/read`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  message: string;
}
```

**PUT** `/notifications/mark-all-read`
```typescript
Headers: Authorization: Bearer {accessToken}

Response:
{
  success: boolean;
  message: string;
}
```

### 4.4 Real-Time Features

#### 4.4.1 WebSocket Connections
- Live order tracking
- Team location updates (every 5-10 seconds)
- Status change notifications
- ETA updates
- Chat with team (optional feature)

#### 4.4.2 Push Notifications
- Order confirmation
- Team assigned
- Team dispatched
- Team en route
- Team arrived
- Service completed
- Payment processed
- Promotional offers

#### 4.4.3 Location Services
- GPS tracking for emergency teams
- Route calculation and optimization
- ETA calculation with traffic data
- Geofencing for arrival detection
- Background location updates

### 4.5 Storage Management

#### 4.5.1 Supabase Storage Buckets
**Bucket: `make-f04a3591-user-photos`**
- User profile photos
- Private bucket
- Signed URLs with 1-hour expiry

**Bucket: `make-f04a3591-hospital-logos`**
- Hospital branding assets
- Public bucket
- CDN-cached

**Bucket: `make-f04a3591-documents`**
- Medical documents (optional)
- Private bucket
- Signed URLs with 24-hour expiry

#### 4.5.2 File Upload Process
1. Frontend requests upload URL from server
2. Server validates user authentication
3. Server generates signed upload URL
4. Frontend uploads directly to Supabase Storage
5. Frontend confirms upload to server
6. Server updates database with file URL

### 4.6 Security Implementation

#### 4.6.1 Authentication Security
- PIN codes hashed with bcrypt (cost factor: 12)
- Access tokens: JWT with 7-day expiry
- Refresh tokens: 30-day expiry
- Biometric tokens: Device-specific, 1-hour expiry
- Rate limiting on auth endpoints (5 attempts per 15 minutes)

#### 4.6.2 API Security
- All endpoints require HTTPS
- CORS configured for specific origins
- Request validation middleware
- SQL injection prevention (parameterized queries)
- XSS protection (input sanitization)
- CSRF protection for state-changing operations

#### 4.6.3 Data Privacy
- User mobile numbers encrypted at rest
- Payment information tokenized (never stored)
- Location data retention: 90 days
- User data deletion on account closure
- GDPR-compliant data handling

#### 4.6.4 Route Protection
**Public Routes:**
- `/auth/login`
- `/auth/signup`
- `/auth/reset-pin`

**Protected Routes (require Authorization header):**
- All `/user/*` endpoints
- All `/addresses/*` endpoints
- All `/orders/*` endpoints
- All `/payments/*` endpoints
- All `/notifications/*` endpoints

### 4.7 Error Handling

#### 4.7.1 Error Response Format
```typescript
{
  success: false;
  error: {
    code: string; // e.g., 'AUTH_FAILED', 'VALIDATION_ERROR'
    message: string; // User-friendly error message
    messageAr: string; // Arabic error message
    details?: any; // Additional error details for debugging
  };
}
```

#### 4.7.2 HTTP Status Codes
- 200: Success
- 201: Created
- 400: Bad Request (validation errors)
- 401: Unauthorized (authentication required)
- 403: Forbidden (insufficient permissions)
- 404: Not Found
- 409: Conflict (duplicate resource)
- 429: Too Many Requests (rate limit exceeded)
- 500: Internal Server Error

#### 4.7.3 Error Logging
- Console logging for all errors
- Error context included (user ID, endpoint, timestamp)
- Stack traces for 500 errors
- No sensitive data in logs (passwords, tokens, etc.)

### 4.8 Performance Optimization

#### 4.8.1 Caching Strategy
- KV store for frequently accessed data
- Hospital list cached for 1 hour
- Service list cached for 6 hours
- User profile cached for 15 minutes
- CDN caching for static assets

#### 4.8.2 Database Optimization
- Index on userId for fast user queries
- Index on orderId for order lookups
- Index on coordinates for geospatial queries
- Pagination for list endpoints
- Lazy loading for large datasets

#### 4.8.3 API Optimization
- Response compression (gzip)
- Minimal payload sizes
- Batch operations where possible
- Connection pooling
- Request/response caching

---

## 5. Integration Requirements

### 5.1 Map Services Integration
**Provider:** Mapbox or Google Maps

**Features Required:**
- Interactive map display
- Custom markers
- Route visualization
- Geolocation
- Geocoding (address to coordinates)
- Reverse geocoding (coordinates to address)
- Distance matrix calculation
- ETA calculation with traffic

**API Keys Required:**
- Map display key (public)
- Geocoding key (server-side)

### 5.2 Payment Gateway Integration
**Supported Providers:**
- Credit/Debit cards (Visa, Mastercard)
- Egyptian mobile wallets:
  - Vodafone Cash
  - Orange Money
  - Etisalat Cash

**Integration Requirements:**
- PCI DSS compliance
- Tokenization for card storage
- 3D Secure support
- Webhook for payment status
- Refund processing
- Egyptian Pound (EGP) support

**API Keys Required:**
- Merchant ID
- API key (server-side)
- Webhook secret

### 5.3 SMS Service Integration
**Use Cases:**
- PIN reset verification codes
- Order confirmation
- Emergency notifications
- Two-factor authentication (optional)

**Provider Recommendations:**
- Twilio
- Egyptian SMS gateways (Vodafone, Orange)

**API Keys Required:**
- Account SID
- Auth token

### 5.4 Push Notification Service
**Provider:** Firebase Cloud Messaging (FCM)

**Features:**
- Real-time order updates
- Team location updates
- Promotional notifications
- Silent data updates

**Setup Required:**
- Firebase project configuration
- Server key (server-side)
- Client SDK integration

---

## 6. Testing Requirements

### 6.1 Frontend Testing

#### 6.1.1 Unit Testing
- Component rendering tests
- Form validation logic
- State management
- Utility functions
- Translation helpers

#### 6.1.2 Integration Testing
- Authentication flow
- Order creation flow
- Payment processing
- Address management
- Navigation between screens

#### 6.1.3 E2E Testing
- Complete user journey from signup to order completion
- Multi-language support
- RTL layout functionality
- Responsive design across devices

#### 6.1.4 Device Testing
**Mobile Devices:**
- iOS (iPhone 12, 13, 14, 15)
- Android (Samsung, Xiaomi, Oppo)

**Screen Sizes:**
- Small (320px-375px)
- Medium (375px-428px)
- Large (428px+)

**Browsers:**
- Safari (iOS)
- Chrome (Android)
- Firefox (Android)

### 6.2 Backend Testing

#### 6.2.1 Unit Testing
- API endpoint logic
- Authentication functions
- Data validation
- Business logic
- Error handling

#### 6.2.2 Integration Testing
- Database operations
- External API calls
- WebSocket connections
- Storage operations
- Payment processing

#### 6.2.3 Load Testing
- 100 concurrent users
- 1000 orders per hour
- Real-time tracking for 50+ active orders
- Database query performance
- API response times (<500ms for 95th percentile)

#### 6.2.4 Security Testing
- Authentication bypass attempts
- SQL injection attempts
- XSS attacks
- CSRF attacks
- Rate limiting effectiveness
- Data encryption verification

### 6.3 Acceptance Criteria

#### 6.3.1 Performance Benchmarks
- App launch time: <2 seconds
- Screen transitions: <300ms
- API response time: <500ms (95th percentile)
- Map load time: <3 seconds
- Real-time location updates: 5-10 second intervals
- Payment processing: <10 seconds

#### 6.3.2 Reliability Targets
- 99.5% uptime
- <0.1% order failure rate
- <1% payment failure rate
- 100% data consistency
- Zero data loss

#### 6.3.3 User Experience Standards
- Intuitive navigation (max 3 taps to any feature)
- Clear error messages in both languages
- Loading states for all async operations
- Offline mode for viewing past orders
- Accessibility compliance (WCAG 2.1 Level AA)

---

## 7. Deployment & DevOps

### 7.1 Environment Setup

#### 7.1.1 Development Environment
- Local development with hot reload
- Mock payment gateway
- Test Supabase project
- Staging map API keys

#### 7.1.2 Staging Environment
- Separate Supabase project
- Test payment gateway (sandbox)
- Staging map API keys
- Limited real data

#### 7.1.3 Production Environment
- Production Supabase project
- Live payment gateway
- Production map API keys
- Full monitoring and logging

### 7.2 Deployment Process

#### 7.2.1 Frontend Deployment
1. Build production bundle
2. Run tests
3. Deploy to Supabase hosting
4. Smoke test critical paths
5. Monitor error rates

#### 7.2.2 Backend Deployment
1. Deploy edge function to Supabase
2. Run migration scripts (if needed)
3. Verify environment variables
4. Test API endpoints
5. Monitor logs

#### 7.2.3 Rollback Procedure
- Keep previous version backup
- One-click rollback capability
- Database migration rollback scripts
- Communication plan for users

### 7.3 Monitoring & Logging

#### 7.3.1 Application Monitoring
- Error tracking and alerting
- Performance monitoring
- User session tracking
- Crash reporting
- API endpoint metrics

#### 7.3.2 Infrastructure Monitoring
- Server uptime
- Database performance
- Storage usage
- Network latency
- SSL certificate expiry

#### 7.3.3 Business Metrics
- Daily active users
- Order completion rate
- Average response time (hospital to user)
- Payment success rate
- User retention rate
- Customer satisfaction score

### 7.4 Backup & Disaster Recovery

#### 7.4.1 Backup Strategy
- Automated daily database backups
- 30-day backup retention
- Point-in-time recovery capability
- User data export functionality

#### 7.4.2 Disaster Recovery Plan
- Recovery Time Objective (RTO): 4 hours
- Recovery Point Objective (RPO): 1 hour
- Documented recovery procedures
- Regular disaster recovery drills

---

## 8. Maintenance & Support

### 8.1 Regular Maintenance

#### 8.1.1 Weekly Tasks
- Review error logs
- Monitor performance metrics
- Check system health
- Review user feedback

#### 8.1.2 Monthly Tasks
- Update dependencies
- Security patches
- Database optimization
- Performance tuning
- User analytics review

#### 8.1.3 Quarterly Tasks
- Major feature updates
- UI/UX improvements
- Third-party API updates
- Comprehensive testing
- Documentation updates

### 8.2 Support Channels

#### 8.2.1 User Support
- In-app help center
- Emergency hotline: 12345
- Email support
- FAQ section
- Video tutorials (Arabic & English)

#### 8.2.2 Technical Support
- Developer documentation
- API documentation
- Integration guides
- Troubleshooting guides

### 8.3 SLA (Service Level Agreement)

#### 8.3.1 Availability
- 99.5% uptime guarantee
- Planned maintenance windows
- Emergency maintenance procedures

#### 8.3.2 Response Times
- Critical issues: 1 hour
- High priority: 4 hours
- Medium priority: 24 hours
- Low priority: 72 hours

---

## 9. Future Enhancements (Phase 2)

### 9.1 Potential Features

1. **⭐ Rating and Review System**
   - Comprehensive rating system for hospitals, teams, and individual services
   - Multi-aspect ratings (punctuality, professionalism, communication, service quality)
   - Written reviews with photo uploads
   - Review verification (only from completed orders)
   - Response mechanism for hospitals to address feedback
   - Public rating display on hospital profiles
   - Review moderation system
   - Incentives for leaving reviews
   - Analytics dashboard for hospitals to track ratings
   - Detailed review history in user profile
   - Filter and sort reviews by date, rating, service type

2. **💬 In-App Chat with Response Team**
   - Real-time messaging with emergency team
   - Send location updates via chat
   - Share photos (injury, location landmarks)
   - Voice message support
   - Read receipts and typing indicators
   - Automatic translation between Arabic and English
   - Quick reply templates for common questions
   - Emergency team can share ETA updates
   - Chat history saved with order
   - Push notifications for new messages
   - File sharing (medical documents, prescriptions)
   - Emergency escalation button within chat
   - Archive chat after service completion

3. **📊 Health Records Storage**
   - Secure digital health record vault
   - Store medical history, diagnoses, prescriptions
   - Blood type, allergies, chronic conditions
   - Vaccination records
   - Lab test results with trend analysis
   - Medication list with reminders
   - Family medical history
   - Emergency medical information quick access
   - Share records with healthcare providers
   - Document scanning and OCR
   - Encrypted storage compliant with medical privacy laws
   - Export records as PDF
   - Integration with hospital EMR systems
   - Vital signs tracking (BP, glucose, weight)
   - Medical document categorization
   - Search functionality across all records

4. **🔔 Pre-Scheduled Appointments**
   - Book non-emergency services in advance
   - Calendar integration for appointment scheduling
   - Select preferred date and time slots
   - Recurring appointments for regular care
   - Home visit scheduling for routine checkups
   - Lab test scheduling at home
   - Diagnostic service appointments
   - Doctor consultation bookings
   - Automatic reminders (24hr, 2hr before)
   - Rescheduling and cancellation options
   - Add to device calendar
   - Preparation instructions for appointments
   - Video consultation scheduling
   - Waiting list for fully booked slots
   - Peak/off-peak pricing options
   - Appointment history tracking

5. **👥 Multiple Emergency Contacts**
   - Add unlimited emergency contacts
   - Contact priority ordering
   - Automatic SMS notification to contacts during emergency
   - Real-time location sharing with contacts
   - Contact can track emergency order status
   - One-tap emergency call to contacts
   - Contact groups (family, friends, caregivers)
   - Permission levels for each contact
   - Contacts can receive order status updates
   - Share medical information with contacts
   - Emergency contact verification
   - Contact relationship categorization
   - Allow contacts to request services on your behalf
   - Emergency contact notification preferences
   - Bilingual contact profiles

6. **🎫 Insurance Integration**
   - Insurance provider database integration
   - Policy verification and validation
   - Coverage checking before service request
   - Automated claims submission
   - Direct billing to insurance companies
   - Co-payment calculation
   - Insurance card scanning and storage
   - Pre-authorization requests
   - Claims status tracking
   - Reimbursement processing
   - In-network vs out-of-network hospital indicators
   - Coverage limits and deductible tracking
   - Multiple insurance policy support
   - Family insurance coverage
   - Insurance document management
   - Integration with Egyptian insurance providers
   - Cashless treatment options
   - Insurance eligibility verification
   - Explanation of Benefits (EOB) storage

7. **🏆 Loyalty Rewards Program**
   - Points earning system for each completed order
   - Point values: 1 EGP = 1 point
   - Bonus points for first orders, reviews, referrals
   - Tiered membership levels (Bronze, Silver, Gold, Platinum)
   - Level-based benefits and discounts
   - Redeem points for service discounts
   - Exclusive offers for loyal users
   - Birthday bonuses
   - Referral rewards (both referrer and referee)
   - Points expiration policy (12 months)
   - Points history and transaction log
   - Partner rewards (pharmacies, fitness centers)
   - Priority service for high-tier members
   - Faster response times for Gold/Platinum
   - Free annual health checkup for top tier
   - Milestone rewards (50th order, 1-year anniversary)
   - Gift points to family members
   - Gamification elements (badges, achievements)
   - Leaderboard for top users (opt-in)
   - Special promotional campaigns

8. **Telemedicine Integration**
   - Video consultation with doctors
   - Prescription management
   - Medical record storage

9. **Advanced Analytics**
   - Predictive demand analysis
   - Route optimization with ML
   - Personalized service recommendations

10. **Social Features**
   - Family account management
   - Share location with family during emergency
   - Emergency contact auto-notification

11. **IoT Integration**
   - Smart watch emergency button
   - Automatic fall detection
   - Vital signs monitoring

12. **Expanded Services**
   - Pharmacy delivery
   - Medical equipment rental
   - Home nursing care
   - Mental health support
   - Physiotherapy at home
   - Nutrition consultation
   - Elderly care services

### 9.2 Feature Priority Matrix (Phase 2)

| Feature | Priority | Complexity | User Impact | Timeline |
|---------|----------|------------|-------------|----------|
| Rating & Review System | High | Medium | High | Phase 2.1 (Q1) |
| Multiple Emergency Contacts | High | Low | High | Phase 2.1 (Q1) |
| In-App Chat | High | High | High | Phase 2.2 (Q2) |
| Pre-Scheduled Appointments | Medium | Medium | High | Phase 2.2 (Q2) |
| Loyalty Rewards Program | Medium | Medium | Medium | Phase 2.3 (Q3) |
| Health Records Storage | Medium | High | High | Phase 2.3 (Q3) |
| Insurance Integration | Low | Very High | High | Phase 2.4 (Q4) |

### 9.3 Scalability Considerations
- Microservices architecture migration
- Multi-region deployment
- CDN for global reach
- Advanced caching strategies
- Database sharding

---

## 10. Compliance & Legal

### 10.1 Data Protection
- Egyptian Data Protection Law compliance
- GDPR compliance (for international users)
- HIPAA considerations for medical data
- User consent management
- Right to data deletion

### 10.2 Medical Regulations
- Egyptian Ministry of Health regulations
- Medical service provider licensing
- Emergency response protocols
- Patient confidentiality (HIPAA-like standards)

### 10.3 Terms & Conditions
- User agreement
- Privacy policy
- Refund policy
- Service limitations
- Liability disclaimers

### 10.4 Licensing
- Hospital/Provider agreements
- Emergency team certifications
- Medical equipment standards
- Insurance coverage verification

---

## 11. Budget & Resource Estimation

### 11.1 Development Resources

#### 11.1.1 Team Structure
- 2 Frontend Developers (React/TypeScript)
- 2 Backend Developers (Deno/Node.js)
- 1 UI/UX Designer
- 1 QA Engineer
- 1 DevOps Engineer
- 1 Product Manager
- 1 Project Manager

#### 11.1.2 Timeline Estimate
- Phase 1 (MVP): 12-16 weeks
  - Week 1-2: Design & Architecture
  - Week 3-6: Authentication & Core Features
  - Week 7-10: Order Flow & Tracking
  - Week 11-12: Payment Integration
  - Week 13-14: Testing & Bug Fixes
  - Week 15-16: Deployment & Launch

### 11.2 Infrastructure Costs (Monthly)

#### 11.2.1 Supabase
- Database: $25-100 (based on usage)
- Storage: $10-50
- Edge Functions: $10-30
- Bandwidth: $20-80
- **Total: $65-260/month**

#### 11.2.2 Third-Party Services
- Map API: $100-300/month
- Payment Gateway: 2-3% per transaction
- SMS Service: $50-150/month
- Push Notifications (FCM): Free (Firebase Spark plan)
- **Total: $150-450/month**

#### 11.2.3 Total Monthly Cost
**Estimated: $215-710/month** (excluding transaction fees)

### 11.3 Maintenance Costs (Annual)
- Server & infrastructure: $2,600-8,500
- Third-party services: $1,800-5,400
- Support & maintenance: $10,000-20,000
- Updates & improvements: $15,000-30,000
- **Total Annual: $29,400-63,900**

---

## 12. Success Metrics

### 12.1 Key Performance Indicators (KPIs)

#### 12.1.1 User Metrics
- Daily Active Users (DAU)
- Monthly Active Users (MAU)
- User retention rate (30-day)
- User acquisition rate
- App store ratings (target: 4.5+)

#### 12.1.2 Business Metrics
- Total orders per day
- Average order value (EGP)
- Order completion rate (target: >95%)
- Payment success rate (target: >98%)
- Revenue per user

#### 12.1.3 Operational Metrics
- Average response time (target: <20 minutes)
- Team utilization rate
- Service availability (target: 99.5%)
- Customer satisfaction score (CSAT)
- Net Promoter Score (NPS)

### 12.2 Success Criteria

#### 12.2.1 Launch Goals (First 3 Months)
- 10,000+ registered users
- 500+ completed orders
- 4.5+ app store rating
- <15 minute average response time
- 95%+ order completion rate

#### 12.2.2 Growth Goals (6-12 Months)
- 50,000+ registered users
- 5,000+ monthly orders
- Partnership with 20+ hospitals
- Expand to 5+ cities
- 98%+ customer satisfaction

---

## 13. Risk Management

### 13.1 Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Third-party API downtime | High | Medium | Implement fallback mechanisms, cache data |
| Database performance issues | High | Low | Regular optimization, monitoring, scaling plan |
| Security breach | Critical | Low | Security audits, encryption, compliance |
| Real-time tracking failure | High | Medium | Redundant location services, offline mode |
| Payment gateway issues | High | Low | Multiple payment providers, retry logic |

### 13.2 Business Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Low user adoption | Critical | Medium | Marketing campaign, user incentives |
| Hospital partnership challenges | High | Medium | Value proposition, pilot programs |
| Regulatory changes | High | Low | Legal compliance team, stay informed |
| Competition | Medium | High | Unique features, superior UX, pricing |
| Emergency team availability | High | Medium | Partner with multiple providers |

### 13.3 Operational Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Customer support overload | Medium | Medium | Self-service help, chatbot, scale team |
| Quality of service issues | High | Medium | Team training, quality monitoring |
| Fraud/Abuse | High | Low | Verification systems, monitoring |
| Data loss | Critical | Low | Regular backups, disaster recovery plan |

---

## 14. Documentation Deliverables

### 14.1 Technical Documentation
- ✅ API Documentation (all endpoints)
- ✅ Database Schema Documentation
- ✅ Architecture Diagrams
- ✅ Setup & Installation Guide
- ✅ Deployment Guide
- Integration Guide (for third-party services)

### 14.2 User Documentation
- ✅ User Manual (Arabic & English)
- ✅ FAQ Section
- Video Tutorials (planned)
- In-app Help Content
- Emergency Procedures Guide

### 14.3 Business Documentation
- ✅ Scope of Work (this document)
- ✅ User Experience Documentation
- Requirements Specification
- Test Plans & Test Cases
- Change Management Log

---

## 15. Approval & Sign-off

### 15.1 Stakeholder Approvals

| Stakeholder | Role | Approval Date | Signature |
|-------------|------|---------------|-----------|
| Product Owner | Final Authority | __________ | _________ |
| Technical Lead | Technical Feasibility | __________ | _________ |
| UX Designer | Design Approval | __________ | _________ |
| Legal Counsel | Compliance | __________ | _________ |
| Finance | Budget Approval | __________ | _________ |

### 15.2 Change Control Process
- All scope changes require stakeholder approval
- Impact analysis for timeline and budget
- Documentation of all changes
- Version control for this document

### 15.3 Document Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 27, 2026 | MySOS Team | Initial comprehensive scope document |

---

## 16. Appendices

### Appendix A: Glossary
- **ALS**: Advanced Life Support
- **BLS**: Basic Life Support
- **EGP**: Egyptian Pound
- **ETA**: Estimated Time of Arrival
- **RTL**: Right-to-Left (text direction)
- **SOS**: Emergency distress signal
- **KV Store**: Key-Value Store

### Appendix B: References
- Supabase Documentation: https://supabase.com/docs
- React Router Documentation: https://reactrouter.com
- Tailwind CSS Documentation: https://tailwindcss.com
- Egyptian Data Protection Law
- Ministry of Health Emergency Service Guidelines

### Appendix D: API Documentation Reference

**Complete API Specification:** `/src/app/swagger.yaml`

For comprehensive API documentation including all endpoints, request/response schemas, authentication methods, and error codes, please refer to the **MySOS API Swagger Specification** (`swagger.yaml`).

The Swagger file provides:
- ✅ Complete REST API endpoint definitions
- ✅ Request and response schemas
- ✅ Authentication and authorization specifications
- ✅ Error code definitions and handling
- ✅ Data models and types
- ✅ Rate limiting and throttling rules
- ✅ WebSocket event specifications

**Note:** The Swagger specification is the single source of truth for API contracts shared across all MySOS applications (Customer App, Admin Dashboard, Hospital Dashboard, and Employee App).

### Appendix C: Contact Information
- **Project Manager**: [Name, Email, Phone]
- **Technical Lead**: [Name, Email, Phone]
- **Emergency Hotline**: 12345
- **Support Email**: support@mysos.eg

---

**Document Status:** ✅ Complete & Ready for Review  
**Last Updated:** January 27, 2026  
**Next Review Date:** [To be determined after approval]

---

*This scope of work document provides a comprehensive overview of the MySOS Emergency Medical Service Application, including all frontend features, backend architecture, API specifications, database schema, integration requirements, testing protocols, and operational guidelines. It serves as the definitive reference for development, deployment, and maintenance of the application.*