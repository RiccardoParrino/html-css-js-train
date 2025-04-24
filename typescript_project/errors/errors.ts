// try-catch-finally error example
function handle_errors ():void {
    try {
        let result = accessDb();
        console.log(result);
    } catch(error) {
        console.log("An error occurred!");
    } finally {
        console.log("This runs no matter what.");
    }
}
function accessDb():string {
    return "success";
}
// handle_errors();

// throw error example
function handle_errors2() : void {
    try {
        let result = accessDbWithError();
        console.log(result);
    } catch (error) {
        console.log("An error occurred!");
    }
}
function accessDbWithError() {
    throw new Error("Something went wrong!");
}
handle_errors2();