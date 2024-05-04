var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "User7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUsers) {
        return currentUsers.toLowerCase() === newUser.toLowerCase();
    })) {
        console.log("".concat(newUser, " will need to Enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
