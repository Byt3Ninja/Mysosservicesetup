# MySOS Project - Terminology Standardization Guide
## Consistent Language Across All Documentation

**Document Date:** April 25, 2026  
**Version:** 1.0  
**Purpose:** Establish and enforce consistent terminology across all MySOS documentation and applications

---

## 1. Executive Summary

This document standardizes terminology used across all MySOS scope of work documents, API specifications, user interfaces, and technical documentation. Consistent terminology improves clarity, reduces confusion, and ensures all stakeholders understand system components in the same way.

**Affected Documents:**
- Customer App Scope of Work (SCOPE_OF_WORK.md)
- Admin & Hospital Dashboards Scope (SCOPE_OF_WORK_DASHBOARDS.md)
- Employee Mobile App Scope (SCOPE_OF_WORK_MOBILE_EMPLOYEE_APP.md)
- API Swagger Specification (swagger.yaml)
- System Architecture Diagram
- Alignment Review Document

---

## 2. Standardized Core Terminology

### 2.1 User Roles & Personnel

| **Standard Term** | **Use Cases** | **Avoid Using** | **Rationale** |
|-------------------|---------------|-----------------|---------------|
| **Customer** | End-user requesting emergency services | User, Client, Patient | Clear distinction from other user types |
| **Employee** | Hospital staff using mobile app (doctors, nurses, paramedics, drivers) | Team Member, Staff, Worker | Aligns with "Employee App" product name |
| **Team** | Group of employees assigned to an order | Crew, Unit, Squad | Shorter, clearer term |
| **Team Leader** | Lead employee responsible for order | Team Captain, Lead Member | Standard management term |
| **Team Member** | Individual within a team (when referring to team composition) | Employee (in team context) | Specific to team structure context |
| **Admin** | MySOS platform administrator | Administrator, System Admin | Shorter, consistent |
| **Hospital User** | Hospital staff using dashboard | Hospital Admin, Hospital Staff | Clear scope of access |
| **Dispatcher** | Hospital user assigning teams | Coordinator, Manager | Industry-standard term |

**Usage Rule:**
- Use "**Employee**" when referring to the app user or individual hospital personnel
- Use "**Team Member**" only when referring to an individual's role within a specific team composition
- Use "**Team**" when referring to the collective group

**Examples:**
- ✅ "Employee Mobile App" (product name)
- ✅ "The employee accepts the order" (app user action)
- ✅ "Team composition: 1 doctor, 1 nurse, 1 driver" (team structure)
- ✅ "The team member's role is Paramedic" (individual role in team)
- ❌ "Team Member Mobile App" (incorrect product name)

---

### 2.2 Orders & Services

| **Standard Term** | **Use Cases** | **Avoid Using** | **Rationale** |
|-------------------|---------------|-----------------|---------------|
| **Order** | Emergency service request | Request, Booking, Job | Consistent with e-commerce/service platforms |
| **Emergency Order** | Urgent medical service order | SOS Request, Emergency Call | Formal term for documentation |
| **Service** | Individual medical service (e.g., ER Doctor, BLS Ambulance) | Item, Product, Offering | Medical services industry standard |
| **Service Category** | Group of related services | Service Type, Category | Clear hierarchy |
| **Multi-Select** | Selecting multiple services | Multiple Selection | UI pattern standard |

---

### 2.3 Order Status & Workflow

| **Standard Term** | **Description** | **Avoid Using** | **Rationale** |
|-------------------|-----------------|-----------------|---------------|
| **pending** | Order created, awaiting hospital acceptance | requested, new | Database field standard |
| **confirmed** | Hospital accepted the order | accepted | Clear status progression |
| **dispatched** | Team assigned and dispatched | assigned, sent | Industry standard |
| **enroute** | Team traveling to customer location | on-the-way, in-transit | GPS/logistics standard |
| **arrived** | Team arrived at customer location | reached, at-location | Clear milestone |
| **in_progress** | Service being provided | active, ongoing | Technical field standard |
| **completed** | Service successfully finished | done, finished | Formal completion status |
| **cancelled** | Order cancelled by customer or system | canceled (spelling), aborted | Standard spelling |

---

### 2.4 Location & Geography

