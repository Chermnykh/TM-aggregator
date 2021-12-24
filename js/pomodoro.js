
function insertAfter(newElement,targetElement) {
    // target is what you want it to go after. Look for this elements parent.
    var parent = targetElement.parentNode;

    // if the parents lastchild is the targetElement...
    if (parent.lastChild == targetElement) {
        // add the newElement after the target element.
        parent.appendChild(newElement);
    } else {
        // else the target has siblings, insert the new element between the target and it's next sibling.
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
current_to_do_add = 1

function recover_numbers(start_number){
  elem = document.getElementById("to_do_list")

  cur_elem = elem.children[start_number]

  if (cur_elem == undefined){
    return
  }
  console.log(start_number)
  
  while (elem.children[elem.children.length - 1] != cur_elem){
    console.log(elem.lastChild != cur_elem)
    console.log(cur_elem)
    cur_elem.children[0].children[0].innerText = start_number + 1 + "."
    cur_elem.children[2].children[0].setAttribute("onclick", `append_to_do_list(${start_number + 1})`)
    cur_elem.children[2].children[1].setAttribute("onclick", `remove_to_do_list(${start_number + 1})`)
    start_number = start_number + 1
    cur_elem = elem.children[start_number]
    
    
    

  }
  cur_elem.children[0].children[0].innerText = start_number + 1 + "."
  cur_elem.children[2].children[0].setAttribute("onclick", `append_to_do_list(${start_number + 1})`)
  cur_elem.children[2].children[1].setAttribute("onclick", `remove_to_do_list(${start_number + 1})`)
  start_number = start_number + 1
  

}

function remove_to_do_list (list_number){
  if (list_elem.children.length == 1){
    return
  }
  list_elem = document.getElementById("to_do_list");
  list_elem.removeChild(list_elem.children[list_number-1])
  recover_numbers(list_number-1)
  

}


function append_to_do_list(list_number){
  list_elem = document.getElementById("to_do_list");
  list_elem.children.length
  elem = document.createElement("div")
  elem.classList.add("input-group")
  elem.classList.add("mb-3")

  elem1 = document.createElement("div")
  elem1.classList.add("input-group-prepend")

  elem2 = document.createElement("span")
  elem2.classList.add("input-group-text")
  elem2.id = "basic-addon1"
  elem2.innerText = (list_elem.children.length + 1) + "."

  elem3 = document.createElement("input")
  elem3.setAttribute("type", "text")
  elem3.setAttribute("class", "form-control my_form_control")
  elem3.setAttribute("placeholder", "Enter your task")

  elem4 = document.createElement("div")
  elem4.setAttribute("class", "input-group-append")

  elem5 = document.createElement("button")
  elem5.setAttribute("class", "btn btn-outline-secondary")
  elem5.setAttribute("type", "button")
  elem5.setAttribute("onclick", `append_to_do_list(${list_elem.children.length + 1})`)
  elem5.innerText = "+"

  elem6 = document.createElement("button")
  elem6.setAttribute("class", "btn btn-outline-secondary")
  elem6.setAttribute("type", "button")
  elem6.setAttribute("onclick", `remove_to_do_list(${list_number + 1})`)
  elem6.innerText = "-"

  elem1.appendChild(elem2)
  elem4.appendChild(elem5)
  elem4.appendChild(elem6)
  elem.appendChild(elem1)
  elem.appendChild(elem3)
  elem.appendChild(elem4)
  



  insertAfter(elem, list_elem.children[list_number - 1]);
  recover_numbers(list_number)
  current_to_do_add = list_elem.children.length + 1

}
max_timers     = [10, 10, 10, 10, 10, 10, 10, 10]
current_timers = [10, 10, 10, 10, 10, 10, 10, 10]
timers         = ["timer0", "timer1", "timer2", "timer3", "timer4", "timer5", "timer6", "timer7"]
texts          = ["Keep working!", "Take a short break!", 
                  "Keep working!", "Take a short break!", 
                  "Keep working!", "Take a short break!", 
                  "Keep working!", "Take a long break)", ]
current_timer_position = 0
timer_is_on = false
function update_timer(){
  timer_elem = document.getElementById("timer")
  minutes = Math.floor(current_timers[current_timer_position]/60)
  seconds = current_timers[current_timer_position] % 60
  timer_elem.innerText = `${minutes}:${seconds}`

}
function move_timer() {
  if (timer_is_on){
    
    update_timer()
    document.getElementById("timer_task").innerText = texts[current_timer_position]
    document.getElementById(timers[current_timer_position]).children[0].style['transform'] = `scaleY(${(current_timers[current_timer_position])/max_timers[current_timer_position]}) rotate(180deg)`
    if (current_timers[current_timer_position ] > 0){
      current_timers[current_timer_position ] = current_timers[current_timer_position ] - 1
    } else {
      if (current_timer_position < timers.length - 1){
        current_timer_position = current_timer_position + 1
      } else {
      }
    }

  }
  
}

setInterval(move_timer, 1000);

function start_stop_timer(){
  if (! timer_is_on){
    timer_is_on = true
    document.getElementById("timer_button").innerText = "Stop"
  } else {
    timer_is_on = false
    document.getElementById("timer_button").innerText = "Start"
  }
}
function set_timer(){
minutes = Math.floor(current_timers[current_timer_position]/60)
  seconds = current_timers[current_timer_position] % 60
document.getElementById('timer').innerText=`${minutes}:${seconds}`
}


$(document).ready(function() {
  $('.menu-burger__header').click(function(){
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});