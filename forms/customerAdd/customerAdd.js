
btnAdd.onclick = function() {
  query = "INSERT INTO customer VALUES ('17','Jesse Antiques','1113 F St','Omaha','NE','68178')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rja98014&pass=" + pw + "&database=rja98014&query=" + query)

  if (req.status == 200) { //transit worked.
    if (req.responseText == 500) { // means the insert succeeded
       lblAddMessage.value = "Customer successfully added!"
    } else
      lblAddMessage.value = "There was a problem with adding the customer to the database."
  } else {
    // transit error
    console.log("Error: " + req.status);
  }
  
  query = `SELECT name from customer`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rja98014&pass=" + pw + "&database=rja98014&query=" + query)
    if (req.status == 200) { //transit worked.
    results = JSON.parse(req.responseText)
  } else {
    console.log(`Error: ${req.status}`);
  }
  
  let customersAdd = ""
  for (i = 0; i <= results.length - 1; i++)
    customersAdd = customersAdd + results[i] + "\n"
  txtCustomerNames.value = customersAdd
}