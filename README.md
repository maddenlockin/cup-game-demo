![wireframe of shell game with html elements identified](/assets/Screen%20Shot%202022-10-29%20at%204.23.52%20PM.png)

HTML

-   h2
-   section
    -   3 divs
        -   each with img
        -   hidden div
        -   button
-   section
    -   3 divs
        -   inline span

STATE

-   wins
-   total
-   losses (derived state)

EVENTS

-   button clicks (user guesses)
    -   increment the total guesses
    -   generate random location (number between 1 and 3)
    -   take that location and add the reveal class to it & increment wins if that was the users guess
    -   remove reveal class on all shells
