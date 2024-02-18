
document.querySelector("#category").addEventListener("click", function(e){
    console.log("Category clicked");
    if(e.target.tagName==='LI'){
        window.location.href="/"+e.target.id
    }
})

//----------------- another example of event delegation -----------------

document.querySelector("#form").addEventListener("keyup", function(e){
    console.log(e)
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase()
    }
})

//! not all event bubble up or propogates up to hirerachy. this is the disadvantage of event delagation

/*
Event delegation is a technique in JavaScript where instead of attaching event listeners directly to individual elements, you attach a single event listener to a common ancestor element. This ancestor element then listens for events that bubble up from the descendant elements. When an event occurs, the event listener checks the target of the event to determine which specific descendant element triggered the event and then executes the appropriate code.

Event delegation is particularly useful in scenarios where you have a large number of similar elements or dynamically generated elements, as it reduces the number of event listeners and can improve performance.

Advantages:
    -Improved Performance
    -Simplicity
    -Memory Efficiency
*/




//! ------------- all above code is same explained by ChatGPT----------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     // Event listener for the category list
//     document.querySelector("#category").addEventListener("click", function(e) {
//         console.log("Category clicked");
//         if (e.target.tagName === 'LI') {
//             window.location.href = "/" + e.target.id;
//         }
//     });

//     // Event listener for the form inputs
//     document.querySelector("#form").addEventListener("keyup", function(e) {
//         console.log(e);
//         if (e.target.dataset.uppercase !== undefined) {
//             e.target.value = e.target.value.toUpperCase();
//         }
//     });
// });

//*it's advisable to wrap your JavaScript code inside a DOMContentLoaded event listener to ensure that the DOM is fully loaded before attempting to access and manipulate elements.