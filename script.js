const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");


// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



// const body = document.querySelector("body");
// const darkLight = document.querySelector("#darkLight");
// const sidebar = document.querySelector(".sidebar");
// const submenuItems = document.querySelectorAll(".submenu_item");
// const sidebarOpen = document.querySelector("#sidebarOpen");
// const sidebarClose = document.querySelector(".collapse_sidebar");
// const sidebarExpand = document.querySelector(".expand_sidebar");
// sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

// sidebarClose.addEventListener("click", () => {
//   sidebar.classList.add("close", "hoverable");
// });
// sidebarExpand.addEventListener("click", () => {
//   sidebar.classList.remove("close", "hoverable");
// });

// sidebar.addEventListener("mouseenter", () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.remove("close");
//   }
// });
// sidebar.addEventListener("mouseleave", () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.add("close");
//   }
// });

// darkLight.addEventListener("click", () => {
//   body.classList.toggle("dark");
//   if (body.classList.contains("dark")) {
//     document.setI
//     darkLight.classList.replace("bx-sun", "bx-moon");
//   } else {
//     darkLight.classList.replace("bx-moon", "bx-sun");
//   }
// });

// submenuItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("show_submenu");
//     submenuItems.forEach((item2, index2) => {
//       if (index !== index2) {
//         item2.classList.remove("show_submenu");
//       }
//     });
//   });
// });

// if (window.innerWidth < 768) {
//   sidebar.classList.add("close");
// } else {
//   sidebar.classList.remove("close");
// }

const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active1").classList.remove("active1");
        linkItem.classList.add("active1");

        const indicator = document.querySelector(".indicator");

        indicator.style.left = `${index * 85 + 40}px`;
    })
})