export default function Section(props){
    return(
        <section {...props}>
            <h2>
                {props.tittle}
            </h2>
            {props.children}
        </section>
    );
}