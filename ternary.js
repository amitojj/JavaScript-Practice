let login = prompt('Please Login')

let message =  (login == 'Employee') ? 'Hello' : 
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No Login' : ''
