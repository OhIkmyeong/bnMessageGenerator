export function add_path(){
    make_new_path();
}//add_path

function make_new_path(){
    const $label = document.createElement('LABEL');
    $label.classList.add('path');

    const $ipt = document.createElement('INPUT');
    $ipt.classList.add('iptPath');
    $ipt.type="text";
    $ipt.placeholder = "커밋한 경로를 입력해주세요";
    $label.appendChild($ipt);

    const $span = document.createElement('SPAN');
    $span.classList.add('lbl');
    $span.textContent = '경로';
    $label.appendChild($span);

    const before = document.getElementById('btn_add_path');

    before.parentNode.insertBefore($label, before);
}//make_new_path