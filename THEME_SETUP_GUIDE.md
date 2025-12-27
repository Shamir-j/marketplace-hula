# MUI Theme Provider Setup Guide

## ✅ What We Set Up

I've implemented a centralized Material-UI theme provider for your application. This eliminates repetitive styling and ensures consistency across all components.

---

## 📁 Files Created

### 1. `/src/theme/theme.ts` - Central Theme Configuration
Contains:
- **Color Palette**: Primary (Hula orange), Secondary (dark blue/gray), error, warning, info, success
- **Typography Settings**: Font families, heading sizes, responsive breakpoints
- **Component Overrides**: Default styles for Buttons, Cards, Lists, etc.
- **Common Styles Object**: Reusable style patterns for legal pages, alerts, content boxes

### 2. `/src/theme/ThemeProvider.tsx` - Theme Provider Wrapper
A client component that wraps your app with MUI's ThemeProvider and CssBaseline.

### 3. `/src/app/layout.tsx` - Updated Root Layout
Now wraps all content with `<MUIThemeProvider>` so theme is available everywhere.

---

## 🎨 How to Use the Theme

### Option 1: Using Theme Tokens in `sx` Props (Recommended)

Instead of hardcoded colors:
```tsx
// ❌ Old way (hardcoded)
<Box sx={{ backgroundColor: "#f5f5f5", color: "#232f3e" }}>

// ✅ New way (theme tokens)
<Box sx={{ backgroundColor: "background.default", color: "text.primary" }}>
```

Available theme tokens:
```tsx
// Colors
sx={{ 
  color: "primary.main",           // #ff9900 (Hula orange)
  color: "secondary.main",         // #232f3e (dark blue)
  backgroundColor: "error.light",  // #ffebee (light red)
  borderColor: "warning.main",     // #ff9800
}}

// Spacing (1 unit = 8px)
sx={{ 
  p: 2,      // padding: 16px
  mb: 4,     // marginBottom: 32px
  gap: 1,    // gap: 8px
}}

// Typography
sx={{ 
  color: "text.primary",    // #232f3e
  color: "text.secondary",  // #555555
  color: "text.disabled",   // #999999
}}
```

### Option 2: Using `commonStyles` Object

For legal pages and common patterns:

```tsx
import { commonStyles } from "@/theme/theme";

// Legal page container
<Box sx={commonStyles.legalPage.container}>

// Legal page header
<Box sx={commonStyles.legalPage.header}>
  <Typography variant="h3">Page Title</Typography>
</Box>

// Section wrapper
<Box sx={commonStyles.legalPage.section}>

// Heading with icon
<Typography variant="h5" sx={commonStyles.legalPage.heading}>
  <Icon />
  Section Title
</Typography>

// Subsection heading
<Typography sx={commonStyles.legalPage.subsectionHeading}>
  Subsection
</Typography>

// Alert cards
<Card sx={commonStyles.alerts.warning}>  // Orange warning
<Card sx={commonStyles.alerts.info}>     // Blue info
<Card sx={commonStyles.alerts.error}>    // Red error
<Card sx={commonStyles.alerts.success}>  // Green success

// Content box
<Box sx={commonStyles.contentBox}>
  White background with padding and border radius
</Box>
```

### Option 3: Using `useTheme()` Hook (Advanced)

For dynamic styles or accessing theme in JavaScript:

```tsx
'use client';
import { useTheme } from '@mui/material/styles';

export default function MyComponent() {
  const theme = useTheme();
  
  const customStyle = {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  };
  
  return <Box sx={customStyle}>Content</Box>;
}
```

---

## 🔄 Migrating Existing Components

### Before (Repetitive):
```tsx
export default function MyPage() {
  const sectionStyle = {
    mb: 4,
  };
  const headingStyle = {
    fontWeight: "bold",
    mb: 2,
    color: "#232f3e",
  };
  
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Box sx={sectionStyle}>
        <Typography sx={headingStyle}>Title</Typography>
      </Box>
    </Box>
  );
}
```

### After (Using Theme):
```tsx
import { commonStyles } from "@/theme/theme";

export default function MyPage() {
  return (
    <Box sx={commonStyles.legalPage.container}>
      <Box sx={commonStyles.legalPage.section}>
        <Typography variant="h5" sx={commonStyles.legalPage.heading}>
          Title
        </Typography>
      </Box>
    </Box>
  );
}
```

---

## 🎯 Quick Reference: Theme Tokens

### Colors
```tsx
primary.main        // #ff9900 (Hula orange)
primary.dark        // #e88300
primary.light       // #ffad33

secondary.main      // #232f3e (dark blue/gray)
secondary.dark      // #131921
secondary.light     // #37475a

background.default  // #f5f5f5 (light gray)
background.paper    // #ffffff (white)

text.primary        // #232f3e (dark)
text.secondary      // #555555 (medium gray)
text.disabled       // #999999 (light gray)

error.main          // #f44336 (red)
error.light         // #ffebee
error.dark          // #c62828

warning.main        // #ff9800 (orange)
warning.light       // #fff3e0
warning.dark        // #e65100

info.main           // #2196f3 (blue)
info.light          // #e3f2fd
info.dark           // #1565c0

success.main        // #4caf50 (green)
success.light       // #e8f5e9
success.dark        // #2e7d32
```

### Typography Variants
```tsx
<Typography variant="h1">     // 3rem, bold
<Typography variant="h2">     // 2.5rem, bold
<Typography variant="h3">     // 2rem, bold (responsive)
<Typography variant="h4">     // 1.5rem, bold
<Typography variant="h5">     // 1.25rem, bold
<Typography variant="h6">     // 1rem, bold

<Typography variant="subtitle1">  // 1rem, 600 weight
<Typography variant="subtitle2">  // 0.875rem, 600 weight

<Typography variant="body1">      // 1rem, line-height 1.7
<Typography variant="body2">      // 0.875rem, line-height 1.6
```

