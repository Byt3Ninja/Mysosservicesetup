# MySOS Two-Step Order Acceptance Workflow
## Detailed Process Documentation

**Document Date:** April 25, 2026  
**Version:** 1.0  
**Purpose:** Clarify the two-step order acceptance process for developers and stakeholders

---

## Executive Summary

The MySOS platform uses a **two-step order acceptance workflow** to ensure proper coordination between hospital management and emergency response teams:

1. **Step 1: Hospital Acceptance** - Hospital dispatcher accepts the order and assigns a team
2. **Step 2: Team Confirmation** - Team leader confirms or rejects the assignment

This workflow ensures that:
- Hospitals can manage incoming orders efficiently
- Teams have the ability to reject assignments if unavailable or unable to respond
- Customers receive accurate confirmation that help is on the way
- The system maintains accountability at both organizational and team levels

---

## 1. Complete Workflow Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│                   CUSTOMER CREATES EMERGENCY ORDER                   │
└────────────────────────────┬─────────────────────────────────────────┘
                             │
                             │ POST /orders
                             ▼
            ┌────────────────────────────────────┐
            │  Backend: Create Order             │
            │  Status: pending                   │
            │  - Save to database                │
            │  - Process payment                 │
            │  - Generate order ID               │
            └───────┬────────────────────────────┘
                    │
                    │ WebSocket Event: "order:new"
                    │
        ┌───────────┼───────────────────────┐
        │           │                       │
        ▼           ▼                       ▼
  ┌─────────┐ ┌──────────────┐      ┌────────────┐
  │Customer │ │   Hospital   │      │   Admin    │
  │   App   │ │  Dashboard   │      │ Dashboard  │
  │         │ │              │      │            │
  │"Order   │ │"New Order    │      │"New Order  │
  │Pending" │ │for Your      │      │Created"    │
  │         │ │Hospital!"    │      │            │
  └─────────┘ └──────┬───────┘      └────────────┘
                     │
                     │
┌────────────────────┼────────────────────────────────────────────────┐
│         STEP 1: HOSPITAL DISPATCHER ACCEPTANCE                      │
│                                                                     │
│  Dispatcher Actions:                                                │
│  1. Reviews order details (services, location, urgency)            │
│  2. Checks team availability                                       │
│  3. Selects appropriate team                                       │
│  4. Clicks "Accept & Assign Team"                                  │
│                                                                     │
│  PUT /hospital/orders/:orderId/accept                              │
│  PUT /hospital/orders/:orderId/assign-team                         │
│                                                                     │
└─────────────────────┬──────────────────────────────────────────────┘
                      │
                      ▼
         ┌────────────────────────────────┐
         │  Backend: Update Order         │
         │  Status: confirmed             │
         │  - Link team to order          │
         │  - Set teamId                  │
         │  - Send team notification      │
         └───────┬────────────────────────┘
                 │
                 │ WebSocket Events:
                 │ - "team:assigned" → Customer
                 │ - "order:new" → Employee App
                 │
     ┌───────────┼──────────────┬─────────────┐
     │           │              │             │
     ▼           ▼              ▼             ▼
┌─────────┐ ┌──────────┐ ┌──────────┐  ┌───────────┐
│Customer │ │ Hospital │ │ Employee │  │   Admin   │
│   App   │ │Dashboard │ │   App    │  │ Dashboard │
│         │ │          │ │          │  │           │
│"Team    │ │"Team     │ │"New      │  │"Order     │
│Assigned"│ │Assigned  │ │Order     │  │Confirmed  │
│         │ │to Order" │ │Assigned" │  │by Hospital│
└─────────┘ └──────────┘ └────┬─────┘  └───────────┘
                              │
                              │
