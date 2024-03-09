var getIntersectionNode = function(headA, headB) {
    // Helper function to find the length of a linked list
    const getLength = function(head) {
        let length = 0;
        while (head) {
            length++;
            head = head.next;
        }
        return length;
    };
    
    // Get the lengths of both linked lists and their last nodes
    let lengthA = getLength(headA);
    let lengthB = getLength(headB);
    let currA = headA;
    let currB = headB;
    
    // Traverse the longer list to make them equidistant from the intersection point
    while (lengthA > lengthB) {
        currA = currA.next;
        lengthA--;
    }
    while (lengthB > lengthA) {
        currB = currB.next;
        lengthB--;
    }
    
    // Traverse both lists until they intersect or reach the end
    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }
    
    // Return the intersection node or null if no intersection
    return currA;
};
