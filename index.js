
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween:20,
    speed:1000,
    mousewheel: {
        invert: true,
      },
    autoplay:true,

      //Swiper Style Effect
      // effect: "coverflow",
      // coverflowEffect: {
      //   rotate: 20,
      //   stretch: 0,
      //   depth: 10,
      //   modifier: 1,
      //   slideShadows: false,
      // },

    centerMode:true,  
    clickable: true,
    // centeredSlides: true, Overflow Style 

    
    //Cusor Pointer
    grabCursor:true,   
    
    nested:true,
     
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },


    //Responsive Breakpoints

    breakpoints: {
      //Max-width
      1400: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    }

  });

 



//Accordion JS

let accorHeader = document.querySelectorAll(".accor-header");
let accorBody = document.querySelectorAll(".accor-body");

accorHeader.forEach((item) => {
    item.addEventListener("click",()=> {
        accorBody.forEach((body)=> {
            if(body.classList.contains("show") && body !== item.nextElementSibling){
              body.classList.remove("show");
              body.previousElementSibling.children[1].classList.remove("reverse-arrow");
            }
        })
        item.nextElementSibling.classList.toggle("show");
        item.children[1].classList.toggle("reverse-arrow");
    })
})





//////Tabs Indicator and Tab Operations

let tabIndicator = document.querySelector(".tab-indicator");
let list_item = document.querySelectorAll(".tab-bar li");
tabIndicator.style.width = list_item[0].offsetWidth + "px";
tabIndicator.style.left = list_item[0].offsetLeft + "px";
list_item.forEach((li) => {
  li.addEventListener(("click"),()=> {
    let left = li.offsetLeft;
    let width = li.offsetWidth;
    tabIndicator.style.width = width + "px";
    tabIndicator.style.left = left + "px";
  })
})



let tab_title = document.querySelectorAll(".tab-header li");
let tab_content = document.querySelectorAll(".tab-content");

function openCity(e, id) {

  tab_content.forEach((content)=> {
    content.classList.remove("active");
    if(content.id === id){
      content.classList.add("active");
      
      tab_title.forEach((b)=> {
        b.classList.remove("active");
        if(b.id === id) {
          b.classList.add("active");
        }
      })

    }
  })
}

tab_title.forEach((title)=> {
    title.addEventListener("click",(e)=> {
      openCity(e,title.id);
    })
})
