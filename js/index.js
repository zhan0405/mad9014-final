var myList = [];


document.addEventListener("DOMContentLoaded", function(ev){
  //this runs when the page loads
  
  if(localStorage.getItem("November-list")){
    myList = JSON.parse(localStorage.getItem("November-list"));
    //convert from String to Array
  }
  
  showList();
  
  document.querySelector("#btnAdd").addEventListener("click", function(ev){
    ev.preventDefault();
    var newItem = document.querySelector("#item").value;
	
	if(newItem.trim()!=""){
		 myList.push( newItem );
    	localStorage.setItem("November-list", JSON.stringify(myList) );
   
		}
	
	else{
		alert("nothing to add");
		}
    //convert from Array to String.
    showList();
    return false;
  });
  
  
  //document.myForm.addEventListener("submit", function(ev){});
});

function removeItem(ev){
	
  //this.firstChild.nodeValue
  //ev.currentTarget.firstChild - the textNode inside the paragraph
  //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
  var txt = ev.currentTarget.parentNode.firstChild.innerHTML;
  for(var i=0;i<myList.length;i++){
  	if(myList[i] == txt){
      //found the match
      myList.splice(i, 1);
    }
  }
  localStorage.setItem("November-list", JSON.stringify(myList) );
  showList();
}

function showList(){
  var output = document.querySelector(".output");
  output.innerHTML = "";
  for(var i=0;i<myList.length;i++){
	
	var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML = myList[i];
	div.appendChild(p);
    var CB = document.createElement("INPUT");
    CB.setAttribute("type", "checkbox");
    div.appendChild(CB);
	
	var btn = document.createElement("BUTTON");        
	var t = document.createTextNode("DELETE");       
	btn.appendChild(t);
	btn.addEventListener("click", removeItem);
	div.appendChild(btn);
   
   
    output.appendChild(div);
    //btn.addEventListener("click", removeItem);
  }
}