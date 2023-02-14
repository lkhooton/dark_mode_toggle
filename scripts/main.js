function darkMode () {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let image_tracker = 'bright';

function change(){
  
  let image = document.getElementById('gif');
  if(image_tracker=='bright'){
    image.src='https://media.tenor.com/FTMkBM_rbx0AAAAC/moon.gif';
    image_tracker='dark';
  }else{
    image.src="https://media.tenor.com/kTj5MU39mmwAAAAC/morning-sunshine.gif" ;
    image_tracker='bright';
  }
}