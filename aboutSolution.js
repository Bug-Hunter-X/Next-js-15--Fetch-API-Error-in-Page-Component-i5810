```javascript
// pages/aboutSolution.js
import { getServerSideProps } from 'next/server';

function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/data');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default About;
```