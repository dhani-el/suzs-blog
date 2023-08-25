export default function Pagination({currentPage, previouse, next, updateCurse,updateLeave}) {

    return (
        <div className="pagination">
            { currentPage <= 0 ? <div></div> : <button onClick={previouse} onMouseOver={updateCurse} onMouseLeave={updateLeave}>prev</button>}
            <button onClick={next} onMouseOver={updateCurse} onMouseLeave={updateLeave}>next</button>
        </div>
    );
}