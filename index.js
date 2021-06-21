// Make Carousel

        // largest scope
        let position = 0;

        const nextSlide = function () { // block scoped
            // grab the element from the DOM
            const imageSlider = document.getElementById('imageSliderJS');
            // decrement the postion by the width of the image
            position -= 600;
            // access the style transform on the element and apply position
            imageSlider.style.transform = `translateX(${position}px)`;            
        }

        const previousSlide = function () { // block scoped
            // grab the element from the DOM
            const imageSlider = document.getElementById('imageSliderJS');
            // decrement the postion by the width of the image
            position += 600;
            // access the style transform on the element and apply position
            imageSlider.style.transform = `translateX(${position}px)`;            
        }