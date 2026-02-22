// const apiKey = 'f99b4409c1ad4b6ca386763a107cfe3d'

// const blogContainer = document.getElementById("blog-container");

//  async function fetchRandomNews(){
//     try{
//        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&
//        apikey=${apiKey}`
//        const response = await fetch (apiUrl);
//        const data = await response.json();
//        return data.articles;
//        console.log(data);
//     }catch(error){
//        console.error("error fetching random news",error);
//        return[];
//     }
// }
// function displayBlogs(articles){
//     blogContainer.innerHTML =""
//     articles.forEach((articles)=>{
//         const blogcard = document.createElement("div")
//         blogcard.classList.add("blog-card")
//         const img = document.createElement("img")
//         img.src = article.urlToImage
//         img.alt = article.title
//         const title = document.createElement("h2")
//         title.textContent = article.title
//         const description = document.createElement("P")
//         description.textContent = article.description
//         blogcard.appendChild(img)
//         blogcard.appendChild(title)
//         blogcard.appendChild(description)
//         blogContainer.appendChild(blogcard)

//     })
   
// }
// (async ()=>{
//     try{
//      const articles =  await fetchRandomNews();
//     displayBlogs( articles)
//     }catch(error){
//      console.error("error fetching random news",error);
//     }
// })();
const apikey = 'f99b4409c1ad4b6ca386763a107cfe3d'

const blogContainer = document.getElementById("blog-container");
const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


async function fetchRandomNews(){
    try{
       const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apikey}`;
       
       const response = await fetch(apiUrl);
       const data = await response.json();
       
       console.log(data);
       return data.articles;
    }
    catch(error){
       console.error("error fetching random news",error);
       return [];
    }
}
searchButton.addEventListener("click",()=>{
    const query = searchField.ValueMax.trim()
    if(query !== ""){
        try{
             const articles = await fetchNewsQuery
             (query)
             displayBlogs(articles)
        }catch(error){
            console.log("error fetching news by query",error)

        }
    }
})

async function fetchNewsQuery(query){
 try{
       const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=12&apiKey=${apikey}`;
       
       const response = await fetch(apiUrl);
       const data = await response.json();
       
       console.log(data);
       return data.articles;
    }
    catch(error){
       console.error("error fetching random news",error);
       return [];
    }

}
function displayBlogs(articles){
    blogContainer.innerHTML =""

    articles.forEach((article)=>{
        const blogcard = document.createElement("div")
        blogcard.classList.add("blog-card")

        const img = document.createElement("img")
        img.src = article.urlToImage || "";
        img.alt = article.title || "news image"

        const title = document.createElement("h2")
        const truncatedTitle =article.title.length>30? article.title.slice(0,30) + "...." : article.title;
        title.textContent = truncatedTitle;

        const description = document.createElement("p")
        const truncatedDes =article.description.length>120? article.description.slice(0,120) + "...." : article.description;
        description.textContent = truncatedDes

        blogcard.appendChild(img);
        blogcard.appendChild(title);
        blogcard.appendChild(description);
        blogcard.addEventListener('click',()=>{
            window.open(article.url,"_blank");
        });
        blogContainer.appendChild(blogcard);
    })
}

(async ()=>{
    const articles =  await fetchRandomNews();
    displayBlogs(articles)
})();