| **Standard Term** | **Use Cases** | **Avoid Using** | **Rationale** |
|-------------------|---------------|-----------------|---------------|
| **Address** | Customer's service location | Location, Place, Destination | Formal postal term |
| **Current Location** | Device's GPS position | My Location, Here | Descriptive clarity |
| **Destination** | Target address for team | Drop-off, End Point | Navigation standard |
| **Hospital Location** | Hospital's physical address | Hospital Address, Pickup Point | Specific terminology |
| **Coordinates** | Latitude/Longitude pair | GPS Position, Location | Technical accuracy |
| **Distance** | Distance in kilometers | Length, Range | Measurement clarity |
| **ETA** | Estimated Time of Arrival | Arrival Time, Expected Time | Industry acronym |

---

### 2.5 Financial Terms

| **Standard Term** | **Use Cases** | **Avoid Using** | **Rationale** |
|-------------------|---------------|-----------------|---------------|
| **Price** | Cost of individual service | Rate, Fee, Cost | E-commerce standard |
| **Subtotal** | Sum of all service prices | Total Before Fee | Clear calculation step |
| **Service Fee** | Platform commission (10%) | Commission, Platform Fee | Customer-friendly term |
| **Total Amount** | Final amount to pay | Grand Total, Total | Clear finality |
| **Payment** | Money transaction | Transaction, Purchase | Simple, clear term |
| **Settlement** | Payment to hospital | Payout, Disbursement | B2B financial term |
| **EGP** | Egyptian Pounds | LE, £E | Official currency code |
| **Refund** | Money returned to customer | Reimbursement, Chargeback | Standard term |

---

### 2.6 Technical & System Terms

| **Standard Term** | **Use Cases** | **Avoid Using** | **Rationale** |
|-------------------|---------------|-----------------|---------------|
| **Backend** | Server-side infrastructure | Server, API, Database | Development standard |
| **Frontend** | Client-side application | Client, UI, App | Development standard |
| **Database** | PostgreSQL data storage | DB, Storage, Data Store | Formal terminology |
| **API** | Application Programming Interface | Endpoint, Service | Industry acronym |
| **Endpoint** | Specific API route | Route, Path, URL | Technical precision |
| **WebSocket** | Real-time bidirectional connection | Socket, WS, Live Connection | Protocol name |
| **Edge Function** | Serverless function (Deno) | Cloud Function, Lambda | Supabase terminology |
| **Authentication** | User identity verification | Auth, Login System | Full formal term |
| **Authorization** | Access permission control | Permissions, Access Control | Distinct from authentication |

---

### 2.7 Application Names (Official Product Names)

| **Official Name** | **Usage Context** | **Abbreviation** | **Never Use** |
|-------------------|-------------------|------------------|---------------|
| **MySOS Customer Mobile App** | Full product name in documents | Customer App | MySOS App, User App |
| **MySOS Admin Dashboard** | Full product name in documents | Admin Dashboard | Admin Portal, Admin Panel |
| **MySOS Hospital Dashboard** | Full product name in documents | Hospital Dashboard | Hospital Portal, Hospital Panel |
| **MySOS Employee Mobile App** | Full product name in documents | Employee App | Team Member App, Staff App |

---

### 2.8 Data & Medical Terms

| **Standard Term** | **Use Cases** | **Avoid Using** | **Rationale** |
|-------------------|---------------|-----------------|---------------|
| **Medical History** | Customer's past medical information | Health Record, Medical Data | Patient-facing term |
| **Allergy** | Medical allergy information | Allergies (when singular) | Medical terminology |
| **Blood Type** | Blood group (A+, O-, etc.) | Blood Group | Common usage |
| **Emergency Contact** | Backup contact person | Next of Kin, ICE Contact | Clear purpose |
| **Ambulance** | Emergency vehicle | Vehicle, Transport | Medical industry standard |
| **ER** | Emergency Room | Emergency Room (spelled out) | Medical acronym |
| **ALS** | Advanced Life Support | Advanced Ambulance | Medical acronym |
| **BLS** | Basic Life Support | Basic Ambulance | Medical acronym |

---

## 3. Language & Localization

### 3.1 Bilingual Terminology

