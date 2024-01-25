const successBtn = document.querySelector('.btn-success');
const warningBtn = document.querySelector('.btn-warning');
const errorBtn = document.querySelector('.btn-error');
const infoBtn = document.querySelector('.btn-info');

const snackbarContainer = document.getElementById('snackbar-container');

errorBtn.addEventListener('click', ()=>{
    snackbar('error', '<b>Error: </b> Form validation error', 3000)
});

infoBtn.addEventListener('click', ()=>{
    snackbar('info', '<b>Info: </b> Form validation error', 3000)
});
warningBtn.addEventListener('click', ()=>{
    snackbar('warning', '<b>Warning: </b> Form validation error', 3000)
});

successBtn.addEventListener('click', ()=>{
    snackbar('success', '<b>Success: </b> Form is valid', 3000)
});

function snackbar(type, msg, time){

    const para = document.createElement('p');
    para.classList.add('snackbar');
    para.innerHTML = `${msg} <span>&times;</span>`;


    if(type === 'error'){
        para.classList.add('error');
    }else if(type === 'success'){
        para.classList.add('success');

    }else if(type === 'warning'){
        para.classList.add('warning')

    }else if(type === 'info'){
        para.classList.add('info')

    }

    snackbarContainer.appendChild(para);
    para.classList.add('fade-out');


    setTimeout(()=>{
        snackbarContainer.removeChild(para)
    },time)

}