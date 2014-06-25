function Carousel(element){
	var index = 3, that = this;

	this.indicators = element.find('.indicators').children();
	this.items = element.find('.item');
	this.length = this.items.length;
	this.indexes = [this.items.length - 1, 0, 1];
	this.indicatorIndex = 0;
	this.classNames = ['left', 'current', 'right'];
	this.isAnimationEnd = true;

	while(index--){
		this.switchClass('add', index);
	}

	this.indicators.first().addClass('active');

	element.find('.prev').bind('click', function(){
		that.navigate(-1);
	});

	element.find('.next').bind('click', function(){
		that.navigate(1);
	});
}

Carousel.prototype.navigate = function(direction){
	var index = 3, that = this;

	if(this.isAnimationEnd){
		this.isAnimationEnd = false; 

		setTimeout(function(){
			that.isAnimationEnd = true;
		}, 500);

		while(index--){
			this.switchClass('remove', index);
		}

		this.updateIndexes(direction);

		index = 3;
		while(index--){
			this.switchClass('add', index);
		}
		
		this.updateIndicators(this.indexes[1]);
	}
};

Carousel.prototype.updateIndicators = function(index){
	this.indicators.eq(this.indicatorIndex).removeClass('active');
	this.indicatorIndex = index;
	this.indicators.eq(this.indicatorIndex).addClass('active');
};

Carousel.prototype.updateIndexes = function(direction){
	var index = 3;

	while(index--){
		this.indexes[index] = getNewIndex(this.length, direction, this.indexes[index]);
	}
};

Carousel.prototype.switchClass = function(type, index){
	var itemIndex = this.indexes[index],
		className = this.classNames[index];

	if(type === "add"){
		this.items.eq(itemIndex).addClass(className);
	}else{
		this.items.eq(itemIndex).removeClass(className);
	}
};

function getNewIndex(length, direction, index){
	return (length + direction + index) % length;
}

$(".carousel-holder").each(function(index){
	new Carousel($(this));
});