| **English Term** | **Arabic Term (AR)** | **Context** |
|------------------|----------------------|-------------|
| Customer | عميل | User interface |
| Employee | موظف | User interface |
| Team | فريق | User interface |
| Order | طلب | User interface |
| Hospital | مستشفى | User interface |
| Emergency | طوارئ | User interface |
| Service | خدمة | User interface |
| Payment | دفع | User interface |
| Address | عنوان | User interface |
| Status | حالة | User interface |

**Translation Rule:** Always maintain consistency between English and Arabic terms across all screens.

---

### 3.2 Acronyms & Abbreviations

| **Acronym** | **Full Form** | **When to Use Full Form** | **When to Use Acronym** |
|-------------|---------------|---------------------------|-------------------------|
| **SOS** | Save Our Souls (Emergency) | First mention in documents | Subsequent mentions, button labels |
| **ETA** | Estimated Time of Arrival | First mention in documents | UI labels, technical docs |
| **PIN** | Personal Identification Number | First mention in documents | UI labels, technical docs |
| **SMS** | Short Message Service | First mention in documents | Technical specifications |
| **API** | Application Programming Interface | First mention in documents | Technical documentation |
| **GPS** | Global Positioning System | First mention in documents | Technical specifications |
| **2FA** | Two-Factor Authentication | First mention in documents | Technical documentation |
| **RBAC** | Role-Based Access Control | First mention in documents | Technical documentation |
| **JWT** | JSON Web Token | First mention in documents | Technical documentation |

---

## 4. Common Mistakes to Avoid

### ❌ Incorrect → ✅ Correct

| Incorrect | Correct | Issue |
|-----------|---------|-------|
| "Team Member App" | "Employee App" | Wrong product name |
| "Staff Mobile App" | "Employee Mobile App" | Wrong product name |
| "User" (when referring to employee) | "Employee" | Ambiguous role |
| "The team member accepts order" | "The employee accepts the order" | Wrong context (app user action) |
| "Request" (for emergency service) | "Order" | Inconsistent terminology |
| "Canceled" | "Cancelled" | Wrong spelling (use British English) |
| "On the way" | "enroute" | Use status field term |
| "Egyptian Pound" | "EGP" | Use currency code |
| "Location" (when address is meant) | "Address" | Ambiguous |
| "Team Member" (when referring to app) | "Employee" | Wrong app context |

---

## 5. Implementation Checklist

### Documentation Updates

- [x] **SCOPE_OF_WORK.md**
  - No changes needed - already uses "Customer" consistently
  
- [ ] **SCOPE_OF_WORK_DASHBOARDS.md**
  - Search and replace where needed
  
- [ ] **SCOPE_OF_WORK_MOBILE_EMPLOYEE_APP.md**
  - Verify "Employee" is used consistently
  - Check "Team Member" is only used in team composition context
  
- [x] **swagger.yaml**
  - Review API endpoint names
  - Verify response field names
  
- [x] **SCOPE_ALIGNMENT_REVIEW.md**
  - Update terminology references
  
- [x] **DEVELOPMENT_TIMELINE_OPTIMIZATION.md**
  - Verify consistent naming
  
- [x] **SYSTEM_ARCHITECTURE_DIAGRAM.md**
  - Uses standardized terminology

### Code Updates

- [x] **Frontend Applications**
  - Customer App: Uses "Customer" ✓
  - Admin Dashboard: Uses "Admin" ✓
  - Hospital Dashboard: Uses "Hospital User" ✓
  - Employee App: Uses "Employee" ✓

- [x] **Backend API**
  - Endpoint naming follows standards ✓
  - Response field names consistent ✓

---

## 6. Terminology Decision Log

| Date | Term Decided | Rationale | Approved By |
|------|--------------|-----------|-------------|
| Jan 27, 2026 | "Employee" over "Team Member" for app | Aligns with product name "Employee App" | Technical Team |
| Jan 27, 2026 | "Order" over "Request" | Consistent with service platforms | Product Team |
| Jan 27, 2026 | "enroute" (one word) | Database field standard | Technical Team |
| Jan 27, 2026 | British spelling "cancelled" | Egyptian English convention | Editorial Team |
| Apr 25, 2026 | "Team Member" only for team composition | Clarify app user vs team role | Technical Team |

