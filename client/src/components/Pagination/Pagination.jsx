import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					className={
						i === currentPage ? `${styles.active}` : `${styles.notActive}`
					}
				>
					{i}
				</button>
			);
		}

		return pageNumbers;
	};

	return (
		<div className={styles.paginationDiv}>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={styles.prevAndNextBtn}
			>
				Prev
			</button>
			{renderPageNumbers()}
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={styles.prevAndNextBtn}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
