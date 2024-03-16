import { readPage, renderPage } from "./templatingEngine.js"

const homepage = readPage(`./public/pages/homepage/homepage.html`)
export const homepagePage = renderPage(homepage, {
    tabTitle: `Node.js portfolio overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/homepage.css">`,
    JSLinks: `<script src="../../assets/js/homepage.js"></script>`
});

const feb2nd = readPage(`./public/pages/feb2nd/feb2nd.html`)
export const feb2ndPage = renderPage(feb2nd, {
    tabTitle: `Feb 2nd overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/feb2nd.css">`
});

const feb9 = readPage(`./public/pages/feb9/feb9.html`)
export const feb9Page = renderPage(feb9, {
    tabTitle: `Feb 9th overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/feb9.css">`
});

const feb16 = readPage(`./public/pages/feb16/feb16.html`)
export const feb16Page = renderPage(feb16, {
    tabTitle: `Feb 16th overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/feb16.css">`
});

const feb23 = readPage(`./public/pages/feb23/feb23.html`)
export const feb23Page = renderPage(feb23, {
    tabTitle: `Feb 23rd overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/feb23.css">`
});

const mar1 = readPage(`./public/pages/mar1/mar1.html`)
export const mar1Page = renderPage(mar1, {
    tabTitle: `March 1st overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/mar1.css">`
});

const mar8 = readPage(`./public/pages/mar8/mar8.html`)
export const mar8Page = renderPage(mar8, {
    tabTitle: `March 8th overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/mar8.css">`
});

const mar15 = readPage(`./public/pages/mar15/mar15.html`)
export const mar15Page = renderPage(mar15, {
    tabTitle: `March 15th overview`,
    CSSLinks: `<link rel="stylesheet" href="../../assets/css/mar15.css">`
});