┌─────────────────────────────┼────────────────────────────────────────┐
│         STEP 2: TEAM LEADER CONFIRMATION                            │
│                                                                     │
│  Team Leader (Employee App) Actions:                                │
│  1. Receives push notification                                     │
│  2. Opens Employee App                                             │
│  3. Reviews order details                                          │
│  4. Checks team readiness (members present, vehicle ready)         │
│  5. Makes decision:                                                │
│                                                                     │
│     Option A: ACCEPT                                               │
│     - POST /employee/orders/:orderId/accept                        │
│     - Status → dispatched                                          │
│     - Team starts navigation                                       │
│                                                                     │
│     Option B: REJECT                                               │
│     - POST /employee/orders/:orderId/reject                        │
│     - Provide rejection reason                                     │
│     - Status → pending (returns to hospital)                       │
│     - Hospital can reassign to different team                      │
│                                                                     │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
                ┌─────────────┴────────────┐
                │                          │
                ▼ ACCEPTED                 ▼ REJECTED
   ┌────────────────────────┐   ┌───────────────────────┐
   │  Backend: Accept Order │   │ Backend: Reject Order │
   │  Status: dispatched    │   │ Status: pending       │
   │  - Start tracking      │   │ - Unassign team       │
   │  - Enable location     │   │ - Notify hospital     │
   │  - Send notifications  │   │ - Log rejection       │
   └───────┬────────────────┘   └──────┬────────────────┘
           │                           │
           │                           │
           │ WebSocket:                │ WebSocket:
           │ "order:update"            │ "order:rejected"
           │                           │
     ┌─────┼──────────┬────────────────┼─────────┐
     │     │          │                │         │
     ▼     ▼          ▼                ▼         ▼
┌─────────┐│    ┌──────────┐    ┌──────────┐ ┌─────────┐
│Customer ││    │ Hospital │    │ Hospital │ │ Customer│
│   App   ││    │Dashboard │    │Dashboard │ │   App   │
│         ││    │          │    │          │ │         │
│"Team On ││    │"Team     │    │"Team     │ │"Finding │
│ The Way"││    │Dispatched│    │Rejected  │ │New Team"│
│         ││    │          │    │Order"    │ │         │
│ETA: 15  ││    │          │    │          │ │         │
│minutes" ││    │          │    │Reassign  │ │         │
└─────────┘│    └──────────┘    │to another│ └─────────┘
           │                    │team?     │
           ▼                    └──────────┘
    ┌──────────────┐
    │ TRACKING     │
    │ ACTIVE       │
    │              │
    │ Real-time    │
    │ location     │
    │ updates      │
    │ every 10 sec │
    └──────────────┘
```

---

## 2. Detailed Step-by-Step Process

### Phase 1: Order Creation (Customer)

**Actor:** Customer  
**Interface:** Customer Mobile App

1. Customer presses SOS button
2. Selects hospital from map
3. Selects emergency services (multi-select)
4. Confirms payment method
5. Places order

**Backend Action:**
```javascript
POST /orders
{
  "hospitalId": "hosp_123",
  "services": ["er-doctor", "bls-ambulance"],
  "addressId": "addr_456",
  "paymentMethodId": "pm_789"
}

Response: {
  "orderId": "SOS123456",
  "status": "pending",
  "timestamp": "2026-04-25T10:30:00Z"
}
```

**Database State:**
- Order status: `pending`
- Team assigned: `null`
- Order visible to: Hospital Dashboard, Admin Dashboard

---

### Phase 2: Hospital Acceptance & Team Assignment (Step 1)

**Actor:** Hospital Dispatcher  
**Interface:** Hospital Dashboard

**Detailed Actions:**

1. **Order Notification Received**
   - Real-time notification appears in dashboard
   - Audio alert plays (optional)
   - Order card shows: services, location, customer info

2. **Dispatcher Reviews Order**
   - Check service requirements (what services are needed?)
   - Check customer location (how far away?)
   - Check urgency indicators
   - Check special instructions

3. **Dispatcher Checks Team Availability**
   - View list of available teams
   - Check each team's:
     - Current status (available, on-call, busy)
     - Current location
     - Service capabilities (can they provide requested services?)
     - Vehicle availability
     - Estimated availability time

4. **Dispatcher Selects Team**
   - Choose most appropriate team based on:
     - Availability
     - Proximity to customer
     - Service capability match
     - Team performance history

5. **Dispatcher Accepts Order & Assigns Team**
   - Clicks "Accept Order" button
   - Selects team from dropdown
   - Optionally adds internal notes
   - Clicks "Assign Team" button

**Backend Actions:**
```javascript
// Hospital accepts order
PUT /hospital/orders/SOS123456/accept
Response: {
  "orderId": "SOS123456",
  "status": "confirmed",
  "acceptedAt": "2026-04-25T10:31:00Z",
  "acceptedBy": "dispatcher_001"
}

