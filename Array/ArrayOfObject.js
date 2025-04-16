 // array of object  are the combination of more than one array  within the object 
 // array are basicly create by  [] sing 
 // object is create by  {} sing 

 let product =  [

     {item : "laptaop " , price : 5000 } ,
     { item : "i-pad "  , prince: 1000 } ,
     {item : "Mobile ", price : 1000 }
    
    ]
 product.forEach( Element  => {
        //  console.log(` product name ${Element.item  }  , Price  : ${Element.price }`); 
         
    });



    // Displaying a list of users on a social app❤️❤️🖊️
    let Users = [ 
          { userName : "Jaivy Roy " , id : "jaivy_roy_instraid " , idNumber : 123  ,online: true }  ,
          { userName : "Sanjeet kumar " , id :"sanjeet kumar_Instraid" , idNumber : 1234  , online: true   } ,
          {
            userName : "Roy_jaivy" , id :"Roy_jaivyInstra"  , idNumber : 12345 , online: false
          }

    ]

    Users.forEach( user => {
        console.log(`${user.userName} is ${user.online ? "Online" : "Offline"}`);        
    });