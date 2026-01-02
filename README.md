# NeoOne Co. Analytics System

## Project Structure

```
neoone-analytics/
│
├── index.html              # Main entry point with authentication
├── dashboard.html          # Main dashboard page
├── supplychain.html        # Supply chain management (inventory, vendors, orders)
├── feedback.html           # Customer feedback page
├── executive.html          # Executive profiles page
│
├── css/
│   └── style.css          # All styles
│
├── js/
│   └── script.js          # All JavaScript functionality
│
├── includes/
│   ├── header.html        # Navigation header
│   └── footer.html        # Footer section
│
└── images/
    ├── naufal.jpg
    ├── aina.jpg
    ├── female.jpg
    └── male.png
```

## File Dependencies

### CDN Resources Required:
- Bootstrap 5.3.3
- Font Awesome 6.5.2
- Chart.js 4.4.3
- Google Fonts (Outfit, Plus Jakarta Sans)

### Navigation Flow:
1. **index.html** - Login/Registration → Redirects to dashboard.html after auth
2. **dashboard.html** - Main control center with analytics
3. **supplychain.html** - Product catalog, vendors, purchase orders
4. **feedback.html** - Customer reviews and ratings
5. **executive.html** - Leadership team profiles

## Setup Instructions

1. Extract all files maintaining the folder structure
2. Ensure all image files are in the `images/` folder
3. Open `index.html` in a web browser
4. Default login credentials:
   - Email: admin@neoone.com
   - Password: 123

## Features

- **Authentication System**: Login and registration
- **Dashboard Analytics**: Revenue charts, market insights, operations overview
- **Supply Chain Management**: CRUD operations for products, vendors, and orders
- **Customer Feedback**: Review aggregation and sentiment analysis
- **Executive Profiles**: Leadership team information

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Responsive design for mobile and desktop

## Notes

- Data is stored in browser memory (resets on page reload)
- Clock displays Kuala Lumpur timezone
- All currency values in Malaysian Ringgit (RM)

---
© 2025 NeoOne Co. All Rights Reserved.