// Hospital assigns team
PUT /hospital/orders/SOS123456/assign-team
{
  "teamId": "team_789",
  "dispatcherId": "dispatcher_001",
  "notes": "Team 3 assigned - closest available"
}

Response: {
  "orderId": "SOS123456",
  "status": "confirmed",
  "teamId": "team_789",
  "teamName": "Emergency Response Team 3",
  "assignedAt": "2026-04-25T10:31:30Z"
}
```

**Database State:**
- Order status: `confirmed`
- Team assigned: `team_789`
- Assignment timestamp recorded
- Order visible to: Customer App, Hospital Dashboard, Employee App (Team 3), Admin Dashboard

**Notifications Sent:**
- Customer App: "Team assigned! Team 3 will respond shortly."
- Employee App (Team 3 Leader): "New emergency order assigned to your team"
- Admin Dashboard: "Order SOS123456 confirmed by Hospital ABC"

---

### Phase 3: Team Confirmation (Step 2)

**Actor:** Team Leader  
**Interface:** Employee Mobile App

**Detailed Actions:**

1. **Team Leader Receives Notification**
   - Push notification: "New order assigned to your team"
   - Phone vibrates and plays alert sound
   - Notification shows: order ID, services, location preview

2. **Team Leader Opens Employee App**
   - Sees order card at top of "Active Orders" screen
   - Order highlighted with "Action Required" badge

3. **Team Leader Reviews Order Details**
   - Services requested (ER Doctor, BLS Ambulance, etc.)
   - Customer location (address, map view)
   - Distance to customer (e.g., 5.2 km)
   - Estimated travel time (e.g., 12 minutes)
   - Customer contact info (mobile number)
   - Special instructions (if any)

4. **Team Leader Checks Team Readiness**
   - **Team Members:** Are all required team members present?
     - Doctor available? ✓
     - Nurse available? ✓
     - Driver available? ✓
   - **Vehicle:** Is ambulance ready?
     - Fuel sufficient? ✓
     - Medical supplies stocked? ✓
     - Vehicle functional? ✓
   - **Equipment:** Do we have required equipment?
     - For ER service: Emergency medical kit ✓
     - For BLS Ambulance: BLS equipment ✓

5. **Team Leader Makes Decision**

   **OPTION A: ACCEPT THE ORDER**
   
   **When to Accept:**
   - All team members are present and ready
   - Vehicle is ready and functional
   - Team has required equipment for all requested services
   - Team is physically and mentally prepared
   - No safety concerns
   
   **Actions:**
   - Taps "Accept Order" button
   - App confirms: "Are you sure? Your team will be dispatched."
   - Taps "Confirm"
   
   **Backend Action:**
   ```javascript
   POST /employee/orders/SOS123456/accept
   {
     "teamLeaderId": "emp_123",
     "acceptedAt": "2026-04-25T10:32:00Z",
     "teamReadiness": {
       "allMembersPresent": true,
       "vehicleReady": true,
       "equipmentChecked": true
     }
   }
   
   Response: {
     "orderId": "SOS123456",
     "status": "dispatched",
     "message": "Order accepted. Begin navigation to customer."
   }
   ```
   
   **What Happens Next:**
   - Order status changes to `dispatched`
   - Navigation starts automatically
   - Background location tracking begins (every 10 seconds)
   - Customer receives notification: "Team is on the way!"
   - Customer can now track team in real-time
   - ETA displayed to customer
   
   ---
   
   **OPTION B: REJECT THE ORDER**
   
   **When to Reject:**
   - Team member(s) unavailable or not ready
   - Vehicle has technical issues
   - Missing required equipment
   - Team already committed to another emergency
   - Safety concerns (e.g., dangerous location, team illness)
   - Service capability mismatch (team can't provide requested service)
   
   **Actions:**
   - Taps "Reject Order" button
   - App shows rejection reason form
   - Team leader selects rejection reason:
     - ☐ Team member unavailable
     - ☐ Vehicle not operational
     - ☐ Missing required equipment
     - ☐ Already on another call
     - ☐ Safety concerns
     - ☐ Service capability mismatch
     - ☐ Other (specify)
   - Optionally adds detailed notes
   - Taps "Submit Rejection"
   
   **Backend Action:**
   ```javascript
   POST /employee/orders/SOS123456/reject
   {
     "teamLeaderId": "emp_123",
     "rejectedAt": "2026-04-25T10:32:00Z",
     "reason": "team_member_unavailable",
     "notes": "Nurse on break, driver called in sick today"
   }
   
   Response: {
     "orderId": "SOS123456",
     "status": "pending",
     "message": "Order rejected. Hospital will reassign to another team."
   }
   ```
   
   **What Happens Next:**
   - Order status returns to `pending`
   - Team is unassigned from order
   - Hospital Dashboard receives notification: "Team 3 rejected order SOS123456: Team member unavailable"
   - Hospital dispatcher can see rejection reason and notes
   - Dispatcher assigns order to a different team
   - Process returns to Step 1 with new team
   - Customer sees: "Finding available team..." (no anxiety-inducing details)

---

## 3. Status Progression Chart

```
Customer App View          Database Status      Hospital View            Employee View
──────────────────         ───────────────      ─────────────            ─────────────

