/* 
!   API
        - Application Programming Interface
        - Client (front end) to communicate with server (database)
        - Allow HTTP request and response lifecycle


? AJAX
    - Asynchronous JavaScript and XML
    - Wraps XML with XMLHttpRequests -> not important right now.
    - Governs different aspects of our page, such as static vs dynamic sections of our page.

    *jQuery
        - A library that helps us handle the front end.
        - This was used prior to DOM and fetch()
        - Still used but dated.
    
    AJAX examples:
        - Timed updates like comments (on a blog, article, live comments {YouTube livestream comments} so that people can see the latest "reply")
        - Infinite scrolling
        - Dynamically display search results

        Pros: 
            - Page comments loaded individually
            - New data updated regularly
        Cons:
            - JS must be enabled (people sometimes diable JS)
            - Adds more complex aspects.
            - refreshes the page state and stores info - can bloat.
            - Difficult for screen readers.

        - Works through multiple technologies.
            - HTML / CSS
            - DOM (Document Object Model)
            - JSON
            - Fetch
            - JS bringing it all together.

        - Not Promised based.
*/

/* 
!   Fetch
        - Before fetch(), we would have to use an httpRequest through the above noted.

        - Is an API
        - Is a method that requires 1 argument (at least) (the route/address location). This is the location we are trying to obtain data from.
            - Handles the request and response
            - Returns a promise
                - Allows us access to resolvers (because it uses a promise).
*/
let testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
 // console.log(fetch(testEndpoint));
fetch(testEndpoint)
    // .then(response => console.log(response)); // object is returned.
    // .then(response => console.log(response.url)); // url is being returned
    //* information we need is in the "body" of the object
    // .then(response => console.log(response.body));
    /* 
    ? JSON
        - JavaScript Object Notation
        - Fairly simple to understand
        - Lightweight format

        Syntax:
        {
            "key": "value",
            "key": "value",
            "key": true,
            "key": 0
        }

        - Everything is wrapped in quotes with some minor exceptions like integers and booleans
        - Data is all separated by a comma.
        - Cannot hold comments or functions in a JSON file.

*/
// .then(response => console.log(response.json())) 
// String is returned so we create a JSON out of it.
// Returns a promise that resolves the body of text as a JSON

.then(response => response.json())
.then(data => {
    console.log(data);
}); // The semicolon stops the .then

//* JSON.parse(string);
let myText = '{"name": "Gollum", "lost_ring":true}'; // The syntax of the single quotes are important
console.log(JSON.parse(myText));
// WE can use this if we are getting a straight JSON file only.

/* 
* The Process
    1. Fetch your resource which returns a promise.
    2. Use a .then() resolver to catch fetches returned and assign to a parameter.
    3. Use .json() on a response to finish reading entire ReadableStream.
    4. Chain another .then() to catch read response object and...
    5. Build the rest as needed.

*Fetch differes from jQuery
    1. The promise returned won't reject on HTTP error status even if it's a 404 or 500 (internal / external server issues)
    2. Will denote the "OK Status" to "false"
    3. Fetch won't send "cross-origin cookies" unless credentials are set "init options include"
*/

const url = `https://meowfacts.herokuapp.com/`;

// function getCatFacts() {
//     // console.log(url);
//     fetch(url)
//         .then(r => r.json())
//         .then(d => {
//             console.log('Cat Fact: ', d.data[0]);
//     })
// }
// getCatFacts();
//* Async/Await function
// const getCatFacts = async () => {
//     let res = await fetch(url);
//     let results = await res.json();
//     let data = results.data[0];

//     console.log(data);
// }
// getCatFacts();

//* Local Fetch
// fetch("./local.json") // Passing our file location
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.fellowship);
//         let members = data.fellowship;
//         for(m of members) {
//             console.log(m);
//         }
//         // Using a for/of loop to 
//     });

//* Error Handling
// Keywords: Try/Catch

async function getCatFacts2() {

    try {
        let response = await fetch(url);
        let results = await response.json();
        // let results = await response.jsn(); // used to see the catch
        let data = results.data[0];
        console.log("Try/Catch: ", data);
    } catch (error) {
        console.error(error);
    }
}
getCatFacts2();

/* //* Using Resolvers
fetch(url)
    .then(res => res.json())
    .then(d => console.log('Resolvers: ', d.data[0]))
    .catch(err => console.error(err)); */