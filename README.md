# PokeIndex - Pokemon Card Investment Fund

A modern, animated website for a Pokemon card investment fund that captures investor attention with fun Pokemon themes, engaging animations, and a seamless investment experience.

## 🎯 Features

### Core Functionality
- **Investment Collection**: Collect email addresses and investment amounts from users
- **Pokemon Selection**: Dynamic Pokemon selection based on investment size with 3D carousel
- **Investment Tracking**: Real-time display of investment statistics
- **Responsive Design**: Fully responsive across all devices

### Pokemon Investment Tiers
- **$25,000+**: Legendary Pokemon (Charizard, Mewtwo, Blastoise)
- **$10,000+**: Rare Pokemon (Pikachu, Venusaur, Gyarados)
- **$5,000+**: Uncommon Pokemon (Raichu, Ninetales, Vaporeon)
- **$1,000+**: Common Pokemon (Squirtle, Charmander, Bulbasaur)

### Visual Features
- **3D Pokemon Carousel**: Interactive carousel with smooth 3D rotations
- **Animated Pokeballs**: Floating pokeballs throughout the site
- **Pokemon Silhouettes**: Animated background elements
- **Confetti Animation**: Celebration effects on Pokemon selection
- **Gradient Backgrounds**: Beautiful blue gradient themes
- **Hover Effects**: Interactive elements with smooth animations
- **Keyboard Navigation**: Arrow keys and spacebar controls

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Yarn (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pokemon-investment-fund
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
yarn build
# or
npm run build
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e3c72` - Main background gradient
- **Secondary Blue**: `#2a5298` - Accent colors
- **Red**: `#ff6b6b` - Primary action color
- **Orange**: `#ff8e53` - Secondary action color
- **Gold**: `#ffd700` - Value highlights

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, Roboto)
- **Headings**: Bold weights with gradient text effects
- **Body Text**: Clean, readable typography

### Animations
- **3D Carousel**: Smooth 3D rotation with perspective effects
- **Floating Pokeballs**: Continuous floating animation
- **Card Hover Effects**: Smooth lift and glow effects
- **Confetti**: Celebration animation on selection
- **Gradient Shifts**: Animated gradient backgrounds
- **Pokemon Float**: Floating animation for Pokemon sprites

## 📱 Components

### Header
- Animated pokeball logo
- Navigation menu with hover effects
- Fixed positioning with backdrop blur

### Hero Section
- Compelling headline with gradient text
- Investment statistics display
- Floating Pokemon card showcase
- Call-to-action buttons

### Investment Form
- Email collection
- Investment amount input with quick-select buttons
- Form validation and submission
- Loading states and animations

### Pokemon Selection Modal
- **3D Carousel Interface**: Interactive pokeball carousel with navigation arrows
- **Keyboard Controls**: Arrow keys to navigate, spacebar to select
- **Dynamic Pokemon Options**: Based on investment amount
- **Investment Summary**: With potential returns calculation
- **Confetti Celebration**: Animation on selection

### Footer
- Investment statistics
- Recent investments display
- Company information and links
- Social media integration

## 🎮 User Experience

1. **Landing**: Users see an engaging hero section with Pokemon themes
2. **Investment**: Fill out the investment form with email and amount
3. **Selection**: Navigate the 3D carousel to choose from available Pokemon
4. **Confirmation**: See investment summary with potential returns
5. **Tracking**: View investment statistics in the footer

## 🎯 Enhanced Features

### 3D Carousel Controls
- **Arrow Keys**: Left/Right to navigate between Pokemon
- **Spacebar/Enter**: Select the centered Pokemon
- **Mouse Click**: Click arrows or pokeballs to navigate/select
- **Touch Support**: Swipe gestures on mobile devices

### Visual Enhancements
- **3D Perspective**: Realistic depth and rotation effects
- **Smooth Transitions**: Cubic-bezier easing for natural movement
- **Glowing Effects**: Dynamic lighting on selected pokeballs
- **Floating Sprites**: Animated Pokemon emojis above pokeballs

## 🔧 Technical Stack

- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe development
- **CSS3**: Custom animations and 3D transforms
- **Responsive Design**: Mobile-first approach

## 📊 Investment Logic

The website implements a tiered Pokemon selection system:

```typescript
// Investment tiers determine available Pokemon
if (amount >= 25000) {
  // Legendary Pokemon (Charizard, Mewtwo, Blastoise)
} else if (amount >= 10000) {
  // Rare Pokemon (Pikachu, Venusaur, Gyarados)
} else if (amount >= 5000) {
  // Uncommon Pokemon (Raichu, Ninetales, Vaporeon)
} else {
  // Common Pokemon (Squirtle, Charmander, Bulbasaur)
}
```

## 🎨 Customization

### Adding New Pokemon
Edit the `getAvailablePokemon` function in `PokemonSelection.tsx`:

```typescript
{
  name: "New Pokemon",
  emoji: "🆕",
  rarity: "Rare",
  estimatedValue: 100000,
  description: "Description here",
  color: "#color-code"
}
```

### Modifying Colors
Update CSS custom properties in component files:

```css
--pokemon-color: #your-color;
```

### Adding Animations
Create new keyframes in CSS files:

```css
@keyframes yourAnimation {
  /* Animation definition */
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🚀 Performance

- **Optimized Images**: SVG-based Pokemon representations
- **CSS Animations**: Hardware-accelerated animations
- **Lazy Loading**: Components load as needed
- **Minimal Dependencies**: Lightweight bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- [ ] Backend integration for real investment processing
- [ ] User authentication and portfolio management
- [ ] Real-time Pokemon card price tracking
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Sound effects for carousel interactions
- [ ] More Pokemon and investment tiers

---

**Gotta invest 'em all! ⚪**