"Order Placed"       →     pending        →     "New Order"        →     [Not visible yet]
                                                      ↓
                                                 [Accept & Assign]
                                                      ↓
"Team Assigned"      →     confirmed      →     "Team Assigned"    →     "New Order Assigned"
                                                                               ↓
                                                                          [Team Leader Reviews]
                                                                               ↓
                                           ┌─────────────────────────────────────┐
                                           │                                     │
                                      [ACCEPT]                              [REJECT]
                                           │                                     │
                                           ▼                                     ▼
"Team On The Way"    →    dispatched  →  "Team Dispatched"  →  "En Route"    pending ← "Team Rejected"
                                                                               (returns to hospital)
        ↓
[Live Tracking]
        ↓
"Team Arrived"       →     arrived     →  "Team Arrived"     →  "Arrived"
        ↓
"Service Started"    →   in_progress   →  "Service Active"   →  "In Progress"
        ↓
"Service Complete"   →    completed    →  "Order Complete"   →  "Completed"
```

---

## 4. Time Expectations & SLAs

| Phase | Actor | Expected Time | SLA |
|-------|-------|---------------|-----|
| **Order Creation** | Customer | 1-2 minutes | Instant |
| **Hospital Review** | Dispatcher | 30 seconds - 2 minutes | <3 minutes |
| **Team Assignment** | Dispatcher | 30 seconds | <1 minute |
| **Team Confirmation** | Team Leader | 30 seconds - 2 minutes | <5 minutes |
| **If Rejected** | Dispatcher | 1-2 minutes (reassign) | <3 minutes |
| **Total (Creation → Dispatch)** | All | 3-7 minutes | <10 minutes |

---

## 5. API Endpoints Reference

### Hospital Dashboard Endpoints

```javascript
// Get pending orders for hospital
GET /hospital/orders?status=pending

