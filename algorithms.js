// Algorithms 

class Node {
  constructor() {
    this.key = Number.MAX_VALUE;
    this.parent = null; 
    this.degree = 0;
    this.mark = 0;
    this.child = null; 
    this.left = null;
    this.right = null;
  }
}

// Root node
let root = new Node();

// Minimum node
let min_node = new Node();

// Number of nodes in the heap
let num_nodes = 0;

// Function to insert a node in heap
function insert_in_heap(val) {
  let new_node = new Node();
  new_node.key = val;
  new_node.parent = null;
  new_node.child = null;
  new_node.left = new_node;
  new_node.right = new_node;
  new_node.degree = 0;

  // Empty list
  if (root.key===Number.MAX_VALUE)
  {
    root = new_node;
    min_node = root;
    return;
  }

  // insert at head
  if (root.key >= val)
  {
    console.log("here");
    new_node.left = root.left;
    root.left.right = new_node;
    new_node.right = root;
    root.left = new_node;
    root = min_node = new_node;

    return;
  }
  
  let temp = root;

  while (temp.right != root && temp.right.key <= val)
  {
    temp = temp.right;
  }

  console.log("add here : ", temp.key)

  new_node.right = temp.right;
  temp.right.left = new_node;
  temp.right = new_node;
  new_node.left = temp;

  min_node = root;
}

function return_min()
{
  return min_node.key;
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

// Functions to visualise the heap

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
    console.log(`The heap has ${num_nodes} nodes<br>`);
  }
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

function clearCanvas()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function insert_in_heap_visualise(){
    var obj = document.getElementById('insert').value;
    num_nodes++;
    clearCanvas()
    initParam()
    insert_in_heap(Number(obj))
    display(root)
    
}
