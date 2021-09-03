import React,[useState,useEffect] from 'react';
import "./Article.css"

function Article() {
    const [articles,setArticles]=useState([])

    useEffect(  () =>  { 
        const fetchArticles=async() => {
        const response = await axios.get("http://localhost:3002/Articles")
        .then(res =>
          { console.log(cards)
           setArticles(res.data) })
        
      }
      fetchArticles() ; 
    } , []
        
      )

  return (
    <>
    <div className="container7" id="Blog">

        {}
        <div className="grid7">
            <div className="card7">
                <div className="card_img7">
                    <img src="https://images.unsplash.com/photo-1624593895161-c2d67791ef7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <div className="card_body7">
                    <h2 className="card_title7">Get yourself motivated</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum porro, illum totam nostrum sit delectus nisi sint magni perspiciatis adipisci?</p>
                    
                    <a href="#" className="read_more">Read article</a>
                </div>
            </div>
            
        </div>
    </div>
    
    </>
  );
}

export default Article;
