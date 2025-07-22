let userRole = "admin"
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full Access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited Access granted";
} else {
    accessLevel = "No Access granted";
}

console.log("Access level:" , accessLevel);

let isloggedIn = true;
let userMessage;

if (isloggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User message:", userMessage);

let userType = "admin";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown"
}

console.log("User Category:" , userCategory);

let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);