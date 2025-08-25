# Universal Login Credentials for TravelMarket

## 🔐 Vendor Login Information

### Universal Demo Credentials
**Email:** `demo@travelmarket.com`  
**Password:** `password`

### Vendor Account Details
- **Vendor ID:** `vendor_123`
- **Vendor Name:** Demo Vendor
- **Email:** demo@travelmarket.com

## 🚀 How to Login

### 1. Via Web Interface
1. Navigate to the login page: `http://localhost:8000/login`
2. Enter the credentials:
   - Email: `demo@travelmarket.com`
   - Password: `password`
3. Click "Login" to access the vendor dashboard

### 2. Via API (Programmatic Access)
```bash
curl -X POST http://localhost:8000/api/vendors/login \
  -H "Content-Type: application/json" \
  -d '{"email": "demo@travelmarket.com", "password": "password"}'
```

### Expected API Response
```json
{
  "success": true,
  "sessionId": "session_...",
  "vendorId": "vendor_123",
  "vendorName": "Demo Vendor",
  "email": "demo@travelmarket.com"
}
```

## 📋 Available Features After Login

### Vendor Dashboard (`/vendor/dashboard`)
- View and manage your services
- Monitor bookings and reservations
- Update vendor profile information
- Track earnings and performance metrics

### Service Management (`/vendor/services`)
- Create new travel services
- Edit existing service listings
- Update pricing and availability
- Manage service descriptions and images

### Booking Management
- View all bookings for your services
- Update booking status
- Process payments
- Communicate with customers

## 🔧 Technical Details

### Session Management
- Sessions are managed via session IDs returned from login
- Session validation is handled automatically
- No manual session storage required for web interface

### API Authentication
- Use the returned `sessionId` for authenticated API calls
- Include session ID in headers for protected endpoints
- Session expiration is configurable

## 🛡️ Security Notes

- These are demo credentials for testing purposes
- In production, implement proper user registration
- Use secure password hashing (bcrypt is already implemented)
- Implement session expiration and refresh mechanisms
- Add rate limiting for login attempts

## 🚨 Troubleshooting

### Common Issues
1. **Login fails**: Check if the development server is running on port 8000
2. **Session expired**: Simply login again to get a new session
3. **API errors**: Verify the session ID is included in authenticated requests

### Development Server Status
- Server runs on: `http://localhost:8000`
- Check status: `curl http://localhost:8000/api/test-login`
- Restart if needed: `npm run dev`

## 📞 Support
For any login or authentication issues, check:
1. Server logs for error messages
2. Network connectivity to port 8000
3. Browser console for client-side errors

The vendor login system is fully functional and ready for testing all vendor-specific features!
