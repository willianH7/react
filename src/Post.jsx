

export function Post(props) {
    return (
        <div className="div">
            <strong> {props.author} </strong>
            <p> {props.content} </p>
        </div>
    )
}