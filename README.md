## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

## HTML Setup
- 3 image tags
 - Why? to show the user the correct cup
 - How? `cupImg.src = 'assets/cup-with-ball.png`
- 3 "destination" elements 
 - Why? To show the user the wins, losses, and total state as they change
 - How? `winsEl.textContent = winCount`
- 3 buttons
  - Why? To let the user make a guess
  - How? `button.addEventListener('click', () => {})`

## State
wins = 0
total = 0
<!-- DERIVED STATE: losses = total - wins -->

## Events -- this is the hard part
- User clicks one of the buttons
  - (address the "every cup has a ball" problem)
  - increment total
  - did the user guess the correct cup?
    - the app needs to decide which one is correct
    - if so, increment the wins
  - update the DOM to show two things:
    - the correct cup image element should update
    - the wins, losses, and total elements show update