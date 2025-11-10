let currentSection = null;




function list(i,sections){

   if (currentSection) currentSection.classList.remove("active");
  currentSection = sections[parseInt(i)];
  currentSection.classList.add("active");
  
}

function add(){



}

document.addEventListener("DOMContentLoaded", function () {
  // --- Xử lý menu ---
  // const menu = document.querySelector(".Main-menu");
  // const arrmenu = menu.getElementsByTagName("button");

  // for (const i of arrmenu) {
  //   i.addEventListener("click", function () {
  //     button(this.value);
  //     choose = this.value;
  //   });
  // }



// xử lí mục lục

let sections = document.querySelectorAll("#main-contents .main-content");


  const menu = document.querySelector(".Main-menu2");
  const arrmenu = menu.getElementsByTagName("button");

  for (const i of arrmenu) {
    i.addEventListener("click", function () {
      list(this.value,sections);
      choose = this.value;
    });

    
  }


  // xử lí mục lục

  // --- Xử lý timeline ---
  const timeline = document.querySelector(".time-line");
  const events = document.querySelectorAll(".event");
  const container = document.querySelector("#timeline");
  const firstEvent = document.querySelector(".event");

  let currentIndex = 0;
  const visibleCount = 3;
  const total = events.length;
  let baseOffset = 0;

  



  // chooseContent

  let contenttimeline = document.querySelectorAll(".contentCol")
  //hiện thị sẵn
  contenttimeline[0].style.display = 'flex'

  function updateTimeline() {
    const moveOffset = currentIndex * -330; // độ dịch (px)
    timeline.style.transform = `translateX(${baseOffset + moveOffset}px)`;
    timeline.style.transition = "transform 0.5s ease";
  }
  function timelinecontent(index, total) {
    if (index == 0) {
      contenttimeline[total-1].style.display = 'None'
      contenttimeline[index].style.display = 'flex'
    } else {
      contenttimeline[index].style.display = 'flex'
      contenttimeline[index - 1].style.display = 'None'
    }
  }
  events.forEach((ev) => {
    ev.addEventListener("click", () => {
      if (currentIndex < total - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateTimeline();
      timelinecontent(currentIndex, total);
    });
  });

});




