# javascript amd classes

## JavaScript Classes

JavaScript classes are a way to define a blueprint for creating objects. They were introduced in ECMAScript

JavaScript is primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms.

everything in javascript is object

The Temporal Dead Zone (TDZ) refers to the period during which a variable is accessed before declared . This occurs from the start of the block scope until the variable is initialized.only occur when a variable declared with let or const

sessionStorage and localStorage are both part of the Web Storage API in JavaScript, providing mechanisms to store key-value pairs directly within the user's web browser. They offer a way to persist data on the client-side, enabling web applications to maintain state and provide a more seamless user experience.
localStorage
Persistence:
Data stored in localStorage persists indefinitely. It remains on the user's computer even after the browser tab or window is closed, and it is available across multiple sessions and tabs of the same origin.
Scope:
Data is scoped to the origin (domain, protocol, and port). This means data stored by one origin is accessible by all pages and tabs from that same origin.
Capacity:
Typically offers a larger storage capacity compared to sessionStorage, often around 5-10 MB per origin.
Use Cases:
Suitable for storing data that needs to be available across different user sessions, such as user preferences, saved application state, or cached data.
sessionStorage
Persistence:
Data stored in sessionStorage is temporary and exists only for the duration of a single "session." A session typically lasts as long as the browser tab or window is open. The data is cleared when the tab or window is closed.
Scope:
Data is scoped to both the origin and the specific browser tab or window. This means data in one tab is not accessible by another tab, even if they are from the same origin.
Capacity:
Generally has a smaller storage capacity than localStorage, often around 5 MB per origin.
Use Cases:
Ideal for storing temporary data related to the current user session, such as form data during a multi-step process, temporary UI settings, or user input that should not persist after the tab is closed.
