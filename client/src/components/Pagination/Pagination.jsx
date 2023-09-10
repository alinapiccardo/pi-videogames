import React from "react";

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
					className={i === currentPage ? "active" : ""} //La clase "active" para los botones que representan la página actual (i)
				>
					{i}
				</button>
			);
		}

		return pageNumbers;
	};

	return (
		<div className="pagination">
			{/*Botón "Previous" que llama a handlePageChange para reducir currentPage. El botón está deshabilitado si currentPage = 1.*/}
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Previous
			</button>
			{
				//renderPageNumbers() para renderizar los botones de página generados
				renderPageNumbers()
			}
			{/*Botón "Next" que llama a handlePageChange para aumentar currentPage. El botón está deshabilitado si currentPage = totalPages, lo que significa que no se puede avanzar más */}
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
