var Tile = function($tile) {
	var obj = this;
	obj._strength = 0;
	obj._element = $tile;
	obj.strength = function(s) {
		if(typeof(s) === 'undefined')
			return obj._strength;
		obj._strength = s;
	}

	return obj;
}
var Board = function($container) {
	var obj = this;
	this.cells = [];
	$($container).find('.row').each(function(idx,$row) {
		var rowCells = [];
		$($row).find('.tile').each(function(idx,$tile) {
			var tile = new Tile($tile);
			rowCells.push(tile);
		});
		this.cells.push(rowCells);
	});
}

