/*
    CALLBACKS: This file contains the callback functions for the JSON data.
    a callback function is a function that is passed as an argument to another function.
    In this case, the callback functions are used to handle the JSON data returned from the server.
*/

//example of two funcions that take a callback function as an argument
function successCallback(result) {
    console.log("Success:", result);
}
function errorCallback(error) {
    console.error("Error:", error);
}

function fetchData(data, successCallback, errorCallback){
    console.log("Fetching data...");
    if (data !== null && data !== undefined && data !== ""){
        setTimeout(() => {
            const fetchedData = data.toUpperCase(); // Simulating data processing
            successCallback(fetchedData);
        }, 1000);
    }else{
        setTimeout(() => {
            errorCallback("No data provided");
        }, 1000);
    }
}

//first example of success callback
fetchData("Hello, World!", successCallback, errorCallback);

//second example of error callback
fetchData("", successCallback, errorCallback);