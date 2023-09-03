//COMPONENTE DUMB (Solo presentacional)
const Card = (props) => {
	return (
		<div>
			<div>
				<p>id:{props.id}</p>
				<p>Name:{props.name}</p>
			</div>
		</div>
	);
};

export default Card;