// Accept order (Step 1a)
PUT /hospital/orders/:orderId/accept
Body: {
  "dispatcherId": "string",
  "notes": "string (optional)"
}

// Assign team to order (Step 1b)
PUT /hospital/orders/:orderId/assign-team
Body: {
  "teamId": "string",
  "dispatcherId": "string",
  "estimatedArrival": "number (minutes)",
  "notes": "string (optional)"
}

// Get available teams
GET /hospital/teams?status=available

// Reassign order (after rejection)
PUT /hospital/orders/:orderId/reassign-team
Body: {
  "teamId": "string",
  "dispatcherId": "string",
  "reason": "string"
}
```

### Employee Mobile App Endpoints

```javascript
// Get assigned orders (pending team confirmation)
GET /employee/orders/active?status=confirmed

// Get order details
GET /employee/orders/:orderId

// Accept order (Step 2 - Accept)
POST /employee/orders/:orderId/accept
Body: {
  "teamLeaderId": "string",
  "teamReadiness": {
    "allMembersPresent": boolean,
    "vehicleReady": boolean,
    "equipmentChecked": boolean
  }
}

// Reject order (Step 2 - Reject)
POST /employee/orders/:orderId/reject
Body: {
  "teamLeaderId": "string",
  "reason": "team_member_unavailable" | "vehicle_issue" | "equipment_missing" | "already_on_call" | "safety_concern" | "other",
  "notes": "string (optional)"
}
```

---

## 6. WebSocket Events

### Events Emitted

```javascript
// When hospital accepts order (Step 1)
event: "order:update"
payload: {
  "orderId": "SOS123456",
  "status": "confirmed",
  "hospitalAcceptedAt": "2026-04-25T10:31:00Z"
}
recipients: [customer, admin]

// When team is assigned (Step 1)
event: "team:assigned"
payload: {
  "orderId": "SOS123456",
  "teamId": "team_789",
  "teamName": "Emergency Response Team 3",
  "estimatedArrival": 15
}
recipients: [customer, admin]

event: "order:new"
payload: {
  "orderId": "SOS123456",
  "services": [...],
  "customerLocation": {...},
  "requiresAction": true
}
recipients: [team_leader_of_assigned_team]

// When team accepts (Step 2 - Accept)
event: "order:update"
payload: {
  "orderId": "SOS123456",
  "status": "dispatched",
  "teamAcceptedAt": "2026-04-25T10:32:00Z"
}
recipients: [customer, hospital, admin]

// When team rejects (Step 2 - Reject)
event: "order:rejected"
payload: {
  "orderId": "SOS123456",
  "teamId": "team_789",
  "reason": "team_member_unavailable",
  "rejectedAt": "2026-04-25T10:32:00Z"
}
recipients: [hospital, admin]

event: "order:update"
payload: {
  "orderId": "SOS123456",
  "status": "pending",
  "teamUnassigned": true
}
recipients: [hospital]
```

---

## 7. Error Handling & Edge Cases

### Edge Case 1: Team Leader Doesn't Respond

**Scenario:** Team leader receives assignment but doesn't accept or reject within 5 minutes

**Solution:**
1. Send reminder push notification at 3 minutes
2. Call team leader's phone at 4 minutes (automated)
3. At 5 minutes timeout:
   - Auto-reject the order
   - Reason: "Team leader did not respond"
   - Return order to hospital
   - Hospital notified to reassign

**Backend Implementation:**
```javascript
// Set timeout when team is assigned
setTimeout(() => {
  if (order.status === 'confirmed') {
    autoRejectOrder(orderId, 'timeout_no_response');
  }
}, 5 * 60 * 1000); // 5 minutes
```

---

### Edge Case 2: Hospital Assigns Same Team to Multiple Orders

**Scenario:** Dispatcher accidentally assigns Team 3 to two orders simultaneously

**Solution:**
1. System checks team's current assignments
2. If team already has active order, show warning:
   "⚠️ Team 3 is already assigned to Order SOS123450. Assign anyway?"
3. If dispatcher confirms:
   - Allow assignment
   - Mark team as "overloaded"
   - Team leader sees both orders
   - Team leader can reject one or both

**Backend Validation:**
```javascript
PUT /hospital/orders/:orderId/assign-team
{
  "teamId": "team_789",
  "forceAssign": false // or true to override warning
}

