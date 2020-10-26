let req = ""

let query = ""

let results = ""

let resultstate = ""

let pw = "Ryan318463"  



customerSelect.onshow=function(){
   txtResults_contents.style.height = "100px"
}

btnCustomer.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rja98014&pass=" + pw + "&database=rja98014&query=" + query)



if (req.status == 200){ 
        results = JSON.parse(req.responseText)
        console.log(results)
        
    if (results.length == 0){  
        lblMessage.value = "There are no customers in the database."
    }else {   
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)

        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtResults.value = message
     } 

}else {  
        lblMessage.value = "Error code: " + req.status
  }
}
customerSelect.onshow=function(){
   txtState_contents.style.height = "100px"
}

btnState.onclick=function(){
    let check = inptState.value
    query = "SELECT * FROM customer WHERE state =" + '"' + check + '"'
     req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rja98014&pass=" + pw + "&database=rja98014&query=" + query)
if (req.status == 200){ 
        resultstate = JSON.parse(req.responseText)
        console.log(resultstate)
        
    if (resultstate.length == 0){  
        lblMessage.value = "There are no customers in the database."
      }else {   
        lblMessage.value= `The customer information is ${resultstate[0]}`

        let message = ""
        for (i = 0; i < resultstate.length; i++)
            message = message + resultstate[i][1] + "\n"
        txtState.value = message
     } 

}else {  
        lblMessage.value = "Error code: " + req.status
  }
}
