

const googleSearch = async (search) => {
    console.log(search,"check 1")
   const rawData = await fetch(`http://localhost:3000/google/${search}`)
   console.log(rawData,"check 2")
   const data = await rawData.json()

   console.log(data)
   return data
}



function getInputValue(){
    let searchInput = document.getElementById("myInput").value;
    googleSearch(searchInput).catch(err => console.log(err))
  
}
