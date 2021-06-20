import axios from 'axios';

export async function sendLead(name, email) {
  const data = JSON.stringify({
    "name": name,
    "email": email
  });
  
  const config = {
    method: 'post',
    url: '/api/lead',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  return await axios(config);

}