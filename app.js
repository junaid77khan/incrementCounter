const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');
        const startCount = Number(counter.innerHTML);
        
        const incr = targetCount / 100;
        if(startCount < targetCount) counter.innerHTML = `${startCount + incr}`;

        setTimeout(updateCounter, 10);
    }

    updateCounter();
})