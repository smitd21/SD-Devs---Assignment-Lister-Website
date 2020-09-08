// Portfolio Item Filter


const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,        //List buttons
      totalFilterBtn= filterBtns.length,      portfolioItems = document.querySelectorAll(".portfolio-item");      //List Portfolio Items 
      totalPortfolioItem = portfolioItems.length;


      for(let i=0; i<totalFilterBtn; i++){
      	filterBtns[i].addEventListener("click",function(){
      		filterContainer.querySelector(".active").classList.remove("active");  //To Remove Pink
      		//console.log(this.innerHTML);
      		this.classList.add("active");               //When clicked turn pink



      		const filterValue = this.getAttribute("data-filter");      //From the data-filter it picks       filterValue = Value of Data i.e  WebDesign or Projects or Internship
      		//console.log("filterValue");                                //Count on the number of potfolio images


      		for(let k=0; k<totalPortfolioItem;k++){                     
      			if(filterValue ===  portfolioItems[k].getAttribute("data-category")){             //filterValue = Value of Data i.e  WebDesign or Projects or Internship then add Show class and remove Hide class
      				portfolioItems[k].classList.remove("hide");
      				portfolioItems[k].classList.add("show");
      			} 
      			else {                                                                            
      				portfolioItems[k].classList.remove("show");                                      //filterValue not equals Value of Data i.e  WebDesign or Projects or Internship then add Hide Class and remove Show Class
      				portfolioItems[k].classList.add("hide");
      			}
      			 if(filterValue === "all"){                                                       //For all you've to add show class everywhere
      			 	portfolioItems[k].classList.remove("hide")
      				portfolioItems[k].classList.add("show");
      			}
      		}   
      	



      	})
      }  



// Portfolio Lightbox

const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex= 0;

for(let i = 0; i<totalPortfolioItem; i++){
	portfolioItems[i].addEventListener("click",function(){
		itemIndex=i;
		changeItem();
		toggleLightbox();
	})
}


function nextItem(){
	if(itemIndex === totalPortfolioItem-1){
		itemIndex=0;
	}
	else{
		itemIndex++;
	}
	//console.log(itemIndex);
	changeItem();
}
function prevItem(){
	if(itemIndex === 0){
		itemIndex = totalPortfolioItem-1;
	}
	else{
		itemIndex--;
	}
	//console.log(itemIndex);
	changeItem();
}


function toggleLightbox(){
	lightbox.classList.toggle("open");
}


function changeItem(){
	imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
	lightboxImg.src = imgSrc;
	lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;  // Niche Ka caption Web Design or Projects or Internships
	lightboxCounter.innerHTML = (itemIndex+1) + "of" + totalPortfolioItem;     //1 of 6   itemIndex+1 bcoz it will start from 0 and we want to start from 1
}

// Close Lightbox

lightbox.addEventListener("click",function(){
	if(event.target === lightboxClose || lightboxClose === event.target){      //Open hogaa toh toggle se it'll close
		toggleLightbox();
	}
})

