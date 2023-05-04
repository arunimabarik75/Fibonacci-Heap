// JavaScript program to demonstrate building
// and inserting in a Fibonacci heap

class Node {
  constructor() {
    this.parent = null; // Assign data
    this.child = null; // Initialize next as null
    this.left = null;
    this.right = null;
    this.key = -1;
    this.degree = 0;
  }
}

// Creating min pointer as "mini"
let mini = new Node();

// Declare an integer for number of nodes in the heap
let no_of_nodes = 0;

// Function to insert a node in heap
function insertion(val) {
  let new_node = new Node();
  new_node.key = val;
  new_node.parent = null;
  new_node.child = null;
  new_node.left = new_node;
  new_node.right = new_node;
  new_node.degree = 0;

  next = mini
  if(mini.key == -1)
  {
    mini = new_node;
    return;
  }
  done = false;
  while(next.key < val && (next != mini || done === false))
  {
    console.log("hi");
    done = true;
    next = next.right;
  }
    next.left.right = new_node;
    new_node.right = next;
    new_node.left = next.left;
    next.left = new_node;
    if(mini.key > new_node.key)
    {
        mini = new_node;
        console.log(mini.key)
    }
}

const drawArrow = (context, x1, y1, x2, y2, t = 0.9) => {
 
    const arrow = {
      dx: x2 - x1,
      dy: y2 - y1
  };
    const middle = {
      x: arrow.dx * t + x1,
      y: arrow.dy * t + y1
  };
  const tip = {
      dx: x2 - middle.x,
      dy: y2 - middle.y
  };
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(middle.x, middle.y);
    context.moveTo(middle.x + 0.5 * tip.dy, middle.y - 0.5 * tip.dx);
  context.lineTo(middle.x - 0.5 * tip.dy, middle.y + 0.5 * tip.dx);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
};

  
// Usage example:
  

function showMin()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 75, 20, 0, 2 * Math.PI);
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("MIN", 96, 80);
    ctx.stroke()
    // console.log("Hi")

    drawArrow(ctx , 95 , 75 + 24 , x , y - 24 , 0.8)
}

// Function to display the heap
function display(mini) {
  let ptr = mini;
  if (ptr === null) {
    console.log("The Heap is Empty");
  } else {
    console.log("The root nodes of Heap are: ");
    showMin()

    console.log(ptr.key.toString());
    redrawInsertion(ptr.key.toString())
    ptr = ptr.right;
    if (ptr !== mini) {
      console.log("-->");
    }

    while (ptr !== mini && ptr.right !== null) {
      console.log(ptr.key.toString());
      redrawInsertion(ptr.key.toString())
      ptr = ptr.right;
      if (ptr !== mini) {
        console.log("-->");
      }
    }
    console.log("<br>");
    console.log(`The heap has ${no_of_nodes} nodes<br>`);
  }
}

// Function to find min node in the heap
function find_min(mini) {
  console.log(`min of heap is: ${mini.key}<br>`);
}

// Driver code

var x;
var y;

var objects = []

function initParam()
{
    x = 95
    y = 150
}

function redrawInsertion(num)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(num, x , y + 5);
    x += 50;
    ctx.stroke()
    
}

function staticList()
{
    insertion(10)
    insertion(1)
    insertion(5)
    insertion(4)
}


function create_node(){
    var obj = document.getElementById('insert').value;
    no_of_nodes++;
    clearCanvas()
    initParam()
    insertion(Number(obj))
    display(mini)
    find_min(mini)

}

function clearCanvas()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function unionList(other)
{
    curr1 = mini;
    curr2 = other;
    newlist = null
    if(curr2.degree < curr1.degree)
    {
        if(newlist == null)
        {
            newlist = curr2;
            curr2 = curr2.right;
        }
        else
        {
            newlist.right = curr2;
            newlist = newlist.right;
        }
    }
    else
    {
        if(newlist == null)
        {
            newlist = curr1;
            curr1 = curr1.right;
        }
        else
        {
            newlist.right = curr2;
            newlist = newlist.right;
        }
    }
    console.log(newlist)
}

function extractMin()
{

}