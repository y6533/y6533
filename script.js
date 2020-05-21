const $window = $(window);
const $body = $('body');

class Slideshow {
  constructor(userOptions = {}) {
    const defaultOptions = {
      $el: $('.slideshow'),
      showArrows: false,
      showPagination: true,
      duration: 10000,
      autoplay: true };


    let options = Object.assign({}, defaultOptions, userOptions);

    this.$el = options.$el;
    this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
    this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
    this.showPagination = options.showPagination;
    this.currentSlide = 1;
    this.isAnimating = false;
    this.animationDuration = 1200;
    this.autoplaySpeed = options.duration;
    this.interval;
    this.$controls = this.$el.find('.js-slider-home-button');
    this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

    this.$el.on('click', '.js-slider-home-next', event => this.nextSlide());
    this.$el.on('click', '.js-slider-home-prev', event => this.prevSlide());
    this.$el.on('click', '.js-pagination-item', event => {
      if (!this.isAnimating) {
        this.preventClick();
        this.goToSlide(event.target.dataset.slide);
      }
    });

    this.init();
  }

  init() {
    this.goToSlide(1);
    if (this.autoplay) {
      this.startAutoplay();
    }

    if (this.showPagination) {
      let paginationNumber = this.maxSlide;
      let pagination = '<div class="pagination"><div class="container">';

      for (let i = 0; i < this.maxSlide; i++) {
        let item = `<span class="pagination__item js-pagination-item ${i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
        pagination = pagination + item;
      }

      pagination = pagination + '</div></div>';

      this.$el.append(pagination);
    }
  }

  preventClick() {
    this.isAnimating = true;
    this.$controls.prop('disabled', true);
    clearInterval(this.interval);

    setTimeout(() => {
      this.isAnimating = false;
      this.$controls.prop('disabled', false);
      if (this.autoplay) {
        this.startAutoplay();
      }
    }, this.animationDuration);
  }

  goToSlide(index) {
    this.currentSlide = parseInt(index);

    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = 1;
    }

    if (this.currentSlide === 0) {
      this.currentSlide = this.maxSlide;
    }

    const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="' + this.currentSlide + '"]');
    const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
    const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');

    this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
    this.$el.find('.js-pagination-item').removeClass('is-current');

    if (this.maxSlide > 1) {
      newPrev.addClass('is-prev');
      newNext.addClass('is-next');
    }

    newCurrent.addClass('is-current');
    this.$el.find('.js-pagination-item[data-slide="' + this.currentSlide + '"]').addClass('is-current');
  }

  nextSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.preventClick();
    this.goToSlide(this.currentSlide - 1);
  }

  startAutoplay() {
    this.interval = setInterval(() => {
      if (!this.isAnimating) {
        this.nextSlide();
      }
    }, this.autoplaySpeed);
  }

  destroy() {
    this.$el.off();
  }}


(function () {
  let loaded = false;
  let maxLoad = 3000;

  function load() {
    const options = {
      showPagination: true };


    let slideShow = new Slideshow(options);
  }

  function addLoadClass() {
    $body.addClass('is-loaded');

    setTimeout(function () {
      $body.addClass('is-animated');
    }, 600);
  }

  $window.on('load', function () {
    if (!loaded) {
      loaded = true;
      load();
    }
  });

  setTimeout(function () {
    if (!loaded) {
      loaded = true;
      load();
    }
  }, maxLoad);

  addLoadClass();
})();

var myPanel = document.getElementById("panel");
var subpanel = document.getElementById("panel-container");

myPanel.onmousemove = transformPanel;
myPanel.onmouseenter = handleMouseEnter;
myPanel.onmouseleave = handleMouseLeave;

var mouseX, mouseY;

var transformAmount = 3;

function transformPanel(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
    const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

    subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter() {
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);
    subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
    subpanel.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);

    subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}







var myPanel2 = document.getElementById("panel2");
var subpanel2 = document.getElementById("panel-container2");

myPanel2.onmousemove = transformPanel2;
myPanel2.onmouseenter = handleMouseEnter2;
myPanel2.onmouseleave = handleMouseLeave2;

var mouseX, mouseY;

var transformAmount =3;

function transformPanel2(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel2.offsetLeft + myPanel2.clientWidth / 2;
    const centerY = myPanel2.offsetTop + myPanel2.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel2.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel2.clientHeight / 2));

    subpanel2.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter2() {
    setTimeout(() => {
        subpanel2.style.transition = "";
    }, 100);
    subpanel2.style.transition = "transform 0.1s";
}

function handleMouseLeave2() {
    subpanel2.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel2.style.transition = "";
    },0);

    subpanel2.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}




var myPanel3 = document.getElementById("panel3");
var subpanel3 = document.getElementById("panel-container3");

myPanel3.onmousemove = transformPanel3;
myPanel3.onmouseenter = handleMouseEnter3;
myPanel3.onmouseleave = handleMouseLeave3;

var mouseX, mouseY;

var transformAmount =3;

function transformPanel3(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel3.offsetLeft + myPanel3.clientWidth / 2;
    const centerY = myPanel3.offsetTop + myPanel3.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel3.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel3.clientHeight / 2));

    subpanel3.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter3() {
    setTimeout(() => {
        subpanel3.style.transition = "";
    }, 100);
    subpanel3.style.transition = "transform 0.1s";
}

function handleMouseLeave3() {
    subpanel3.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel3.style.transition = "";
    },0);

    subpanel3.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}

