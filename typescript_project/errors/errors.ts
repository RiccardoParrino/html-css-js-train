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
handle_errors();