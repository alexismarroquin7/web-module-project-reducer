# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* dispatch() returns action creator
* action creator `addOne()` invoked
* reducer updates state
* render
* TotalDisplay shows the total plus 1.
