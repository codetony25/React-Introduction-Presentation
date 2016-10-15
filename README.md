## History of React
- BoltJS was created.
- It introduced a number of API's and features that we have today in React. For example: render, createClass, and refs.
- It was a way to create and reference nodes imperatively.
- Applications grew more sophisticated, and the BoltJS's codebase became more complicated.
- Jordan Walke started experimenting with a side project called FaxJS which had goals of solving many of the problems that BoltJS had.
- FaxJS was made by Jordan Walke which introduced the concepts of what we have today in React which are: Props, State, Re-evauluating large portions of the DOM tree to "diff" the User Interface, server side rendering, and the basic concept of components.
- FBolt is borned and offered a better and more scalable way to build user interfaces.
- Jordan Walke and Tom Occhino did not like the FBolt name and decided to call it "React" which was to advertise it as some kind of "Reactivity" since this API Reacts to the current "state" or "property" changes.
- Facebook has been using an extension of PHP called XHP, which allowed for engineers to create the virtual DOM using XML literals inside their PHP code. Which became an excellent way to structure applications with custom components.
- Adam Hupp implemented an XHP-like concept for JavaScript, written in Haskell. This system enabled you to write the following inside a JavaScript file which is how JSX came into existence now.

Reference: [https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html]
Second Reference: [http://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/]

## What is React?
- React is just the "View" layer, and they said it is the "V" in MVC. Which means that it doesn't make assumptions about the rest of your techonology stack. This allows us to develop and find which technology best fit the project that we are building.
- React allowed us engineers to create interactive user interfaces and it does so efficiently and easily.
- React will update and render just the right components when your data (state) changes.
- With React you can create Declarative views to make your code more predictable and easier to debug.
- React is Component Based which allows us to be able to encapsulate components that manage their own state.
- Since most of your component logic is written in JavaScript you can easily pass data through your application and keep state out of the DOM.
- It makes it easy to re-use components.

Reference: [https://facebook.github.io/react/index.html]

## Why should you use React?
- React solves one big problem when building applications: building large applications with data that changes over time.
- It's Simple and Declarative, when your data changes, react will understand to only update those changed parts. 
- Ability to build Reusable components, since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.

Reference: [https://facebook.github.io/react/docs/why-react.html]

## Declarative VS Imperative
- React is Declarative, which makes it very easy to maintain and reason with, but what is the difference between declarative and imperative anyways?
- Imperative programming is more of you coding in a way where creating step by step instructions of how you want your program to work, For example:
```js
let name = 'Tony',
  friends = ['Peter', 'Marcello', 'Carl', 'Eric', 'SJ'],
  friendCount = friends.length,
  description = '';

if (name === 'Tony') {
  description = `${name} friends are`;
  
  for (var i = 0; i < friendCount; i++) {
    description += ` ${friends[i]}, `
  }
}
else {
  description = `You're not Tony!`;
}

return description;
```
- So imperative is more like doing each step at a time to acheieve your solution. Eventually if you keep having code like this, it will become very difficult to maintain and read.
- Declarative is more of what you want the program to do for you, it's about describing what you're trying to achieve. For example:
```js
let name = 'Tony',
  friends = ['Peter', 'Marcello', 'Carl', 'Eric', 'SJ'],
  description = '';

if (name.includes('Tony is Awesome')) {
  description = `${name} friends are ${friends.toString()}`;
}
else {
  description = `You're not Tony!`
}

return description;
```
- We want our code to be Declarative as much as possible because it is better to understand it. After all, we are human and we want our code to be human readable.

## What is Virtual DOM?
- I'm pretty sure you know what a DOM is, but if not you can go here and read more about it: [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction]
- So you know what the DOM is, but what is the Virtual DOM? To keep it short and simple, it's a visual representation of your DOM (which in our case we are able to use the Virtual DOM using JSX in React), which isn't the official DOM yet, unless the JSX is compiled and React renders the REAL DOM out to the browser.
- But React isn't the only ones using the Virtual DOM, you can see more libraries that use it here: http://vdom-benchmark.github.io/vdom-benchmark/

## What is JSX?
- JSX allows us to write XML syntax in our JavaScript, which makes it very easy to manipulate and update our views with React in the most elegant way possible.
- You can definately write React without JSX of course, but most of the community agrees that building React Applications with JSX is the way to go for maintainability and readability.
- At first, if you're not familair with JSX and can't get over the fact that you are seeing HTML in your JavaScript. This is just something that you should get use to, and you will see why it is definately the way to build out your applications.

## What is Reconciliation?
- Wow what a big long word to confuse us even more about react. Reconciliation is React's Diffing Algorithm that it uses to find the difference between a component and re-renders with the difference.
- Most people would think that this is an expensive process and those people are actually wrong, React is extremely fast and it does diffing in a very efficient way. However, React will do this for us developers but it's up to us to break up the components in a way that is more performant to make sure that there isn't unnecessary re-renders.

## What is Server Side Rendering?
- Since ReactJS will render out an Entire JS into your DOM, it's just JavaScript. Its a bunch of createElement, cloneElement, innerHTML creating your DOM which makes it difficult for Search Engines to crawl your web application. 
- Why do developers use server side rendering anyways? The main two things are: It's faster and its better for SEO. But wait, didn't Google say that they are able to crawl ReactJS applications without a problem? That's true but what about the other Search Engines like Bing, Yahoo, and so on? The thing is that we're not sure what Search Engines are able to crawl our web application or not.
- With server side rendering, you're initial server request is made and it renders out the entire DOM string, layout, css, javascript, and content. After that point your client-side will take over.
- There are some trade-offs to using Server Side Rendering: It is difficult to setting up your React Application to use server side rendering. You really have to understand the concept of server-side rendering and you will run into issues where there are just some things your browser will understand like the global `window` object, but your server-side will not understand the global `window` so that makes it even harder because we have to include extra code.
  