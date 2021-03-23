'use strict';





//////// Mustache
function Neighborhood(rawDataObject) {
  for (let propertyName in rawDataObject) {
    this[propertyName] = rawDataObject[key];
  }
}

////// building with jQuery
Neighborhood.prototype.buildWithJQuery = function () {
  let newDivContainer = $('<div></div>').clone();
  newDivContainer.append(`
  <h2>${this.name}</h2>
  <P>${this.city}</p>
  <P>${this.population}</p>
  <P>${this.founded}</p>
  ${this.body}`);

  $('#neighborhoods').append(newDivContainer);
};
neighborhoods.forEach((neighborhood) => {
  neighborhood.buildWithJQuery();
});

////// cloning with jQuery
Neighborhood.prototype.cloneWithJQuery = function () {
  const clonedContainer = $('.template').clone();
  clonedContainer.removeClass('template');

  clonedContainer.find('h2').text(this.name);
  clonedContainer.find('.city').text(this.city);
  clonedContainer.find('.population').text(this.population);
  clonedContainer.find('.founded').text(this.founded);
  clonedContainer.find('.body').text(this.body);

  $('#neighborhoods').append(clonedContainer);
};
neighborhoods.forEach((neighborhood) => {
  neighborhood.cloneWithJQuery();
});

///////////// building with Mustache
////// <template id="neighborhood-template" type="text/x-tmpl-mustache">
//////  <div>
//////    <h2>{{name}}</h2> like this, they should match the constructor properties
//////    <p>Part of: {{city}}</p>
/////// </div>
///////   </template>
///////   <script src="jQuery url"
///////   <script src="https://unpkg.com/mustache@latest"
///////   <script src="mustache.js" if it was not linked through cdn as above 
///////   <script src="dataset.js" so we dont need to use ajax
///////   <script src="neighborhood.js"
Neighborhood.prototype.renderWithMustache = function () {
  let template = $('#neighborhood-template').html();

  let html = Mustache.render(template, this); //the template and the object

  $('#neighborhoods').append(html);
}
neighborhoods.forEach((neighborhood) => {
  neighborhood.renderWithMustache();
})




//////creation of objects
neighborhoodDataSet.forEach((neighborhoodObject) =>{
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});