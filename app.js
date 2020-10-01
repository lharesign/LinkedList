document.getElementById("output").innerHTML = "Linked List" + "<br>";

//Initialise an empty Linked List 
function LinkedList() {
    let count = 0;
    let head = null;

    //Function for returning Linked List count
    this.GetCount = function () {
        return count;
    }

    //Function for adding first item to Linked List
    this.AddFirst = function (data) {
        //Create node which takes data(provided in parameters of function)
        //and sets next to head
        let node = {
            data: data,
            next: head
        }
        //Head is assigned to the node as this is the first item (so head of list) 
        head = node;
        //Increment count so we can keep track of items in linked list
        count++;
    }

    //Function for adding subsequent items to Linked List
    this.Add = function (data, index) {
        //Check if called when Linked List is empty. If so, call add first and pass data to it
        if (index === 0) {
            this.AddFirst(data);
        } else if (index > -1 && index <= count) {
            //Else chcek that index is within range of 0 up to count
            //If it is, create node with data and next value null
            var node = {
                data: data,
                next: null
            }

            let previous;
            let current = head;
            let i = 0;

            //Traverse linked list from beginning until we reach the end
            while (i++ < index) {
                previous = current;
                current = current.next;
            }

            //Set 'next' value of previous node to this node and increment count
            previous.next = node;
            node.next = current;
            count++;

        } else {
            alert("Error: The specified index is outside the range of the linked list");
        }
    }

    //Function for displaying all data in linked list
    this.DisplayAll = function () {
        //If head is null, list is empty so do not continue
        if (head === null) {
            return null;
        } else {
            //Else create a new array to store data in and create current to start from head
            var arr = new Array();
            var current = head;

            //Loop through linked list, adding current.data as array item for returning
            for (let i = 0; i < count; i++) {
                arr[i] = current.data;
                current = current.next;
            }
            return arr;
        }
    }

    //Function for displaying data at user provided index
    this.DisplayAt = function (index) {
        //If head is null, list is empty so do not continue
        if (head === null) {
            return null;
        } else {
            //Else current = head and i = 0 so we can traverse
            //the linked list until we reach the user provided index
            let current = head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
            //Return the data at 'current'(now equal with index user provided)
            return current.data;
        }
    }

    //Function that removes the first item from the linked list 
    this.RemoveFirst = function () {
        //If head is null, list is empty so don't continue
        if (head === null) {
            return null;
        } else {
            //Else set the head to head.next and decrement count
            head = head.next;
            count--;
        }
    }

    //Function that removes the specified item from the linked list 
    this.RemoveAt = function (index) {
        //If head is null or index is out of range, return null
        if (head === null || (index <= -1 && index > count)) {
            return null;
        } else {
            //Else create current, previous, i variable to iterate through list 
            let current = head;
            let previous;
            let i = 0;

            //Iterate through list using while loop
            while (i < index) {

                //As we iterate through, previous = current and current = current.next
                //in order to keep track of items before and after the one we're looking for
                previous = current;
                current = current.next;
                i++
            }

            //Set previous.next (i.e. .next value of item before one we're removing from list)
            //to be current.next (i.e. item after one to be removed)
            //then decrement count  
            previous.next = current.next;
            count--;
        }
    }
}

let myList = new LinkedList();


myList.Add("Andrew", 0)
myList.Add("Bob", 1)
myList.Add("Claire", 2)
myList.Add("Davina", 3)
myList.Add("Edward", 4)
myList.Add("Fanny", 5)
myList.Add("George", 6)

document.getElementById("output").innerHTML = myList.DisplayAll();
document.getElementById("output").innerHTML += "<br>" + myList.DisplayAt(3);
myList.RemoveFirst();
document.getElementById("output").innerHTML += "<br>" + myList.DisplayAll();
myList.RemoveAt(3);
document.getElementById("output").innerHTML += "<br>" + myList.DisplayAll();