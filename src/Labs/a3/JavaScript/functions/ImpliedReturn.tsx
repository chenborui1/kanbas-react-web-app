
const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

function ImpliedReturn () {
    return(
    <>
    <h2>
        Implied return
    </h2>
    fourTimesFive = {fourTimesFive}<br/>
    multiply(4, 5) = {multiply(4, 5)} <br/>
    </>
    )
}
export default ImpliedReturn