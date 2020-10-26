//on show to populate dropdown
customerUpdate.onshow=function(){
   query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rja98014&pass=" + pw + "&database=rja98014&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)
            let message = ""
            for (i = 0; i < results.length; i++)
            message = message + results[i] + "\n"
            txtCustomers.value = message
        
            // names now in results array - load names into the dropdown
            selCustomers.clear()
            for (i = 0; i <= results.length - 1; i++)
                selCustomers.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}



//submit function
btnSubmit.onclick=function(){
    let newName = inptCustomer.value
    let oldName = selCustomers.value
    
    query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
    alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rja98014&pass=" + pw + "&database=rja98014&query=" + query)
      
        if (req.status == 200) { //transit worked.
          
             
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully changed the customer name!`)
      
                // reset controls to original state
                inptCustomer.value = ""
                selCustomers.value = ""
                
                
              } else
                NSB.MsgBox(`There was a problem changing the pet name.`)
        } else 
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
    } 
    
    

