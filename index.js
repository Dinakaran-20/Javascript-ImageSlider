const ImageElement = document.querySelector('#img');
const PrevBtn = document.querySelector('#prev');
const NextBtn = document.querySelector('#next');

PrevBtn.addEventListener('click', function() {
    console.log('prev btn clicked');

    const currentSrc = ImageElement.getAttribute('src');

    let nextSrc = '';

    if (currentSrc.includes('image1')) {
        nextSrc = 'Images/image5.jpeg';
    } else if (currentSrc.includes('image2')) {
        nextSrc = 'Images/image1.jpg';
    } else if (currentSrc.includes('image3')) {
        nextSrc = 'Images/image2.jpeg';
    } else if (currentSrc.includes('image4')) {
        nextSrc = 'Images/image3.jpeg';
    } else if (currentSrc.includes('image5')) {
        nextSrc = 'Images/image4.jpeg';
    }

    ImageElement.setAttribute('src', nextSrc);
});

NextBtn.addEventListener('click', function() {
    console.log('prev btn clicked');

    const currentSrc = ImageElement.getAttribute('src');

    let nextSrc = '';

    if (currentSrc.includes('image1')) {
        nextSrc = 'Images/image2.jpeg';
    } else if (currentSrc.includes('image2')) {
        nextSrc = 'Images/image3.jpeg';
    } else if (currentSrc.includes('image3')) {
        nextSrc = 'Images/image4.jpeg';
    } else if (currentSrc.includes('image4')) {
        nextSrc = 'Images/image5.jpeg';
    } else if (currentSrc.includes('image5')) {
        nextSrc = 'Images/image1.jpg';
    }
    

    ImageElement.setAttribute('src', nextSrc);
});


