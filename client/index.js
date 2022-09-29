

const luckyBtn = document.getElementById('getLuckyBtn')



// const form = document.getElementById('form')

// // form.addEventListener('submit', (e) => {
// //     search(e)
// // })


const googleSearch = async (search) => {

   const homePage = document.querySelector(".googleHome")
   homePage.style.display = "none"
    // e.preventDefault()
    // console.log(e.target.search.value);
    
    // if(search = '' || search !== 'dogs') {
    //     alert('Please search "dogs"')
    // } 

    
        const rawData = await fetch(`http://localhost:3000/google/${search}`)
        const data = await rawData.json()
        console.log(data)
        results(data)
    }

const luckyResult = async (e) => {
   e.preventDefault()
   
   const homePage = document.querySelector(".googleHome")
   homePage.style.display = "none"
   
   const randomNav = document.querySelector('.randomNav')
   randomNav.style.display = "inline"
    
    const rawRandom = await fetch(`http://localhost:3000/google/random`)
    const dataRandom = await rawRandom.json()
    console.log(dataRandom);
    randomResults(dataRandom)
}

luckyBtn.addEventListener('click', luckyResult)

function randomResults(dataRandom){
  
   //insert google logo
   const img = document.createElement('img')
   img.src = "./images/googleLogo.png"
   resultsPage.appendChild(img)


    const div = document.getElementById('lucky')
    const imgEle = document.createElement('img')
   //  imgEle.classList = "rounded mx-auto d-block"
    
    dataRandom.image.map((img) => {
      const imgEle = document.createElement('img')
      
      imgEle.src = img
      console.log(img)
      div.appendChild(imgEle)
    })
   //  div.innerHTML = ""

}


function getInputValue(){
    let searchInput = document.getElementById("myInput").value;
    googleSearch(searchInput).catch(err => console.log(err))
    // window.location.replace('http://localhost:3000/google/' + myInput.value)
}
function results(data){
   const resultsPage = document.getElementById('resultsPage')
   const img = document.createElement('img')
   img.src = "./images/googleLogo.png"
   resultsPage.appendChild(img)
    const ul = document.getElementById('ulList')
    ul.innerHTML = ""
    data.map((data) => {
        const li = document.createElement('li')
        // console.log(data.breed);
        li.textContent = data.url
        ul.appendChild(li)

        const li2 = document.createElement('a')
        li2.textContent = data.breed
        li2.href = data.link
        ul.appendChild(li2)

        const li3 = document.createElement('p')
        li3.textContent = data.snippet
        ul.appendChild(li3)

    }
    )}
     


