const Item = (props) => {
    return (
        <>
            <div className="styleItem">
                <p>{props.titulo}</p>
                <img src={props.img} />
            </div>
        </>
    )
}

export default Item