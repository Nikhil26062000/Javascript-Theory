/*

Debouncing and throttling are both techniques used in JavaScript to limit the number of times a function gets called under certain conditions, typically in response to events like scrolling, resizing, or typing.

Debouncing:

Debouncing is a technique used to ensure that a function is not called too frequently, especially when it's attached to an event that fires rapidly (such as window resizing or keystrokes).
When an event occurs, the debounced function will wait for a specified period of "quiet" time (a pause) before executing. If another event occurs within that quiet time, the timer is reset, and the countdown starts again.
The function will only be executed once the quiet time period has elapsed without any new events occurring.
Debouncing is useful for scenarios where you want to delay the execution of a function until after the user has stopped performing a particular action, like typing in an input field or scrolling through a webpage.
Throttling:

Throttling is a technique used to ensure that a function is not executed more than once in a certain window of time, regardless of how many times the event occurs.
When an event occurs, the throttled function will be executed at most once during a specified time interval.
Subsequent calls to the throttled function within the time interval are ignored until the interval has passed.
Throttling is useful for scenarios where you want to limit the rate at which a function is called, such as handling frequent scroll events or preventing excessive API requests.
In summary, debouncing delays the execution of a function until after a pause in events, while throttling limits the frequency of function execution within a specified time interval. Both techniques help optimize performance and prevent unnecessary resource consumption in event-driven JavaScript applications.


*/