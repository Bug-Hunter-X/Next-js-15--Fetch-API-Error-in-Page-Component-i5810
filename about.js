```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will throw an error because 'fetch' is not available in this scope.
  fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

  return (
    <div>
      <h1>About Page</h1>
      {/* Data will be displayed here once fetched */}
    </div>
  );
}

export default About; 
```