import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const form = document.querySelector('.feedback-form')

const data = { email: '', message: ''};

 window.addEventListener('DOMContectLoaded', setValuesElementsForm)

form.addEventListener('input', throttle (setDataToLs, 500));


form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    
});

function setDataToLs({ target: { name, value } }) {
    data[name] = value;
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify({ ...data, [name] :value }))

}


function setValuesElementsForm() {
   const dataFromLS = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
    if (dataFromLS ) {
        data.email = dataFromLS.email;
        data.message = dataFromLS.message;
        form.elements.email.value = dataFromLS.email;
        form.elements.email.value = dataFromLS.message;
  }
}