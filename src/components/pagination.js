export default function Pagination(props) {

    return (
        <div className="pagination">
            { props.currentPage <= 0 ? <div></div> : <button onClick={props.previouse}>prev</button>}
            <button onClick={props.next}>next</button>
        </div>
    );
}