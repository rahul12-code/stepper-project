

let nxt_btn = document.querySelector('#next');
let prev_btn = document.querySelector('#prev');
let main_content = document.querySelector('#main_content');

let count=1;

function updateStep(count){

    let contents = ['Add contact details for further communications.','Add shipping address for successful delivery.',
        'Complete payment to complete the order.','Ready to get delivered!','Order delivered successfully!🎉'
    ]

    // styling the previous button
    if(count===1){
        prev_btn.style.color='rgb(128, 128, 128)';
    }else{
        prev_btn.style.backgroundColor='rgba(128, 128, 128,0.5)';
        prev_btn.style.color='black';
    }

    // all previous circles to green with a tick
    
    for (let i = 1; i < count; i++) {
        let previousCircle = document.querySelector(`#circle${i}`);
        previousCircle.style.backgroundColor = 'green';
        previousCircle.style.color = 'white';
        previousCircle.innerHTML = '✔'; // Add tick mark

        let previousLine = document.querySelector(`#line${i}`);
        if (previousLine) {
            previousLine.style.backgroundColor = 'green'; // Update line to green
        }


    }

    if(count<5){
        // Update the current circle
        let currentCircle = document.querySelector(`#circle${count}`);
        currentCircle.style.backgroundColor = 'rgba(0, 0, 255,0.75)';
        currentCircle.style.color = 'white';
        currentCircle.innerText = count;
    }

    // Reset circles after the current step
    for (let i = count + 1; i <= 4; i++) {
        let nextCircle = document.querySelector(`#circle${i}`);
        nextCircle.style.backgroundColor = 'rgba(128, 128, 128, 0.5)';
        nextCircle.style.color = 'black';


        let nextLine = document.querySelector(`#line${i - 1}`); // Line before the next circle
        if (nextLine) {
            nextLine.style.backgroundColor = '#bfb8b8'; // Reset line color to gray
        }
    }

    main_content.innerText = contents[count - 1];

    // Style the Next Button
    if(count===4){
        nxt_btn.innerText='Finish';
    }else if(count===5){
        nxt_btn.innerText='Finish';
        nxt_btn.style.color = 'rgb(128, 128, 128)';
    } else {
        nxt_btn.innerText = 'Next';
        nxt_btn.style.color = 'black'; 
    }
}


nxt_btn.onclick=()=>{
    
    if(count<5){
        count+=1;
        updateStep(count);
    }
}

prev_btn.onclick=()=>{

    if(count>1){
        count-=1;
        updateStep(count);
    }
}
