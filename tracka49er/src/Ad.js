import React, { useState } from "react";

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function Ad() {
    const [day, setDay] = useState('')
    const [hour, setHour] = useState('')
    const setBUTTON = useState('')
    let response1 = useState('')
  const handleDayChange = event => {
      setDay(event.target.value)
  };

  const handleHourChange = event => {
      setHour(event.target.value)
  };

  const handleBUTTON = event => {
      setBUTTON(event.target.value)
  }

  const handleSubmit = event => {

      event.preventDefault();
      alert(`Your state values: \n
              hour: ${hour} \n
              day: ${day} \n
              You can replace this alert with your process`);
              let response = "";
      try {
          let test = 1
          let url = 'http://localhost:8080/active3?fhour=' + hour + '&fdow=' + day
          let response = httpGet(url);
          response1 = response;

document.getElementById('networkTest').innerHTML = response;
              console.log(response);

      } catch (error) {
          console.error(error);
      }

      setHour(event.target.value)
  };


  return (
      <div className='NetworkCss'>


          <form onSubmit={handleSubmit}>
<h2>Use this Information to find the perfect advertising spot!</h2>
              <div className='side-panel'>


                  <label for="fhour">Select a Time:</label><br />
                  <select name="fhour" value={hour} onChange={handleHourChange} defaultValue={0}>

                      <option value="0">12 AM</option>
                      <option value="1">1 AM</option>
                      <option value="2">2 AM</option>
                      <option value="3">3 AM</option>
                      <option value="4">4 AM</option>
                      <option value="5">5 AM</option>
                      <option value="6">6 AM</option>
                      <option value="7">7 AM</option>
                      <option value="8">8 AM</option>
                      <option value="9">9 AM</option>
                      <option value="10">10 AM</option>
                      <option value="11">11 AM</option>
                      <option value="12">12 PM</option>
                      <option value="13">1 PM</option>
                      <option value="14">2 PM</option>
                      <option value="15">3 PM</option>
                      <option value="16">4 PM</option>
                      <option value="17">5 PM</option>
                      <option value="18">6 PM</option>
                      <option value="19">7 PM</option>
                      <option value="20">8 PM</option>
                      <option value="21">9 PM</option>
                      <option value="22">10 PM</option>
                      <option value="23">11 PM</option>

                  </select>

                  <label for="fdow">Enter Building:</label><br />
                  <input type="Day" name="Day" placeholder="Enter Building" onChange={handleDayChange} value={day} /><br />

                  <button type="submit" onChange={handleBUTTON}>Submit</button>
              </div>



          </form>

          <div id = 'networkTest'>


          </div>
      </div>
  );
}

export default Ad;