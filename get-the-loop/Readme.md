You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:

- See svg file for diagram

// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next
Notes:

do NOT mutate the nodes!
in some cases there may be only a loop, with no dangling piece