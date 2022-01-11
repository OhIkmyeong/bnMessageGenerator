import { make_end_string } from "./date.js";

export function get_data(e){
    const result = {
        name : e.target[0].value,
        path : [],
        recommit : e.target["recommit"].checked,
    }
    return result;
}//get_data

export async function on_submit(data){
    const $result = document.getElementById('result');
    let result = '';
    //업무명
    const busiName = data.name ? `[${data.name}]<br>` : '';
    result += busiName;

    //경로 싹 다 추가
    data.path = await inspect_paths();
    const busiPath = add_path_string_all(data);
    result += busiPath;

    //마지막 말 추가하기
    const endString = make_end_string(data);
    result += endString;

    //표시
    $result.innerHTML = result; 
}//on_submit

/* path 검증 */
async function inspect_paths(){
    const all_path = document.querySelectorAll('.iptPath');
    for(let i=all_path.length - 1; i>=0; i--){
        const trimmed = all_path[i].value.trim(); 
        if(!trimmed){
            if(all_path.length!=1){all_path[i].parentElement.remove();}
        }//if
        all_path[i].value = trimmed;
    }//for
    return all_path;
}//inspect_paths

/* 모든 path 더하기 */
function add_path_string_all(data){
    const {path} = data;
    let result = '';
    path.forEach((ipt,idx)=>{
        if(ipt.value){
            result += `(${idx}) ${ipt.value}<br>`;
        }//if
    });
    return result;
}//add_path_string_all