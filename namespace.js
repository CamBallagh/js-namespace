var BALL0178 = {

    init: function () {
        var box = document.createElement('div'),
        boxes = document.getElementById('boxes');
        box.textContent = "BALL0178";
        box.classList.add('box');
        boxes.appendChild(box);
        // EventListners Part
        box.addEventListener('click', MKlick);
        box.addEventListener('mouseover', MOver);
        box.addEventListener('mouseout', MOut);

        function MKlick(ev) {
            ev.currentTarget.style.borderColor = "#0036FF";
            ev.currentTarget.style.backgroundColor = "#FF0000";

}

        function MOver(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function MOut(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
};   