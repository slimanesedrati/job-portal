const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')


btn.addEventListener('click', navToggle)

// // Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}


const userN = document.getElementById('userN')
const settings = document.getElementById('settings')

// 
const down = document.getElementById('down')
const down_two = document.getElementById('down_two')
const filters = document.getElementById("filters")
const hf = document.getElementById("hf")

// 
filter_level = document.getElementById("filter_level")
menu_level = document.getElementById("menu_level")
down_level = document.getElementById("down_level")

show_hidde(filter_level,menu_level,down_level)

// 
filter_remote = document.getElementById("filter_remote")
menu_remote = document.getElementById("menu_remote")
down_remote = document.getElementById("down_remote")

show_hidde(filter_remote,menu_remote,down_remote)

// 
filter_shedule = document.getElementById("filter_shedule")
menu_shedule = document.getElementById("menu_shedule")
down_shedule = document.getElementById("down_shedule")

show_hidde(filter_shedule,menu_shedule,down_shedule)

// Func
function show_hidde(btn,menu,down) {
  btn.addEventListener('click', ()=> {
    menu.classList.toggle('hidden')
    down.classList.toggle('rotate-180')
  })
}


show_hidde(userN,settings,down)
show_hidde(hf,filters,down_two)


console.log("hello")