// Backend checks:
const activeOrders = await getTeamActiveOrders(teamId);
if (activeOrders.length > 0 && !forceAssign) {
  return {
    error: "team_already_assigned",
    message: "Team 3 is already assigned to another order",
    currentOrders: activeOrders,
    requiresConfirmation: true
  };
}
```

---

### Edge Case 3: All Teams Reject the Order

**Scenario:** Hospital assigns order to Team A → rejected. Assigns to Team B → rejected. Assigns to Team C → rejected.

**Solution:**
1. After 3 rejections, escalate to admin
2. Admin Dashboard shows: "Order SOS123456 rejected by 3 teams - requires intervention"
3. Admin options:
   - Contact hospital to find available team
   - Recommend customer to call emergency hotline (12345)
   - Reassign to different hospital
   - Cancel and refund with explanation

---

### Edge Case 4: Team Accepts Then Becomes Unavailable

**Scenario:** Team accepts order (status → dispatched) but then vehicle breaks down before reaching customer

**Solution:**
1. Team leader can update order status from Employee App
2. Tap "Report Issue" button
3. Select issue type: "Vehicle breakdown"
4. Order status returns to `pending`
5. Hospital automatically notified to reassign
6. Customer sees: "Team had an issue. Finding new team for you."

---

## 8. UI/UX Considerations

### Hospital Dashboard - Order Card

**Before Acceptance:**
```
┌─────────────────────────────────────────────┐
│ 🚨 NEW ORDER - SOS123456                   │
│ ─────────────────────────────────────────── │
│                                             │
│ 📍 Location: 123 Nasr City, Cairo          │
│ 📞 Customer: +20 100 123 4567              │
│ 🏥 Services:                                │
│    • ER Doctor                              │
│    • BLS Ambulance                          │
│                                             │
│ ⏰ Received: 2 minutes ago                  │
│ 💰 Amount: EGP 800                          │
│                                             │
│ [  Accept & Assign Team  ]                  │
│ [      Reject Order      ]                  │
└─────────────────────────────────────────────┘
```

**After Accepting, Choosing Team:**
```
┌─────────────────────────────────────────────┐
│ ORDER ACCEPTED - SOS123456                  │
│ ─────────────────────────────────────────── │
│                                             │
│ Select Team to Assign:                      │
│                                             │
│ ○ Team 1 - Emergency Response              │
│   Status: Available                         │
│   Location: 3.2 km away                     │
│   ETA: 8 minutes                            │
│                                             │
│ ● Team 3 - Emergency Response              │
│   Status: Available                         │
│   Location: 2.1 km away                     │
│   ETA: 6 minutes                            │
│                                             │
│ ○ Team 5 - Emergency Response              │
│   Status: On Break (available in 10 min)    │
│   Location: 5.0 km away                     │
│                                             │
│ Notes: [Optional internal notes]            │
│                                             │
│ [  Assign Selected Team  ]                  │
└─────────────────────────────────────────────┘
```

---

### Employee App - Order Notification

**Push Notification:**
```
┌─────────────────────────────────┐
│ MySOS                           │
│ 🚨 New Order Assigned           │
│                                 │
│ Order #SOS123456                │
│ ER Doctor + BLS Ambulance       │
│ 2.1 km away • Nasr City         │
│                                 │
│ Tap to review and accept        │
└─────────────────────────────────┘
```

**In-App Order Review Screen:**
```
┌─────────────────────────────────────────────┐
│ ← NEW ORDER ASSIGNED                        │
│ ─────────────────────────────────────────── │
│                                             │
│ Order ID: SOS123456                         │
│ Status: Awaiting Your Confirmation          │
│                                             │
│ 📍 LOCATION                                 │
│ 123 Main Street, Nasr City                 │
│ Cairo, Egypt                                │
│ Distance: 2.1 km                            │
│ [View on Map]                               │
│                                             │
│ 🚑 SERVICES REQUESTED                       │
│ • ER Doctor (EGP 500)                       │
│ • BLS Ambulance (EGP 400)                   │
│                                             │
│ 📞 CUSTOMER CONTACT                         │
│ Mohamed Ali                                 │
│ +20 100 123 4567                            │
│ [Call Customer]                             │
│                                             │
│ ⏱️ TIME                                     │
│ Assigned: 30 seconds ago                    │
│ Estimated Travel: 6 minutes                 │
│                                             │
│ 📝 SPECIAL INSTRUCTIONS                     │
│ "Patient has chest pain. Urgent."          │
│                                             │
│ ─────────────────────────────────────────── │
│                                             │
│ [     ✓ ACCEPT ORDER     ]                  │
│ [     ✗ REJECT ORDER     ]                  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 9. Benefits of Two-Step Workflow

