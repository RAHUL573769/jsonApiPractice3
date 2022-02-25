function loadData(){
    fetch('https://randomuser.me/api/?results=5')
    .then(response=>response.json())
    .then(data=>displayData(data))
}

function displayData(data) {

    const buddiesContainer=document.getElementById('buddiesDiv');

const buddies=data.results;

    for(const buddy of buddies){
        const para=document.createElement('p');
        para.classList.add('posts');
        para.textContent=` Title is: ${buddy.name.title} First Name is: ${buddy.name.first} Last Name is: ${buddy.name.last}`;
        buddiesContainer.appendChild(para);
     
  console.log(buddy.name);
    }
    }
  