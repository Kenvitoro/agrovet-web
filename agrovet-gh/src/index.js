       
       /**********************CONFIGURACION DE MAPA LEAFLET************************/
       
       let map = L.map('map').setView([12.092466, -86.244360], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
 
 
        let marker = L.marker([12.092466, -86.244360]).addTo(map);


       /**********************INICIADOR DE SCROLL-ANIMATION************************/

        AOS.init();
       
       /**********************ENVIO DE FORMULARIO EMAILJS************************/
        emailjs.init("5GtmvCsGz38i5-ou7");

        const form =  document.querySelector("#formulario")
        const submitBtn =  document.querySelector("#submit")
        const emailService = "service_09umsdd"
        const emailTemplate = "template_jes4njq"

      

        form.addEventListener("submit", (e)=>{
          e.preventDefault()
          
        let userData = {
          nombre : document.querySelector("#nombre").value,
          cedula : document.querySelector("#cedula").value,
          comentario : document.querySelector("#comentario").value,
          numero : document.querySelector("#numero").value
        }
        
        emailjs.send(emailService, emailTemplate, userData )*
  
        form.reset()

        })


        const menuResponsiveBtn = document.querySelector(".responsive-menu")
        const menuResponsiveCloseBtn = document.querySelector(".responsive-menu-close")
        const links = document.querySelector(".links")

        menuResponsiveBtn.addEventListener("click", ()=>{
          links.classList.toggle("visible")
        })

        menuResponsiveCloseBtn.addEventListener("click", ()=>{
          links.classList.toggle("visible")
        })


        const allLinks = document.querySelectorAll(".link")

        Array.from(allLinks).map((link)=>{
          link.addEventListener("click", ()=>{
            links.classList.toggle("visible")
          })
        })