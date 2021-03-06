# Please note the master branch will be the latest code.. to see code as it was based on a particular lecture, check out the other branches (see what I did there?  "check out" the other branches ...?  ok sorry I'll stop...)
## Other branches:
- [`first-lecture`] is for the first lecture, Intro to React 😁
- [`component-lifecycle-lecture`] is for Thursday's component lifecycle lecture

# [React]!!!!
Today we will:
- understand, at a high-level, what React is
- understand some of the basic features of React, including:
  - [virtual DOM]
  - [JSX]
  - [class components]
  - [function components]
  - [props]
  - [state]

## What is React?
  - a JavaScript library for building interfaces - websites
  - advanced JS
    - React allows us to use the newest features of JS -- even the ones that aren't fully integrated yet
    - introduces JSX
  - it's a way of thinking about the DOM in a modular fashion
    - ...using a virtual DOM (... a further object abstraction of the DOM)
  - a framework made by Facebook -- also open source with awesome documentation
  - always runs in [JS strict mode] (and even stricter with [`React.StrictMode`]!)

## Features

### [Babel] & [Webpack]

  - [Babel]: transpiler -- allows us to use the latest and greatest JS!
  - [Webpack]: puts it all together for us

### Components

  - a block of re-usable code
  - it represents either, or both:
    - some logic to determine which subsections of the DOM should show up (container)
    - a subsection of the DOM (presentational)
  - one component is build using one of:
    - a JS class
    - a JS function
  - ~we can use plain JS (`.createElement()`)~
  - OR, and BETTER we can use [JSX]

### [JSX]
What is [JSX]?
A blend of JS and HTML -- looks like HTML tags with the ability to run JS.  
A Ruby comparison: ERB
A JS comparison: JS template strings

### Props

- are received from a parent or [HOC]*
- are immutable -- cannot (should not) be changed by the receiving component

Props are passed with a syntax similar to HTML attributes:

```javascript
const chevyImpala = {
  make: "Chevy",
  model: "Impala",
  year: 2005,
  miles: 210000
}
// ... inside render(), assuming we're in a class component:
<Car car={chevyImpala} />
```
In this example, the `Car` component is receiving a prop called `car` which will point to the object stored in `chevyImpala`.

_(*[HOC] = Higher Order Component - a function that takes another component as an argument and returns a new version of that component)_
### State

- owned by ONE React component
- can be passed down to children as props
- can be changed using [`this.setState()`]
- **pre-[hooks]**: only class components can have state!

### Let's play!!
## Getting started:
  run [`npx create-react-app`]

[`first-lecture`]:https://github.com/howardbdev/react-intro-online-web-ft-120919/tree/first-lecture
[`component-lifecycle-lecture`]:https://github.com/howardbdev/react-intro-online-web-ft-120919/tree/component-lifecycle-lecture
[Component Lifecycle]:https://reactjs.org/docs/react-component.html
[React]:https://reactjs.org
[JSX]:https://reactjs.org/docs/introducing-jsx.html
[class components]:https://reactjs.org/docs/components-and-props.html
[function components]:https://reactjs.org/docs/components-and-props.html
[props]:https://reactjs.org/docs/components-and-props.html
[state]:https://reactjs.org/docs/state-and-lifecycle.html
[virtual DOM]:https://reactjs.org/docs/faq-internals.html
[JS strict mode]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
[`React.StrictMode`]:https://reactjs.org/docs/strict-mode.html
[Babel]:https://babeljs.io/
[Webpack]:https://webpack.js.org/
[HOC]:https://reactjs.org/docs/higher-order-components.html
[hooks]:https://reactjs.org/docs/hooks-intro.html
[`this.setState()`]:https://reactjs.org/docs/react-component.html#setstate
[`npx create-react-app`]:https://reactjs.org/docs/create-a-new-react-app.html
