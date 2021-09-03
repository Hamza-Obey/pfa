import React,{useState,useEffect} from 'react';
import "./Article.css"
import axios from 'axios';
import pdf1 from "../../assets/articles/article1.pdf"
import pdf2

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

        
        <div className="grid7">
        {articles.map((article)=>(
            <div className="card7">
                <div className="card_img7">
                    <img src="https://images.unsplash.com/photo-1624593895161-c2d67791ef7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <div className="card_body7">
                    <h2 className="card_title7">{article.title}</h2>
                    <p> {article.desc}</p>
                    
                    <a href="#" className="read_more"> Read article</a>
                </div>
            </div>
             ))}
        </div>
       
    </div>
    
    </>
  );
}

export default Article;
