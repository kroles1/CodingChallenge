// const form = document.getElementById('form')

// // form.addEventListener('submit', (e) => {
// //     search(e)
// // })


const googleSearch = async (search) => {
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



function getInputValue(){
    let searchInput = document.getElementById("myInput").value;
    googleSearch(searchInput).catch(err => console.log(err))
    // window.location.replace('http://localhost:3000/google/' + myInput.value)
}
function results(data){
    const ul = document.getElementById('ulList')
    ul.innerHTML = ""
    data.map((data) => {
        const li = document.createElement('li')
        console.log(data.breed);
        li.textContent = data.breed
        ul.appendChild(li)
    })}
     

