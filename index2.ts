 let current_users: string[] = ["user1" , "admin" ,"user3" , "user4" , "user5"];
let new_users : string [] = ["User1", "User6" ,"User7" , "admin" , "User9"];

new_users.forEach(newUser =>{
    if (current_users.some(currentUsers => 
        currentUsers.toLowerCase()=== newUser.toLowerCase())){
            console.log(`${newUser} will need to Enter a new username.`);
        } else {
            console.log(`${newUser} is available`);
        }
});

