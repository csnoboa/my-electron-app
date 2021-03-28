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

let count2 = 0
$('#click-counter2').text(count2.toString())
$('#countbtnmore2').on('click', () => {
   count2 ++ 
   $('#click-counter2').text(count2)
}) 
$('#countbtnminus2').on('click', () =>{
    count2 --
    $('#click-counter2').text(count2)
})
$('#countbtnmore210').on('click', () => {
    count2 = count2 + 10 
    $('#click-counter2').text(count2)
 }) 
 $('#countbtnminus210').on('click', () =>{
     count2 = count2 - 10
     $('#click-counter2').text(count2)
 })

 let textfinish = " "
 $('#finishbtn').on('click', () => {
     if (count > count2){
        textfinish = "Player 1 Wins!!"
     }
     else if(count2 > count){
         textfinish = "Player 2 Wins!!"
     }
     else{
         textfinish = "Draw!"
     }
     $('#textfinish').text(textfinish)
 })