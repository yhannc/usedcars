README
======

ID attribute values
-------------------

- *cars*
	Applied to a `div` tag. The list of cars in this representation. This 
	list may contain only one car.
- *makes*
	Applied to a `div` tag. The list of makes in this representation. This 
	list may contain only one make.
- *models*
	Applied to a `div` tag. The list of models in this representation. 
	This list may contain only one model.
- *years*
	Applied to a `div` tag. The list of years in this representation. This 
	list may contain only one year.

Class attribute values
----------------------

- *all*
	Applied to a `ul` tag. A list representation. When this element is a 
	descendant of `div.id="makes"` it may have one or more 
	`li.class="make"` descendant elements. When this element is a 
	descendant of `div.id="models"`	it may have one or more 
	`li.class="model"` descendant elements. When this element is a 
	descendant of `div.id="years"` it may have one or more 
	`li.class="year"` descendant elements. When this element is a 
	descendant of `div.id="cars"` it may have one or more `li.class="car"` 
	descendant elements.
- *car*
	Applied to an `li` tag. A representation of a single car. It should 
	contain	the following descendant elements:
		`span.class="car-text"`
		`a.rel="car"`
	It may also contain the following descendant elements:
		`img.class="car-image"`
		`span.class="description"`
- *car-add*
	Applied to a `form` tag. A link template to create a new car profile. 
	The element must be set to `form.method="post"` and should contain 
	the following descendant elements:
		`input[text].name="make"`
		`input[text].name="model"`
		`input[text].name="year"`
		`input[text].name="car"`
	It may also contain the following descendant elements:
		`input[file].name="image"`
		`textarea.name="description"`		
- *car-find*
	Applied to an `li` tag. A representation of a single car. It should 
	contain the following descendant elements:
		`span.class="make-text"`
		`a.rel="car"`
- *car-image*
	Applied to an `img` tag. A reference to an image of the listed car.
- *car-search*
	Applied to a `form` tag. A link template to search of all the cars. 
	The element must be set to `form.method="get"` and should contain 
	the following descendant elements:
		`input[text].name="search"`
- *car-text*
	Applied to a `span` tag. The name of the listed car.
- *car-update*
	Applied to a `form` tag. A link template to update the designated 
	car's profile. The element must be set to `form.method="post"` and 
	should contain 	the following descendant elements:
		`input[text].name="make"`
		`input[text].name="model"`
		`input[text].name="year"`
		`input[text].name="car"`
	It may also contain the following descendant elements:
		`input[file].name="image"`
		`textarea.name="description"`	
- *description*
	Applied to a `span` tag. Contains the text description of a car.
- *make*
	Applied to an `li` tag. A representation of a single make. It should 
	contain the following descendant elements:
		`span.class="make-text"`
		`a.rel="make"`
- *make-text*
	Applied to a `span` tag. The name of a car make.
- *model*
	Applied to an `li` tag. A representation of a single model. It should 
	contain the following descendant elements:
		`span.class="model-text"`
		`a.rel="model"`
- *model-text*
	Applied to a `span` tag. The name of a car model.
- *single*
	When this element is a descendant of `div.id="cars"` it contains the 
	car selected via a car link. Should have a single `li.class=""car` 
	descendant element.
- *year*
	Applied to an `li` tag. A representation of a single year. It should 
	contain the following descendant elements:
		`span.class="year-text"`
		`a.rel="year"`
- *year-text*
	Applied to a `span` tag. The name of a particular year.

Name attribute values
---------------------

- *car*
	Applied to an `input[text]` element. The name of a car.
- *description*
	Applied to a `textarea` element. The description of the car.
- *image*
	Applied to an `input[file]` element. The image for the car.
- *make*
	Applied to an `input[text]` element. The search value to use when 
	searching makes.
- *model*
	Applied to an `input[text]` element. The search value to use when 
	searching models.
- *year*
	Applied to an `input[text]` element. The search value to use when 
	searching years.

Rel attribute values
--------------------

- *car*
	Applied to an `a` tag. A reference to a car representation.
- *cars*
	Applied to an `a` tag. A reference to a list of cars representation.
- *make*
	Applied to an `a` tag. A reference to a make representation.
- *makes*
	Applied to an `a` tag. A reference to a list of makes representation.
- *model*
	Applied to an `a` tag. A reference to a model representation.
- *models*
	Applied to an `a` tag. A reference to a list of models representation.
- *year*
	Applied to an `a` tag. A reference to a year representation.
- *years*
	Applied to an `a` tag. A reference to a list of years representation.