### For Hospitals
✅ **Control** - Hospital maintains oversight of which orders to accept  
✅ **Resource Management** - Can assign orders based on team availability  
✅ **Accountability** - Clear record of who accepted and assigned orders  
✅ **Flexibility** - Can reassign if team rejects

### For Teams
✅ **Autonomy** - Teams can reject if truly unavailable  
✅ **Safety** - Can reject if safety concerns exist  
✅ **Readiness** - Ensures team is actually ready before committing  
✅ **Communication** - Can provide rejection reasons for better coordination

### For Customers
✅ **Accuracy** - Only see "Team on the way" when team actually accepted  
✅ **Trust** - Know that a real team confirmed they're coming  
✅ **Transparency** - Understand if delays occur (shown as "Finding team...")  
✅ **Reliability** - System ensures someone is actually responding

### For the Platform
✅ **Data Quality** - Accurate tracking of acceptance rates and response times  
✅ **Accountability** - Clear audit trail of decisions  
✅ **Optimization** - Can identify hospitals/teams with high rejection rates  
✅ **Reliability** - Reduces cases where team doesn't actually respond

---

## 10. Monitoring & Analytics

### Key Metrics to Track

**Hospital Performance:**
- Average time to accept order (target: <2 minutes)
- Average time to assign team (target: <1 minute)
- Order acceptance rate (target: >95%)
- Reassignment rate after rejection

**Team Performance:**
- Average time to confirm order (target: <3 minutes)
- Order rejection rate (target: <5%)
- Most common rejection reasons
- Response time after acceptance

**Overall System Health:**
- End-to-end time (order creation → team dispatch) (target: <5 minutes)
- Rejection escalations (orders rejected by 3+ teams)
- Customer experience (time waiting for confirmation)

---

## Document Information

**Version:** 1.0  
**Last Updated:** April 25, 2026  
**Prepared By:** MySOS Technical Team  
**Contact:** technical-team@mysos.eg

---

**Related Documents:**
- System Architecture Diagram: `SYSTEM_ARCHITECTURE_DIAGRAM.md`
- Customer App Scope: `SCOPE_OF_WORK.md`
- Hospital Dashboard Scope: `SCOPE_OF_WORK_DASHBOARDS.md`
- Employee App Scope: `SCOPE_OF_WORK_MOBILE_EMPLOYEE_APP.md`
- API Specification: `swagger.yaml`

---

*This two-step order acceptance workflow documentation provides complete clarity for developers implementing the hospital dispatcher and team leader functionality. It ensures all stakeholders understand the process flow, timing expectations, error handling, and system behavior.*
