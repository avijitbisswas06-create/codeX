# Vendor Routes Fix Plan

## Issue Analysis
- **Problem**: `/vendor/register` and other vendor routes return 404
- **Root Cause**: Missing proper route structure and page files
- **Current State**: API endpoints exist but frontend routes don't

## Requirements
1. Fix `/vendor/register` route (currently 404)
2. Fix all vendor-side components (register, dashboard, etc.)
3. Ensure all vendor routes are working properly

## Implementation Steps

### Phase 1: Create Vendor Registration Page
- Create `/src/app/vendor/register/page.tsx`
- Implement registration form with proper validation
- Connect to `/api/vendors/register` endpoint

### Phase 2: Create Vendor Login Page  
- Create `/src/app/vendor/login/page.tsx`
- Connect to `/api/vendors/login` endpoint
- Add redirect to dashboard on success

### Phase 3: Fix Vendor Dashboard
- Update `/src/app/vendor/dashboard/page.tsx`
- Add proper session verification
- Ensure proper authentication flow

### Phase 4: Update Navigation
- Add links to vendor routes in main navigation
- Ensure proper routing between pages

## Files to Create/Modify
1. `/src/app/vendor/register/page.tsx` (NEW)
2. `/src/app/vendor/login/page.tsx` (NEW)  
3. `/src/app/vendor/dashboard/page.tsx` (UPDATE)
4. `/src/app/login/page.tsx` (UPDATE)
