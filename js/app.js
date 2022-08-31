// create three cached element references for each element w/ and id in HTML (input, button & ul)
//* cached element references 
const input = document.getElementById('input')
const button = document.querySelector ('#submit-button')
const uList = document.querySelector('#todo-list')

//* event listener 
button.addEventListener('click', function(evt){
  const li = document.createElement('li')
  li.textContent = input.value
})
//add an event listener that will listen for click events 
//when the button is clicked - we will create a new <li> element
// set the <li> text to what the user has entered in the input element  
// reset the text in the input element 
// add the new <li> to the page within the <ul> list 