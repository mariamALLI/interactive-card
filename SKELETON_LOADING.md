# Skeleton Loading Implementation

This project now includes a robust skeleton loading system using the `react-loading-skeleton` library.

## Features Added

### 1. Main App Loading

- Full page skeleton loading on initial app load (2 seconds)
- Shows skeleton versions of both card and form components

### 2. Form Submission Loading

- Button shows skeleton during form submission
- Simulates a 1.5-second API call

### 3. Reusable Components

#### Basic Skeleton Components

```tsx
import Skeleton from 'react-loading-skeleton';

// Basic usage
<Skeleton />
<Skeleton height={40} />
<Skeleton height={40} width="80%" />
<Skeleton count={3} />
```

#### Custom Skeleton Components

```tsx
import { FormFieldSkeleton, CardFieldSkeleton, ButtonSkeleton, LoadingOverlay } from './components/SkeletonComponents';

// Form field with label and input skeleton
<FormFieldSkeleton />

// Card field skeleton
<CardFieldSkeleton width="200px" height={24} />

// Button skeleton
<ButtonSkeleton height={50} />

// Loading overlay wrapper
<LoadingOverlay 
  isLoading={isLoading} 
  skeleton={<Skeleton height={100} />}
>
  <YourComponent />
</LoadingOverlay>
```

### 4. Custom Hooks

#### useAsyncLoading Hook

```tsx
import { useAsyncLoading } from './hooks/useAsyncLoading';

const { isLoading, error, execute } = useAsyncLoading({
  onSuccess: () => console.log('Success!'),
  onError: (error) => console.error(error),
  minLoadingTime: 1000
});

// Use in async operations
const handleSubmit = () => {
  execute(async () => {
    // Your async operation
    await submitForm();
  });
};
```

## Usage Examples

### 1. App-wide Loading State

The main App component shows skeleton loading for 2 seconds on initial load.

### 2. Form Submission Loading

The form button shows a skeleton during submission (1.5 seconds).

### 3. Individual Component Loading

You can wrap any component with LoadingOverlay:

```tsx
<LoadingOverlay 
  isLoading={isDataLoading}
  skeleton={<Skeleton height={200} count={3} />}
>
  <YourDataComponent />
</LoadingOverlay>
```

### 4. Inline Skeletons

Replace content directly with skeletons:

```tsx
{isLoading ? (
  <Skeleton width="60%" height={20} />
) : (
  <h2>{title}</h2>
)}
```

## Customization

### Theme Customization

```tsx
import { SkeletonTheme } from 'react-loading-skeleton';

<SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
  <Skeleton />
</SkeletonTheme>
```

### CSS Customization

The skeleton animations are handled by the library, but you can customize the appearance through CSS or props.

## Benefits

1. **Better UX**: Users see loading placeholders instead of blank screens
2. **Perceived Performance**: Content appears to load faster
3. **Consistent Design**: Skeleton shapes match actual content
4. **Easy Implementation**: Minimal code changes required
5. **Reusable**: Components can be used throughout the app

## Testing

Run the development server:

```bash
pnpm dev
```

Visit `http://localhost:5174/` to see:

1. Initial skeleton loading (2 seconds)
2. Form submission skeleton loading (1.5 seconds when submitting)
