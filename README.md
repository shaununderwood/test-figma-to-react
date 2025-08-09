# Property Card React Component

A React TypeScript project showcasing a property card component based on a Figma design. The component is built with reusable sub-components and uses arrays for data management.

## Features

- **Modular Design**: Separated into reusable components
- **TypeScript**: Full type safety with interfaces
- **Responsive**: Mobile-friendly design with breakpoints
- **Data-Driven**: Property features stored in arrays for easy management
- **British English**: Naming conventions and text content

## Component Structure

### Main Components
- `PropertyCard`: Main container component
- `StatusTag`: Reusable status badge component
- `PriceSection`: Price display with icon
- `PropertyFeature`: Individual property feature with icon

### Data Structure
- `PropertyFeature[]`: Array of property features with icons
- `PropertyCardProps`: TypeScript interface for component props

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the component

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── PropertyCard.tsx      # Main card component
│   ├── StatusTag.tsx         # Status badge component
│   ├── PriceSection.tsx      # Price display component
│   └── PropertyFeature.tsx   # Feature item component
├── data/
│   └── propertyData.ts       # Property features array
├── types/
│   └── PropertyTypes.ts      # TypeScript interfaces
├── styles/
│   └── PropertyCard.css      # Component styles
└── App.tsx                   # Main app component
```

## Customisation

To modify the property card:

1. **Update Features**: Edit the `propertyFeatures` array in `src/data/propertyData.ts`
2. **Change Styling**: Modify `src/styles/PropertyCard.css`
3. **Add New Components**: Create new components in the `components/` directory
4. **Update Types**: Modify interfaces in `src/types/PropertyTypes.ts`

## Design Tokens

The component uses CSS custom properties for consistent theming:
- `--dl-color-purple-main-50`: Purple background for status tags

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Responsive design with mobile-first approach
