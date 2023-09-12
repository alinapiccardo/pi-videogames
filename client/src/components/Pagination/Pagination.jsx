import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
	//Generar los numeros de la pagina con renderPageNumbers
	const renderPageNumbers = () => {
		const pageNumbers = [];
		//Asociar botones con pagina especifica (cuando se hace click en cada uno, se llama a la funcion handlePageChange con ese index)
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					className={
						i === currentPage ? `${styles.active}` : `${styles.notActive}`
					} //La clase "active" para los botones que representan la página actual (i)
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
			{
				renderPageNumbers() //Renderiza los botones de página generados
			}
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
