// reverse a linked List

// const reverseList = head => {
//     if (head === null || head.next === null)   return head;
//     let prev = null;  // this will be new tail
//     let curr = head;
//     while(curr !== null) {
//         let nextTemp = curr.next;   // temp variable
//         curr.next = prev;   // redirect curr next
//         prev = curr;   // move prev down list (to right)
//         curr = nextTemp;   // move curr down list (to right)
//     }
//     return prev;   // will return list in reverse
// }

// A - B - C - D

const reverseList = (head) => {
  if (head === null || head.next === null) return head;
  let curr = head;
  let prev;

  while (curr !== null) {
    let temp = curr.next;
    prev = curr; // A, B
    curr = head.next; // B, C
    curr.next = prev; // C - B - A
  }

  return curr;
};

const reverseListRec = (head) => {
    /* - in addition to filtering, also acts as base case for below recursion */
    if (head === null || head.next === null) return head;

	/* - traverses to end of list
    // - base case (previous line) reached when head next equals null */
    let reversed = reverseList(head.next);

    /* - redirects current node's next next back to itself */
	head.next.next = head;

    /* - sets current node's next to null
    // - gets replaced by previous line as recursion progesses */
    head.next = null;

    return reversed;
}

// A - B - C - D - E - F
