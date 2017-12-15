const app = new Clarifai.App({
    apiKey: 'ba8891ef6c864f95a210ff8aee91f164'
})

const identify = (elem) => {
  const imageURL = elem.src
  app.models.predict(Clarifai.GENERAL_MODEL, imageURL).then(
    function(response) {
    console.log(response.rawData.outputs[0].data.concepts)
    const concepts = response.rawData.outputs[0].data.concepts
    document.getElementById('results').innerHTML = ''
    concepts.forEach((concept) => {
        const p = document.createElement('p')
        const textNode = document.createTextNode(concept.name)
        p.appendChild(textNode)
        document.getElementById('results').appendChild(p)
        console.log(concept.name)
    })
  },
  function(err) {
    console.error(err)
  }
)}

function changeImage() {
    const url = document.getElementById("url").value

    document.getElementById("user_image").src=url
}

function popup(isrobot) {
  if (isrobot) {
    alert("this is a robot");
  } else {
    alert("this is not a robot")
  }
    const test = window.scrollTo(100, 700);

}




/*Array.prototype.contains = function('popup')
{
for (const i in this)
{
if (this[i] == 'robot')
{return alert("yes");
} else {
return alert("no");
}}

const arr = [1,2,3,4];
if (arr.contains 1,2,3) alert("yes");
else alert("no"); */

/*const image = ['1' , '2', '3', '4'] => {
  onclick= window.alert("Yes, it's a robot!");
}*/

/*for (let i=0; i =< 100; i++) {}
if (i= 1, 2) {
  return onclick window.alert ("this is a robot!")
} else {
  return onclick window.alert ("this is not a robot!")
} */

//window.alert("Yes, it's a robot!");

//window.alert("No, it's not a robot!");

/*function  openForm()
{
    const new_window = window.open('file:///C:/Users/Tejora/Desktop/testing.html','popup''width=825,height=585,scrollbars=yes,resizable=yes,toolbar=no,directories=no,location=no,menubar=no,status=no,left=50,top=0');
    new_window.onbeforeunload = function(){
           alert("Are you sure you want to close the window");      }
}


 <a href="#" onclick="openForm()">Click</a> */
