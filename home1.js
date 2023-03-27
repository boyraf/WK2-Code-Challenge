fetch("data.json")
  .then(function (response) {
    return response.json(); 
  })
  .then(function (data) {

    console.log(data); //array

    for (let i=0; i<data.characters.length; i++){
      let imgLink = data.characters[i].image;
      let votes = data.characters[i].votes; 
      let animalName = data.characters[i].name;
      let animalContainer = document.createElement('div');
      animalContainer.className = 'animal-container';

      let animalImage = document.createElement('img');
      animalImage.src = imgLink;
      animalImage.alt = animalName;

      let voteButton = document.createElement('button');
      voteButton.className = 'vote-button';
      voteButton.innerText = 'vote';
      voteButton.addEventListener('click', function() {
        votes++;
        voteCount.innerText = votes;
      });

      let voteCount = document.createElement('span');
      voteCount.className = 'vote-count';
      voteCount.innerText = votes;

      animalContainer.appendChild(animalImage);
      animalContainer.appendChild(voteButton);
      animalContainer.appendChild(voteCount);
      document.querySelector('.animal-image').appendChild(animalContainer);
      
      animalImage.addEventListener('click', function() {
        animalNameElement.style.display = 'block';
      });

      let animalNameElement = document.createElement('p');
      animalNameElement.className = 'animal-name';
      animalNameElement.innerText = animalName;
      animalContainer.appendChild(animalNameElement);
    }
  
});
