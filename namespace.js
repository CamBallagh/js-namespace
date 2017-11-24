var BALL0178 = {

    init: function () {


        var box = document.createElement('div'),
            boxes = document.getElementById('boxes');


        box.textContent = "BALL0178";


        box.classList.add('box');

        boxes.appendChild(box);


        box.addEventListener('mouseover', mouseOver);
        box.addEventListener('mouseout', mouseOut);
        box.addEventListener('click', mouseClick);

        function mouseOver(ev) {
            event.currentTarget.classList.toggle('highlight');
        }

        function mouseOut(ev) {
            event.currentTarget.classList.toggle('highlight');
        }

        function mouseClick(ev) {
            event.currentTarget.style.borderColor = "#FFFF00";
            event.currentTarget.style.backgroundColor = "#FF00FF";
        }

    }

};

