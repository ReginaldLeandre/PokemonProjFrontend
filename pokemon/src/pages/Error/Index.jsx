export default function Error({error}){
    return(
    <section>
    <h2>404 - Page Not Found</h2>
    <p>{error ? error.message : null }</p>
    </section>
    )
}