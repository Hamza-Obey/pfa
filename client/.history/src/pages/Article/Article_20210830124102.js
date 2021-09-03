import React from 'react';
import "./Article.css"

function Article() {
    const [articler,setCards]=useState([])

  return (
    <>
    <div className="container7" id="Blog">
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
            <div className="card7">
                <div className="card_img7">
                    <img src="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <div className="card_body7">
                    <h2 className="card_title7">Learn the art of cooking</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio quidem, est labore earum reprehenderit quibusdam id iure delectus nemo.</p>
                    <a href="#" className="read_more">Read article</a>
                </div>
            </div>
            <div className="card7">
                <div className="card_img7">
                    <img src="https://images.unsplash.com/photo-1587772247228-20c9f67a327b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <div className="card_body7">
                    <h2 className="card_title7">Get your freedom</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio quidem, est labore earum reprehenderit quibusdam id iure delectus nemo.</p>
                    <a href="#" className="read_more">Read article</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}

export default Article;
