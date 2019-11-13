var root = document.getElementById('text');
// replace url with your API endpoint


//do stuff w JSON data here

//var img = document.createElement('IMG');
var listH1 = [];
var descs = [];
var titles = [];
var dates = [];
var links = [];
var imgs = [];

var container = document.createElement('div');
root.appendChild(container);



for (k = 0; k < cats.length;k++){

var attr4 = document.createAttribute("class");
attr4.value = myModal +  cats[k].title.replace(/ /g,'').replace(/,/g,'').replace(/!/g,'').replace(/'/g,'');

	//img.src = cards[k].imageUrl;
var card = document.createElement('div');
var h1 = document.createElement('h1');
var h4 = document.createElement('h4');
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');
var cont = document.createElement('div');
var span = document.createElement("span");

	console.log(cats[k].title);
	h1.textContent = cats[k].title;
	listH1.push(cats[k].title);

	span.textContent = "&times;";
	h2.textContent = cats[k].description;
	descs.push(cats[k].description);
  titles.push(cats[k].title);
  dates.push(cats[k].date);
  links.push(cats[k].links);
  imgs.push(cats[k].imgs);

	var mystring = "filterDiv ";
	for (y=0; y< cats[k].tags.length; y ++ ){
		 mystring += cats[k].tags[y] + " ";

	}
	  var attr = document.createAttribute("class");
	  var attr2 = document.createAttribute("class");
	  var attr3 = document.createAttribute("class");

  attr.value = mystring;


  h1.setAttributeNode(attr); 
  h1.onclick=function() {Meonclick(this)};
  cont.setAttributeNode(attr2);
  span.setAttributeNode(attr3);

  h1.textContent = "▶ " + h1.textContent;
  container.appendChild(h1);


		//var attr = document.createAttribute("class");
		//attr.value = mystring;
		//card.setAttributeNode(attr);
	//	container.appendChildNode(card);

	//	container.appendChild(cats[k]);

		//container.appendChild(img);
//	container.appendChild(h1);
	//	container.appendChild(h3);

}
  function Meonclick(ele){
  	console.log(ele);
  	for ( z =0 ; z < listH1.length; z++){
  		if (ele.textContent.substr(2) == listH1[z]){
  			modalContentDes.textContent = descs[z];
        modalContentTit.textContent = titles[z];
        modalContentDate.textContent = dates[z];
        modalContentLinks.textContent = "";
        for (j =0; j < links[z].length; j++){
          var a1 = document.createElement('a');
          var b1 = document.createElement('br');

          a1.textContent = "link " + parseInt(j+1) ;
          a1.target = "_new";
          a1.href = links[z][j];

          modalContentLinks.appendChild(a1);
                    modalContentLinks.appendChild(b1);

        }
         modalContentImgs.textContent = "";
        for (i =0; i < imgs[z].length; i++){
          var im = document.createElement('img');
          var b1 = document.createElement('br');

          im.src = imgs[z][i];

          modalContentImgs.appendChild(im);
                    modalContentImgs.appendChild(b1);

        }
  			modal.style.display = "block";

  		}
  	}
  	//modal.style.display = "block";
  }


var modal = document.getElementById("myModal");
var modalContentTit = document.getElementById("title");
var modalContentDate = document.getElementById("date");
var modalContentLinks = document.getElementById("links");
var modalContentImgs = document.getElementById("imgTags");

var modalContentDes = document.getElementById("descriptor");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}





