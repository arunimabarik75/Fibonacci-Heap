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
function insertion(val , mini , chi) {
  let new_node = new Node();
  new_node.key = val;
  new_node.parent = null;
  new_node.child = chi;
  new_node.left = new_node;
  new_node.right = new_node;
  new_node.degree = 0;

  next = mini
  console.log(mini)
  if(mini.key == -1)
  {
    mini = new_node;
    return mini;
  }
  // done = false;
  // while(next.key < val && (next != mini || done === false))
  // {
  //   console.log("hi");
  //   done = true;
  //   next = next.right;
  // }
    next.left.right = new_node;
    new_node.right = next;
    new_node.left = next.left;
    next.left = new_node;
    if(mini.key > new_node.key)
    {
        mini = new_node;
      }
    return mini;
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
    ctx.arc(x, y - 100, 20, 0, 2 * Math.PI);
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("MIN", x + 1, y + 2 - 100);
    ctx.stroke()
    // console.log("Hi")

    drawArrow(ctx , x ,y - 100 + 24 , x , y - 24 , 0.8)
    createRectangle()
}

function createLink(x , y , x1 , y1)
{
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

// Function to display the heap
function display(mini , extra , first , parx , pary , obj) {
  let ptr = mini;
  if (ptr === null) {
    console.log("The Heap is Empty");
  } else {
    console.log("The root nodes of Heap are: ");
    // showMin()

    // console.log(ptr.key.toString());
    // redrawInsertion(ptr.key.toString() , 0)
    // ptr = ptr.right;
    // if (ptr !== mini) {
      //   console.log("-->");
      // }
      
    var done = false
    while ((ptr !== mini || done === false) && ptr.right !== null) {
      console.log(ptr.key.toString());
      console.log("hi1")
      curr = ptr
      
      var objects = []
      while(curr.child !== null)
      {
        console.log("hi2")
        curr = curr.child;
        display(curr.left , extra + 75 , false , x , y , objects)
        x -= 75;
        // redrawInsertion(curr.key.toString() , 50)
        for(var i = 0 ; i < objects.length ; i++)
        {
          // console.log(obj[i])
        
          createLink(objects[i] , y + 54 + extra  , x , y + extra + 18 , objects)
        }
      }
      console.log(first)
      console.log(done)
      console.log(ptr.key)
      if(done === false && first === true){
        console.log("Gone")
        showMin()
      }
      console.log(obj)
      obj.push(x)
      redrawInsertion(ptr.key.toString() , extra , parx , pary)
      done = true
      
      if(first == false)
      {
        ptr = ptr.left;
      }
      else
      {
        ptr = ptr.right;
      }
    }
    console.log("<br>");
    console.log(`The heap has ${no_of_nodes} nodes<br>`);
  }
}

// Function to find min node in the heap
function find_min() {
  var curr = mini;
  var first = mini;
  var done = true;
  while(curr !== null && (curr !== first || done === true))
  {
    done = false;
    if(curr.key < mini.key)
    {
      mini = curr;
    }
    curr = curr.right;
  }
}

// Driver code

var x;
var y;


function initParam()
{
    x = 95
    y = 300
}

function redrawInsertion(num , extra , xside , yside)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y + extra, 20, 0, 2 * Math.PI);
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    console.log("extra" + extra)
    ctx.fillText(num, x , y + 5 + extra);
    ctx.stroke()
    // createLink(x, yside , x - 20 , y + extra)
    x += 75;
    
}

function staticList()
{

    let new_node = new Node();
    new_node.key = 8;
    new_node.parent = mini;
    new_node.child = null;
    new_node.left = new_node;
    new_node.right = new_node;
    new_node.degree = 0;
    mini.child = new_node;
    new_node.parent = mini;

    let new_node1 = new Node();
    new_node1.key = 7;
    new_node1.parent = mini;
    new_node1.child = null;
    new_node1.left = new_node;
    new_node1.right = new_node;
    new_node1.degree = 1;

    new_node.right = new_node1;
    new_node1.right = new_node;
    new_node1.left = new_node;
    new_node.left = new_node1

    let new_node2 = new Node();
    new_node2.key = 6;
    new_node2.parent = mini;
    new_node2.child = null;
    new_node2.left = new_node2;
    new_node2.right = new_node2;
    new_node2.degree = 0;

    new_node1.child = new_node2;
    new_node2.parent = new_node1;

    let new_node3 = new Node();
    new_node3.key = 5;
    new_node3.parent = mini;
    new_node3.child = null;
    new_node3.left = new_node;
    new_node3.right = new_node;
    new_node3.degree = 2;
    new_node.right = new_node1;
    new_node1.right = new_node3;
    new_node1.left = new_node;
    new_node.left = new_node3
    new_node3.right = new_node;
    new_node3.left = new_node1;

    let new_node4 = new Node();
    new_node4.key = 4;
    new_node4.parent = mini;
    new_node4.child = null;
    new_node4.left = new_node4;
    new_node4.right = new_node4;
    new_node4.degree = 0;

    new_node3.child = new_node4;
    new_node4.parent = new_node3;

    
    let new_node5 = new Node();
    new_node5.key = 3;
    new_node5.parent = mini;
    new_node5.child = null;
    new_node5.left = new_node2;
    new_node5.right = new_node2;
    new_node5.degree = 1;
    
    new_node4.right = new_node5;
    new_node5.right = new_node4;
    new_node5.left = new_node4;
    new_node4.left = new_node5;
    
    let new_node6 = new Node();
    new_node6.key = 2;
    new_node6.parent = mini;
    new_node6.child = null;
    new_node6.left = new_node6;
    new_node6.right = new_node6;
    new_node6.degree = 0;

    new_node5.child = new_node6;
    new_node6.parent = new_node5;
    

    let new_node7 = new Node();
    new_node7.key = 10;
    new_node7.parent = mini.right;
    new_node7.child = null;
    new_node7.left = new_node7;
    new_node7.right = new_node7;
    new_node7.degree = 0;
    mini.right.child = new_node7;
    new_node7.parent.degree++;
    console.log("hello")
    clearCanvas()
    initParam()
    var objects = []
    display(mini , 0 , true , x , y , objects)
}


