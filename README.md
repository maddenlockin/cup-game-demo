![wireframe of shell game with html elements outlined](/assets/wireframe.png)

HTML

-   shell image, pearl, button for each shell
-   spans for win count, total, loss

State

-   wins
-   totals
-   losses (derived state)

Events

-   button click
    -   generate a random number between 1 and 3
    -   compare number and shell
        -   if same? wins ++
    -   increment total every time
