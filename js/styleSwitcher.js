

// Style Switcher JS
  const links = document.querySelectorAll(".alternate-style"),
        totalLinks = links.length;

function setActiveStyle(color){
	for (let i=0; i<totalLinks; i++) {
		if(color === links[i].getAttribute("title")){
			links[i].removeAttribute("disabled");//Disabled is an attribue assigned to every links of colourstyles if (color) === Link ke title ka color remove attribute disabled
		} 
		else{
			links[i].setAttribute("disabled",true);
		}
	}
}

// body skin

   const bodySkin = document.querySelectorAll(".body-skin"),
         totalBodySkin = bodySkin.length;


      for(let i=0; i<totalBodySkin;i++){
      	bodySkin[i].addEventListener("change",function(){
      		//console.log(this.value) to know which skin is there do this this.value gives the direct skin light or dark //Always console log best techique it is
      		if(this.value === "dark"){
      			document.body.className="dark"; //Add the the dark class when the value clicked on dark
      		}
      		else{
      			document.body.className="";     //Add No Class when Light
      		}
      	})
      }








document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{
	document.querySelector(".style-switcher").classList.toggle("open");
})