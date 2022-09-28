

const googleSearch = async (search) => {
   const rawData = await fetch(`http://localhost:3000/google/${search}`)

   const data = await rawData.json()

   console.log(data)
   return data
}

function getInputValue(){
    let searchInput = document.getElementById("myInput").value;
    googleSearch(searchInput)
  
}
