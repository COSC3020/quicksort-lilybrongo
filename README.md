# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Constant time: Swap function calls, variable initialization, and if's

The worst-case scenerio would be if the input was in reversed order. This would be the worst case because the pivot is considered the first element, so each element in the array would need to be moved increasing the run time of this algorithm. SInce the for loop and the while loop both have an iteration that are nested the runtime instead of just $n$, the number of elements that have to move, would be $n^2$ since now we have to look at the n amount of times and the n number of elements. After this the $\Theta$ bound for this implementations worst-case runtime would be $\Theta(n^2)$

Referenced class lecture slides and videos to understand quicksort as well as its worse case scenerio. Referenced geeks for geeks: https://www.geeksforgeeks.org/quick-sort-algorithm/
to get a more in depth understanding of the algorithm itself. Communicated with students Daniel Collins and WIll Greiner. 

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.

