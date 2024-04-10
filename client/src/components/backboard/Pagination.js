function Pagination({ totalPages, currentPage, onPageChange }) {
    return (
        <nav className="mt-auto">
            <ul className="pagination justify-content-center">
                {currentPage > 1 && (
                    <li className="page-item">
                        <button className="page-link" aria-label="Previous" onClick={() => onPageChange(currentPage - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(index + 1)}>{index + 1}</button>
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li className="page-item">
                        <button className="page-link" aria-label="Next" onClick={() => onPageChange(currentPage + 1)}>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Pagination

