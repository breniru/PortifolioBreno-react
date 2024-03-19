const Card =(props) => {
    return (
        <>

        <div className="card">
                    <h3>{props.titulo}</h3>
                    <p> {props.texto} </p>
                    
                </div>
        
        </>
    )

    
}

export default Card;