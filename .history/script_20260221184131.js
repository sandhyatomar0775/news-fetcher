const apikey = 'f99b4409c1ad4b6ca386763a107cfe3d'

const blogContainer = document.getElementById("blog-container");

 async function fetchRandomNews(){
    try{
       const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&
       apikey=${apikey}`
       const response = await fetch (apiUrl);
       const data = await response.json();
       return data.articles;
       console.log(data);
    }catch(error){
       console.error("error fetching random news",error);
       return[];
    }
}
function displayBlogs(articles){
    blogContainer.innerHTML =""
    articles.forEach((articles)=>{
        const blogcard = document.createElement("div")
        blogcard
    })
   
}
async ()=>{
    try{
     const articles =  await fetchRandomNews();
    displayBlogs( articles)
    }catch(error){
     console.error("error fetching random news",error);
    }
};