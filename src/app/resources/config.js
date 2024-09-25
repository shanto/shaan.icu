const baseURL = 'nextjs-portfolio.up.railway.app'

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/connect': true
}

const effects = {
    gradient: true,
    dots:     false,
    lines:    true,
}

const style = {
    theme:      "dark",             // theme:       'dark',         // dark | light
    brand:      "cyan",             // neutral:     'gray',         // sand | gray | slate
    accent:     "aqua",             // brand:       'aqua',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    neutral:    "slate",            // accent:      'yellow',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    border:     "conservative",     // solid:       'contrast',     // color | contrast
    solid:      "contrast",         // solidStyle:  'flat',         // flat | plastic
    solidStyle: "flat",             // border:      'playful',      // rounded | playful | conservative
    surface:    "translucent",      // surface:     'translucent',  // filled | translucent
    transition: "all"               // transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        gradient: true,
        dots:     false,
        lines:    true,
    }
}

import { Analytics } from "@vercel/analytics/react";

export { routes, protectedRoutes, effects, style, display, mailchimp, Analytics, baseURL };