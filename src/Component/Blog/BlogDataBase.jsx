const mockBlogs = [
    {
id: 6,
link: '5-tips-for-writing-a-winning-resume',
title: '5 Tips for Writing a Winning Resume',
excerpt: 'A great resume is your ticket to landing your dream job. Here are five tips to help you craft a resume that stands out...',
content: `
  Writing a resume can be overwhelming, but it's one of the most important documents you'll ever create in your career.
  Here are five tips to ensure that your resume stands out and grabs the attention of hiring managers.
      
### 1. Start with a Strong Summary
  A well-crafted resume summary should give the reader a quick overview of your qualifications and career goals. Make it brief,
   compelling, and tailored to the specific job you're applying for.
      
  Example:
  \`\`\`text
  Motivated software engineer with 5+ years of experience in developing scalable web applications. Proficient in JavaScript,
React and Node.js. Passionate about clean code and solving complex problems.
  \`\`\`
      
  ### 2. Focus on Achievements, Not Just Responsibilities
  Employers want to know what you've accomplished, not just the tasks you've performed. Highlight your achievements and quantify
  them whenever possible to showcase your impact.
      
  Example:
  \`\`\`text
  - Increased website traffic by 30% by optimizing the user experience.
  - Led a team of 5 developers to build a successful mobile app that generated $200K in revenue.
  \`\`\`
      
  ### 3. Tailor Your Resume for Each Job
  Don't send the same resume to every employer. Customize your resume for each job by matching your skills and experience with the job description. Use keywords from the job listing to ensure your resume gets noticed by Applicant Tracking Systems (ATS).
      
  ### 4. Keep It Concise
  Your resume should be no longer than one or two pages. Focus on the most relevant experience and skills for the job you're applying for. Avoid including irrelevant details that don't add value.
      
  ### 5. Proofread for Errors
  Spelling and grammatical mistakes can make you seem careless and unprofessional. Always proofread your resume or ask someone else to review it before submitting. 
      
  A winning resume is clear, concise, and tailored to the job you're applying for. By following these tips, you'll be one step closer to landing that dream job.
`,
author: 'Sarah Johnson',
date: '2025-01-16',
img: 'https://cdn.prod.website-files.com/5e9b599e716f9d94b6c84f43/6070f342aa48853802a91e12_resume-tips-and-tricks.png',
    },
    {

id: 1,
link: 'Understanding-React-Hooks',
title: 'Understanding React Hooks',
excerpt: 'React Hooks are a powerful addition to React Hooks...',
content: `
    React Hooks are functions that let you hook into React state and lifecycle features.
    Introduced in React 16.8, they eliminate the need for writing class components while
    still allowing developers to manage state, side effects, and context within functional components.

    ### Commonly Used Hooks:
    1. **useState**: Allows you to add state to a functional component.
Example:
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`
    
    2. **useEffect**: Lets you perform side effects in function components (e.g., data fetching, subscriptions).
Example:
\`\`\`javascript
useEffect(() => {
    console.log('Component mounted or updated');
}, []);
\`\`\`

    3. **useContext**: Accesses React context without wrapping components in a Consumer.
    
    ### Why Use Hooks?
    - Simplifies the component structure.
    - Avoids the complexities of class components.
    - Enables better reuse of logic through custom hooks.

    Hooks are not only a powerful addition but also help in maintaining clean, concise, and efficient codebases.`,
author: 'John Doe',
date: '2025-01-15',
img: 'https://miro.medium.com/v2/resize:fit:1200/1*-Ijet6kVJqGgul6adezDLQ.png',
    },
    {
id: 2,
img: 'https://i0.wp.com/blog.nashtechglobal.com/wp-content/uploads/2023/09/download-1-3.png?fit=1024%2C538&ssl=1',
link: 'css-grid-vs-flexbox',
title: 'CSS Grid vs Flexbox',
excerpt: 'Choosing between CSS Grid and Flexbox can be tricky...',
content: `
    CSS Grid and Flexbox are two powerful layout systems in CSS, each designed to solve specific layout problems.

    ### What is CSS Grid?
    CSS Grid is a two-dimensional layout system, meaning it can handle both rows and columns simultaneously.
    It's ideal for creating complex layouts like galleries, forms, and entire page structures.

    Example:
    \`\`\`css
    .grid-container {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
    }
    \`\`\`

    ### What is Flexbox?
    Flexbox is a one-dimensional layout system, focusing on arranging items in a single row or column.
    It excels in distributing space and aligning items, even when their sizes are dynamic.

    Example:
    \`\`\`css
    .flex-container {
display: flex;
justify-content: space-between;
    }
    \`\`\`

    ### Key Differences:
    1. **Dimensionality**: Grid is 2D (rows and columns), while Flexbox is 1D.
    2. **Use Case**: Use Grid for complex layouts; use Flexbox for simpler alignments.
    3. **Flexibility**: Flexbox is better for dynamic content where the number of items may vary.
    
    ### When to Use Which?
    - Use **CSS Grid** when you need precise control over a grid-based design.
    - Use **Flexbox** when you need to align and distribute items along a single axis.

    Both systems complement each other and can often be used together to create robust layouts.`,
author: 'Jane Smith',
date: '2025-01-14',
    },
    {
id: 3,
link: 'The-Evolution-of-JavaScript',
title: 'The Evolution of JavaScript',
excerpt: 'JavaScript has evolved significantly over the years...',
content: `
    JavaScript has come a long way since its inception in 1995. From being a simple client-side scripting language to becoming a full-fledged language used in web and server-side development.

    ### Key Milestones in JavaScript Evolution:
    1. **ES3 (1999)**: Standardized JavaScript, adding many essential features.
    2. **ES5 (2009)**: Introduced 'strict mode', better array handling, and getters/setters.
    3. **ES6 (2015)**: Major overhaul, adding arrow functions, classes, template literals, etc.
    4. **ES7 and Beyond**: New features like async/await, object spread, and private class fields.

    ### Modern JavaScript:
    JavaScript is now used in a variety of environments, including the server-side (Node.js) and in mobile development (React Native). The rise of frameworks and libraries has made JavaScript the backbone of modern web development.

    ### Why JavaScript is Still Relevant:
    - Versatility and wide usage.
    - Active community and constant updates.
    - Wide range of frameworks and libraries to boost productivity.

    JavaScript continues to evolve, making it an essential tool for any web developer.`,
author: 'Samuel Green',
date: '2025-01-12',
img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230302180217/JavaScript-Versions.png',
    },
    {
id: 4,
link: 'Mastering-React-Router',
title: 'Mastering React Router',
excerpt: 'React Router is a powerful library for managing navigation in React applications...',
content: `
    React Router allows for dynamic routing in React applications. It enables developers to create multi-page applications that don’t require a page refresh.

    ### Key Concepts:
    1. **BrowserRouter**: Provides the router context for your entire app.
    2. **Route**: Maps a URL to a specific component.
    3. **Link**: Used to create navigation links in the app.
    4. **useHistory**: Programmatically navigate between routes.

    Example of defining routes:
    \`\`\`javascript
    <Route path="/home" component={Home} />
    \`\`\`

    ### Advanced Features:
    - Nested routes for complex layouts.
    - Lazy loading of components for better performance.
    - Protected routes for handling authentication.

    React Router makes it easy to manage navigation in large applications, improving both performance and user experience.`,
author: 'Alice Williams',
date: '2025-01-10',
img: 'https://coderomeos.org/storage/uploads/images/posts/amp-mastering-react-router-dom-with-transition-and-animation-a-comprehensive-guide-with-examples-650b2b45e2165.png',
    },
    {
id: 6,
link: 'Mastering-JavaScript-ES6',
title: 'Mastering JavaScript ES6',
excerpt: 'ES6 introduces powerful features that make JavaScript more efficient...',
content: `
JavaScript ES6, also known as ECMAScript 2015, introduced several new features to the language. These features help make JavaScript more powerful, concise, and easier to work with.

### New Features in ES6:
- **Arrow Functions**: A more concise way to write functions.
\`\`\`javascript
const add = (a, b) => a + b;
\`\`\`

- **Classes**: ES6 introduces classes, allowing for object-oriented programming.
\`\`\`javascript
class Person {
    constructor(name) {
this.name = name;
    }
}
\`\`\`

- **Template Literals**: String interpolation with backticks.
\`\`\`javascript
const greeting = \`Hello, \${name}!\`;
\`\`\`

- **Destructuring Assignment**: Easier way to extract values from arrays and objects.
\`\`\`javascript
const [a, b] = [1, 2];
\`\`\`

ES6 also brought improvements like modules, promises, and much more. Understanding these features will help you write cleaner and more maintainable JavaScript code.`,
author: 'Alice Williams',
date: '2025-01-12',
img: 'https://media.licdn.com/dms/image/D4E12AQHeTByxJ-TI7A/article-cover_image-shrink_720_1280/0/1709923021259?e=2147483647&v=beta&t=EQgE2rDDBYshpN5VB9BePQZ82JCo_VJWziwgNQURvAc',
    },
    {
id: 7,
link: 'CSS-Positioning-Techniques',
title: 'CSS Positioning Techniques',
excerpt: 'Positioning in CSS is crucial for controlling element layouts...',
content: `
CSS positioning allows you to control the placement of elements on a web page. Understanding the different positioning techniques can help you create complex layouts with ease.

### Positioning Techniques:
- **Static Positioning**: This is the default positioning. Elements are placed according to the normal document flow.
\`\`\`css
.element {
    position: static;
}
\`\`\`

- **Relative Positioning**: Positions the element relative to its normal position in the document flow.
\`\`\`css
.element {
    position: relative;
    top: 10px;
}
\`\`\`

- **Absolute Positioning**: Positions the element relative to the nearest positioned ancestor element.
\`\`\`css
.element {
    position: absolute;
    top: 20px;
    left: 30px;
}
\`\`\`

- **Fixed Positioning**: Positions the element relative to the viewport, which means it stays in the same place even when scrolling.
\`\`\`css
.element {
    position: fixed;
    top: 10px;
    right: 10px;
}
\`\`\`

Mastering these positioning techniques will help you build more flexible and responsive layouts.`,
author: 'David Lee',
date: '2025-01-10',
img: 'https://www.educba.com/academy/wp-content/uploads/2019/12/CSS-Position.jpg',
    },
    {
id: 8,
link: 'Exploring-Nodejs',
title: 'Exploring Node.js',
excerpt: 'Node.js is a powerful JavaScript runtime that allows you to run JavaScript on the server...',
content: `
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable and fast server-side applications using JavaScript.


### Key Features of Node.js:
- **Non-blocking I/O**: Node.js uses non-blocking, event-driven I/O, which makes it highly efficient for I/O-heavy operations.
- **Single-threaded**: Node.js operates on a single thread using an event loop, which makes it lightweight.
- **npm (Node Package Manager)**: The largest ecosystem of open-source libraries available for JavaScript.

### Why Use Node.js?
- **Fast Development**: Using JavaScript for both client and server reduces context switching.
- **Scalability**: Node.js handles many concurrent connections efficiently.
- **Real-time Applications**: Node.js is ideal for building real-time applications like chat apps and live updates.

Node.js is commonly used for building REST APIs, microservices, and real-time applications, making it an essential tool in modern web development.`,
author: 'Eve Miller',
date: '2025-01-09',
img: 'https://miro.medium.com/v2/resize:fit:1400/1*djs41LAhXT2CsokWjtofRQ.png',
    },
];

export default mockBlogs;