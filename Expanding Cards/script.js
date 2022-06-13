const panels = document.querySelectorAll(".panel"); // -> this will add to a node list node list is just like an array 

// console.log(panels)

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  })
})

function removeActiveClass () {
  panels.forEach( panel =>{
    panel.classList.remove('active')
  })
}