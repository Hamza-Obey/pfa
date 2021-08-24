import React, { useState } from "react";
// reactstrap components

import axios from "axios"
import {Card,Modal} from "reactstrap"




const SignUp = (props) => {
  const [phone,setPhone]= useState("")
  const [first_name,setFirst_name]=useState("")
  const [last_name,setLast_name]=useState("")
  const [gender,setGender]= useState("")
  const [occupation,setOccupation]=useState("")
  const [email,setEmail]=useState("")
  const [cin,setCin]=useState("")
  const [birthday,setBirthday]=useState("")
  const [state,setState]=useState("")
  

 
  const onClickAjouterPatient=async ()=>{
    // console.log(first_name,email,last_name,cin,state,gender,occupation,birthday)
    
    if( first_name && email && cin && last_name && gender && occupation && birthday && state && phone   )
    {


      const data = {first_name:first_name,last_name: last_name, email:email, cin:cin , occupation:occupation,
                    gender:gender , phone:phone , birthday:birthday,state:state  }
      axios.post("http://localhost:3002/auth/SignupPatient",{

        first_name:first_name,
        last_name:last_name,
        email: email,
        cin: cin,
        phone:phone,
        birthday:birthday,
        occupation:occupation,
        state:state,
        gender:gender


      },{
              headers:{
                  "Content-Type":"application/json" ,
                  "Authorization": "Bearer " + localStorage.getItem("jwt")
              }
          })
          .then(result=>{
              
              if(result.data.error)
              {
              }
              else
              {
                
                props.setData(prevData => ([...prevData, data]))
                props.setModal(false)

                setFirst_name('')
                setLast_name('')
                setBirthday('')
                setEmail('')
                setCin('')
                setGender('')
                setOccupation('')
                setPhone('')
                setState('')
     

              }
          }).catch(err=>{
              console.log(err)
        })
        
      }

    



  }



        return(
       
                <form class="jotform-form"  method="post" name="form_212345347782560" id="212345347782560" accept-charset="utf-8" autocomplete="on">
  <input type="hidden" name="formID" value="212345347782560" />
  <input type="hidden" id="JWTContainer" value="" />
  <input type="hidden" id="cardinalOrderNumber" value="" />
  <div role="main" class="form-all">
    
    <ul class="form-section page-section">
      <li id="cid_1" class="form-input-wide" data-type="control_head">
        <div style={{display:"table",width:"100%"}}>
          <div class="form-header-group hasImage header-large" data-imagealign="Right">
            <div class="header-text httal htvam">
              <h1 id="header_1" class="form-header" data-component="header">
                New Patient Enrollment
              </h1>
              <div id="subHeader_1" class="form-subHeader">
                Dr. Xander M. Spencer
              </div>
            </div>
            <div class="header-logo">
              <img src="https://www.jotform.com/uploads/utkuyildirim/form_files/dr.5f327cf9785fa8.05675056.5f48f8215276c2.83332452.png" alt="" width="200" class="header-logo-right" />
            </div>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_fullname" id="id_3">
        <label class="form-label form-label-left" id="label_3" for="first_3"> Name </label>
        <div id="cid_3" class="form-input" data-layout="full">
          <div data-wrapper-react="true">
            <span class="form-sub-label-container" style={{verticalAlign:"top"}} data-input-type="first">
              <input type="text" id="first_3" name="q3_name[first]" class="form-textbox" size="10" value="" data-component="first" aria-labelledby="label_3 sublabel_3_first" />
              <label class="form-sub-label" for="first_3" id="sublabel_3_first" style={{minHeight:"13px"}} aria-hidden="false"> First Name </label>
            </span>
            <span class="form-sub-label-container"
             data-input-type="last">
              <input type="text" id="last_3" name="q3_name[last]" class="form-textbox" size="15" value="" data-component="last" aria-labelledby="label_3 sublabel_3_last" />
              <label class="form-sub-label" for="last_3" id="sublabel_3_last" 
               aria-hidden="false"> Last Name </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_birthdate" id="id_6">
        <label class="form-label form-label-left" id="label_6" for="input_6"> Date of Birth </label>
        <div id="cid_6" class="form-input" data-layout="full">
          <div data-wrapper-react="true">
            <span class="form-sub-label-container" 
            >
              <select name="q6_dateOf[month]" id="input_6_month" class="form-dropdown" data-component="birthdate-month" aria-labelledby="label_6 sublabel_6_month">
                <option>  </option>
                <option value="January"> January </option>
                <option value="February"> February </option>
                <option value="March"> March </option>
                <option value="April"> April </option>
                <option value="May"> May </option>
                <option value="June"> June </option>
                <option value="July"> July </option>
                <option value="August"> August </option>
                <option value="September"> September </option>
                <option value="October"> October </option>
                <option value="November"> November </option>
                <option value="December"> December </option>
              </select>
              <label class="form-sub-label" for="input_6_month" id="sublabel_6_month" 
               aria-hidden="false"> Month </label>
            </span>
            <span class="form-sub-label-container">
              <select name="q6_dateOf[day]" id="input_6_day" class="form-dropdown" data-component="birthdate-day" aria-labelledby="label_6 sublabel_6_day">
                <option>  </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
                <option value="11"> 11 </option>
                <option value="12"> 12 </option>
                <option value="13"> 13 </option>
                <option value="14"> 14 </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="21"> 21 </option>
                <option value="22"> 22 </option>
                <option value="23"> 23 </option>
                <option value="24"> 24 </option>
                <option value="25"> 25 </option>
                <option value="26"> 26 </option>
                <option value="27"> 27 </option>
                <option value="28"> 28 </option>
                <option value="29"> 29 </option>
                <option value="30"> 30 </option>
                <option value="31"> 31 </option>
              </select>
              <label class="form-sub-label" for="input_6_day" id="sublabel_6_day" aria-hidden="false"> Day </label>
            </span>
            <span class="form-sub-label-container">
              <select name="q6_dateOf[year]" id="input_6_year" class="form-dropdown" data-component="birthdate-year" aria-labelledby="label_6 sublabel_6_year">
                <option>  </option>
                <option value="2021"> 2021 </option>
                <option value="2020"> 2020 </option>
                <option value="2019"> 2019 </option>
                <option value="2018"> 2018 </option>
                <option value="2017"> 2017 </option>
                <option value="2016"> 2016 </option>
                <option value="2015"> 2015 </option>
                <option value="2014"> 2014 </option>
                <option value="2013"> 2013 </option>
                <option value="2012"> 2012 </option>
                <option value="2011"> 2011 </option>
                <option value="2010"> 2010 </option>
                <option value="2009"> 2009 </option>
                <option value="2008"> 2008 </option>
                <option value="2007"> 2007 </option>
                <option value="2006"> 2006 </option>
                <option value="2005"> 2005 </option>
                <option value="2004"> 2004 </option>
                <option value="2003"> 2003 </option>
                <option value="2002"> 2002 </option>
                <option value="2001"> 2001 </option>
                <option value="2000"> 2000 </option>
                <option value="1999"> 1999 </option>
                <option value="1998"> 1998 </option>
                <option value="1997"> 1997 </option>
                <option value="1996"> 1996 </option>
                <option value="1995"> 1995 </option>
                <option value="1994"> 1994 </option>
                <option value="1993"> 1993 </option>
                <option value="1992"> 1992 </option>
                <option value="1991"> 1991 </option>
                <option value="1990"> 1990 </option>
                <option value="1989"> 1989 </option>
                <option value="1988"> 1988 </option>
                <option value="1987"> 1987 </option>
                <option value="1986"> 1986 </option>
                <option value="1985"> 1985 </option>
                <option value="1984"> 1984 </option>
                <option value="1983"> 1983 </option>
                <option value="1982"> 1982 </option>
                <option value="1981"> 1981 </option>
                <option value="1980"> 1980 </option>
                <option value="1979"> 1979 </option>
                <option value="1978"> 1978 </option>
                <option value="1977"> 1977 </option>
                <option value="1976"> 1976 </option>
                <option value="1975"> 1975 </option>
                <option value="1974"> 1974 </option>
                <option value="1973"> 1973 </option>
                <option value="1972"> 1972 </option>
                <option value="1971"> 1971 </option>
                <option value="1970"> 1970 </option>
                <option value="1969"> 1969 </option>
                <option value="1968"> 1968 </option>
                <option value="1967"> 1967 </option>
                <option value="1966"> 1966 </option>
                <option value="1965"> 1965 </option>
                <option value="1964"> 1964 </option>
                <option value="1963"> 1963 </option>
                <option value="1962"> 1962 </option>
                <option value="1961"> 1961 </option>
                <option value="1960"> 1960 </option>
                <option value="1959"> 1959 </option>
                <option value="1958"> 1958 </option>
                <option value="1957"> 1957 </option>
                <option value="1956"> 1956 </option>
                <option value="1955"> 1955 </option>
                <option value="1954"> 1954 </option>
                <option value="1953"> 1953 </option>
                <option value="1952"> 1952 </option>
                <option value="1951"> 1951 </option>
                <option value="1950"> 1950 </option>
                <option value="1949"> 1949 </option>
                <option value="1948"> 1948 </option>
                <option value="1947"> 1947 </option>
                <option value="1946"> 1946 </option>
                <option value="1945"> 1945 </option>
                <option value="1944"> 1944 </option>
                <option value="1943"> 1943 </option>
                <option value="1942"> 1942 </option>
                <option value="1941"> 1941 </option>
                <option value="1940"> 1940 </option>
                <option value="1939"> 1939 </option>
                <option value="1938"> 1938 </option>
                <option value="1937"> 1937 </option>
                <option value="1936"> 1936 </option>
                <option value="1935"> 1935 </option>
                <option value="1934"> 1934 </option>
                <option value="1933"> 1933 </option>
                <option value="1932"> 1932 </option>
                <option value="1931"> 1931 </option>
                <option value="1930"> 1930 </option>
                <option value="1929"> 1929 </option>
                <option value="1928"> 1928 </option>
                <option value="1927"> 1927 </option>
                <option value="1926"> 1926 </option>
                <option value="1925"> 1925 </option>
                <option value="1924"> 1924 </option>
                <option value="1923"> 1923 </option>
                <option value="1922"> 1922 </option>
                <option value="1921"> 1921 </option>
                <option value="1920"> 1920 </option>
              </select>
              <label class="form-sub-label" for="input_6_year" id="sublabel_6_year"  aria-hidden="false"> Year </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_dropdown" id="id_231">
        <label class="form-label form-label-left" id="label_231" for="input_231"> Sex </label>
        <div id="cid_231" class="form-input" data-layout="half">
          <select class="form-dropdown" id="input_231" name="q231_sex"  data-component="dropdown">
            <option value=""> Please Select </option>
            <option value="Male"> Male </option>
            <option value="Female"> Female </option>
            <option value="N/A"> N/A </option>
          </select>
        </div>
      </li>
      <li class="form-line" data-type="control_phone" id="id_5">
        <label class="form-label form-label-left" id="label_5" for="input_5_full"> Contact Number: </label>
        <div id="cid_5" class="form-input" data-layout="half">
          <span class="form-sub-label-container" >
            <input type="tel" id="input_5_full" name="q5_contactNumber[full]" data-type="mask-number" class="mask-phone-number form-textbox validate[Fill Mask]" style="width:310px" data-masked="true" value="" placeholder="(000) 000-0000" data-component="phone" aria-labelledby="label_5" />
            <label class="form-sub-label is-empty" for="input_5_full" id="sublabel_5_masked" style="min-height:13px" aria-hidden="false">  </label>
          </span>
        </div>
      </li>
      <li class="form-line" data-type="control_email" id="id_225">
        <label class="form-label form-label-left" id="label_225" for="input_225"> E-mail </label>
        <div id="cid_225" class="form-input" data-layout="half">
          <span class="form-sub-label-container" style="vertical-align:top">
            <input type="email" id="input_225" name="q225_email" class="form-textbox validate[Email]" style="width:310px" size="310" value="" placeholder="ex: myname@example.com" data-component="email" aria-labelledby="label_225 sublabel_input_225" />
            <label class="form-sub-label" for="input_225" id="sublabel_input_225" style="min-height:13px" aria-hidden="false"> example@example.com </label>
          </span>
        </div>
      </li>
      <li class="form-line" data-type="control_address" id="id_4">
        <label class="form-label form-label-left" id="label_4" for="input_4_addr_line1"> Address: </label>
        <div id="cid_4" class="form-input" data-layout="full">
          <div summary="" class="form-address-table jsTest-addressField">
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-street-line jsTest-address-lineField">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_4_addr_line1" name="q4_address4[addr_line1]" class="form-textbox form-address-line" value="" data-component="address_line_1" aria-labelledby="label_4 sublabel_4_addr_line1" required="" />
                  <label class="form-sub-label" for="input_4_addr_line1" id="sublabel_4_addr_line1" style="min-height:13px" aria-hidden="false"> Street Address </label>
                </span>
              </span>
            </div>
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-street-line jsTest-address-lineField">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_4_addr_line2" name="q4_address4[addr_line2]" class="form-textbox form-address-line" value="" data-component="address_line_2" aria-labelledby="label_4 sublabel_4_addr_line2" />
                  <label class="form-sub-label" for="input_4_addr_line2" id="sublabel_4_addr_line2" style="min-height:13px" aria-hidden="false"> Street Address Line 2 </label>
                </span>
              </span>
            </div>
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-city-line jsTest-address-lineField ">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_4_city" name="q4_address4[city]" class="form-textbox form-address-city" value="" data-component="city" aria-labelledby="label_4 sublabel_4_city" required="" />
                  <label class="form-sub-label" for="input_4_city" id="sublabel_4_city" style="min-height:13px" aria-hidden="false"> City </label>
                </span>
              </span>
              <span class="form-address-line form-address-state-line jsTest-address-lineField ">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_4_state" name="q4_address4[state]" class="form-textbox form-address-state" value="" data-component="state" aria-labelledby="label_4 sublabel_4_state" required="" />
                  <label class="form-sub-label" for="input_4_state" id="sublabel_4_state" style="min-height:13px" aria-hidden="false"> State / Province </label>
                </span>
              </span>
            </div>
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-zip-line jsTest-address-lineField ">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_4_postal" name="q4_address4[postal]" class="form-textbox form-address-postal" value="" data-component="zip" aria-labelledby="label_4 sublabel_4_postal" required="" />
                  <label class="form-sub-label" for="input_4_postal" id="sublabel_4_postal" style="min-height:13px" aria-hidden="false"> Postal / Zip Code </label>
                </span>
              </span>
            </div>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_dropdown" id="id_232">
        <label class="form-label form-label-left" id="label_232" for="input_232"> Marital Status </label>
        <div id="cid_232" class="form-input" data-layout="half">
          <select class="form-dropdown" id="input_232" name="q232_maritalStatus232" style="width:310px" data-component="dropdown">
            <option value=""> Please Select </option>
            <option value="Single"> Single </option>
            <option value="Married"> Married </option>
            <option value="Divorced"> Divorced </option>
            <option value="Legally separated"> Legally separated </option>
            <option value="Widowed"> Widowed </option>
          </select>
        </div>
      </li>
      <li class="form-line" data-type="control_text" id="id_233">
        <div id="cid_233" class="form-input-wide" data-layout="full">
          <div id="text_233" class="form-html" data-component="text">
            In case of emergency
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_fullname" id="id_13">
        <label class="form-label form-label-left" id="label_13" for="first_13"> Emergency Contact: </label>
        <div id="cid_13" class="form-input" data-layout="full">
          <div data-wrapper-react="true">
            <span class="form-sub-label-container" style="vertical-align:top" data-input-type="first">
              <input type="text" id="first_13" name="q13_emergencyContact13[first]" class="form-textbox" size="10" value="" data-component="first" aria-labelledby="label_13 sublabel_13_first" />
              <label class="form-sub-label" for="first_13" id="sublabel_13_first" style="min-height:13px" aria-hidden="false"> First Name </label>
            </span>
            <span class="form-sub-label-container" style="vertical-align:top" data-input-type="last">
              <input type="text" id="last_13" name="q13_emergencyContact13[last]" class="form-textbox" size="15" value="" data-component="last" aria-labelledby="label_13 sublabel_13_last" />
              <label class="form-sub-label" for="last_13" id="sublabel_13_last" style="min-height:13px" aria-hidden="false"> Last Name </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_phone" id="id_74">
        <label class="form-label form-label-left" id="label_74" for="input_74_full"> Contact Number </label>
        <div id="cid_74" class="form-input" data-layout="half">
          <span class="form-sub-label-container" style="vertical-align:top">
            <input type="tel" id="input_74_full" name="q74_contactNumber74[full]" data-type="mask-number" class="mask-phone-number form-textbox validate[Fill Mask]" style="width:310px" data-masked="true" value="" placeholder="(000) 000-0000" data-component="phone" aria-labelledby="label_74" />
            <label class="form-sub-label is-empty" for="input_74_full" id="sublabel_74_masked" style="min-height:13px" aria-hidden="false">  </label>
          </span>
        </div>
      </li>
      <li class="form-line" data-type="control_text" id="id_234">
        <div id="cid_234" class="form-input-wide" data-layout="full">
          <div id="text_234" class="form-html" data-component="text">
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_textbox" id="id_119">
        <label class="form-label form-label-left" id="label_119" for="input_119"> Weight (pounds) </label>
        <div id="cid_119" class="form-input" data-layout="half">
          <input type="text" id="input_119" name="q119_weightpounds" data-type="input-textbox" class="form-textbox validate[Numeric]" style="width:310px" size="310" value="" placeholder=" " data-component="textbox" aria-labelledby="label_119" />
        </div>
      </li>
      <li class="form-line" data-type="control_textbox" id="id_118">
        <label class="form-label form-label-left" id="label_118" for="input_118"> Height (inches) </label>
        <div id="cid_118" class="form-input" data-layout="half">
          <input type="text" id="input_118" name="q118_heightinches118" data-type="input-textbox" class="form-textbox validate[Numeric]" style="width:310px" size="310" value="" placeholder=" " data-component="textbox" aria-labelledby="label_118" />
        </div>
      </li>
      <li class="form-line" data-type="control_radio" id="id_43">
        <label class="form-label form-label-left" id="label_43" for="input_43"> Taking any medications, currently? </label>
        <div id="cid_43" class="form-input" data-layout="full">
          <div class="form-single-column" role="group" aria-labelledby="label_43" data-component="radio">
            <span class="form-radio-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="radio" aria-describedby="label_43" class="form-radio" id="input_43_0" name="q43_takingAny" value="Yes" />
              <label id="label_input_43_0" for="input_43_0"> Yes </label>
            </span>
            <span class="form-radio-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="radio" aria-describedby="label_43" class="form-radio" id="input_43_1" name="q43_takingAny" value="No" />
              <label id="label_input_43_1" for="input_43_1"> No </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_textarea" id="id_22">
        <label class="form-label form-label-left" id="label_22" for="input_22"> If yes, please list it here </label>
        <div id="cid_22" class="form-input" data-layout="full">
          <textarea id="input_22" class="form-textarea" name="q22_ifYes" style="width:648px;height:163px" data-component="textarea" aria-labelledby="label_22"></textarea>
        </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" class="form-input-wide" data-layout="full">
          <div data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
            <button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">
              Enroll
            </button>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
  
  
</form>
               

        )}

export default  SignUp;
