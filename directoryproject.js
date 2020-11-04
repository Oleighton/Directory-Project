

function message1(){
 return alert('269-355-6545');
}
function message2() {
  return alert('269-545-6789');
}
function message3() {
  return alert('269-321-6444');
}
function message4() {
  return alert('269-111-6743');
}
function message5() {
  return alert('269-222-1344');
}
function message6() {
  return alert('269-131-3223');
}
function message7() {
  return alert('269-543-4567');
}
function message8() {
  return alert('269-522-6129');
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
