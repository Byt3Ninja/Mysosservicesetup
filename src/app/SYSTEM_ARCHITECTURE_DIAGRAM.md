# MySOS System Architecture Diagram
## Complete System Overview

**Document Date:** April 25, 2026  
**Version:** 1.0  
**Purpose:** Visual representation of the complete MySOS ecosystem architecture

---

## 1. High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          MySOS ECOSYSTEM                                │
│                                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐│
│  │   Customer   │  │    Admin     │  │   Hospital   │  │  Employee  ││
│  │  Mobile App  │  │  Dashboard   │  │  Dashboard   │  │ Mobile App ││
│  │  (React)     │  │  (React)     │  │  (React)     │  │(React Nat.)││
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └─────┬──────┘│
│         │                 │                 │                 │       │
│         └─────────────────┴─────────────────┴─────────────────┘       │
│                                    │                                   │
│                           ┌────────▼────────┐                          │
│                           │  API Gateway    │                          │
│                           │  (HTTPS/WSS)    │                          │
│                           └────────┬────────┘                          │
│                                    │                                   │
│         ┌──────────────────────────┴───────────────────────┐          │
│         │                                                   │          │
│    ┌────▼────────┐                                  ┌──────▼──────┐   │
│    │  Supabase   │                                  │  External   │   │
│    │   Backend   │                                  │   Services  │   │
│    │             │                                  │             │   │
│    │ - Auth      │                                  │ - Maps API  │   │
│    │ - Database  │                                  │ - Payment   │   │
│    │ - Storage   │                                  │ - SMS       │   │
│    │ - Realtime  │                                  │ - Email     │   │
│    │ - Functions │                                  │ - Push      │   │
│    └─────────────┘                                  └─────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Detailed Component Architecture

