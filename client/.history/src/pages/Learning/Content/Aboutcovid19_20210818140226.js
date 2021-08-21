import React from 'react';
import "./Aboutcovid19.css"

function Aboutcovid19() {
  return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
    <div className="container1-covid">
        <div className="covid-left">
      <h1 className="title-covid">COVID-19 : FOR HEALTHCARE WORKERS . </h1>
      <iframe width="720px" height="349" src="http://www.youtube.com/embed/kC47Pfm86Xw" frameborder="4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

      <section className="covid-description">
          <h2 className="description1"> Description</h2>
          <p className="description2">COVID-19 is rapidly spreading across the globe and all providers must be prepared to recognize, 
          stabilize and treat patients with novel coronavirus infection.  
          Following completion of this short course physicians, nurses, and other healthcare professionals will have a unified,
           evidenced-based approach to saving the lives of patients with COVID-19, including those who are critically ill.</p>
      </section>




      </div>
      
        <div className="covid-right">
            <h3> More Informations : </h3>
            <ul>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://healthcluster.who.int/resources/covid-19-resources-and-guidance" target="_blank"> World Cluster </a> 
                </li>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/covid-19-educational-resources" target="_blank"> FDA </a> 
                </li>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://www.worldometers.info/coronavirus/" target="_blank"> WORLDMETER </a> 
                </li>
                <li style={{fontSize:"20px",marginTop:"20px"}}>
                   <a  href="https://www.gov.uk/coronavirus" target="_blank"> GOV.UK </a> 
                </li>
            </ul>
        </div>
    </div>


    <div className="container2-covid">



    </div>


    </>
  );
}

export default Aboutcovid19;