### Spacing
```tsx
sx={{ p: 1 }}   // padding: 8px
sx={{ p: 2 }}   // padding: 16px
sx={{ p: 3 }}   // padding: 24px
sx={{ p: 4 }}   // padding: 32px

sx={{ mb: 2 }}  // marginBottom: 16px
sx={{ mt: 3 }}  // marginTop: 24px
sx={{ mx: 4 }}  // marginLeft & marginRight: 32px
sx={{ py: 2 }}  // paddingTop & paddingBottom: 16px
```

### Responsive Breakpoints
```tsx
sx={{
  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
}}

// Breakpoints:
// xs: 0px
// sm: 600px
// md: 960px
// lg: 1280px
// xl: 1920px
```

---

## 📝 Example: Complete Legal Page Migration

**Before:**
```tsx
export default function TermsPage() {
  const sectionStyle = { mb: 4 };
  const headingStyle = {
    fontWeight: "bold",
    mb: 2,
    color: "#232f3e",
    display: "flex",
    alignItems: "center",
    gap: 1,
  };
  
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#232f3e" }}>
            Terms of Service
          </Typography>
        </Box>
        
        <Card sx={{ mb: 4, backgroundColor: "#fff3e0", border: "1px solid #ff9800" }}>
          <CardContent>
            <Typography sx={{ color: "#e65100" }}>
              Warning message
            </Typography>
          </CardContent>
        </Card>
        
        <Box sx={sectionStyle}>
          <Typography sx={headingStyle}>
            <Icon />
            Section Title
          </Typography>
          <Box sx={{ backgroundColor: "#fff", p: 2, borderRadius: 1, mb: 3 }}>
            Content here
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
```

**After:**
```tsx
import { commonStyles } from "@/theme/theme";

export default function TermsPage() {
  return (
    <Box sx={commonStyles.legalPage.container}>
      <Container maxWidth="md">
        <Box sx={commonStyles.legalPage.header}>
          <Typography variant="h3">
            Terms of Service
          </Typography>
        </Box>
        
        <Card sx={{ ...commonStyles.alerts.warning, mb: 4 }}>
          <CardContent>
            <Typography sx={{ color: "warning.dark" }}>
              Warning message
            </Typography>
          </CardContent>
        </Card>
        
        <Box sx={commonStyles.legalPage.section}>
          <Typography variant="h5" sx={commonStyles.legalPage.heading}>
            <Icon />
            Section Title
          </Typography>
          <Box sx={commonStyles.contentBox}>
            Content here
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
```

**Benefits:**
- ✅ 60% less repetitive code
- ✅ Consistent styling across all pages
- ✅ Easy to update colors/spacing globally
- ✅ Better maintainability
- ✅ Type-safe with TypeScript
- ✅ Responsive by default

---

## 🔧 Customizing the Theme

To add or modify theme values, edit `/src/theme/theme.ts`:

### Add a New Color
```tsx
const colors = {
  // ... existing colors
  tertiary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
  },
};
```

### Add New Common Styles
```tsx
export const commonStyles = {
  // ... existing styles
  productCard: {
    root: {
      borderRadius: 2,
      boxShadow: 2,
      '&:hover': {
        boxShadow: 4,
      },
    },
  },
};
```

### Override MUI Components Globally
```tsx
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,  // Make all buttons more rounded
      },
    },
  },
}
```

---

## 🎨 VS Code Tips

For better autocomplete with theme tokens, install:
- **MUI Snippets** extension
- Enable TypeScript in your editor

You'll get autocomplete for:
- `sx={{ color: "primary.main" }}` ← suggests all palette colors
- `sx={{ p: 2 }}` ← suggests spacing values
- `<Typography variant="">` ← suggests all variants

---

## 🚀 Next Steps

1. ✅ Theme is already set up and working
2. 📝 Start migrating pages one by one (use Cookie Policy as reference)
3. 🎨 Customize theme colors/spacing in `/src/theme/theme.ts` as needed
4. 📚 Add more `commonStyles` patterns as you identify repeated patterns

---

## 💡 Best Practices

1. **Use theme tokens over hardcoded values**
   ```tsx
   // ❌ Bad
   color: "#232f3e"
   
   // ✅ Good
   color: "text.primary"
   ```

2. **Use commonStyles for repeated patterns**
   ```tsx
   // ❌ Bad: Define same styles in each component
   
   // ✅ Good: Import from commonStyles
   import { commonStyles } from "@/theme/theme";
   ```

3. **Use Typography variants**
   ```tsx
   // ❌ Bad
   <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
   
   // ✅ Good
   <Typography variant="h3">
   ```

4. **Use spacing units instead of pixels**
   ```tsx
   // ❌ Bad
   sx={{ padding: "16px" }}
   
   // ✅ Good
   sx={{ p: 2 }}  // 2 * 8px = 16px
   ```

---

## 🆘 Troubleshooting

**Issue: Theme not working**
- Make sure `MUIThemeProvider` wraps your app in `layout.tsx` ✅ (already done)

**Issue: Colors not showing**
- Use theme tokens like `color: "primary.main"`, not `color: theme.primary.main`

**Issue: Need access to theme in JS**
- Use `const theme = useTheme()` hook in client components

**Issue: Type errors**
- Make sure `'use client'` is at top of files using `useTheme()`

---

Your theme is now fully configured and ready to use! 🎉