### 2.1 Frontend Applications Layer

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         FRONTEND APPLICATIONS                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  CUSTOMER MOBILE APP (React + Tailwind CSS v4)                │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • Authentication (PIN + Biometric)                           │   │
│  │  • Address Management                                          │   │
│  │  • Hospital Map & Selection                                    │   │
│  │  • Multi-Service Selection                                     │   │
│  │  • Payment Processing                                          │   │
│  │  • Real-Time Order Tracking                                    │   │
│  │  • In-App Chat with Team                                       │   │
│  │  • Bilingual Support (AR/EN with RTL)                          │   │
│  │                                                                 │   │
│  │  Tech Stack: React 18, TypeScript, Tailwind v4, React Router  │   │
│  │  State: React Hooks + Context API                             │   │
│  │  Maps: Mapbox/Google Maps                                      │   │
│  │  Platform: Mobile-First Web (iOS/Android browsers)            │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  ADMIN DASHBOARD (React + Redux + Tailwind CSS v4)            │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • User Management                                             │   │
│  │  • Hospital Management & Approval                              │   │
│  │  • Order Monitoring & Analytics                                │   │
│  │  • Payment & Settlement Management                             │   │
│  │  • Support Tickets & Disputes                                  │   │
│  │  • System Configuration                                        │   │
│  │  • Real-Time Dashboards                                        │   │
│  │                                                                 │   │
│  │  Tech Stack: React 18, TypeScript, Redux Toolkit, Recharts   │   │
│  │  State: Redux + React Query                                    │   │
│  │  Platform: Desktop Web (1280px+)                              │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  HOSPITAL DASHBOARD (React + Redux + Tailwind CSS v4)         │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • Order Acceptance & Assignment                               │   │
│  │  • Team Management                                             │   │
│  │  • Vehicle & Resource Management                               │   │
│  │  • Real-Time Team Tracking                                     │   │
│  │  • Revenue & Settlement Tracking                               │   │
│  │  • Analytics & Reports                                         │   │
│  │                                                                 │   │
│  │  Tech Stack: React 18, TypeScript, Redux Toolkit              │   │
│  │  State: Redux + React Query                                    │   │
│  │  Platform: Desktop Web (1024px+)                              │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  EMPLOYEE MOBILE APP (React Native)                           │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • Authentication (6-digit PIN + Biometric)                    │   │
│  │  • Order Acceptance & Management                               │   │
│  │  • Real-Time Navigation                                        │   │
│  │  • Background Location Tracking                                │   │
│  │  • Status Updates                                              │   │
│  │  • Payment Collection (Cash)                                   │   │
│  │  • In-App Chat                                                 │   │
│  │  • Earnings Tracking                                           │   │
│  │  • Offline Mode Support                                        │   │
│  │                                                                 │   │
│  │  Tech Stack: React Native, TypeScript, React Native Paper    │   │
│  │  State: Redux + React Query                                    │   │
│  │  Maps: React Native Maps                                       │   │
│  │  Platform: Native iOS & Android                               │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Backend Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        BACKEND INFRASTRUCTURE                           │
│                       (Supabase + Deno + Hono)                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  EDGE FUNCTIONS (Deno + Hono Web Framework)                   │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │                                                                 │   │
│  │  ┌───────────────┐  ┌───────────────┐  ┌──────────────────┐ │   │
│  │  │   Auth APIs   │  │  Order APIs   │  │  Hospital APIs   │ │   │
│  │  │               │  │               │  │                  │ │   │
│  │  │ • Signup      │  │ • Create      │  │ • List           │ │   │
│  │  │ • Login       │  │ • Update      │  │ • Details        │ │   │
│  │  │ • Biometric   │  │ • Cancel      │  │ • Services       │ │   │
│  │  │ • PIN Reset   │  │ • Tracking    │  │ • Teams          │ │   │
│  │  └───────────────┘  └───────────────┘  └──────────────────┘ │   │
│  │                                                                 │   │
│  │  ┌───────────────┐  ┌───────────────┐  ┌──────────────────┐ │   │
│  │  │  Payment APIs │  │ Location APIs │  │  Admin APIs      │ │   │
│  │  │               │  │               │  │                  │ │   │
│  │  │ • Process     │  │ • Update      │  │ • User Mgmt      │ │   │
│  │  │ • Refund      │  │ • Batch       │  │ • Analytics      │ │   │
│  │  │ • Settlement  │  │ • History     │  │ • Settlements    │ │   │
│  │  │ • Methods     │  │ • Track       │  │ • Reports        │ │   │
│  │  └───────────────┘  └───────────────┘  └──────────────────┘ │   │
│  │                                                                 │   │
│  │  Server Route: /make-server-f04a3591/*                         │   │
│  │  CORS: Enabled for all origins                                 │   │
│  │  Logging: Console logging for all requests                     │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  DATABASE (PostgreSQL via Supabase)                           │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │                                                                 │   │
│  │  Core Tables:                                                   │   │
│  │  • kv_store_f04a3591 (Key-Value storage)                      │   │
│  │  • users (Customer profiles)                                   │   │
│  │  • addresses (User addresses)                                  │   │
│  │  • orders (Emergency orders)                                   │   │
│  │  • hospitals (Hospital data)                                   │   │
│  │  • services (Service catalog)                                  │   │
│  │  • emergency_teams (Response teams)                            │   │
│  │  • team_members (Team composition)                             │   │
│  │  • payment_transactions (Financial records)                    │   │
│  │  • reviews (Customer feedback)                                 │   │
│  │  • notifications (Push notifications)                          │   │
│  │                                                                 │   │
│  │  Admin Tables:                                                  │   │
│  │  • admins (Admin users)                                        │   │
│  │  • admin_activity_log (Audit trail)                            │   │
│  │  • system_settings (Configuration)                             │   │
│  │  • support_tickets (User support)                              │   │
│  │  • disputes (Payment disputes)                                 │   │
│  │                                                                 │   │
│  │  Hospital Tables:                                               │   │
│  │  • hospital_users (Hospital staff)                             │   │
│  │  • team_schedules (Shift management)                           │   │
│  │  • vehicles (Ambulances & vehicles)                            │   │
│  │  • settlements (Financial settlements)                         │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  AUTHENTICATION (Supabase Auth)                                │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • JWT Token-based authentication                              │   │
│  │  • Customer: Mobile + PIN (6 digits) + Biometric              │   │
│  │  • Employee: Mobile + PIN (6 digits) + Biometric              │   │
│  │  • Admin: Email + Password + 2FA (TOTP)                        │   │
│  │  • Hospital: Email + Password + Optional 2FA                   │   │
│  │  • Access Token: 1 hour expiry                                 │   │
│  │  • Refresh Token: 30 days (mobile), 7 days (web)              │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  STORAGE (Supabase Storage)                                    │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  Buckets:                                                       │   │
│  │  • make-f04a3591-user-profiles (Profile photos)                │   │
│  │  • make-f04a3591-hospital-logos (Hospital branding)            │   │
│  │  • make-f04a3591-documents (Medical documents)                 │   │
│  │  • make-f04a3591-receipts (Payment receipts)                   │   │
│  │                                                                 │   │
│  │  Access: Private buckets with signed URLs                      │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  REAL-TIME (Supabase Realtime + WebSocket)                    │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  Events:                                                        │   │
│  │  • order:new - New order created                               │   │
│  │  • order:update - Order status changed                         │   │
│  │  • team:location - Team location updates (10sec interval)      │   │
│  │  • team:assigned - Team assigned to order                      │   │
│  │  • eta:update - Estimated arrival time updated                 │   │
│  │  • message:new - Chat message received                         │   │
│  │  • payment:received - Payment processed                        │   │
│  │  • notification:new - Push notification                        │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 4. External Integrations

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      THIRD-PARTY INTEGRATIONS                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  MAPS & LOCATION SERVICES                                      │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • Mapbox / Google Maps API                                    │   │
│  │  • Geocoding (Address → Coordinates)                           │   │
│  │  • Reverse Geocoding (Coordinates → Address)                   │   │
│  │  • Distance Matrix API                                         │   │
│  │  • Directions API (Route optimization)                         │   │
│  │  • Places API (Hospital search)                                │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  PAYMENT GATEWAYS                                              │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • Credit/Debit Cards (Visa, Mastercard)                       │   │
│  │  • Vodafone Cash (Egyptian mobile wallet)                      │   │
│  │  • Orange Money (Egyptian mobile wallet)                       │   │
│  │  • Etisalat Cash (Egyptian mobile wallet)                      │   │
│  │  • Cash on Service (Collected by employee)                     │   │
│  │                                                                 │   │
│  │  Integration: REST API + Webhooks                              │   │
│  │  Currency: EGP (Egyptian Pounds)                               │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  COMMUNICATION SERVICES                                        │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │  • SMS Gateway (Twilio / Egyptian providers)                   │   │
│  │    - Order confirmations                                       │   │
│  │    - Status updates                                            │   │
│  │    - PIN reset codes                                           │   │
│  │                                                                 │   │
│  │  • Email Service (SendGrid / AWS SES)                          │   │
│  │    - Receipts and invoices                                     │   │
│  │    - Password reset                                            │   │
│  │    - Admin notifications                                       │   │
│  │                                                                 │   │
│  │  • Push Notifications (Firebase Cloud Messaging)               │   │
│  │    - Order updates                                             │   │
│  │    - Team assignments                                          │   │
│  │    - Payment confirmations                                     │   │
│  │    - Chat messages                                             │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Data Flow Diagrams

### 5.1 Order Creation Flow

```
┌──────────────┐
│   Customer   │
│  Mobile App  │
└──────┬───────┘
       │ 1. Press SOS Button
       ▼
┌──────────────────────────────────┐
│  Auto-select Current Location    │
│  (Default Address)                │
└──────┬───────────────────────────┘
       │ 2. View Hospital Map
       ▼
┌──────────────────────────────────┐
│  Select Hospital from Map        │
│  (Shows nearest 7 hospitals)     │
└──────┬───────────────────────────┘
       │ 3. Select Hospital
       ▼
┌──────────────────────────────────┐
│  Multi-Select Services           │
│  - Emergency Services            │
│  - Ambulance Services            │
│  - Portable Diagnostics          │
│  - Laboratory Services           │
└──────┬───────────────────────────┘
       │ 4. Confirm Services
       ▼
┌──────────────────────────────────┐
│  Payment Screen                  │
│  - Select Payment Method         │
│  - Review Total (inc. 10% fee)   │
└──────┬───────────────────────────┘
       │ 5. Process Payment
       ▼
┌──────────────────────────────────┐
│  Backend: Create Order           │
│  - Save to database              │
│  - Process payment               │
│  - Send notification             │
└──────┬───────────────────────────┘
       │ 6. WebSocket Event
       ├───────────────────┬──────────────────┐
       ▼                   ▼                  ▼
┌──────────────┐   ┌──────────────┐  ┌──────────────┐
│   Admin      │   │   Hospital   │  │   Customer   │
│  Dashboard   │   │  Dashboard   │  │     App      │
│              │   │              │  │              │
│ "New Order   │   │ "Order for   │  │ "Order       │
│  Created"    │   │  Your        │  │  Confirmed"  │
│              │   │  Hospital"   │  │              │
└──────────────┘   └──────┬───────┘  └──────┬───────┘
                          │                  │
                          │ 7. Accept &      │
                          │    Assign Team   │
                          ▼                  │
                   ┌──────────────┐          │
                   │   Employee   │          │
                   │  Mobile App  │          │
                   │              │          │
                   │ "New Order   │          │
                   │  Assigned"   │◄─────────┘
                   └──────┬───────┘  8. Track Order
                          │
                          │ 9. Send Location Updates
                          │    (every 10 seconds)
                          ▼
                   ┌──────────────────────────┐
                   │  Real-Time Tracking Map  │
                   │  (Customer sees team     │
                   │   moving on map)         │
                   └──────────────────────────┘
```

### 5.2 Real-Time Location Tracking Flow

```
┌──────────────┐
│   Employee   │
│  Mobile App  │
│              │
│ Background   │
│  Location    │
│  Service     │
└──────┬───────┘
       │ Every 10 seconds
       │
       ▼ POST /employee/location/update
┌──────────────────────────────────┐
│  Backend: Update Location        │
│  - Save to database              │
│  - Broadcast WebSocket event     │
└──────┬───────────────────────────┘
       │
       │ WebSocket: team:location
       │
       ├─────────────┬──────────────┬─────────────┐
       ▼             ▼              ▼             ▼
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│Customer  │  │  Admin   │  │ Hospital │  │ Employee │
│   App    │  │Dashboard │  │Dashboard │  │   App    │
│          │  │          │  │          │  │          │
│ Update   │  │ Update   │  │ Update   │  │ View Own │
│ Team Pin │  │ All Team │  │ Hospital │  │ Location │
│ on Map   │  │ on Map   │  │ Teams    │  │          │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

### 5.3 Chat Message Flow

```
┌──────────────┐                           ┌──────────────┐
│   Customer   │                           │   Employee   │
│     App      │                           │     App      │
└──────┬───────┘                           └──────┬───────┘
       │                                          │
       │ 1. Send Message                          │
       │ "Where are you?"                         │
       │                                          │
       ▼ POST /chat/message                       │
┌──────────────────────────────────┐             │
│  Backend: Save Message           │             │
│  - Store in database             │             │
│  - Broadcast to team             │             │
└──────┬───────────────────────────┘             │
       │                                          │
       │ WebSocket: message:new                   │
       │                                          ▼
       │                                   ┌──────────────┐
       │                                   │ Notification │
       │                                   │ "New message │
       │                                   │  from        │
       │                                   │  customer"   │
       │                                   └──────┬───────┘
       │                                          │
       │                                          │ 2. Reply
       │                                          │ "5 mins away"
       │                                          │
       │                                          ▼ POST /chat/message
       │                           ┌──────────────────────────────────┐
       │                           │  Backend: Save Reply             │
       │                           │  - Store in database             │
       │                           │  - Broadcast to customer         │
       │                           └──────┬───────────────────────────┘
       │                                  │
       │ WebSocket: message:new           │
       ▼                                  │
┌──────────────┐                          │
│ Notification │◄─────────────────────────┘
│ "New message │
│  from team"  │
└──────────────┘
```

---

## 6. Security Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SECURITY LAYERS                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Layer 1: Network Security                                              │
│  ──────────────────────────                                             │
│  • TLS 1.3 for all HTTPS connections                                   │
│  • CORS enabled with origin validation                                 │
│  • Rate limiting (per IP/user)                                          │
│  • DDoS protection via Supabase                                         │
│                                                                         │
│  Layer 2: Authentication & Authorization                                │
│  ────────────────────────────────────────                               │
│  • JWT tokens with short expiry (1 hour access, 7-30 days refresh)     │
│  • Biometric authentication (fingerprint/face ID)                       │
│  • 6-digit PIN codes (hashed with bcrypt)                              │
│  • 2FA for admin users (TOTP)                                          │
│  • Role-Based Access Control (RBAC)                                    │
│    - Customer: Own data only                                           │
│    - Employee: Assigned orders only                                    │
│    - Hospital: Hospital-specific data                                  │
│    - Admin: Full system access                                         │
│                                                                         │
│  Layer 3: Data Encryption                                               │
│  ──────────────────────────                                             │
│  • At Rest: AES-256 encryption                                         │
│  • In Transit: TLS 1.3                                                 │
│  • Sensitive Data: Additional encryption layer                         │
│    - Mobile numbers (hashed)                                           │
│    - PIN codes (bcrypt)                                                │
│    - Payment info (PCI DSS compliant)                                  │
│  • Keychain/Keystore for token storage (mobile)                        │
│                                                                         │
│  Layer 4: Application Security                                          │
│  ───────────────────────────                                            │
│  • Input validation & sanitization                                     │
│  • SQL injection prevention (Prepared statements)                      │
│  • XSS protection (Content Security Policy)                            │
│  • CSRF tokens for state-changing operations                           │
│  • Secure session management                                           │
│  • PII data masking in logs                                            │
│                                                                         │
│  Layer 5: Compliance & Privacy                                          │
│  ───────────────────────────────                                        │
│  • Egyptian Data Protection Law compliance                             │
│  • GDPR principles applied                                             │
│  • User consent for data collection                                    │
│  • Right to data deletion                                              │
│  • Audit logging for sensitive operations                              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      DEPLOYMENT ENVIRONMENTS                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  DEVELOPMENT ENVIRONMENT                                                │
│  ────────────────────────                                               │
│  • Local development servers                                           │
│  • Supabase development project                                        │
│  • Mock payment gateway                                                │
│  • Local database snapshots                                            │
│                                                                         │
│  STAGING ENVIRONMENT                                                    │
│  ─────────────────────                                                  │
│  • Supabase staging project                                            │
│  • Production-like configuration                                       │
│  • Sandbox payment gateway                                             │
│  • UAT testing environment                                             │
│  • Continuous deployment from `develop` branch                         │
│                                                                         │
│  PRODUCTION ENVIRONMENT                                                 │
│  ────────────────────────                                               │
│  • Supabase production project (areirjqkuxgtrvaccgso)                  │
│  • Multi-region deployment                                             │
│  • CDN for static assets                                               │
│  • Auto-scaling enabled                                                │
│  • Continuous deployment from `main` branch                            │
│  • Database backups every 6 hours                                      │
│  • Monitoring & alerting enabled                                       │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │  CI/CD PIPELINE                                                │   │
│  │  ─────────────────────────────────────────────────────────────│   │
│  │                                                                 │   │
│  │  1. Code Push to GitHub                                        │   │
│  │       ↓                                                         │   │
│  │  2. Run Tests (Unit + Integration)                             │   │
│  │       ↓                                                         │   │
│  │  3. Build Frontend (React/React Native)                        │   │
│  │       ↓                                                         │   │
│  │  4. Deploy Backend (Supabase Edge Functions)                   │   │
│  │       ↓                                                         │   │
│  │  5. Database Migrations (if any)                               │   │
│  │       ↓                                                         │   │
│  │  6. Deploy Frontend to CDN                                     │   │
│  │       ↓                                                         │   │
│  │  7. Smoke Tests                                                │   │
│  │       ↓                                                         │   │
│  │  8. Deployment Complete                                        │   │
│  │                                                                 │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Scalability & Performance

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SCALABILITY ARCHITECTURE                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  HORIZONTAL SCALING                                                     │
│  ──────────────────                                                     │
│  • Auto-scaling Edge Functions (Supabase)                              │
│  • Database connection pooling                                          │
│  • CDN for static assets (global distribution)                         │
│  • Load balancing across regions                                       │
│                                                                         │
│  CACHING STRATEGY                                                       │
│  ────────────────                                                       │
│  • Browser caching (static assets)                                     │
│  • API response caching (Redis - future)                               │
│  • Database query caching                                              │
│  • CDN edge caching                                                    │
│                                                                         │
│  PERFORMANCE TARGETS                                                    │
│  ─────────────────────                                                  │
│  • App Launch Time: <2 seconds                                         │
│  • API Response (p95): <500ms                                          │
│  • Database Query: <100ms                                              │
│  • Map Load Time: <3 seconds                                           │
│  • Real-time Updates: <1 second latency                                │
│  • Location Update Frequency: Every 10 seconds                         │
│  • Battery Drain (Employee App): <5% per hour                          │
│                                                                         │
│  MONITORING                                                             │
│  ──────────                                                             │
│  • API response times (percentiles)                                    │
│  • Database query performance                                          │
│  • Error rates and crash reports                                       │
│  • User session analytics                                              │
│  • Real-time WebSocket connection health                               │
│  • Payment gateway success rates                                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 9. System Integration Map

```
                                MySOS ECOSYSTEM
                                ═══════════════

                     ┌──────────────────────────────┐
                     │    Customer Mobile App       │
                     └──────────┬───────────────────┘
                                │
                                │ HTTPS/WSS
                                ▼
        ┌──────────────────────────────────────────────────┐
        │                API GATEWAY                       │
        │         https://areirjqkuxgtrvaccgso             │
        │            .supabase.co/functions/v1/            │
        │              make-server-f04a3591/               │
        └───┬──────────────────────────────────────────┬───┘
            │                                          │
            │                                          │
    ┌───────▼────────┐                       ┌────────▼────────┐
    │   Supabase     │                       │   Third-Party   │
    │   Services     │                       │   Integrations  │
    │                │                       │                 │
    │ • Auth         │                       │ • Mapbox        │
    │ • Database     │                       │ • Google Maps   │
    │ • Storage      │◄──────────────────────┤ • Payment GW    │
    │ • Realtime     │      API Calls        │ • SMS Gateway   │
    │ • Edge Funcs   │                       │ • Email Service │
    └────────┬───────┘                       │ • FCM (Push)    │
             │                                └─────────────────┘
             │
             │ Data Access
             │
    ┌────────▼────────┐
    │   PostgreSQL    │
    │    Database     │
    │                 │
    │ • Users         │
    │ • Orders        │
    │ • Hospitals     │
    │ • Teams         │
    │ • Payments      │
    └─────────────────┘
```

---

## 10. Technology Stack Summary

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Customer App** | React 18 + TypeScript + Tailwind v4 | Mobile-first web app |
| **Admin Dashboard** | React 18 + Redux + TypeScript | Web dashboard |
| **Hospital Dashboard** | React 18 + Redux + TypeScript | Web dashboard |
| **Employee App** | React Native + TypeScript | Native mobile apps |
| **Backend Runtime** | Deno (Supabase Edge Functions) | Serverless functions |
| **Web Framework** | Hono | Fast web framework for Deno |
| **Database** | PostgreSQL (Supabase) | Relational database |
| **Authentication** | Supabase Auth + JWT | User authentication |
| **Storage** | Supabase Storage | File storage |
| **Real-time** | WebSocket (Supabase Realtime) | Live updates |
| **Maps** | Mapbox / Google Maps | Location services |
| **Payments** | Multiple gateways | Payment processing |
| **Notifications** | Firebase Cloud Messaging | Push notifications |
| **SMS** | Twilio / Local providers | SMS delivery |
| **Email** | SendGrid / AWS SES | Email delivery |

---

## 11. System Metrics & KPIs

### Performance Metrics
- **Uptime:** 99.9% SLA
- **API Latency (p95):** <500ms
- **Order Creation Time:** <3 seconds
- **Location Update Latency:** <1 second
- **Database Query Time:** <100ms

### Business Metrics
- **Orders Per Day:** Target 500+
- **Active Hospitals:** Target 20+
- **Active Emergency Teams:** Target 100+
- **Average Response Time:** <15 minutes
- **Customer Satisfaction:** >4.5 stars
- **Order Completion Rate:** >95%

---

## Document Information

**Version:** 1.0  
**Last Updated:** April 25, 2026  
**Prepared By:** MySOS Technical Team  
**Contact:** technical-team@mysos.eg

---

**Related Documents:**
- Complete API Specification: `/src/app/swagger.yaml`
- Customer App Scope: `SCOPE_OF_WORK.md`
- Dashboards Scope: `SCOPE_OF_WORK_DASHBOARDS.md`
- Employee App Scope: `SCOPE_OF_WORK_MOBILE_EMPLOYEE_APP.md`
- Development Timeline: `DEVELOPMENT_TIMELINE_OPTIMIZATION.md`
- Alignment Review: `SCOPE_ALIGNMENT_REVIEW.md`

---

*This system architecture diagram provides a comprehensive visual and technical overview of the complete MySOS emergency medical service ecosystem. It serves as the reference for understanding how all components interact and integrate together.*
