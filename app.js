const correctAnswers = ['A', 'A', 'A', 'A', 'A']
const form = document.querySelector('form')
const result = document.querySelector('.wynik')




form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check answer

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 20;
        }
    });

    result.setAttribute('style', 'display: block')
    scrollTo(0,0)  




    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer)
        } else {
            output++;
        }
    }, 20);
});


















