## First Session

- Introduction
- Getting Started
- Components
- JSX
- Props
- State
- Refs
- Lifecycle
- Style
- Virtual DOM - Keys and Refs
- [Practical](https://snack.expo.io/@ignivalancy/rn-example)

### Introduction

React Native is a JavaScript framework for building native mobile apps. It uses the React framework and offers large amount of inbuilt components and APIs. It uses the same design as React, letting you compose a rich mobile UI from declarative components.

- A React Native app is a real mobile app. You don't build a mobile web app, an HTML5 app, or a hybrid app; you build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

- React Native supports IOS and Android platform, You can share most of your code on different platforms.

- Hot Reloading - React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With Hot Reloading, you can even run new code while retaining your application state.

- Native Code - React Native combines smoothly with components written in Objective-C, Java, or Swift. It's simple to drop down to native code if you need to optimize a few aspects of your application. It's also easy to build part of your app in React Native, and part of your app using native code directly - that's how the Facebook app works.

- [Showcase](https://facebook.github.io/react-native/showcase.html)

### Getting Started

- [Setup](https://facebook.github.io/react-native/docs/getting-started.html)

### Components

- React is built around components, not templates.

- JSX — Javascript Syntax Extension - The HTML’ish syntax is not actually HTML, but something called JSX. This is simply a syntax extension for Javascript which enables you to write JS with XML-like tags. So the tags are actually function calls, which are transformed into React.JS code, and finally end up as HTML and Javascript in the DOM.

### Props & State

There are two types of data in React; props and state. The key difference is that state is private and can be changed from within the component itself. Props are external, and not controlled by the component itself. It’s passed down from components higher up the hierarchy, whom also control the data.

- Props - Reacts one directional data flow.

Let’s initialize our button app with some data, using props. First we’ll need to grab the data from somewhere. This could for example be done using an Ajax call to fetch some data from an API, but for now we’ll just hard code it as a variable:

	var BUTTONTEXT = "Click the button";

The way to hand this data to a component’s props looks a lot like how you would specify an HTML element’s attribute.

	<App text={BUTTONTEXT} />

The reason we’re wrapping the BUTTONTEXT in curly braces it because we’ll need tell the JSX that we want to add a Javascript expression.

Once the App component is initialized like this, it can access the BUTTONTEXT variable through this.props.text. However, it can not change the data directly. From the components perspective, its props are immutable. Its just something its initialized with.

This way of passing props down the chain — from parent to child — is how data is distributed in React. It’s passed down the hierarchy, and it’s passed as props.

- State - The other way of storing data in React is in the component’s state. And unlike props — which are immutable from the components perspective — the state is mutable.

So if you want the data in your app to change — for example based on user interactions — it must be stored in a component’s state somewhere in the app.

As state is private and owned by one component only, it can’t be passed down the chain to child components. If you want to pass the data down to a child, you’ll have to pass is as a props.

- Initializing state - you can initialize the state in the constructor() of component.

- Changing state - To modify the state, simply call this.setState({}), passing in the new state as the argument.

### Refs

- Sometimes you might want to reach into the DOM and do some changes, but not necessarily involve state or props. In these situations, you’ll need to grab the node of your choice.

Luckily, React provides a handy way of grabbing DOM nodes. Simply call React.findDOMNode(component), passing in the component of your choice.

In order to get a reference your chosen component (or element=, you can use the refs attribute. Simply add a ref to an element like this:

	<TextInput ref="textField" ... />

From within the component rendering the input tag above, you can reference the input field through this.refs.textField.

- The key attribute - When you’re creating components dynamically, each of them need a unique key attribute.

### Lifecycle

- componentWillMount is executed before rendering, on both the server and the client side.

- componentDidMount is executed after the first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.

- componentWillReceiveProps is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.

- shouldComponentUpdate should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.

- componentWillUpdate is called just before rendering.

- componentDidUpdate is called just after rendering.

- componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.

### Style
	
- [Style](https://facebook.github.io/react-native/docs/style.html)
- [Flexbox](https://facebook.github.io/react-native/docs/flexbox.html)
- [Screen](https://facebook.github.io/react-native/docs/height-and-width.html)

### Virtual DOM

- React uses a concept called the virtual DOM. When you write <View>, you are not immediately creating a View. Instead, you are working with the virtual DOM, a representation of the actual DOM. I like to think of virtual DOM components as markers; they tell React what should be rendered. It is then the React engine's job to make sure the actual DOM matches the given markers.

With this approach, React gets to choose how to update the actual DOM. This allows for performance optimizations such as batching and minifying DOM updates.

JAVASCRIPT IS FAST. DOM IS SLOW.

React is driven by the idea that JavaScript is fast but working with the DOM is slow. Creating and modifying virtual DOM components is fast. Querying a div's computedStyle is slow. When you mutate or query the DOM, the browser needs to reflow and redraw, which are very expensive relative to non-DOM operations, like instantiating a JavaScript class.

- Diff and Updates - When React rerenders, now it has two component trees, one from before the rerender, and one after. It does a "diff" between two render passes and applies the minimal changes needed to reflect the new render tree.

## Next Topics

- Base Components - View, Text, TextInput, Images, Touchables, Scrollview, ListView
- Networking
- AsyncStorage
- Platform Specific Code
- Navigating Between Screens