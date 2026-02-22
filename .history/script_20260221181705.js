const apikey = 'f99b4409c1ad4b6ca386763a107cfe3d'

const blogContainer = document.getElementById("blog-container")

function fetchRandomNews(){
    try{
       const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&
       apikey=${apikey}`
       
    }catch(error){
       console.error("error fetching random news",error)
       return[]
    }
}