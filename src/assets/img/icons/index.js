// Import all icon images from src/assets
import darkIconSrc from './dark-icon.svg';
import downArrowLightSrc from './down-arrow-light.svg';
import downArrowSrc from './down-arrow.svg';
import figmaSrc from './figma.svg';
import htmlSrc from './html.png';
import HTMLSrc from './HTML.svg';
import iranSrc from './iran.svg';
import jsSrc from './js.svg';
import laravelSrc from './laravel.svg';
import lightIconSrc from './light-icon.svg';
import locationSrc from './location.png';
import mailInboxAppSrc from './mail-inbox-app.png';
import phoneCallSrc from './phone-call.png';
import phpSrc from './php.svg';
import pythonSrc from './python.svg';
import reactSrc from './react.svg';
import sketchSrc from './sketch.svg';
import tailwindSrc from './tailwind.svg';
import usaSrc from './usa.svg';
import wpSrc from './wp.svg';
import xdSrc from './xd.svg';

// Helper function to extract src from Next.js image imports
const getSrc = (img) => {
  if (!img) return null;
  // If it's already a string (path), return it
  if (typeof img === 'string') return img;
  // If it's an object with src property (Next.js optimized images), return src
  if (typeof img === 'object' && img.src) return img.src;
  // If it's a default export object, try to get the default
  if (typeof img === 'object' && img.default) return img.default;
  // Otherwise return the value directly
  return img;
};

// Export all icons with processed src
export const darkIcon = getSrc(darkIconSrc);
export const downArrowLight = getSrc(downArrowLightSrc);
export const downArrow = getSrc(downArrowSrc);
export const figma = getSrc(figmaSrc);
export const html = getSrc(htmlSrc);
export const HTML = getSrc(HTMLSrc);
export const iran = getSrc(iranSrc);
export const js = getSrc(jsSrc);
export const laravel = getSrc(laravelSrc);
export const lightIcon = getSrc(lightIconSrc);
export const location = getSrc(locationSrc);
export const mailInboxApp = getSrc(mailInboxAppSrc);
export const phoneCall = getSrc(phoneCallSrc);
export const php = getSrc(phpSrc);
export const python = getSrc(pythonSrc);
export const react = getSrc(reactSrc);
export const sketch = getSrc(sketchSrc);
export const tailwind = getSrc(tailwindSrc);
export const usa = getSrc(usaSrc);
export const wp = getSrc(wpSrc);
export const xd = getSrc(xdSrc);

// Create a mapping object for dynamic access by filename
export const iconMap = {
  'dark-icon.svg': darkIcon,
  'down-arrow-light.svg': downArrowLight,
  'down-arrow.svg': downArrow,
  'figma.svg': figma,
  'html.png': html,
  'HTML.svg': HTML,
  'iran.svg': iran,
  'js.svg': js,
  'laravel.svg': laravel,
  'light-icon.svg': lightIcon,
  'location.png': location,
  'mail-inbox-app.png': mailInboxApp,
  'phone-call.png': phoneCall,
  'php.svg': php,
  'python.svg': python,
  'react.svg': react,
  'sketch.svg': sketch,
  'tailwind.svg': tailwind,
  'usa.svg': usa,
  'wp.svg': wp,
  'xd.svg': xd,
};

// Helper function to get icon by filename
// First tries to get from imported icons, then falls back to public folder path
export const getIcon = (filename) => {
  if (!filename) return null;
  
  // First try to get from imported icons
  const importedIcon = iconMap[filename];
  if (importedIcon) return importedIcon;
  
  // Fallback to public folder path (Next.js serves files from /public as /)
  return `/img/icons/${filename}`;
};

