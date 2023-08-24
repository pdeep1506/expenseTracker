export const dateConvertor = (date)=>{
    const answer = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return answer;
}

