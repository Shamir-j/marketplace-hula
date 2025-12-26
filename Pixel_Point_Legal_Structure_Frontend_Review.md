# Frontend Review & Action Document  
## Legal Structure Alignment for Pixel Point Platform Clients

### Document Type  
Frontend Engineering Review & Fix Implementation Guide

### Purpose  
To align all legal pages (Terms, Privacy, Ads, Consumer Health Data) with the correct **platform-first legal structure**, ensuring:
- Play Console compliance
- No cross-product legal ambiguity
- Reduced store account risk
- Scalability for multiple Pixel Point clients

---

## 1. Background & Context

The following legal pages are currently written as if they apply **only to Hula Market e-commerce**, yet they are reused across multiple Pixel Point products:

- Conditions of Use  
- Privacy Notice  
- Ads Privacy Choices  
- Consumer Health Data Privacy  

However, **Hula Market is only one client** of a broader system.

### Actual Product Structure
- **Platform**: Pixel Point ERP  
- **Clients powered by the platform**:
  - Hula Market (E-commerce)
  - Pixel Point POS
  - Pixel Point Terminal
  - Future clients (Agent apps, Desktop, Integrations)

This mismatch creates legal, compliance, and app store risk.

---

## 2. Ownership & Legal Entity (CRITICAL)

Due to Play Console sensitivity, all legal ownership references **must use the following structure**:

### Approved Legal Entity
**Continuum Technologies**  
(Development Lab: **Quantum Times Technologies**)

### Must NOT Appear Anywhere
- Zaam Technologies
- Any legacy or deprecated legal entities

Ensure removal from:
- Page content
- Footer text
- Metadata (SEO / OpenGraph)
- Structured data
- Static config files

---

## 3. Problem Summary

### Current Issues
- Legal pages are client-scoped instead of platform-scoped
- POS and Terminal apps reference e-commerce-specific language
- Ownership representation is inconsistent
- Risk of Play Store enforcement actions

---

## 4. Required Fix: Platform-First Legal Structure

### Core Principle
Legal documents must apply to the **Pixel Point ERP Platform**, not to individual clients.

All legal text should reference:
> Pixel Point ERP Platform, operated by Continuum Technologies, powering multiple applications.

---

## 5. Content Changes Required

### 5.1 Global Language Updates

Replace client-specific wording such as:
- “Hula Market provides...”
- “This policy applies to Hula Market users...”

With platform-scoped language:
- “Pixel Point ERP Platform provides...”
- “This policy applies to all applications powered by the Pixel Point ERP Platform...”

---

### 5.2 Mandatory Covered Products Section

Each legal page must include the following section near the top:

```
Covered Applications

This policy applies to all applications powered by the Pixel Point ERP Platform, including:
- Hula Market (Consumer Marketplace)
- Pixel Point POS (Merchant Point-of-Sale Application)
- Pixel Point Terminal (Store Checkout Application)
- Other current and future Pixel Point–powered applications
```

---

## 6. URL & Routing Strategy

No hosting split is required.

Recommended stable paths:
- /legal/privacy-notice
- /legal/terms-of-service
- /legal/ads-privacy
- /legal/consumer-health-data

All Pixel Point products must reference the same URLs.

---

## 7. Footer & App Linking

### Web
- Footer must reference Pixel Point ERP Platform
- Avoid client-only branding in legal links

### Mobile Apps
- POS and Terminal apps must link to platform-scoped legal pages
- App copy must not contradict legal scope

---

## 8. SEO & Metadata Requirements

Verify that:
- Page titles are platform-neutral
- Meta descriptions are platform-scoped
- OpenGraph metadata does not mention Hula-only context
- Structured data is consistent with platform ownership

---

## 9. Validation Checklist

- [ ] No mention of Zaam Technologies
- [ ] Continuum Technologies listed as owner
- [ ] Platform-first wording applied
- [ ] Covered Products section present
- [ ] POS & Terminal apps reference same URLs
- [ ] SEO metadata aligned
- [ ] No broken or outdated links

---

## 10. Out of Scope

- Legal review by external counsel
- Domain or hosting migration
- App store listing updates
- Backend policy enforcement

---

## 11. Importance of This Fix

- Prevents Play Console account suspension
- Enables reuse across all Pixel Point products
- Aligns with SaaS platform best practices
- Reduces future rework
- Improves partner and merchant trust

---

### Final Note

This is a compliance-critical update.  
Treat with the same priority as authentication, payments, or data protection changes.
