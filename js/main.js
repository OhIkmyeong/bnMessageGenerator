import { add_path } from "./add_path.js";
import { on_submit,get_data } from "./submit.js";

const $form = document.getElementById('myForm');
const $btn_add_path = document.getElementById('btn_add_path');

$form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = get_data(e);
    on_submit(data);
});

$btn_add_path.addEventListener('click',add_path);
