// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

const toggleLikeExperiments = () => {
  if (document.querySelector('.like').classList.contains('active')) {
      document.querySelectorAll('.like').forEach(function (elem) {
          elem.classList.remove('active')
      })
   } else {
     document.querySelectorAll('.like').forEach(function (elem) {
       elem.classList.add('active')
     })
   }
}

const toggleLike = (elem) => {
    console.log(elem)
    elem.classList.toggle('active')
}


const toggleLikeGood = () => {
  if (document.getElementById('like1').classList.contains('active')) {
      document.getElementById('like1').classList.remove('active')
  } else {
      document.getElementById('like1').classList.add('active')
    }
}

/*
const toggleLikeGood = () => {
  //"conditional statement" == if/else
  if (document.getElementById('like1').classList.contains('active')){
    //removes the 'active' class
    console.log('remove the active class')
    document.getElementById('like1').classList.remove('active')
} else {
    //adds the 'active' class
    console.log('add the active class')
    //What goes here?
    document.getElementById('like1').classList.add('active')
  }
  */

  //console.log(document.getElementById('like1').classList.contains('active'))

// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'

const toggle = () => {
  document.querySelector('#like1').classList.toggle('active')
}
