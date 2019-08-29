// console.log('Starting......');

//  setTimeout(()=>{
//     console.log('2 second later ')
//  },2000)
//  setTimeout(()=>{
//     console.log('0 second later ')
//  },0)
 var request=require('request');

 let url='https://api.darksky.net/forecast/0bae5ec9df2443f90d94b94b9614da31/37.8267,-122.4233';
 request(url,{json:true},(err,res,body)=>{

    // Print the response status code if a response was received
    // console.log(res);

     // Print the HTML for the Google homepage.
      console.log(body);

      // Print the error if one occurred
      //console.log(err)
   
 })