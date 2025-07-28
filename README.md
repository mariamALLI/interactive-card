# Interactive Card Details Form

A modern, responsive React application that provides an interactive credit card form with real-time visual feedback. Users can enter their card details and see them instantly reflected on a realistic card display.

![Interactive Card Preview](./src/assets/design/desktop-preview.jpg)

## 🚀 Features

- **Real-time Card Preview**: See your card details update instantly as you type
- **Form Validation**: Comprehensive client-side validation with user-friendly error messages
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Accessibility**: ARIA labels and semantic HTML for screen reader compatibility
- **Modern UI**: Clean, minimalist design with smooth animations
- **Input Formatting**: Automatic formatting for card numbers and validation for all fields
- **Success Feedback**: Completion screen with auto-reset functionality

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS3** - Custom responsive styling
- **Normalize.css** - Cross-browser consistency

## 📋 Prerequisites

- Node.js (version 16 or higher)
- pnpm (preferred) or npm

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd interactive-card
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
interactive-card/
├── src/
│   ├── assets/
│   │   ├── images/          # Card images and icons
│   │   └── design/          # Design reference files
│   ├── components/
│   │   ├── header.tsx       # Card display component
│   │   └── mainComponent.tsx # Form and validation logic
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type definitions
├── public/                  # Static assets
├── dist/                    # Build output
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 🎯 Usage

### Form Fields

1. **Cardholder Name**
   - Accepts alphabetic characters and spaces only
   - Required field with "Can't be blank" validation

2. **Card Number**
   - Accepts 16 digits with automatic formatting (XXXX XXXX XXXX XXXX)
   - Real-time validation for correct length
   - Numbers only input restriction

3. **Expiry Date (MM/YY)**
   - Month: 01-12 validation
   - Year: 2-digit format
   - Both fields required

4. **CVC**
   - 3-digit security code
   - Numbers only
   - Required field

### Card Display

- **Front Card**: Shows cardholder name, card number, and expiry date
- **Back Card**: Displays CVC code
- **Default Values**: Placeholder values shown when fields are empty
- **Real-time Updates**: All changes reflect immediately on the card display

## 🎨 Responsive Design

The application adapts to different screen sizes:

- **Mobile (< 425px)**: Stacked layout with mobile-optimized card positioning
- **Tablet (425px - 800px)**: Adjusted spacing and font sizes
- **Desktop (> 800px)**: Side-by-side layout with enhanced card display

## ✅ Form Validation

### Client-side Validation Features:

- **Real-time validation** as user types
- **Visual feedback** with red borders for invalid fields
- **Error messages** displayed below each field
- **Input restrictions** prevent invalid characters
- **Complete form validation** on submit

### Validation Rules:

- Cardholder name: Cannot be empty, alphabetic characters only
- Card number: Must be exactly 16 digits
- Month: Must be 01-12
- Year: Must be 2 digits
- CVC: Must be exactly 3 digits

## 🚀 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint

# Using npm
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🏆 Key Components

### App.tsx
Main application component that manages global state for all card details and passes them to child components.

### Header Component
- Displays the visual card representation
- Handles card formatting and default values
- Responsive card positioning
- Real-time updates from form state

### Main Component
- Form rendering and input handling
- Comprehensive validation logic
- Success state management
- Auto-reset functionality
- Accessibility features

## 🎪 Success Flow

1. User fills out all required fields correctly
2. Form validates all inputs on submit
3. Success screen displays with completion message
4. Auto-reset after 5 seconds or manual continue
5. Form clears and returns to initial state

## 🔒 Security Considerations

- **Client-side only**: This is a demo application - never transmit real card details
- **Input sanitization**: All inputs are cleaned and validated
- **No data persistence**: Card details are not stored anywhere
- **Type safety**: TypeScript ensures type checking throughout

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Optimization

- Touch-friendly input fields
- Optimized keyboard types for mobile devices
- Responsive card positioning
- Mobile-first CSS approach

## 🔧 Customization

### Styling
Modify `src/index.css` to customize:
- Color scheme
- Typography
- Layout spacing
- Animation effects

### Validation
Update validation logic in `mainComponent.tsx`:
- Custom error messages
- Additional validation rules
- Different input restrictions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from Frontend Mentor challenges
- Icons and assets from the design files
- React team for the amazing framework
- Vite team for the lightning-fast build tool

---

**Note**: This is a demonstration project. Never use this form with real credit card information in a production environment. Always use secure, PCI-compliant payment processing services for handling actual payment data.
