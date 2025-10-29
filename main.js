let landingPageContainer = document.querySelector('.landingPageContainer');
let landingPageOne = document.querySelector('.landingPageOne');
let landingPageTwo = document.querySelector('.landingPageTwo');
let landingPageThree = document.querySelector('.landingPageThree');
let switcher = document.querySelectorAll('.switcher');

//when user clicks on buttons to changing landing page
switcher[0].onclick = () => {
    landingPageOne.style.display = 'flex';
    landingPageTwo.style.display = 'none';
    landingPageThree.style.display = 'none';
    switcher[0].style.background = '#189b18';
    switcher[1].style.background = '#fff';
    switcher[2].style.background = '#fff';
}
switcher[1].onclick = () => {
    landingPageOne.style.display = 'none';
    landingPageTwo.style.display = 'flex';
    landingPageThree.style.display = 'none';
    switcher[1].style.background = '#189b18';
    switcher[0].style.background = '#fff';
    switcher[2].style.background = '#fff';
}
switcher[2].onclick = () => {
    landingPageOne.style.display = 'none';
    landingPageTwo.style.display = 'none';
    landingPageThree.style.display = 'flex';
    switcher[2].style.background = '#189b18';
    switcher[1].style.background = '#fff';
    switcher[0].style.background = '#fff';
}

let furtherInfo = document.querySelector('.furtherInfo');
let events = document.getElementById('Events')

//function when user clicks on event
class showFurtherInfo {
    constructor(image, title, time) {
        this.title = document.createElement('h2');
        this.image = document.createElement('img');
        this.time = document.createElement('span');
        this.text = document.createElement('p');

        this.title.textContent = title;
        this.image.src = image;
        this.time.textContent = time;
        this.text.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam cum, quia vitae quam vel ab quo debitis culpa iusto earum necessitatibus beatae eaque laudantium? In blanditiis a at perspiciatis expedita. Saepe in eos dolorum ad asperiores error deserunt natus, laborum sed eligendi.";

        this.image.classList.add('eventImage');
        this.title.classList.add('title');
        this.time.classList.add('time');

    };
    createPopUpInfo() {
        const container = document.createElement('div');
        container.appendChild(this.image);
        container.appendChild(this.title);
        container.appendChild(this.time);
        container.appendChild(this.text);
        container.classList.add('furtherInfo');

        let furtherInfoClose = document.createElement('img');
        furtherInfoClose.classList.add('furtherInfoClose');
        furtherInfoClose.src = "icons/close.png";
        container.appendChild(furtherInfoClose);
        events.appendChild(container);

        //when user clicks on close button after futherInfo is opened
        furtherInfoClose.onclick = () => {
            container.style.left = "-200%";
        }
        return container;
    }

}
function show(a, b, c) {
    const popUp = new showFurtherInfo(a, b, c);
    const popUPElement = popUp.createPopUpInfo();
    return popUPElement;

}

////////////
let displayMethod = document.querySelector(".method");
let arrow = document.querySelector(".arrow");
let bar = document.querySelector(".bar");
let dropDown = document.querySelector('.dropDown');
let count = "";

bar.onclick = () => {
    if (dropDown.style.display == 'none') {
        dropDown.style.display = 'block';
        arrow.style.transform = 'rotate(270deg)';
    } else {
        dropDown.style.display = 'none';
        arrow.style.transform = 'rotate(90deg)';
    }
}


function payWith(name) {
    count = name;
    displayMethod.textContent = count;
    dropDown.style.display = 'none';
    arrow.style.transform = 'rotate(90deg)';
}

//if user clicks on number of tickets
let ticketImages = document.querySelector('.ticketImages');
let numOfTickets = document.querySelector('.numOfTickets');

let counter = 0;
function increase() {
   
    if(counter <= 9){
        counter++;
        numOfTickets.textContent = counter;
        let ticketPic= document.createElement('img');
        ticketPic.src = "images/ticket.jpg";
        ticketPic.classList.add('img')
        for (let i = 0; i < counter; i++) {
            ticketImages.appendChild(ticketPic);
        }
       
    }else{
        alert('maximum ticket bought');
        counter+=0;
        numOfTickets.textContent = counter;
    }

}
function decrease() {
    while(ticketImages.firstChild){
        ticketImages.removeChild(ticketImages.firstChild);
       counter = 0;
       numOfTickets.textContent = counter;

    }

    //ticketImages.removeChild(ticketPic);
}

let navLinks = document.querySelector('.navLinks');

//when user clicks on menu button
let menuBtn = document.querySelector('.menuBtn');
menuBtn.onclick = ()=>{
    navLinks.style.left = "0px";
}

//when user clicks on close button after menu bar is opened
let closeBtn = document.querySelector('.closeBtn');
closeBtn.onclick = ()=>{
    navLinks.style.left = "-440px";
}