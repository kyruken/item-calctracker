
export default function Item(props) {
    return (
        <div className='item padding-lr-1 flex flex-sb'>
            <p>{props.name}</p>
            <p>{props.cost}</p>
        </div>
    )
}