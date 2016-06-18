
#### Remembering what is known about recursion

##### Recursive functions call themselves -  
 a new call stack holding  params and local variables is created for each call

##### recursion vs iteration and how to draw a stack diagram  
 Stack diagram shows values of params and return address      

##### tail recursion
occurs when you return a recursive call and the compiler/interpreter optimizes by making it iterative - thereby saving space

#####  recursion
is not very efficient, especially in terms of space
the fibonacci is O(2^n) which is worse than n^2 in time but it is cleaner

##### recursion
has become popular in data science - google 'distributed recursion' to see latest developments in running recursion in the cloud
