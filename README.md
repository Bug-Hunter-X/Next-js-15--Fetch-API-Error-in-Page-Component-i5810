# Next.js 15 Fetch API Error in Page Component

This repository demonstrates a common runtime error encountered when using the `fetch` API within a Next.js 15 page component outside of an API route.  The `fetch` API is not directly available in client-side page components; you need a different approach.

## Bug Description

The `about.js` file attempts to fetch data using `fetch`. This results in a runtime error in the browser. 

## Solution

The `aboutSolution.js` demonstrates the solution by using `getServerSideProps` or `getStaticProps` to fetch data during the server-side rendering process.