function create_node(){
    var obj = document.getElementById('insert').value;
    no_of_nodes++;
    clearCanvas()
    initParam()
    // mini = new Node()
    mini = insertion(Number(obj) , mini , null)
    console.log(mini)
    var objects = []
    display(mini , 0 , true , x , y , objects)
    find_min(mini)
    if(no_of_nodes == 3) staticList()
}

function clearCanvas()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function unionList(other)
{
    var curr1 = mini;
    var first1 = mini;
    var first2 = other;
    var curr2 = other;
    var newlist = new Node();
    var done1 = false , done2 = false;
    while((curr1.right != first1 || done1 == false) && (done2 == false || curr2.right != first2))
    {
      console.log("count")
      if(curr1.degree <= curr2.degree){
        console.log(curr1.degree)
        console.log(" = ")
        console.log(curr1.key , curr2.key)
        console.log(curr2.degree)
        done1 = true;
        newlist = insertion(curr1.key , newlist , curr1.child)
        curr1 = curr1.right;
      }
      else
      {
        console.log(curr1.degree)
        console.log(curr1.key , curr2.key)
        console.log("sec = ")
        console.log(curr2.degree)
          // console.log(curr2)
          done2 = true;
          newlist = insertion(curr2.key , newlist , curr2.child)
          curr2 = curr2.right;
      }
    }
    while(curr1 != first1)
    {
      newlist = insertion(curr1.key , newlist , curr1.child);
      curr1 = curr1.right;
    }
    while(curr2 != first2 || done2 == false)
    {
      done2 = true;
      newlist = insertion(curr2.key , newlist , curr2.child);
      curr2 = curr2.right;
    }
    console.log(newlist)
    mini = newlist;
    find_min();
    var objects = []
    clearCanvas()
    initParam()
    display(mini , 0 , true , x , y , objects)
    find_min()
}



function extractMin()
{
    var newList
    find_min();
    if(mini.child === null) 
    {
      if(mini.right === mini)
      {
        mini = null;
      }
      else
      {
        mini.right.left = mini.left;
        mini.left.right = mini.right;
        mini = mini.right;
        find_min();
      }
     
    }
    else{
    newList = mini.child;
    if(mini.right != mini)
    {
        mini.right.left = mini.left;
        mini.left.right = mini.right;
        mini = mini.right;
        unionList(newList)
    }
    else
    {
      mini = null;
      unionList(newList)
    }
  }
    // var currList = mini;
    // var ok = false;
    // var occupied1 = null;
    // var occupied2 = null;
    // var occupied3 = null;
    // var occupied4 = null;
    // while(currList != mini || ok == false)
    // {
    //   console.log(currList)
    //   ok = true;
    //   if(currList.degree == 0)
    //   {
    //     if(occupied1 == null)
    //     {
    //       occupied1 = currList;
    //       currList = currList.right
    //     }
    //     else
    //     {
    //       if(occupied1.key < currList.key)
    //       {
    //         var temp = currList;
    //         currList = currList.right;
    //         temp.left.right = temp.right;
    //         temp.right.left = temp.left;
    //         occupied1.child = insertion(temp.key , occupied1.child , temp.child);
    //       }
    //       else
    //       {
    //         occupied1.left.right = occupied1.right;
    //         occupied1.right.left = occupied1.left;
    //         var temp = currList;
    //         currList = currList.right;
    //         temp.child = insertion(occupied1.key , temp.child , occupied1.child);
    //         occupied1 = temp;
    //       }
    //     }
    //   }
    //   // currList = currList.right
    // }

    var objects = []

    clearCanvas()
    initParam()
    display(mini , 0 , true , x , y , objects)
    find_min()
}

function createRectangle()
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = "1";  
  ctx.rect(390,50, 40, 40);
  ctx.rect(430,50, 40, 40);
  ctx.rect(470,50, 40, 40);
  ctx.rect(510,50, 40, 40);
  ctx.rect(550,50, 40, 40);
  ctx.stroke();
}