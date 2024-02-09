//!  BROWSER -> JS ENGINE -> CALL STACK

//* Call Stack is a mechanism used by JavaScript engines to execute code in synchronous way. It's like a stack of plates where each plate represents an action that needs to be performed

//* Below are the super powers which browser have .they are part of browser and not js . These are Web APIs.
// - setTimeout()
// - DOM APIs
// - fetch()
// - localStorage
// - console
// - location

//* There are lot of concept in event loop so dont miss the video
// - eventLoop
// - callback queue or task queue
// - microtask queue
// - Starvation

//! SetTimeout() :  It is a method provided by web apis to schedule function/callback after specific time delay but it is not always that if we hold func() for 5000 or 5sec then it will be called exactly after 5sec . it may be called after 10sec or 15 sec or as long as the call stack is not emppty .The reason is that until the call stack is not empty, it will not be called by event loop from callback queue to the call stack for execution.

//* example

function a() {
  console.log("a");
  setTimeout(function () {
    console.log("setTimeout");
  }, 0);
  console.log("b");
}

a();

/*
      In your case, when you call a(), the following sequence of events happens:

'a' is logged to the console.
setTimeout is called, and the callback function is scheduled to execute after 0 milliseconds. However, it doesn't execute immediately.
'b' is logged to the console.
The synchronous code execution of a() completes.
The event loop picks up the callback function scheduled by setTimeout and executes it, logging 'setTimeout' to the console.
So, even though the timeout is set to 0 milliseconds, it's still scheduled asynchronously and doesn't interrupt the synchronous flow of the code. As a result, 'setTimeout' is logged to the console after 'b'.
    */
