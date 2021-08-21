import React from 'react';
import "./Aboutcovid19.css"

function Aboutcovid19() {
  return (
    <div className="container-covid">
        <div className="covid-left">
      <h1 className="title-covid">COVID-19 : FOR HEALTHCARE WORKERS . </h1>
      <iframe width="720px" height="349" src="http://www.youtube.com/embed/kC47Pfm86Xw" frameborder="4" allowfullscreen></iframe>

      <section className="covid-description">
          <h2 className="description1"> Description</h2>
          <p className="description2">COVID-19 is rapidly spreading across the globe and all providers must be prepared to recognize, 
          stabilize and treat patients with novel coronavirus infection.  
          Following completion of this short course physicians, nurses, and other healthcare professionals will have a unified,
           evidenced-based approach to saving the lives of patients with COVID-19, including those who are critically ill.</p>
      </section>




      </div>
      
        <div className="covid-right">
            <h3> Other Resources </h3>
            <ul>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://healthcluster.who.int/resources/covid-19-resources-and-guidance" target="_blank"> World Cluster </a> 
                </li>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://healthcluster.who.int/resources/covid-19-resources-and-guidance" target="_blank"> World Cluster </a> 
                </li>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://healthcluster.who.int/resources/covid-19-resources-and-guidance" target="_blank"> World Cluster </a> 
                </li>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://healthcluster.who.int/resources/covid-19-resources-and-guidance" target="_blank"> World Cluster </a> 
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Aboutcovid19;
