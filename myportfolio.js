let sections = document.querySelectorAll('SECTION');
let navlinkks = document.querySelectorAll('header nav a');
const window_pathname = window.location.pathname;

window.onscroll = () => {

   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id')

      if (top>=offset && top<offset+height) {

         navlinkks.forEach(navel => {
            navel.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
         });
      };

   });

};


// window.addEventListener("scroll", () => {
//    sections.forEach(section => {
//       if (window.scrollY >= section.offsetTop) {
//          currentsection = section.id;
//          console.log(currentsection);
//       }


//    });

//    navlinkks.forEach(nav_el => {
//       if (nav_el.href.includes(currentsection)) {
//          nav_el.classList.remove('active');
//          document.querySelector('.navbarlinks [href*=' + id + ']').classList.add('active');
//       }
//    });
// });


// navlinkks.forEach(navel=>{
//    const navpath= new URL(navel.href).pathname;
//    if((window_pathname === navpath)||(window_pathname==='/myprofile.html' && navpath==='/')){
//       navel.classList.add('active')

//    }
// });