let $ = require('jquery')  // jQuery now loaded and assigned to $
let count = 0
$('#click-counter').text(count.toString())
$('#countbtnmore').on('click', () => {
   count ++ 
   $('#click-counter').text(count)
}) 
$('#countbtnminus').on('click', () =>{
    count --
    $('#click-counter').text(count)
})
$('#countbtnmore10').on('click', () => {
    count = count + 10 
    $('#click-counter').text(count)
 }) 
 $('#countbtnminus10').on('click', () =>{
     count = count - 10
     $('#click-counter').text(count)
 })