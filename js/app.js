$(document).ready(function(){
  $('.modal').modal();
});

const container = document.getElementById('publish-container');

const publishComment = (e) => {
	e.preventDefault();
	const title = document.getElementById('titulo-coment');
	const message = document.getElementById('menssage-coment');

  const containerComment = document.createElement('div');
  const titleComment = document.createElement('h4');
  const messageComment = document.createElement('p');

  titleComment.innerText = title.value;
  messageComment.innerText = message.value;
  containerComment.classList.add('card');

  containerComment.appendChild(titleComment);
  containerComment.appendChild(messageComment);
  container.appendChild(containerComment)
}

const createPublicImage = (e) => {
  e.preventDefault();
  const titleImg = document.getElementById('titulo-img');
  const inputFile = document.getElementById('input-file');
  if(!window.file) {
    console.log("error")
  }

  const FR = new FileReader();
  FR.addEventListener('load', function(e){
    const containerImg = document.createElement('div');
    const imageElement = document.createElement('img');
    const titleElement = document.createElement('h4');
    containerImg.classList.add('card');
    containerImg.classList.add('ancho');
    imageElement.classList.add('anchoImg');

    imageElement.src = e.target.result;
    titleElement.innerText = titleImg.value;

    containerImg.appendChild(titleElement);
    containerImg.appendChild(imageElement);
    container.appendChild(containerImg);
  });
  FR.readAsDataURL(inputFile.files[0]);
}

let publish = document.getElementById("form");
publish.addEventListener('submit', publishComment);

let publicImg = document.getElementById("publish-image");
publicImg.addEventListener('submit', createPublicImage);