---

## 7. Usage Examples

### Example 1: Correct Usage in Documentation

✅ **Correct:**
> "The Employee Mobile App allows hospital employees to accept orders, navigate to the customer's address, update order status, and collect payments."

❌ **Incorrect:**
> "The Team Member App allows hospital staff to accept requests, navigate to the user's location, update job status, and collect payments."

---

### Example 2: Correct Usage in Team Context

✅ **Correct:**
> "The emergency team consists of 3 team members: 1 doctor, 1 nurse, and 1 driver. The employee using the Employee App can see their role as a team member."

❌ **Incorrect:**
> "The emergency crew consists of 3 employees: 1 doctor, 1 nurse, and 1 driver. The team member using the Team Member App can see their role."

---

### Example 3: Correct Status Terminology

✅ **Correct:**
> "Order status progression: pending → confirmed → dispatched → enroute → arrived → in_progress → completed"

❌ **Incorrect:**
> "Order status flow: requested → accepted → assigned → on-the-way → reached → active → done"

---

## 8. Glossary (Quick Reference)

**A**
- Address: Customer's service location
- Admin: MySOS platform administrator
- ALS: Advanced Life Support
- API: Application Programming Interface

**B**
- Backend: Server-side infrastructure
- BLS: Basic Life Support
- Blood Type: Blood group classification

**C**
- Cancelled: Order termination status
- Confirmed: Hospital accepted order
- Coordinates: Latitude/Longitude pair
- Customer: End-user requesting services

**D**
- Database: PostgreSQL data storage
- Destination: Target address for team
- Dispatched: Team assigned and sent
- Dispatcher: Hospital user assigning teams

**E**
- EGP: Egyptian Pounds
- Employee: Hospital staff (app user)
- Enroute: Team traveling to location
- ETA: Estimated Time of Arrival

**F**
- Frontend: Client-side application

**H**
- Hospital User: Hospital staff using dashboard

**I**
- In_progress: Service being provided

**O**
- Order: Emergency service request

**P**
- Payment: Money transaction
- Pending: Awaiting hospital acceptance
- Price: Cost of individual service

**S**
- Service: Individual medical offering
- Service Fee: Platform commission (10%)
- Settlement: Payment to hospital
- Subtotal: Sum of service prices

**T**
- Team: Group of employees on order
- Team Leader: Lead employee for order
- Team Member: Individual within team (composition context only)
- Total Amount: Final amount to pay

---

## 9. Approval & Enforcement

### Document Owner
**Technical Documentation Team**  
**Contact:** docs@mysos.eg

### Review Cycle
- **Initial Review:** January 27, 2026
- **Update Review:** April 25, 2026
- **Next Review:** Before public launch

### Enforcement
- All new documentation must follow this guide
- Code reviews should check terminology consistency
- UI text should match standardized terms
- API responses should use standardized field names

---

## 10. Summary

**Key Standardization Decisions:**

1. ✅ Use "**Employee**" for hospital staff (app users), not "Team Member"
2. ✅ Use "**Team Member**" only when referring to composition within a team
3. ✅ Use "**Order**" for emergency service requests, not "Request"
4. ✅ Use "**Customer**" for end-users, not "User" or "Patient"
5. ✅ Product name is "**Employee Mobile App**", not "Team Member App"
6. ✅ Use British spelling: "cancelled" not "canceled"
7. ✅ Order status: `pending`, `confirmed`, `dispatched`, `enroute`, `arrived`, `in_progress`, `completed`, `cancelled`
8. ✅ Currency: **EGP** (Egyptian Pounds)
9. ✅ Financial terms: Price, Subtotal, Service Fee, Total Amount
10. ✅ Locations: Address, Current Location, Destination, Coordinates

**Impact:**
- Improved documentation clarity
- Reduced confusion across teams
- Consistent user experience
- Professional technical communication

---

**Document Status:** ✅ Complete & Active  
**Last Updated:** April 25, 2026  
**Version:** 1.0

---

*This terminology standardization guide ensures consistent, professional, and clear communication across all MySOS documentation, code, and user interfaces. All team members should refer to this guide when creating new content or updating existing materials.*
