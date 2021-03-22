'use strict';

function Dog(dog) {
  this.name = dog.name;
  this.image_url = dog.image_url;
  this.hobbies = dog.hobbies;
}

// Rendering Manually
Dog.prototype.renderManually = function() {
  $('main').append(
    `
    <section class="dog-template">
      <h2>${this.name}</h2>
      <img src="${this.image_url}" alt="">
      <p>${this.hobbies}</p>
    </section>
    `
  );
};

// Using a clone
Dog.prototype.cloneRender = function () {
  let dogSectionClone = $('.dog-template').clone(); //will clone the div above
  dogSectionClone.find('h2').text(this.name);
  dogSectionClone.find('p').text(this.hobbies);
  dogSectionClone.find('img').attr('src', this.image_url);
  dogSectionClone.removeClass('dog-template'); //to prevent new section from being cloned in the future
  dogSectionClone.attr('class', this.name); //give it a new class name
  $('section').append(dogSectionClone);
};

const ajaxSettings = {
  method: 'get',
  dataType: 'json',
};

// $.ajax(url [,settings]) ===> to get
// .then() is used with promises
// ajax is a promise, a promise is a form of request
$.ajax('data.json', ajaxSettings).then((data) => {
  console.log(data);

  data.forEach(dog => {
    let dogObject = new Dog(dog);

    // render the created dog object
    dogObject.renderManually(); //manual method
    dogObject.cloneRender(); //clone method
  });
});