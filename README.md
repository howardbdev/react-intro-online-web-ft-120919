# [React]!!!!
Today we will:
- understand, at a high-level, what React is
- understand some of the basic features of React, including:
  - virtual DOM
  - JSX
  - class components
  - function components
  - props
  - state

## What is React?
  - a JavaScript library for building interfaces - websites
  - advanced JS
    - React allows us to use the newest features of JS -- even the ones that aren't fully integrated yet
    - introduces JSX
  - it's a way of thinking about the DOM in a modular fashion
    - ...using a virtual DOM (... a further object abstraction of the DOM)
  - a framework made by Facebook -- also open source with awesome documentation
  - always runs in strict mode

## Features

### Babel & Webpack

  - Babel: transpiler
  - Webpack: puts it all together

### Components

  - a block of re-usable code
  - it represents either, or both:
    - some logic to determine which subsections of the DOM should show up (container)
    - a subsection of the DOM (presentational)
  - one component is build using one of:
    - a JS class
    - a JS function
  - ~we can use plain JS (`.createElement()`)~
  - OR, and BETTER we can use JSX

### JSX
What is JSX?
A blend of JS and HTML -- looks like HTML tags with the ability to run JS.  
A Ruby comparison: ERB
A JS comparison: JS template strings

### Props

- are received by a parent
- are immutable -- cannot (should not) be changed by the receiving component

### State

- owned by ONE React component
- can be passed down to children as props
- can be changed using `this.setState()`
- **pre-hooks** only class components can have state!

### Let's play!!
## Getting started:
  run [`npx create-react-app`]

[React]:https://reactjs.org
[`npx create-react-app`]:https://reactjs.org/docs/create-a-new-react-app.html
