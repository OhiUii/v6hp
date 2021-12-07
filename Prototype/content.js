console.log("Hey my extension is running!");

var elts = document.getElementsByTagName('p');
  for (var i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = '#C0C';
  }