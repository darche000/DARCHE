# Portfolio Gallery - Responsive Masonry Grid

A modern, responsive portfolio gallery built with Next.js, Tailwind CSS, and Shuffle.js. Features a masonry grid layout with randomized card ordering, tag-based filtering, and smooth animations.

## Features

- **Responsive Masonry Grid**: Cards with standardized width and flexible height
- **Randomized Order**: Fisher-Yates shuffle on initial load for dynamic presentation
- **Tag Filtering**: Clickable tag filters to show/hide specific categories
- **Smooth Animations**: Hover effects, transitions, and staggered card animations
- **Mobile Responsive**: Optimized for all screen sizes
- **Lazy Loading**: Images load as needed for better performance

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shuffle.js** for masonry layout and filtering
- **Canvas** for generating placeholder images

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Generate placeholder images** (optional):
   ```bash
   node scripts/generate-images.js
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── Gallery.tsx       # Masonry grid component
├── lib/
│   └── posts.ts          # Data and utility functions
├── public/
│   └── images/           # Generated placeholder images
├── scripts/
│   └── generate-images.js # Image generation script
└── tailwind.config.js    # Tailwind configuration
```

## Key Components

### Gallery Component (`components/Gallery.tsx`)
- Client-side component with Shuffle.js integration
- Handles filtering, randomization, and responsive layout
- Includes loading states and smooth animations

### Posts Data (`lib/posts.ts`)
- TypeScript interfaces for type safety
- Sample portfolio data with tags and metadata
- Utility functions for filtering and data management

## Customization

### Adding New Portfolio Items
1. Add new entries to the `posts` array in `lib/posts.ts`
2. Include corresponding images in `public/images/`
3. Update tags as needed

### Styling
- Modify Tailwind classes in components
- Add custom animations in `tailwind.config.js`
- Update color schemes and spacing as desired

### Layout Configuration
- Adjust Shuffle.js options in `Gallery.tsx`
- Modify card dimensions and spacing
- Update responsive breakpoints

## Performance Features

- **Debounced Resize**: Optimized window resize handling
- **Lazy Loading**: Images load only when needed
- **Efficient Filtering**: Smooth transitions between filter states
- **Memory Management**: Proper cleanup of event listeners

## Browser Support

- Modern browsers with ES6+ support
- Responsive design works on mobile, tablet, and desktop
- Graceful degradation for older browsers

## License

MIT License - feel free to use this project for your own portfolio!
