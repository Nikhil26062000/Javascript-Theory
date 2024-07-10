
//! Bubbling example


// document.querySelector("#grand").addEventListener( "click", function(){
//    console.log("Grand Clicked");
// },false);


// document.querySelector("#parent").addEventListener( "click", function(){
//    console.log("Parent Clicked");
// },false);


// document.querySelector("#child").addEventListener( "click", function(e){
//    console.log("child Clicked");
//e.stopPropogation() // it will not bubble up
// },false);

//* if we dont pass 3rd arguement in addEventListener by default it treats it as false.


//! Capturing example/trickling example
document.querySelector("#grand").addEventListener( "click", function(e){
   console.log("Grand Clicked");
   // e.stopPropagation() // it will not go down
},true);


document.querySelector("#parent").addEventListener( "click", function(){
   console.log("Parent Clicked");
},true);


document.querySelector("#child").addEventListener( "click", function(){
   console.log("child Clicked");
},true);


/*



Event bubbling and event capturing are two phases of event propagation in the DOM (Document Object Model) of HTML. They describe how events are propagated through nested elements in the DOM hierarchy.

Event Capturing (or capturing phase):

During the capturing phase, the event is captured by the outermost ancestor element and then propagates down the DOM hierarchy to the target element.
Event capturing is initiated from the top-most ancestor element (usually the <html> element) and moves down the DOM tree towards the target element.
In the capturing phase, the event handlers registered on ancestor elements are triggered first before the event reaches the target element.
Event capturing is less commonly used in practice and is mainly included in the DOM specification for completeness.
Event Bubbling (or bubbling phase):

During the bubbling phase, the event is first handled by the target element and then propagates up the DOM hierarchy through its ancestors.
Event bubbling starts from the target element and moves upwards through its ancestor elements until it reaches the top-most ancestor element (usually the <html> or <body> element).
In the bubbling phase, the event handlers registered on the target element are triggered first, followed by event handlers on ancestor elements.
Event bubbling is the default behavior for most events in the DOM.

Here's a visual representation of event propagation:



   +-------------------+
   |    Ancestor 3     |
   |  (Capturing Phase)|
   +-------------------+
   |    Ancestor 2     |
   |  (Capturing Phase)|
   +-------------------+
   |    Ancestor 1     |
   |  (Capturing Phase)|
   +-------------------+
   |    Target Element |
   |      (Event)      |
   +-------------------+
   |    Ancestor 1     |
   |   (Bubbling Phase)|
   +-------------------+
   |    Ancestor 2     |
   |   (Bubbling Phase)|
   +-------------------+
   |    Ancestor 3     |
   |   (Bubbling Phase)|
   +-------------------+


In summary, event capturing involves the downward propagation of events from ancestors to the target element, while event bubbling involves the upward propagation of events from the target element to its ancestors. Event bubbling is the more commonly used mechanism in practice. However, both capturing and bubbling can be utilized depending on the specific requirements of the application.

*/