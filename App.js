
const charName = document.getElementById("charcterName");
const nickName = document.getElementById("nickname");
const discription = document.getElementById("description");
const charImage = document.querySelector('#img');


(function () {
  var character_select = document.getElementById("character");


  character_select.addEventListener('change', function (event) {
      var selected_value = this.value;
      //console.log(selected_value)
      getResults(selected_value);
    
  });
})();



function getResults(query)
{
  
fetch(`https://www.breakingbadapi.com/api/characters/${query}`)
  .then(response => response.json())
  .then( data =>{
    for(const objData of data)
    {
      //console.log(objData.name);
      charName.innerText = `${objData.name}`;
      nickName.innerText =`${objData.nickname}`;
      discription.innerText = `This Character was portrayed by ${objData.portrayed}. The ${objData.name} is ${objData.occupation}`;
      img.setAttribute('src', objData.img);
    }
     
  
  })
  .catch((error) => {
    console.error('Error:', error);
   
  });

}

