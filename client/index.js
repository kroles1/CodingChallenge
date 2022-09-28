const searchInput = document.getElementById('uniqueIDform')

console.log(searchInput)
const googleSearch = async (search) => {
   const rawData = await fetch(`http://localhost:3000/${search}`)

   const data = await rawData.json()

   console.log(data)
   return data
}



// googleSearch('dogs')

