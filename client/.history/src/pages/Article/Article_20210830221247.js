import React,{useState,useEffect} from 'react';
import "./Article.css"
import axios from 'axios';



function Article() {
    const [articles,setArticles]=useState([])

    useEffect(  () =>  { 
        const fetchArticles=async() => {
        const response = await axios.get("http://localhost:3002/Article/Articles")
        .then(res =>
          { console.log(articles)
           setArticles(res.data) })
        
      }
      fetchArticles() ; 
    } , []
        
      )

  return (
    <>
    <div className="container7" id="Blog">

        <h2 className="articleheader"> OUR DOCTOR'S ARTICLES </h2>

        
        <div className="grid7">
        {articles.map((article)=>(
            <div className="card7">
                <div className="card_img7">
                    <img src={`./articles/${article.img}`} alt="article picture"/>
                </div>
                <div className="card_body7">
                    <h2 className="card_title7">{article.title}</h2>
                    <p> {article.desc}</p>
                    
                    <a href={`h/articles/${article.content}`} target="_blank" className="read_more"> Read article </a>
                </div>
            </div>
             ))}
        </div>
       
    </div>
    
    </>
  );
}

export default Article;
