# MySOS Dashboard Systems
## Comprehensive Scope of Work Document
### Admin Dashboard & Hospital Dashboard

**Project Name:** MySOS Dashboard Systems  
**Version:** 1.0  
**Document Date:** January 27, 2026  
**Currency:** EGP (Egyptian Pounds)  
**Supported Languages:** Arabic (RTL) & English (LTR)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Technical Architecture](#2-technical-architecture)
3. [Admin Dashboard - Complete Specifications](#3-admin-dashboard---complete-specifications)
4. [Hospital Dashboard - Complete Specifications](#4-hospital-dashboard---complete-specifications)
5. [Backend API Specifications](#5-backend-api-specifications)
6. [Database Schema](#6-database-schema)
7. [Security & Access Control](#7-security--access-control)
8. [Reports & Analytics](#8-reports--analytics)
9. [Integration Requirements](#9-integration-requirements)
10. [Testing Requirements](#10-testing-requirements)
11. [Deployment & DevOps](#11-deployment--devops)
12. [Budget & Resources](#12-budget--resources)
13. [Success Metrics](#13-success-metrics)
14. [Risk Management](#14-risk-management)
15. [Approval & Sign-off](#15-approval--sign-off)

---

## 1. Executive Summary

### 1.1 Overview

MySOS Dashboard Systems consist of two web-based administrative portals designed to manage and monitor the MySOS Emergency Medical Service Application:

1. **Admin Dashboard**: Central command and control system for MySOS platform administrators
2. **Hospital Dashboard**: Service provider portal for hospitals and medical teams

Both dashboards provide comprehensive management capabilities, real-time monitoring, analytics, and operational tools to ensure efficient emergency medical service delivery across Egypt.

### 1.2 Key Objectives

**Admin Dashboard:**
- Centralized platform management and oversight
- User and hospital management
- Order monitoring and dispute resolution
- Financial reporting and reconciliation
- System configuration and settings
- Analytics and business intelligence

**Hospital Dashboard:**
- Order and team management
- Service availability control
- Real-time dispatch coordination
- Performance tracking and analytics
- Revenue and payment management
- Team scheduling and logistics

### 1.3 Target Users

**Admin Dashboard Users:**
- Platform Administrators
- Customer Support Managers
- Financial Controllers
- Business Analysts
- Technical Support Staff

**Hospital Dashboard Users:**
- Hospital Administrators
- Dispatch Coordinators
- Medical Team Managers
- Finance Managers
- Quality Assurance Officers

---

## 2. Technical Architecture

### 2.1 Frontend Stack

**Framework & Libraries:**
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** 
  - shadcn/ui component library
  - Lucide React (icons)
  - Recharts (charts and graphs)
  - TanStack Table (data tables)
- **State Management:** 
  - React Query (server state)
  - Zustand (client state)
- **Routing:** React Router v6
- **Forms:** React Hook Form with Zod validation
- **Date/Time:** date-fns
- **Maps:** Mapbox/Google Maps API
- **Real-time:** WebSocket client
- **HTTP Client:** Axios with interceptors

### 2.2 Backend Stack

**Runtime & Framework:**
- **Runtime:** Deno (Supabase Edge Functions)
- **Web Framework:** Hono
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** Supabase Auth with Role-Based Access Control
- **Storage:** Supabase Storage
- **Real-time:** Supabase Realtime
- **API Architecture:** RESTful API with WebSocket support

### 2.3 Infrastructure

- **Hosting:** Supabase Cloud + Vercel/Netlify for dashboard frontends
- **CDN:** Cloudflare/Supabase CDN
- **Monitoring:** Sentry for error tracking
- **Analytics:** Custom analytics dashboard
- **Backup:** Automated database backups
- **Environment:** Production, Staging, Development

### 2.4 Device & Browser Support

**Admin Dashboard:**
- Desktop browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Screen sizes: 1280px minimum width
- Tablets: iPad Pro and equivalent (landscape mode)

**Hospital Dashboard:**
- Desktop browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Screen sizes: 1024px minimum width
- Tablets: iPad and equivalent (landscape mode)
- Mobile responsive for monitoring (optional)

---

## 3. Admin Dashboard - Complete Specifications

### 3.1 User Authentication & Authorization

#### 3.1.1 Login Screen
**Features:**
- Email/username input
- Password input with show/hide toggle
- Two-factor authentication (2FA) support
- "Remember me" checkbox
- "Forgot password" link
- Language switcher (Arabic/English)
- Session timeout notification
- Failed login attempt tracking (max 5 attempts)
- IP-based access restrictions
- Login activity logging

**Security:**
- HTTPS only
- CAPTCHA after 3 failed attempts
- Password encryption (bcrypt)
- JWT token-based authentication
- Role-based access control (RBAC)
- Session management with auto-logout after 30 minutes of inactivity

#### 3.1.2 User Roles & Permissions

**Super Admin:**
- Full system access
- User management (create, edit, delete admins)
- System configuration
- All reports and analytics
- Financial reconciliation
- Hospital approval and suspension

**Customer Support Manager:**
- View all orders and users
- Manage disputes and complaints
- Issue refunds
- User communication
- Basic reporting

**Financial Controller:**
- Payment and transaction management
- Financial reports
- Revenue analytics
- Reconciliation tools
- Export financial data

**Business Analyst:**
- View-only access to analytics
- Generate reports
- Export data
- Dashboard visualization

**Technical Support:**
- System logs access
- Error monitoring
- User account recovery
- Technical troubleshooting

### 3.2 Dashboard Home Screen

#### 3.2.1 Header & Navigation

**Top Header:**
- MySOS Admin logo
- Global search (orders, users, hospitals)
- Notifications bell with badge count
- Language switcher (AR/EN)
- User profile dropdown:
  - Profile settings
  - Change password
  - Activity log
  - Logout

**Sidebar Navigation:**
- Dashboard (Home)
- Orders Management
- Users Management
- Hospitals Management
- Services Management
- Emergency Teams
- Payments & Finance
- Reports & Analytics
- Notifications
- Complaints & Disputes
- System Settings
- Activity Logs

#### 3.2.2 Dashboard Overview (Home Page)

**Key Metrics Cards (Top Row):**
1. **Total Orders Today**
   - Count with percentage change from yesterday
   - Mini line chart (last 7 days trend)
   - Color: Blue

2. **Active Orders**
   - Real-time count of in-progress orders
   - Status breakdown (Dispatched, En Route, Arrived)
   - Color: Orange

3. **Revenue Today**
   - EGP amount with percentage change
   - Breakdown by payment method
   - Color: Green

4. **Active Users**
   - Currently active users count
   - User growth rate
   - Color: Purple

5. **Hospital Utilization**
   - Percentage of hospitals currently serving orders
   - Available teams count
   - Color: Teal

6. **Average Response Time**
   - Minutes with trend indicator
   - Target vs actual comparison
   - Color: Indigo

**Real-Time Order Monitor:**
- Live order feed (auto-updating every 5 seconds)
- Order ID, user name, hospital, services, status
- Time elapsed since order placement
- Quick actions (View Details, Contact User, Contact Hospital)
- Filter by status
- Search functionality

**Charts & Visualizations:**

1. **Orders Over Time (Line Chart)**
   - Last 30 days
   - Toggle between daily/weekly/monthly view
   - Multiple metrics: Total, Completed, Cancelled
   - Export to CSV

2. **Revenue Analysis (Bar Chart)**
   - Last 7 days revenue
   - Breakdown by service category
   - Comparison with previous period
   - Export functionality

3. **Service Distribution (Pie Chart)**
   - Percentage breakdown by service category
   - Interactive segments
   - Hover tooltips with exact numbers

4. **Hospital Performance (Table)**
   - Top 10 hospitals by orders
   - Columns: Hospital name, Orders, Completion rate, Avg. response time, Rating
   - Sort by any column
   - Link to hospital details

5. **Geographic Heatmap**
   - Map showing order concentration by area
   - Color-coded by volume
   - Click for area-specific stats
   - Time range selector

**Recent Activity Feed:**
- Last 20 system activities
- Types: New order, Order completed, User registered, Hospital joined, Payment processed
- Timestamp, actor, action, details
- Filter by activity type

**System Health Indicators:**
- API response time
- Database performance
- Error rate
- Active WebSocket connections
- Server uptime

### 3.3 Orders Management

#### 3.3.1 Orders List View

**Filter & Search:**
- Search by: Order ID, User name/phone, Hospital name
- Filter by:
  - Status (All, Pending, Confirmed, Dispatched, En Route, Arrived, Completed, Cancelled)
  - Date range (Today, Yesterday, Last 7 days, Last 30 days, Custom range)
  - Hospital
  - Service category
  - Payment status (Pending, Paid, Refunded)
  - Price range
  - City/Area

**Data Table Columns:**
- Order ID (clickable)
- Date & Time
- User (name + phone)
- Hospital
- Services (badge count, hover for details)
- Address (truncated, hover for full)
- Total Amount (EGP)
- Payment Status (badge)
- Order Status (badge with color coding)
- Response Time
- Actions (View, Edit, Cancel, Refund)

**Table Features:**
- Pagination (10, 25, 50, 100 per page)
- Column sorting
- Column visibility toggle
- Export to CSV/Excel/PDF
- Bulk actions (Export selected, Cancel selected)
- Saved filters/views

**Order Status Color Coding:**
- Pending: Gray
- Confirmed: Blue
- Dispatched: Purple
- En Route: Orange
- Arrived: Yellow
- Completed: Green
- Cancelled: Red

#### 3.3.2 Order Details View

**Order Information Card:**
- Order ID
- Status with timeline
- Created date/time
- Estimated/Actual completion time
- Duration

**User Information:**
- Full name
- Mobile number
- Email
- Blood type
- Medical conditions/allergies
- Link to user profile
- Contact buttons (Call, SMS, Email)

**Service Address:**
- Full address details
- Person name
- Contact number
- Landmark
- Map view with marker
- Distance from hospital

**Hospital & Team:**
- Hospital name and logo
- Hospital contact
- Assigned team details:
  - Team members (names, roles, photos)
  - Vehicle type and license plate
  - Contact information
- Link to hospital dashboard

**Services Breakdown:**
- List of selected services
- Individual prices
- Subtotal
- Service fee (10%)
- Total amount

**Payment Information:**
- Payment method
- Payment status
- Transaction ID
- Card/wallet details (masked)
- Payment timestamp
- Refund status (if applicable)

**Special Instructions:**
- Text entered by user
- Highlighted if present

**Order Timeline:**
- Visual timeline with all events:
  - Order Placed
  - Hospital Confirmed
  - Team Assigned
  - Team Dispatched
  - Team En Route (with location updates)
  - Team Arrived
  - Service In Progress
  - Service Completed
  - Payment Processed
- Timestamp for each event
- Actor (system/user/hospital)

**Live Tracking (if order active):**
- Real-time map showing:
  - Team current location
  - User location
  - Route
  - ETA
- Auto-refresh every 10 seconds

**Communication History:**
- SMS notifications sent
- Push notifications sent
- In-app messages
- Support tickets (if any)

**Actions Available:**
- Edit order details (if pending)
- Cancel order (with confirmation + reason)
- Issue refund
- Contact user
- Contact hospital
- Escalate to support
- View full history
- Print order summary
- Export order data

#### 3.3.3 Order Analytics

**Metrics:**
- Total orders (all time)
- Orders by status (breakdown)
- Completion rate
- Cancellation rate
- Average order value (EGP)
- Average response time
- Customer satisfaction score

**Charts:**
- Orders trend (line chart)
- Peak hours analysis (bar chart)
- Service category distribution (pie chart)
- Geographic distribution (map)
- Hospital performance comparison (bar chart)

**Export Options:**
- CSV, Excel, PDF
- Custom date range
- Filtered data export

### 3.4 Users Management

#### 3.4.1 Users List View

**Search & Filter:**
- Search: Name, phone, email, user ID
- Filter by:
  - Registration date
  - Status (Active, Suspended, Deleted)
  - Language preference
  - Has emergency contact
  - Has medical info
  - Order count range
  - Total spent range
  - City/Area

**Data Table Columns:**
- User ID
- Profile Photo (thumbnail)
- Full Name
- Mobile Number
- Email
- Registration Date
- Total Orders
- Total Spent (EGP)
- Last Order Date
- Status (Active/Suspended/Deleted)
- Language Preference
- Actions (View, Edit, Suspend, Delete)

**Bulk Actions:**
- Export selected users
- Send notification to selected
- Suspend selected accounts

#### 3.4.2 User Details View

**Personal Information:**
- Profile photo
- First name, Last name
- Mobile number (with verification status)
- Email (with verification status)
- Date of birth
- Gender
- National ID (optional)
- Registration date
- Last login date/time
- Account status

**Medical Information:**
- Blood type
- Medical conditions
- Allergies
- Current medications
- Emergency contact details

**Address Information:**
- All saved addresses
- Default address indicator
- Address usage count
- Last used date

**Order History:**
- Total orders count
- Orders by status breakdown
- Total spent (EGP)
- Average order value
- Recent orders table (last 10)
- Link to full order history

**Payment Information:**
- Saved payment methods
- Default payment method
- Payment history
- Total payments
- Refunds received

**Activity Log:**
- Login history (date, time, IP, device)
- Order activities
- Profile updates
- Address changes
- Payment method changes

**Communication Preferences:**
- Language preference
- Notification settings
- Marketing consent
- SMS consent

**Actions:**
- Edit user information
- Reset password/PIN
- Suspend account (with reason)
- Delete account (with confirmation)
- Send notification
- View full activity log
- Export user data
- Refund management

#### 3.4.3 User Analytics

**Key Metrics:**
- Total registered users
- Active users (ordered in last 30 days)
- New registrations (today/week/month)
- User retention rate
- Average lifetime value

**Charts:**
- User growth trend (line chart)
- User distribution by city (map)
- Language preference split (pie chart)
- User engagement levels (bar chart)
- Registration source analysis

**Cohort Analysis:**
- User retention by cohort
- Revenue by cohort
- Order frequency by cohort

### 3.5 Hospitals Management

#### 3.5.1 Hospital List View

**Search & Filter:**
- Search: Hospital name, ID, phone
- Filter by:
  - Type (Private, Public, Teaching)
  - Status (Active, Inactive, Pending Approval, Suspended)
  - City/Area
  - Rating range
  - Order count range
  - Services offered
  - Verification status

**Data Table Columns:**
- Hospital ID
- Logo (thumbnail)
- Hospital Name (AR/EN)
- Type
- City/Area
- Rating (stars + count)
- Total Orders
- Active Teams
- Available Services (count)
- Status
- Joined Date
- Actions (View, Edit, Approve, Suspend)

**Quick Stats:**
- Total hospitals
- Active hospitals
- Pending approval
- Average rating
- Total teams

#### 3.5.2 Hospital Details View

**Hospital Profile:**
- Logo and cover image
- Hospital name (Arabic & English)
- Hospital type
- Description (Arabic & English)
- Verification status
- Accreditation details
- License number
- License expiry date

**Contact Information:**
- Primary phone
- Emergency phone
- Email
- Website
- Physical address (Arabic & English)
- Map location (lat/long)
- Operating hours (24/7 or custom)

**Services Offered:**
- List of available services
- Service pricing ranges
- Service activation status
- Equipment availability
- Specializations

**Emergency Teams:**
- Total teams count
- Teams breakdown:
  - Available
  - Dispatched
  - Busy
  - Offline
- Team details table:
  - Team ID
  - Members (count + roles)
  - Vehicle type
  - License plate
  - Rating
  - Completed orders
  - Current status
  - Actions (View, Edit, Activate, Deactivate)

**Performance Metrics:**
- Total orders served
- Completion rate
- Average response time
- Average arrival time
- Customer rating
- Peak performance hours
- Service quality score

**Financial Information:**
- Total revenue (EGP)
- Revenue this month
- Revenue trend (chart)
- Payment terms
- Commission rate
- Outstanding balance
- Payment history

**Order History:**
- Total orders
- Recent orders (last 20)
- Orders by status breakdown
- Orders trend chart
- Filter and export options

**Reviews & Ratings:**
- Overall rating (1-5 stars)
- Total reviews
- Rating distribution chart
- Recent reviews (with user info)
- Response rate to reviews
- Aspect ratings:
  - Punctuality
  - Professionalism
  - Communication
  - Service quality

**Documents:**
- Hospital license
- Accreditation certificates
- Insurance documents
- Team certifications
- Equipment certifications
- Upload/download functionality
- Document expiry tracking

**Activity Log:**
- Status changes
- Profile updates
- Team additions/removals
- Service updates
- Order assignments
- Financial transactions

**Actions:**
- Edit hospital profile
- Approve/Reject (for pending)
- Suspend/Activate hospital
- Add/Edit teams
- Configure services
- Set commission rates
- Send notification
- Export hospital data
- View dashboard login

#### 3.5.3 Hospital Approval Workflow

**Pending Applications:**
- Application list
- Submitted date
- Hospital details preview
- Document verification checklist:
  - License verified
  - Accreditation verified
  - Insurance verified
  - Team certifications verified
  - Equipment verified

**Approval Process:**
1. Review application details
2. Verify documents
3. Background check
4. Site visit (optional, mark as completed)
5. Approve with commission rate
6. Send welcome email and credentials

**Rejection Process:**
1. Select rejection reason
2. Add detailed notes
3. Send rejection email
4. Archive application

### 3.6 Services Management

#### 3.6.1 Services Catalog

**Service Categories:**
1. Emergency Services
2. Ambulance Services
3. Portable Diagnostic Services
4. Laboratory Services

**Service List View:**
- Service ID
- Category
- Service name (AR/EN)
- Description (AR/EN)
- Price range (EGP)
- Estimated duration
- Available hospitals count
- Total orders
- Status (Active/Inactive)
- Actions (Edit, Activate/Deactivate, Delete)

**Service Details:**
- Complete information
- Price range settings
- Equipment requirements
- Team requirements (roles needed)
- Service protocols
- Insurance coverage codes
- Related services
- Usage statistics

**Actions:**
- Create new service
- Edit service details
- Set pricing guidelines
- Configure availability
- Link to hospitals
- View order history
- Export service data

#### 3.6.2 Service Analytics

**Metrics:**
- Most requested services
- Service revenue breakdown
- Service completion rates
- Average service duration
- Service satisfaction ratings

**Charts:**
- Service popularity trend
- Revenue by service category
- Geographic service demand
- Peak hours by service

### 3.7 Emergency Teams Management

#### 3.7.1 Teams Overview

**All Teams Dashboard:**
- Total teams across all hospitals
- Real-time status map
- Team availability statistics
- Active dispatches

**Filter & Search:**
- Search: Team ID, member name, vehicle
- Filter by:
  - Hospital
  - Status (Available, Dispatched, Busy, Offline)
  - Team type (Doctor-led, Nurse-led, Paramedic)
  - City/Area
  - Rating range
  - Vehicle type

**Teams List:**
- Team ID
- Hospital
- Members (count + key roles)
- Vehicle type
- License plate
- Current status
- Current location (if dispatched)
- Rating
- Orders completed today
- Actions (View, Track, Contact)

#### 3.7.2 Team Details

**Team Information:**
- Team ID
- Hospital affiliation
- Team leader
- Status
- Shift schedule
- Base location

**Team Members:**
- Member details table:
  - Name
  - Role (Doctor, Nurse, Paramedic, Driver, Technician)
  - Photo
  - Phone
  - Certifications
  - Join date
  - Status
  - Actions (Edit, Remove)

**Vehicle Information:**
- Type (Ambulance, Car, Motorcycle)
- License plate
- Make and model
- Year
- Equipment list
- Last maintenance date
- Insurance details

**Performance:**
- Orders completed (total)
- Completion rate
- Average response time
- Average arrival time
- Customer rating
- Performance trend chart

**Current Assignment:**
- Order details (if active)
- User location
- Estimated arrival
- Live tracking map

**Schedule:**
- Shift calendar
- Availability slots
- Upcoming assignments
- Leave/Vacation schedule

### 3.8 Payments & Finance

#### 3.8.1 Payments Dashboard

**Financial Overview:**
- Today's revenue (EGP)
- This month's revenue
- Revenue trend (chart)
- Payment method breakdown
- Pending settlements
- Refunds issued

**Recent Transactions:**
- Transaction table:
  - Transaction ID
  - Date/Time
  - Order ID
  - User
  - Amount (EGP)
  - Payment method
  - Status
  - Gateway response
  - Actions (View, Refund)

**Filter Options:**
- Date range
- Payment method
- Status
- Amount range
- User/Hospital

#### 3.8.2 Hospital Settlements

**Settlement Management:**
- Hospital list with pending payouts
- Settlement period (weekly/monthly)
- Calculation:
  - Gross revenue
  - MySOS commission
  - Net payout
  - Payment status

**Settlement History:**
- Past settlements
- Payment dates
- Amount details
- Bank transfer references
- Download invoices

**Actions:**
- Generate settlement report
- Mark as paid
- Bulk settlement processing
- Export for accounting

#### 3.8.3 Refunds Management

**Refund Requests:**
- Request list
- Request date
- Order ID
- User
- Amount (EGP)
- Reason
- Status (Pending, Approved, Rejected, Processed)
- Actions (Approve, Reject, Process)

**Refund Processing:**
1. Review refund request
2. Check order details
3. Verify refund eligibility
4. Approve/Reject with notes
5. Process refund (if approved)
6. Update order status
7. Send confirmation to user

**Refund Analytics:**
- Total refunds
- Refund rate
- Common refund reasons
- Refund trend chart

#### 3.8.4 Financial Reports

**Available Reports:**
1. **Revenue Report**
   - Total revenue by period
   - Revenue by service category
   - Revenue by hospital
   - Payment method breakdown

2. **Commission Report**
   - Commission earned
   - Commission by hospital
   - Commission trend

3. **Settlement Report**
   - Hospital payouts
   - Settlement schedule
   - Outstanding balances

4. **Refund Report**
   - Refunds issued
   - Refund reasons
   - Refund impact on revenue

5. **Payment Gateway Report**
   - Transaction success rate
   - Failed transactions
   - Gateway fees

**Export Options:**
- PDF, Excel, CSV
- Custom date ranges
- Filtered data
- Scheduled reports (email)

### 3.9 Reports & Analytics

#### 3.9.1 Business Intelligence Dashboard

**Key Performance Indicators:**
- Total users
- Total hospitals
- Total orders
- Total revenue (EGP)
- Growth rates (MoM, YoY)
- Market share by city

**Executive Summary Charts:**
1. Revenue Trend (12 months)
2. User Growth (12 months)
3. Order Volume (12 months)
4. Hospital Network Growth
5. Service Utilization
6. Geographic Expansion

**Comparative Analysis:**
- Period comparison (This month vs Last month)
- YoY comparison
- Target vs Actual
- Forecasting

#### 3.9.2 Operational Reports

**Order Reports:**
- Order volume analysis
- Peak hours/days analysis
- Service mix analysis
- Completion rate trends
- Cancellation analysis
- Response time analysis

**User Reports:**
- User acquisition
- User retention
- User lifetime value
- User segmentation
- Churn analysis
- User engagement

**Hospital Reports:**
- Hospital performance ranking
- Utilization rates
- Capacity analysis
- Service coverage
- Quality metrics
- Financial performance

**Team Reports:**
- Team productivity
- Response times
- Utilization rates
- Performance ratings
- Shift efficiency

#### 3.9.3 Custom Report Builder

**Report Creation:**
- Select data source
- Choose metrics
- Apply filters
- Select visualization type
- Configure layout
- Preview report
- Save/Schedule/Export

**Scheduled Reports:**
- Configure frequency (Daily, Weekly, Monthly)
- Set recipients
- Email delivery
- Auto-generate and send

### 3.10 Notifications Management

#### 3.10.1 Notification Center

**Inbox:**
- Unread notifications (badge count)
- Notification list:
  - Type icon
  - Title
  - Message
  - Timestamp
  - Read/Unread status
  - Actions (View, Mark as read, Delete)

**Notification Types:**
- System alerts (errors, warnings)
- Order notifications (new, cancelled)
- User activities (registrations, issues)
- Hospital activities (new application, status changes)
- Payment notifications (transactions, refunds)
- Support tickets (new, escalated)
- Performance alerts (SLA breaches)

**Filter Options:**
- Type
- Read/Unread
- Date range
- Priority (High, Medium, Low)

**Actions:**
- Mark all as read
- Delete read notifications
- Configure notification preferences

#### 3.10.2 Send Notifications

**Create Notification:**
- Recipient selection:
  - All users
  - Specific user segments
  - Individual users
  - All hospitals
  - Specific hospitals
- Notification type (Push, SMS, Email, In-app)
- Title (AR/EN)
- Message (AR/EN)
- Link/Action (optional)
- Schedule (Send now / Schedule for later)
- Preview before sending

**Notification Templates:**
- Pre-defined templates
- Custom templates
- Variable placeholders
- Template management

**Notification History:**
- Sent notifications
- Delivery status
- Open rates
- Click rates
- Failed deliveries

### 3.11 Complaints & Disputes

#### 3.11.1 Support Tickets

**Ticket List:**
- Ticket ID
- User/Hospital
- Subject
- Category (Order issue, Payment, Technical, Other)
- Priority (Low, Medium, High, Critical)
- Status (Open, In Progress, Waiting, Resolved, Closed)
- Created date
- Assigned to
- Last update
- Actions (View, Reply, Assign, Close)

**Ticket Details:**
- Ticket information
- User/Hospital details
- Related order (if applicable)
- Conversation thread
- Attachments
- Internal notes
- Resolution status
- Time to resolution

**Actions:**
- Reply to ticket
- Assign to team member
- Change priority
- Change status
- Escalate
- Merge tickets
- Add internal note
- Close ticket

#### 3.11.2 Disputes Management

**Order Disputes:**
- Dispute list
- Order ID
- User complaint
- Hospital response
- Evidence (photos, documents)
- Dispute amount
- Status
- Resolution deadline

**Dispute Resolution:**
1. Review dispute details
2. Check order history
3. Contact parties if needed
4. Review evidence
5. Make decision
6. Process refund (if applicable)
7. Update parties
8. Close dispute

**Dispute Analytics:**
- Total disputes
- Resolution rate
- Average resolution time
- Common dispute reasons
- Financial impact

### 3.12 System Settings

#### 3.12.1 General Settings

**Platform Configuration:**
- Platform name
- Emergency hotline (12345)
- Support email
- Support phone
- Default language
- Supported currencies
- Date/time format
- Timezone

**Business Rules:**
- Service fee percentage (default: 10%)
- Minimum order amount
- Maximum services per order
- Cancellation window
- Refund policy settings
- Auto-assignment rules

**Email Configuration:**
- SMTP settings
- Email templates
- Sender information
- Email signature

**SMS Configuration:**
- SMS gateway credentials
- SMS templates
- Sender ID

#### 3.12.2 Commission & Pricing

**Commission Settings:**
- Default commission rate
- Hospital-specific rates
- Service-specific rates
- Volume-based discounts
- Promotional commission adjustments

**Pricing Controls:**
- Service price ranges
- Dynamic pricing rules (peak hours)
- Surge pricing settings
- Discount management
- Promotional pricing

#### 3.12.3 Service Areas

**Geographic Coverage:**
- Active cities/areas
- Service radius per hospital
- Delivery zones
- Area-based pricing

**Expansion Planning:**
- New area applications
- Coverage analysis
- Demand mapping

#### 3.12.4 Admin Users Management

**Admin List:**
- Username
- Full name
- Email
- Role
- Status (Active/Inactive)
- Last login
- Actions (Edit, Deactivate, Delete)

**Create/Edit Admin:**
- Personal information
- Username/Email
- Password (initial/reset)
- Role assignment
- Permissions customization
- Status

**Role Management:**
- Role definitions
- Permission matrix
- Create custom roles
- Assign permissions

### 3.13 Activity Logs

#### 3.13.1 System Activity Log

**Log Entries:**
- Timestamp
- User/System
- Action performed
- Resource affected
- IP address
- Status (Success/Failed)
- Details

**Filter Options:**
- Date range
- User
- Action type
- Resource type
- Status

**Actions:**
- View details
- Export logs
- Archive old logs

#### 3.13.2 Audit Trail

**Critical Events:**
- User account changes
- Permission changes
- Financial transactions
- Order cancellations
- Refund processing
- Hospital status changes
- System configuration changes

**Compliance Reports:**
- Activity summaries
- Security events
- Data access logs
- Export for auditing

---

## 4. Hospital Dashboard - Complete Specifications

### 4.1 Hospital Authentication & Authorization

#### 4.1.1 Login Screen

**Features:**
- Hospital email/username
- Password with show/hide toggle
- Two-factor authentication (optional)
- "Remember me" checkbox
- "Forgot password" link
- Language switcher (AR/EN)
- Hospital logo display
- Session management

**Security:**
- HTTPS only
- Password encryption
- JWT authentication
- Role-based access within hospital
- IP whitelisting (optional)
- Login activity logging

#### 4.1.2 User Roles (within Hospital)

**Hospital Administrator:**
- Full access to hospital dashboard
- Team management
- Financial management
- Settings configuration
- User management
- All reports

**Dispatch Coordinator:**
- Order management
- Team dispatch
- Real-time monitoring
- Communication with users
- Order assignment

**Team Manager:**
- Team scheduling
- Team performance monitoring
- Vehicle management
- Equipment tracking
- Team member management

**Finance Manager:**
- Revenue reports
- Payment tracking
- Invoice management
- Settlement tracking
- Financial analytics

**Quality Assurance:**
- Review management
- Performance monitoring
- Complaint handling
- Quality reports
- Service improvement

### 4.2 Hospital Dashboard Home

#### 4.2.1 Header & Navigation

**Top Header:**
- Hospital logo and name
- Real-time clock
- Notifications bell (order alerts, system notifications)
- Language switcher (AR/EN)
- User dropdown:
  - Profile
  - Settings
  - Switch role (if applicable)
  - Logout

**Sidebar Navigation:**
- Dashboard (Home)
- Orders
  - Active Orders
  - Order History
  - Calendar View
- Teams
  - Team Overview
  - Team Members
  - Vehicles
  - Schedules
- Services
  - Service Catalog
  - Availability
  - Pricing
- Payments
  - Revenue
  - Settlements
  - Invoices
- Reviews & Ratings
- Reports & Analytics
- Settings
- Help & Support

#### 4.2.2 Dashboard Overview

**Key Metrics (Top Cards):**
1. **Orders Today**
   - Count with comparison to yesterday
   - Breakdown by status
   - Color: Blue

2. **Active Orders**
   - Currently in progress
   - Dispatched/En Route/Arrived counts
   - Color: Orange

3. **Revenue Today**
   - EGP amount
   - Comparison to yesterday
   - Color: Green

4. **Available Teams**
   - Teams ready for dispatch
   - Total teams count
   - Color: Purple

5. **Average Response Time**
   - Today's average
   - Trend indicator
   - Color: Teal

6. **Customer Rating**
   - Current rating (stars)
   - Recent reviews count
   - Color: Yellow

**Active Orders Board:**
- Kanban-style board with columns:
  - New Orders (pending acceptance)
  - Accepted (team being assigned)
  - Dispatched
  - En Route
  - Arrived
  - In Progress
  - Completed
- Drag-and-drop functionality
- Order cards showing:
  - Order ID
  - User name
  - Service address
  - Services
  - Time elapsed
  - Assigned team (if any)
  - Quick actions
- Auto-refresh every 10 seconds
- Sound alerts for new orders

**Team Status Overview:**
- Real-time team availability
- Map view showing team locations
- Team status indicators:
  - Available (green)
  - Dispatched (blue)
  - Busy (orange)
  - Offline (gray)
- Filter by status
- Click team for details

**Charts & Analytics:**
1. **Orders Trend (Line Chart)**
   - Last 7 days
   - Completed vs Total
   - Target line

2. **Response Time Trend (Area Chart)**
   - Last 7 days
   - Average response time
   - Target threshold

3. **Service Distribution (Donut Chart)**
   - Orders by service category
   - Interactive segments

4. **Peak Hours Analysis (Bar Chart)**
   - Orders by hour of day
   - Helps with team scheduling

**Recent Activity:**
- Order updates
- Team dispatches
- Payments received
- Reviews received
- System notifications

**Quick Actions:**
- View all active orders
- Add new team
- Update availability
- View pending reviews
- Check settlement status

### 4.3 Order Management

#### 4.3.1 Active Orders View

**New Order Alerts:**
- Desktop notification
- Sound alert
- Flash notification banner
- Order details preview
- Accept/Reject buttons
- Auto-reject after 2 minutes if not responded

**Order List (Filterable Tabs):**
- All Active
- Pending Acceptance
- Team Assignment
- Dispatched
- En Route
- Arrived
- In Progress

**Order Cards:**
- Order ID and time
- User information
- Service address with map preview
- Services list
- Total amount (EGP)
- Special instructions (if any)
- Assigned team (if any)
- Status
- Actions:
  - View full details
  - Assign team
  - Contact user
  - Update status
  - Navigate (open in maps)

**Bulk Actions:**
- Filter by criteria
- Export selected
- Assign teams

#### 4.3.2 Order Details View

**Order Summary:**
- Order ID
- Created time
- Status timeline
- Estimated completion
- User details:
  - Name
  - Phone (click to call)
  - Blood type
  - Medical conditions
  - Allergies

**Service Location:**
- Full address
- Person name and contact
- Landmark
- Map with:
  - User location marker
  - Hospital location marker
  - Team location (if dispatched)
  - Route (if active)
  - Distance and ETA

**Services Requested:**
- Detailed service list
- Equipment requirements
- Special preparations needed
- Estimated duration
- Pricing breakdown

**Team Assignment:**
- Available teams dropdown
- Team details preview:
  - Members
  - Vehicle
  - Current location
  - Estimated arrival
- Assign button
- Auto-assignment option (nearest available)

**Live Tracking (for active orders):**
- Real-time map
- Team GPS location (updates every 10 seconds)
- Route visualization
- ETA calculation
- Distance remaining
- Team speed
- Status updates

**Communication:**
- Call user button
- Send SMS to user
- Internal notes for team
- Chat with team (if equipped)

**Status Management:**
- Current status indicator
- Manual status update:
  - Accept Order
  - Team Dispatched
  - Team En Route
  - Team Arrived
  - Service Started
  - Service Completed
  - Payment Received
- Status history log

**Payment Information:**
- Amount breakdown
- Payment method
- Payment status
- Collection confirmation (for cash)
- Receipt generation

**Actions:**
- Complete order
- Report issue
- Extend service time
- Request additional services
- Cancel order (with reason)
- Contact support

#### 4.3.3 Order History

**Search & Filter:**
- Date range selector
- Search by order ID, user
- Filter by:
  - Status (Completed, Cancelled)
  - Service category
  - Team
  - Payment status
  - Rating received

**Order List Table:**
- Order ID
- Date/Time
- User
- Services
- Team
- Total (EGP)
- Duration
- Rating
- Status
- Actions (View, Invoice, Review)

**Order Analytics:**
- Total orders (all time)
- Completion rate
- Average order value
- Service popularity
- Peak periods

**Export:**
- CSV/Excel export
- Custom date range
- Filtered results
- Scheduled reports

#### 4.3.4 Calendar View

**Monthly Calendar:**
- Orders displayed as events
- Color-coded by status
- Day view with time slots
- Order count per day
- Click day for details
- Scheduled appointments (if applicable)

**Agenda View:**
- List of upcoming orders
- Scheduled team assignments
- Capacity planning

### 4.4 Team Management

#### 4.4.1 Team Overview

**Team Dashboard:**
- Total teams count
- Available teams
- Active teams
- Offline teams
- Team utilization rate

**Real-time Team Map:**
- All teams plotted on map
- Color-coded by status
- Click for team details
- Filter by status
- Refresh every 10 seconds

**Team List:**
- Team ID/Name
- Team leader
- Members count
- Vehicle info
- Current status
- Current location (if active)
- Today's orders
- Rating
- Actions (View, Edit, Dispatch, Schedule)

#### 4.4.2 Team Details

**Team Information:**
- Team ID/Name
- Status
- Base location
- Shift timing
- Contact information

**Team Members:**
- Members list with:
  - Photo
  - Name
  - Role (Doctor, Nurse, Paramedic, Driver, Technician)
  - Phone
  - Email
  - Certifications
  - Status (On duty, Off duty, On leave)
  - Actions (Edit, Remove, View Schedule)
- Add member button

**Vehicle Details:**
- Vehicle type
- Make/Model
- License plate
- Year
- Color
- Equipment list:
  - Medical equipment
  - Diagnostic devices
  - Medications
  - Supplies
- Maintenance schedule
- Last maintenance date
- Insurance details
- Photos

**Performance Metrics:**
- Orders completed
- Completion rate
- Average response time
- Average arrival time
- Customer rating
- Performance trend
- Feedback summary

**Current Assignment:**
- Active order details (if any)
- Order location
- User information
- ETA
- Live tracking link

**Schedule:**
- Current shift
- Upcoming shifts
- Weekly schedule
- Availability calendar
- Leave/vacation tracking

**Actions:**
- Edit team details
- Add/Remove members
- Update vehicle info
- Change status
- Assign to order
- View full history
- Schedule shift
- Send notification

#### 4.4.3 Team Member Management

**Members Directory:**
- All team members list
- Photo gallery view
- Contact information
- Role/Specialization
- Team assignment
- Status
- Actions (View, Edit, Assign)

**Add New Member:**
- Personal information
- Contact details
- Role
- Certifications
- Upload documents:
  - Medical license
  - Certifications
  - ID
  - Photo
- Team assignment
- Shift preference

**Member Profile:**
- Personal details
- Professional information
- Certifications
- Performance metrics
- Order history
- Schedule
- Documents
- Actions (Edit, Deactivate)

#### 4.4.4 Vehicle Management

**Vehicle Fleet:**
- All vehicles list
- Vehicle type
- License plate
- Status (Active, Maintenance, Inactive)
- Assigned team
- Maintenance due
- Actions (View, Edit, Schedule Maintenance)

**Add New Vehicle:**
- Vehicle details
- Equipment list
- Insurance information
- Maintenance schedule
- Upload documents
- Photos

**Vehicle Profile:**
- Complete details
- Equipment inventory
- Maintenance history
- Inspection records
- Insurance tracking
- Usage statistics
- Fuel/Service logs

**Maintenance Tracking:**
- Scheduled maintenance
- Service history
- Inspection reports
- Parts replacement
- Cost tracking
- Reminders/Alerts

#### 4.4.5 Team Scheduling

**Schedule Builder:**
- Drag-and-drop shift assignment
- Team calendar view
- Member availability
- Shift templates
- Conflict detection
- Coverage analysis

**Shift Management:**
- Create shifts (time, team, members)
- Recurring shifts
- Shift swap requests
- Overtime tracking
- Break management

**Leave Management:**
- Leave requests from members
- Approve/Reject leaves
- Leave balance tracking
- Coverage planning

**Capacity Planning:**
- Demand forecasting
- Team availability vs demand
- Recommendations for optimal staffing

### 4.5 Services Management

#### 4.5.1 Service Catalog

**Available Services:**
- All services offered by hospital
- Service details:
  - Name (AR/EN)
  - Description
  - Category
  - Base price
  - Hospital's price
  - Equipment required
  - Team requirements
  - Estimated duration
  - Availability status

**Service Configuration:**
- Enable/Disable services
- Set pricing
- Define requirements
- Set availability hours
- Configure capacity

**Service Performance:**
- Orders per service
- Revenue per service
- Completion rate
- Average duration
- Customer satisfaction

#### 4.5.2 Service Availability

**Real-time Availability:**
- Service-wise availability toggle
- Capacity management
- Equipment availability
- Team capability match
- Time-based availability

**Availability Schedule:**
- 24/7 services
- Scheduled services
- Peak hour management
- Emergency override

**Capacity Management:**
- Current load
- Maximum capacity
- Queue management
- Automatic throttling

### 4.6 Payments & Finance

#### 4.6.1 Revenue Dashboard

**Financial Overview:**
- Today's revenue (EGP)
- This week's revenue
- This month's revenue
- Revenue trend chart
- Payment method breakdown
- Pending collections (cash orders)

**Revenue Analytics:**
- Revenue by service category
- Revenue by team
- Peak revenue hours
- Payment success rate
- Collection efficiency

**Charts:**
1. Daily Revenue (Bar chart)
2. Service Revenue (Pie chart)
3. Payment Methods (Donut chart)
4. Revenue Trend (Line chart)

#### 4.6.2 Transaction History

**Transaction List:**
- Transaction ID
- Date/Time
- Order ID
- User
- Services
- Amount (EGP)
- MySOS Commission
- Net Amount
- Payment Method
- Status
- Actions (View, Invoice)

**Filter Options:**
- Date range
- Payment method
- Status
- Amount range

**Export:**
- CSV/Excel
- PDF invoices
- Accounting software integration

#### 4.6.3 Settlements

**Settlement Dashboard:**
- Pending settlement amount
- Next settlement date
- Settlement history
- Outstanding balance

**Settlement Details:**
- Settlement period
- Total revenue
- Total orders
- Commission deducted
- Adjustments (refunds, penalties)
- Net payout
- Tax information
- Bank details

**Settlement History:**
- Past settlements
- Payment dates
- Amounts
- Invoices
- Bank references
- Download statements

**Actions:**
- View settlement breakdown
- Download invoice
- Download bank statement
- Dispute settlement
- Update bank details

#### 4.6.4 Invoicing

**Invoice Generation:**
- Auto-generated invoices for orders
- Bulk invoice download
- Custom date range
- Filter by criteria

**Invoice Details:**
- Hospital information
- Customer information
- Order details
- Service breakdown
- Subtotal
- Service fee
- Total
- Payment information
- Invoice number
- Date issued

**Invoice Management:**
- View all invoices
- Search invoices
- Email to customer
- Download PDF
- Print
- Mark as paid/unpaid

### 4.7 Reviews & Ratings

#### 4.7.1 Reviews Dashboard

**Rating Overview:**
- Overall hospital rating
- Total reviews
- Rating trend (chart)
- Recent rating (last 30 days)
- Rating distribution (5-star breakdown)

**Aspect Ratings:**
- Punctuality
- Professionalism
- Communication
- Service Quality
- Overall average

**Review Statistics:**
- Total reviews
- Reviews this month
- Response rate
- Average response time
- Positive reviews (4-5 stars)
- Critical reviews (1-2 stars)

#### 4.7.2 Review Management

**Review List:**
- All reviews with filters
- Order ID
- User (anonymous option)
- Rating (stars)
- Comment
- Aspect ratings
- Date
- Responded status
- Actions (View, Respond, Flag)

**Filter Options:**
- Date range
- Rating (1-5 stars)
- Service category
- Team
- Responded/Not responded
- Flagged reviews

**Review Details:**
- Full review text
- Aspect ratings breakdown
- Order details
- Team details
- Customer information
- Review date
- Response (if any)
- Response date

**Response Management:**
- Respond to reviews
- Thank positive reviews
- Address concerns in negative reviews
- Escalate issues
- Track response metrics

**Actions:**
- Respond to review
- Flag inappropriate review
- Share positive reviews
- Export reviews

#### 4.7.3 Review Analytics

**Trend Analysis:**
- Rating over time
- Reviews volume
- Sentiment analysis
- Common keywords

**Team Performance:**
- Rating by team
- Best performing teams
- Areas of improvement

**Service Quality:**
- Rating by service
- Quality improvement areas
- Customer feedback themes

### 4.8 Reports & Analytics

#### 4.8.1 Performance Reports

**Operational Metrics:**
- Total orders
- Completion rate
- Cancellation rate
- Average response time
- Average service duration
- Team utilization
- Customer satisfaction

**Quality Metrics:**
- First-time resolution rate
- Service quality score
- Complaint rate
- Review rating trend
- Service standard compliance

**Efficiency Metrics:**
- Orders per team
- Revenue per team
- Cost per order
- Resource utilization
- Idle time analysis

#### 4.8.2 Financial Reports

**Revenue Reports:**
- Revenue summary
- Revenue by service
- Revenue by team
- Revenue by time period
- Revenue forecast

**Profitability Analysis:**
- Gross revenue
- Commission paid
- Operating costs
- Net profit
- Profit margin

**Payment Reports:**
- Payment method usage
- Collection efficiency
- Outstanding payments
- Refund analysis

#### 4.8.3 Custom Reports

**Report Builder:**
- Select metrics
- Choose dimensions
- Apply filters
- Select visualization
- Configure layout
- Save template

**Scheduled Reports:**
- Daily summary
- Weekly performance
- Monthly financial
- Custom schedules
- Email delivery
- Multiple recipients

**Export Options:**
- PDF
- Excel
- CSV
- Google Sheets integration

### 4.9 Settings

#### 4.9.1 Hospital Profile

**Basic Information:**
- Hospital name (AR/EN)
- Logo
- Cover image
- Hospital type
- Description (AR/EN)
- License number
- Accreditation

**Contact Information:**
- Primary phone
- Emergency phone
- Email
- Website
- Address (AR/EN)
- Map location
- Operating hours

**Documents:**
- Hospital license
- Accreditation certificates
- Insurance documents
- Upload/Update/Download

#### 4.9.2 Service Configuration

**Service Settings:**
- Enable/Disable services
- Service pricing
- Equipment assignments
- Team requirements
- Availability rules

**Pricing Management:**
- Base prices
- Dynamic pricing
- Promotional pricing
- Bulk discounts

#### 4.9.3 User Management

**Hospital Users:**
- User list
- Username
- Email
- Role
- Status
- Last login
- Actions (Edit, Deactivate)

**Add New User:**
- Personal information
- Role assignment
- Permissions
- Send credentials

**Role Configuration:**
- Define roles
- Assign permissions
- Access control

#### 4.9.4 Notification Preferences

**Alert Settings:**
- New order alerts (Sound, Desktop, Mobile)
- Order status updates
- Payment notifications
- Review notifications
- System alerts

**Email Notifications:**
- Daily summary
- Weekly reports
- Settlement notifications
- Important updates

**SMS Notifications:**
- Critical alerts
- Emergency notifications

#### 4.9.5 Integration Settings

**API Access:**
- API keys
- Webhook URLs
- Integration status
- Documentation

**Third-party Integrations:**
- Accounting software
- CRM systems
- Communication tools
- Analytics platforms

### 4.10 Help & Support

#### 4.10.1 Help Center

**Knowledge Base:**
- Getting started guide
- Feature tutorials
- FAQs
- Video guides
- Best practices
- Troubleshooting

**Search Functionality:**
- Search articles
- Filter by category
- Popular articles
- Recently updated

#### 4.10.2 Support Tickets

**Create Ticket:**
- Subject
- Category
- Priority
- Description
- Attachments
- Related order (if any)

**Ticket Management:**
- Open tickets list
- Ticket status
- Conversation thread
- Resolution tracking

**Actions:**
- Reply to ticket
- Add attachments
- Escalate
- Close ticket

#### 4.10.3 Contact Support

**Support Channels:**
- Email support
- Phone support (hotline)
- Live chat
- WhatsApp support
- Support hours

**Emergency Contact:**
- 24/7 emergency support
- Technical support
- Account issues

---

## 5. Backend API Specifications

### 5.1 Admin API Endpoints

#### 5.1.1 Admin Authentication

**POST** `/admin/auth/login`
```typescript
Request:
{
  username: string;
  password: string;
  twoFactorCode?: string;
}

Response:
{
  success: boolean;
  data: {
    adminId: string;
    accessToken: string;
    refreshToken: string;
    admin: AdminProfile;
    permissions: string[];
  };
}
```

**POST** `/admin/auth/logout`
**POST** `/admin/auth/refresh-token`
**POST** `/admin/auth/change-password`

#### 5.1.2 Dashboard APIs

**GET** `/admin/dashboard/stats`
```typescript
Response:
{
  success: boolean;
  data: {
    ordersToday: number;
    activeOrders: number;
    revenueToday: number;
    activeUsers: number;
    hospitalUtilization: number;
    avgResponseTime: number;
  };
}
```

**GET** `/admin/dashboard/orders-realtime`
**GET** `/admin/dashboard/charts/orders-trend`
**GET** `/admin/dashboard/charts/revenue-analysis`
**GET** `/admin/dashboard/activity-feed`

#### 5.1.3 Order Management APIs

**GET** `/admin/orders`
```typescript
Query Parameters:
- status?: string
- dateFrom?: string
- dateTo?: string
- hospitalId?: string
- userId?: string
- serviceCategory?: string
- paymentStatus?: string
- limit?: number
- offset?: number

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

**GET** `/admin/orders/:orderId`
**PUT** `/admin/orders/:orderId`
**PUT** `/admin/orders/:orderId/cancel`
**POST** `/admin/orders/:orderId/refund`

#### 5.1.4 User Management APIs

**GET** `/admin/users`
**GET** `/admin/users/:userId`
**PUT** `/admin/users/:userId`
**PUT** `/admin/users/:userId/suspend`
**DELETE** `/admin/users/:userId`
**POST** `/admin/users/:userId/reset-password`
**GET** `/admin/users/:userId/activity-log`

#### 5.1.5 Hospital Management APIs

**GET** `/admin/hospitals`
**GET** `/admin/hospitals/:hospitalId`
**POST** `/admin/hospitals`
**PUT** `/admin/hospitals/:hospitalId`
**PUT** `/admin/hospitals/:hospitalId/approve`
**PUT** `/admin/hospitals/:hospitalId/suspend`
**DELETE** `/admin/hospitals/:hospitalId`
**GET** `/admin/hospitals/:hospitalId/teams`
**GET** `/admin/hospitals/:hospitalId/orders`
**GET** `/admin/hospitals/:hospitalId/revenue`

#### 5.1.6 Service Management APIs

**GET** `/admin/services`
**POST** `/admin/services`
**PUT** `/admin/services/:serviceId`
**DELETE** `/admin/services/:serviceId`
**GET** `/admin/services/:serviceId/analytics`

#### 5.1.7 Payment & Finance APIs

**GET** `/admin/payments/transactions`
**GET** `/admin/payments/settlements`
**POST** `/admin/payments/settlements/:settlementId/process`
**GET** `/admin/payments/refunds`
**POST** `/admin/payments/refunds/:refundId/approve`
**GET** `/admin/finance/reports/revenue`
**GET** `/admin/finance/reports/commission`

#### 5.1.8 Analytics & Reports APIs

**GET** `/admin/analytics/overview`
**GET** `/admin/analytics/orders`
**GET** `/admin/analytics/users`
**GET** `/admin/analytics/hospitals`
**GET** `/admin/reports/generate`
**POST** `/admin/reports/schedule`

#### 5.1.9 Notification APIs

**GET** `/admin/notifications`
**POST** `/admin/notifications/send`
**POST** `/admin/notifications/broadcast`
**GET** `/admin/notifications/templates`
**POST** `/admin/notifications/templates`

#### 5.1.10 Settings APIs

**GET** `/admin/settings`
**PUT** `/admin/settings`
**GET** `/admin/settings/commission-rates`
**PUT** `/admin/settings/commission-rates`
**GET** `/admin/admins`
**POST** `/admin/admins`
**PUT** `/admin/admins/:adminId`
**DELETE** `/admin/admins/:adminId`

### 5.2 Hospital API Endpoints

#### 5.2.1 Hospital Authentication

**POST** `/hospital/auth/login`
```typescript
Request:
{
  email: string;
  password: string;
  twoFactorCode?: string;
}

Response:
{
  success: boolean;
  data: {
    userId: string;
    hospitalId: string;
    accessToken: string;
    refreshToken: string;
    user: HospitalUser;
    hospital: Hospital;
    permissions: string[];
  };
}
```

**POST** `/hospital/auth/logout`
**POST** `/hospital/auth/refresh-token`
**POST** `/hospital/auth/change-password`

#### 5.2.2 Dashboard APIs

**GET** `/hospital/dashboard/stats`
```typescript
Response:
{
  success: boolean;
  data: {
    ordersToday: number;
    activeOrders: number;
    revenueToday: number;
    availableTeams: number;
    avgResponseTime: number;
    customerRating: number;
  };
}
```

**GET** `/hospital/dashboard/active-orders`
**GET** `/hospital/dashboard/team-status`
**GET** `/hospital/dashboard/charts`

#### 5.2.3 Order Management APIs

**GET** `/hospital/orders`
```typescript
Query Parameters:
- status?: string
- dateFrom?: string
- dateTo?: string
- teamId?: string
- limit?: number
- offset?: number

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

**GET** `/hospital/orders/:orderId`
**PUT** `/hospital/orders/:orderId/accept`
**PUT** `/hospital/orders/:orderId/reject`
**PUT** `/hospital/orders/:orderId/assign-team`
**PUT** `/hospital/orders/:orderId/update-status`
**POST** `/hospital/orders/:orderId/complete`

#### 5.2.4 Team Management APIs

**GET** `/hospital/teams`
**GET** `/hospital/teams/:teamId`
**POST** `/hospital/teams`
**PUT** `/hospital/teams/:teamId`
**DELETE** `/hospital/teams/:teamId`
**PUT** `/hospital/teams/:teamId/status`
**GET** `/hospital/teams/:teamId/location`
**GET** `/hospital/teams/:teamId/schedule`
**PUT** `/hospital/teams/:teamId/schedule`

#### 5.2.5 Team Member APIs

**GET** `/hospital/team-members`
**GET** `/hospital/team-members/:memberId`
**POST** `/hospital/team-members`
**PUT** `/hospital/team-members/:memberId`
**DELETE** `/hospital/team-members/:memberId`
**POST** `/hospital/team-members/:memberId/upload-documents`

#### 5.2.6 Vehicle APIs

**GET** `/hospital/vehicles`
**GET** `/hospital/vehicles/:vehicleId`
**POST** `/hospital/vehicles`
**PUT** `/hospital/vehicles/:vehicleId`
**DELETE** `/hospital/vehicles/:vehicleId`
**POST** `/hospital/vehicles/:vehicleId/maintenance`

#### 5.2.7 Service APIs

**GET** `/hospital/services`
**PUT** `/hospital/services/:serviceId`
**PUT** `/hospital/services/:serviceId/availability`
**PUT** `/hospital/services/:serviceId/pricing`

#### 5.2.8 Payment & Finance APIs

**GET** `/hospital/payments/revenue`
**GET** `/hospital/payments/transactions`
**GET** `/hospital/payments/settlements`
**GET** `/hospital/payments/settlements/:settlementId`
**GET** `/hospital/invoices`
**GET** `/hospital/invoices/:invoiceId`

#### 5.2.9 Review APIs

**GET** `/hospital/reviews`
**GET** `/hospital/reviews/:reviewId`
**POST** `/hospital/reviews/:reviewId/respond`
**PUT** `/hospital/reviews/:reviewId/flag`

#### 5.2.10 Report APIs

**GET** `/hospital/reports/performance`
**GET** `/hospital/reports/financial`
**POST** `/hospital/reports/generate`
**POST** `/hospital/reports/schedule`

#### 5.2.11 Settings APIs

**GET** `/hospital/profile`
**PUT** `/hospital/profile`
**POST** `/hospital/profile/upload-logo`
**GET** `/hospital/users`
**POST** `/hospital/users`
**PUT** `/hospital/users/:userId`
**DELETE** `/hospital/users/:userId`

#### 5.2.12 Support APIs

**GET** `/hospital/support/tickets`
**POST** `/hospital/support/tickets`
**GET** `/hospital/support/tickets/:ticketId`
**POST** `/hospital/support/tickets/:ticketId/reply`

### 5.3 WebSocket Endpoints

#### 5.3.1 Admin WebSocket

**Connection:** `/admin/ws`

**Events:**
- `order:new` - New order created
- `order:update` - Order status changed
- `order:cancelled` - Order cancelled
- `payment:received` - Payment processed
- `hospital:registered` - New hospital application
- `support:ticket` - New support ticket
- `system:alert` - System alerts

#### 5.3.2 Hospital WebSocket

**Connection:** `/hospital/ws/:hospitalId`

**Events:**
- `order:new` - New order for hospital
- `order:update` - Order status changed
- `team:location` - Team location update
- `review:new` - New review received
- `settlement:processed` - Settlement completed
- `notification:new` - New notification

---

## 6. Database Schema

### 6.1 Admin-Specific Tables

#### 6.1.1 Admins Table
```typescript
interface Admin {
  adminId: string;
  username: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: 'super_admin' | 'support_manager' | 'finance_controller' | 'analyst' | 'tech_support';
  permissions: string[];
  status: 'active' | 'inactive';
  lastLogin: string;
  twoFactorEnabled: boolean;
  twoFactorSecret?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### 6.1.2 Admin Activity Log
```typescript
interface AdminActivityLog {
  logId: string;
  adminId: string;
  action: string;
  resource: string;
  resourceId?: string;
  details: any;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
}
```

#### 6.1.3 System Settings
```typescript
interface SystemSettings {
  settingId: string;
  category: string;
  key: string;
  value: any;
  description: string;
  updatedBy: string;
  updatedAt: string;
}
```

#### 6.1.4 Support Tickets
```typescript
interface SupportTicket {
  ticketId: string;
  ticketNumber: string;
  userId?: string;
  hospitalId?: string;
  subject: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'waiting' | 'resolved' | 'closed';
  description: string;
  assignedTo?: string;
  relatedOrderId?: string;
  attachments: string[];
  conversation: Message[];
  resolvedAt?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### 6.1.5 Disputes
```typescript
interface Dispute {
  disputeId: string;
  orderId: string;
  userId: string;
  hospitalId: string;
  reason: string;
  description: string;
  userEvidence: string[];
  hospitalResponse?: string;
  hospitalEvidence?: string[];
  amount: number;
  status: 'open' | 'under_review' | 'resolved' | 'closed';
  resolution?: string;
  resolvedBy?: string;
  resolvedAt?: string;
  createdAt: string;
  updatedAt: string;
}
```

### 6.2 Hospital-Specific Tables

#### 6.2.1 Hospital Users
```typescript
interface HospitalUser {
  userId: string;
  hospitalId: string;
  username: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'dispatcher' | 'team_manager' | 'finance_manager' | 'qa_officer';
  permissions: string[];
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}
```

#### 6.2.2 Team Schedules
```typescript
interface TeamSchedule {
  scheduleId: string;
  teamId: string;
  date: string;
  startTime: string;
  endTime: string;
  members: string[];
  status: 'scheduled' | 'active' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### 6.2.3 Vehicles
```typescript
interface Vehicle {
  vehicleId: string;
  hospitalId: string;
  type: 'ambulance' | 'car' | 'motorcycle';
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
  equipment: string[];
  status: 'active' | 'maintenance' | 'inactive';
  assignedTeamId?: string;
  insurance: {
    provider: string;
    policyNumber: string;
    expiryDate: string;
  };
  maintenance: MaintenanceRecord[];
  photos: string[];
  createdAt: string;
  updatedAt: string;
}
```

#### 6.2.4 Maintenance Records
```typescript
interface MaintenanceRecord {
  recordId: string;
  vehicleId: string;
  type: 'routine' | 'repair' | 'inspection';
  description: string;
  cost: number;
  performedBy: string;
  scheduledDate: string;
  completedDate?: string;
  nextDueDate?: string;
  notes?: string;
  attachments: string[];
  createdAt: string;
}
```

#### 6.2.5 Hospital Documents
```typescript
interface HospitalDocument {
  documentId: string;
  hospitalId: string;
  type: 'license' | 'accreditation' | 'insurance' | 'certification' | 'other';
  name: string;
  fileUrl: string;
  issueDate?: string;
  expiryDate?: string;
  status: 'valid' | 'expired' | 'pending_renewal';
  uploadedBy: string;
  uploadedAt: string;
}
```

#### 6.2.6 Settlements
```typescript
interface Settlement {
  settlementId: string;
  hospitalId: string;
  period: {
    startDate: string;
    endDate: string;
  };
  totalRevenue: number;
  totalOrders: number;
  commissionRate: number;
  commissionAmount: number;
  refunds: number;
  adjustments: number;
  netAmount: number;
  status: 'pending' | 'processing' | 'paid' | 'disputed';
  paymentMethod?: string;
  paymentReference?: string;
  paidAt?: string;
  invoiceUrl?: string;
  createdAt: string;
  updatedAt: string;
}
```

### 6.3 Shared Tables (Extended)

#### 6.3.1 Orders (Extended)
```typescript
// Add to existing Order interface:
interface Order {
  // ... existing fields
  assignedBy?: string; // admin or hospital user who assigned team
  assignedAt?: string;
  acceptedBy?: string; // hospital user who accepted
  acceptedAt?: string;
  rejectedBy?: string;
  rejectionReason?: string;
  rejectedAt?: string;
  disputeId?: string;
  adminNotes?: string;
  hospitalNotes?: string;
}
```

#### 6.3.2 Hospitals (Extended)
```typescript
// Add to existing Hospital interface:
interface Hospital {
  // ... existing fields
  status: 'pending' | 'active' | 'suspended' | 'rejected';
  approvedBy?: string; // admin who approved
  approvedAt?: string;
  suspendedBy?: string;
  suspensionReason?: string;
  suspendedAt?: string;
  rejectionReason?: string;
  commissionRate: number; // percentage
  bankDetails?: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    iban?: string;
    swiftCode?: string;
  };
  settings: {
    autoAcceptOrders: boolean;
    maxActiveOrders: number;
    serviceRadius: number; // in kilometers
    notificationPreferences: any;
  };
}
```

---

## 7. Security & Access Control

### 7.1 Admin Dashboard Security

#### 7.1.1 Authentication
- Strong password requirements (min 12 chars, uppercase, lowercase, numbers, symbols)
- Two-factor authentication (TOTP)
- Session timeout: 30 minutes inactivity
- Concurrent session limits: 2 per admin
- IP whitelisting (optional)
- Login attempt throttling (max 5 attempts, 15 min lockout)

#### 7.1.2 Authorization
- Role-Based Access Control (RBAC)
- Permission matrix by role
- Resource-level permissions
- Action-level permissions
- Audit trail for all actions

#### 7.1.3 Data Security
- All data encrypted at rest (AES-256)
- All data encrypted in transit (TLS 1.3)
- PII data masking
- Secure data export
- Data retention policies

#### 7.1.4 API Security
- HTTPS only
- JWT token authentication
- Token expiry: 1 hour (access), 7 days (refresh)
- Rate limiting per endpoint
- Request validation
- SQL injection prevention
- XSS protection
- CSRF protection

### 7.2 Hospital Dashboard Security

#### 7.2.1 Authentication
- Password requirements (min 10 chars)
- Optional two-factor authentication
- Session timeout: 60 minutes
- Device fingerprinting
- Login notifications

#### 7.2.2 Authorization
- Role-based access within hospital
- Hospital data isolation
- Multi-tenant security
- Resource ownership validation

#### 7.2.3 Data Access
- Hospital can only access own data
- Team members can only see assigned orders
- Sensitive user data masked
- Audit logging

### 7.3 Permission Matrix

#### 7.3.1 Admin Roles & Permissions

| Permission | Super Admin | Support Manager | Finance Controller | Analyst | Tech Support |
|------------|-------------|-----------------|-------------------|---------|--------------|
| View Dashboard | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manage Orders | ✓ | ✓ | ✗ | ✗ | ✗ |
| Manage Users | ✓ | ✓ | ✗ | ✗ | ✓ |
| Manage Hospitals | ✓ | ✗ | ✗ | ✗ | ✗ |
| Manage Services | ✓ | ✗ | ✗ | ✗ | ✗ |
| View Payments | ✓ | ✗ | ✓ | ✓ | ✗ |
| Process Refunds | ✓ | ✓ | ✓ | ✗ | ✗ |
| View Reports | ✓ | ✓ | ✓ | ✓ | ✗ |
| Export Data | ✓ | ✓ | ✓ | ✓ | ✗ |
| Manage Admins | ✓ | ✗ | ✗ | ✗ | ✗ |
| System Settings | ✓ | ✗ | ✗ | ✗ | ✗ |
| View Logs | ✓ | ✗ | ✗ | ✗ | ✓ |
| Resolve Disputes | ✓ | ✓ | ✗ | ✗ | ✗ |
| Send Notifications | ✓ | ✓ | ✗ | ✗ | ✗ |

#### 7.3.2 Hospital Roles & Permissions

| Permission | Hospital Admin | Dispatcher | Team Manager | Finance Manager | QA Officer |
|------------|---------------|------------|--------------|-----------------|------------|
| View Dashboard | ✓ | ✓ | ✓ | ✓ | ✓ |
| Accept Orders | ✓ | ✓ | ✗ | ✗ | ✗ |
| Assign Teams | ✓ | ✓ | ✗ | ✗ | ✗ |
| Manage Teams | ✓ | ✗ | ✓ | ✗ | ✗ |
| Manage Members | ✓ | ✗ | ✓ | ✗ | ✗ |
| Manage Vehicles | ✓ | ✗ | ✓ | ✗ | ✗ |
| Manage Services | ✓ | ✗ | ✗ | ✗ | ✗ |
| View Payments | ✓ | ✗ | ✗ | ✓ | ✗ |
| View Reports | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manage Reviews | ✓ | ✗ | ✗ | ✗ | ✓ |
| Edit Profile | ✓ | ✗ | ✗ | ✗ | ✗ |
| Manage Users | ✓ | ✗ | ✗ | ✗ | ✗ |
| Export Data | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## 8. Reports & Analytics

### 8.1 Admin Dashboard Reports

#### 8.1.1 Executive Dashboard
- KPI scorecard
- Business health metrics
- Growth indicators
- Market insights
- Trend analysis

#### 8.1.2 Operational Reports
- **Order Analytics:**
  - Volume trends
  - Status distribution
  - Completion rates
  - Cancellation analysis
  - Peak hours/days
  - Geographic distribution
  
- **User Analytics:**
  - Acquisition trends
  - Retention metrics
  - Engagement levels
  - Lifetime value
  - Segmentation
  - Churn analysis

- **Hospital Analytics:**
  - Performance ranking
  - Utilization rates
  - Quality metrics
  - Coverage analysis
  - Capacity planning

- **Team Analytics:**
  - Productivity metrics
  - Response times
  - Utilization
  - Performance ratings
  - Efficiency analysis

#### 8.1.3 Financial Reports
- Revenue summary
- Commission breakdown
- Settlement tracking
- Refund analysis
- Payment method analysis
- Profitability metrics

#### 8.1.4 Quality Reports
- Customer satisfaction
- Service quality metrics
- Complaint analysis
- Review analysis
- SLA compliance

### 8.2 Hospital Dashboard Reports

#### 8.2.1 Performance Reports
- Order metrics
- Response times
- Completion rates
- Team performance
- Service quality
- Customer satisfaction

#### 8.2.2 Financial Reports
- Revenue analysis
- Service revenue breakdown
- Payment collection
- Settlement reports
- Profitability

#### 8.2.3 Operational Reports
- Team utilization
- Vehicle usage
- Service demand
- Capacity analysis
- Peak periods

#### 8.2.4 Quality Reports
- Customer ratings
- Review analysis
- Complaint trends
- Service improvement areas

### 8.3 Report Features

**Export Formats:**
- PDF (formatted reports)
- Excel (data analysis)
- CSV (raw data)
- JSON (API integration)

**Scheduling:**
- Daily automated reports
- Weekly summaries
- Monthly executive reports
- Custom schedules
- Email delivery

**Customization:**
- Date range selection
- Filter criteria
- Metric selection
- Visualization type
- Layout configuration

---

## 9. Integration Requirements

### 9.1 Admin Dashboard Integrations

#### 9.1.1 Email Service
- Transactional emails
- Notification emails
- Report delivery
- Alert emails
- SMTP or SendGrid/AWS SES

#### 9.1.2 SMS Service
- SMS notifications
- 2FA codes
- Alert messages
- Twilio or local Egyptian providers

#### 9.1.3 Analytics
- Google Analytics
- Custom event tracking
- User behavior analysis
- Conversion tracking

#### 9.1.4 Monitoring
- Sentry (error tracking)
- Application performance monitoring
- Uptime monitoring
- Log aggregation

### 9.2 Hospital Dashboard Integrations

#### 9.2.1 Mapping Services
- Route calculation
- ETA estimation
- Geocoding
- Real-time traffic
- Mapbox or Google Maps

#### 9.2.2 Communication
- Voice calling
- SMS messaging
- Push notifications
- In-app chat

#### 9.2.3 Accounting Software (Optional)
- QuickBooks
- Xero
- Custom accounting systems
- Invoice generation

---

## 10. Testing Requirements

### 10.1 Admin Dashboard Testing

#### 10.1.1 Functional Testing
- User authentication
- Order management
- User management
- Hospital management
- Payment processing
- Report generation
- All CRUD operations

#### 10.1.2 Security Testing
- Authentication vulnerabilities
- Authorization bypass attempts
- SQL injection
- XSS attacks
- CSRF attacks
- Session management
- Data encryption

#### 10.1.3 Performance Testing
- Load testing (100 concurrent admins)
- Stress testing
- Database query optimization
- Report generation performance
- Export functionality

#### 10.1.4 Integration Testing
- API endpoints
- Third-party services
- WebSocket connections
- Email/SMS delivery
- Payment gateway

### 10.2 Hospital Dashboard Testing

#### 10.2.1 Functional Testing
- Order acceptance workflow
- Team assignment
- Live tracking
- Schedule management
- Payment tracking
- Review management

#### 10.2.2 Real-time Testing
- WebSocket connections
- Live order updates
- Team location updates
- Notification delivery

#### 10.2.3 Multi-tenancy Testing
- Data isolation
- Hospital-specific access
- Role permissions
- Resource boundaries

### 10.3 User Acceptance Testing

#### 10.3.1 Admin UAT
- Test with actual admin users
- Validate workflows
- Gather feedback
- Identify usability issues

#### 10.3.2 Hospital UAT
- Test with pilot hospitals
- Validate order flows
- Test team management
- Gather feedback

### 10.4 Test Coverage Goals
- Unit tests: 80% coverage
- Integration tests: 70% coverage
- E2E tests: Critical paths covered
- Security tests: All vulnerabilities addressed

---

## 11. Deployment & DevOps

### 11.1 Deployment Architecture

#### 11.1.1 Frontend Deployment
- **Admin Dashboard:**
  - Host: Vercel/Netlify
  - Domain: admin.mysos.eg
  - SSL certificate
  - CDN enabled
  - Environment: Production, Staging

- **Hospital Dashboard:**
  - Host: Vercel/Netlify
  - Domain: hospital.mysos.eg
  - SSL certificate
  - CDN enabled
  - Environment: Production, Staging

#### 11.1.2 Backend Deployment
- Supabase Edge Functions
- API Gateway
- Load balancing
- Auto-scaling
- Health checks

### 11.2 CI/CD Pipeline

#### 11.2.1 Continuous Integration
- Automated tests on commit
- Code quality checks
- Security scanning
- Build verification

#### 11.2.2 Continuous Deployment
- Automated deployment to staging
- Manual approval for production
- Rollback capability
- Deployment notifications

### 11.3 Monitoring & Alerting

#### 11.3.1 Application Monitoring
- Error tracking (Sentry)
- Performance monitoring
- User session tracking
- API metrics
- Database performance

#### 11.3.2 Infrastructure Monitoring
- Server health
- Database connections
- Storage usage
- Network latency
- SSL certificate expiry

#### 11.3.3 Alerts
- Error rate thresholds
- Performance degradation
- Security incidents
- Resource limits
- Downtime alerts

### 11.4 Backup & Recovery

#### 11.4.1 Backup Strategy
- Daily automated backups
- Weekly full backups
- Monthly archives
- 90-day retention
- Off-site backup storage

#### 11.4.2 Disaster Recovery
- RTO: 4 hours
- RPO: 1 hour
- Documented procedures
- Regular DR drills
- Failover testing

---

## 12. Budget & Resources

### 12.1 Development Resources

#### 12.1.1 Team Structure
**Admin Dashboard:**
- 2 Frontend Developers (React/TypeScript)
- 1 Backend Developer (Deno/Hono)
- 1 UI/UX Designer
- 1 QA Engineer

**Hospital Dashboard:**
- 2 Frontend Developers (React/TypeScript)
- 1 Backend Developer (Deno/Hono)
- 1 UI/UX Designer
- 1 QA Engineer

**Shared:**
- 1 DevOps Engineer
- 1 Product Manager
- 1 Project Manager
- 1 Security Specialist

#### 12.1.2 Timeline Estimate

**Phase 1: Admin Dashboard (10-12 weeks)**
- Week 1-2: Design & Architecture
- Week 3-5: Authentication & Core Features
- Week 6-8: Order & User Management
- Week 9-10: Reports & Analytics
- Week 11-12: Testing & Refinement

**Phase 2: Hospital Dashboard (10-12 weeks)**
- Week 1-2: Design & Architecture
- Week 3-5: Authentication & Order Management
- Week 6-8: Team & Schedule Management
- Week 9-10: Reports & Financial Features
- Week 11-12: Testing & Refinement

**Phase 3: Integration & Launch (2-4 weeks)**
- Week 1-2: Integration testing
- Week 3: UAT and bug fixes
- Week 4: Deployment & training

**Total Timeline: 22-28 weeks**

### 12.2 Infrastructure Costs (Monthly)

**IMPORTANT:** The MySOS platform uses **shared infrastructure** across all applications (Customer App, Admin Dashboard, Hospital Dashboard, and Employee App). The costs below are **included in the total shared infrastructure budget** of $500-1,500/month documented in the Customer App scope.

**For reference only (these costs are part of the shared $500-1,500/month total):**

#### 12.2.1 Dashboard-Specific Hosting (Included in shared costs)
- Admin Dashboard CDN: Included in shared Supabase/CDN costs
- Hospital Dashboard CDN: Included in shared Supabase/CDN costs
- Shared Supabase Backend: Covered in total infrastructure budget
- Shared CDN: Covered in total infrastructure budget

#### 12.2.2 Shared Third-Party Services (Included in shared costs)
- Email, SMS, Maps, Monitoring: All covered in shared infrastructure budget
- See SCOPE_OF_WORK.md Section 11.2 for complete breakdown

#### 12.2.3 MySOS Total Shared Monthly Infrastructure Cost
**$500-1,500/month** (for entire ecosystem including dashboards)

**Note:** There are NO additional monthly infrastructure costs for the dashboards beyond the shared backend costs. All applications share the same Supabase backend, third-party services, and infrastructure to minimize costs.

### 12.3 Development Cost Estimate

**Team Cost (6 months):**
- Developers (6 × 6 months): $180,000-300,000
- Designers (2 × 6 months): $60,000-100,000
- QA Engineers (2 × 6 months): $60,000-100,000
- DevOps Engineer (1 × 6 months): $40,000-60,000
- Product Manager (1 × 6 months): $50,000-80,000
- Project Manager (1 × 6 months): $40,000-60,000
- Security Specialist (1 × 3 months): $25,000-40,000

**Total Development Cost: $455,000-740,000**

---

## 13. Success Metrics

### 13.1 Admin Dashboard KPIs

#### 13.1.1 User Metrics
- Number of active admin users
- Login frequency
- Session duration
- Feature adoption rate

#### 13.1.2 Performance Metrics
- Page load time < 2 seconds
- API response time < 500ms
- Report generation time < 10 seconds
- 99.9% uptime

#### 13.1.3 Operational Metrics
- Orders processed per day
- Average order resolution time
- User support response time
- Dispute resolution time

#### 13.1.4 Business Metrics
- Platform revenue tracking accuracy
- Settlement processing time
- Refund processing time
- Hospital onboarding time

### 13.2 Hospital Dashboard KPIs

#### 13.2.1 User Metrics
- Number of active hospital users
- Login frequency
- Feature usage statistics
- User satisfaction score

#### 13.2.2 Performance Metrics
- Dashboard load time < 2 seconds
- Real-time update latency < 5 seconds
- Order acceptance time < 30 seconds
- 99.9% uptime

#### 13.2.3 Operational Metrics
- Order acceptance rate
- Team utilization rate
- Average response time
- Order completion rate

#### 13.2.4 Business Metrics
- Revenue tracking accuracy
- Payment collection rate
- Customer rating improvement
- Team efficiency improvement

### 13.3 Success Criteria

#### 13.3.1 Admin Dashboard (3 months post-launch)
- 100% admin user adoption
- < 5 minutes average order management time
- < 1 hour settlement processing time
- 95% admin user satisfaction

#### 13.3.2 Hospital Dashboard (3 months post-launch)
- 90% hospital user adoption
- < 2 minutes order acceptance time
- 95% team utilization rate
- 90% hospital user satisfaction
- 4.5+ average customer rating

---

## 14. Risk Management

### 14.1 Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Real-time sync issues | High | Medium | Implement robust WebSocket fallback, regular testing |
| Database performance | High | Medium | Query optimization, indexing, caching strategy |
| Security vulnerabilities | Critical | Low | Security audits, penetration testing, regular updates |
| Third-party API downtime | Medium | Medium | Fallback mechanisms, caching, multiple providers |
| Data migration issues | High | Low | Comprehensive testing, rollback plan, data validation |

### 14.2 Business Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Low hospital adoption | High | Medium | Training program, onboarding support, incentives |
| User resistance to change | Medium | Medium | Change management, training, phased rollout |
| Feature complexity | Medium | High | User testing, simplified workflows, documentation |
| Integration challenges | High | Medium | Early integration testing, vendor support |

### 14.3 Operational Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Insufficient support resources | Medium | Medium | Support team scaling plan, documentation |
| Data quality issues | Medium | Medium | Data validation, cleaning processes, monitoring |
| Training gaps | Medium | High | Comprehensive training program, documentation, videos |
| Workflow disruptions | High | Low | Phased rollout, parallel running, support on-site |

---

## 15. Approval & Sign-off

### 15.1 Stakeholder Approvals

| Stakeholder | Role | Approval Date | Signature |
|-------------|------|---------------|-----------|
| Product Owner | Final Authority | __________ | _________ |
| Technical Lead | Technical Feasibility | __________ | _________ |
| UX Director | Design Approval | __________ | _________ |
| Security Officer | Security Compliance | __________ | _________ |
| Finance Director | Budget Approval | __________ | _________ |
| Hospital Partner Rep | Hospital Dashboard Approval | __________ | _________ |

### 15.2 Change Control Process
- All scope changes require stakeholder approval
- Impact analysis for timeline and budget
- Documentation of all changes
- Version control for this document

### 15.3 Document Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 27, 2026 | MySOS Team | Initial dashboard scope document |

---

## Appendices

### Appendix A: Glossary
- **SLA**: Service Level Agreement
- **KPI**: Key Performance Indicator
- **RBAC**: Role-Based Access Control
- **2FA**: Two-Factor Authentication
- **UAT**: User Acceptance Testing
- **RTO**: Recovery Time Objective
- **RPO**: Recovery Point Objective

### Appendix B: References
- Main MySOS Scope of Work Document
- API Documentation (swagger.yaml)
- Security Best Practices Guide
- Hospital Onboarding Manual
- Admin User Manual

### Appendix D: API Documentation Reference

**Complete API Specification:** `/src/app/swagger.yaml`

For comprehensive API documentation including all endpoints, request/response schemas, authentication methods, and error codes, please refer to the **MySOS API Swagger Specification** (`swagger.yaml`).

The Swagger file provides:
- ✅ Complete REST API endpoint definitions for Admin and Hospital dashboards
- ✅ Request and response schemas for orders, hospitals, teams, payments, analytics
- ✅ Authentication and authorization specifications (including RBAC)
- ✅ Error code definitions and handling
- ✅ Data models and types
- ✅ Rate limiting and throttling rules
- ✅ WebSocket event specifications for real-time updates

**Note:** The Swagger specification is the single source of truth for API contracts shared across all MySOS applications (Customer App, Admin Dashboard, Hospital Dashboard, and Employee App).

### Appendix C: Contact Information
- **Project Manager**: [Name, Email, Phone]
- **Technical Lead**: [Name, Email, Phone]
- **Admin Support**: admin-support@mysos.eg
- **Hospital Support**: hospital-support@mysos.eg

---

**Document Status:** ✅ Complete & Ready for Review  
**Last Updated:** January 27, 2026  
**Next Review Date:** [To be determined after approval]

---

*This comprehensive scope of work document provides complete specifications for both the Admin Dashboard and Hospital Dashboard systems of the MySOS Emergency Medical Service Application. It serves as the definitive reference for development, deployment, and maintenance of both dashboard systems.*
