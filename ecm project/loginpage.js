
 
        function fetchJSONData() {
            var validdata; 
            fetch("./Database.json")
                .then((res) => {
                    if (!res.ok) {
                        throw new Error
                            (`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((data) => {
                      console.log(data);
                      const useremail = document.getElementById('email').value;
                      const password = document.getElementById('password').value;
                      const isuser = document.getElementById('userRadio').checked;
                      const isadmin = document.getElementById('adminRadio').checked;


                validdata=data.Employees;
                if (validdata){
                    console.log(validdata)
                    employee=validdata.find(emp=>(emp.email===useremail && emp.password===password));
                    console.log(employee)
                    if (employee){
                        if(isadmin && employee.isAdmin){
                            window.location.href = 'EcmprojectAdminDashboard.html';
                            
                            /*console.log( 'isadmin')*/
                        }
                        else if(isuser && !employee.isAdmin){
                            window.location.href = 'EcmprojectDashboard.html';
                        }
                        else{
                            alert('Invalid Credentials')

                           /* console.log( 'profile')*/

                        }
                    }
                    else{
                        alert('Invalid Username or Password')

                    }
                 }

        })
                .catch((error) => 
                       console.error("Unable to fetch data:", error));

                

        } 
        
    
        