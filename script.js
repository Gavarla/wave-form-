const labels=document.querySelectorAll('.form-controler label')
// console.log(labels)
labels.forEach(label=>{
    label.innerHTML=label.innerText
    .split('').map((letter,idx)=>`<span style="transition-delay:${idx* 30}ms">${letter}</span>`)
    .join('')
})