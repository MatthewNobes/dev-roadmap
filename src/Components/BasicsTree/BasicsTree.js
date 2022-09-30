import Tree from "react-d3-tree";
import PropTypes from "prop-types";

export const BasicsTree = (props) => {
	return (
		// `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
		<div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
			<Tree data={props.data} />
		</div>
	);
};

BasicsTree.propTypes = {
	data: PropTypes.object.isRequired,
};
