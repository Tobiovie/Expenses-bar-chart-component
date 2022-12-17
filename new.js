const ele=document.querySelector('div')

fetch('../data.json').then((dat)=>dat.json())
.then((d)=>{
    let output=''
    let i=0
    d.map((data)=>{
       output+=`<div>
                  <div class="hover">
                    <div class="none">$${data.amount}</div>
                    <div class="bar" style="height:${data.amount*3}px;margin-bottom:1em">
                        
                    </div>
                    <p style="text-align:center;color:gray">${data.day}</p>
                  </div>
                </div>`
        i++
    })
    const child2=document.querySelector('.child2').innerHTML=output
    const hover=document.querySelector('.child2').children
    for(let i=0;i<hover.length;i++){
        if(i==2){
           const div=hover[i].querySelector('.bar')
            div.innerHTML='<div style="height:100%;width:100%;background-color:hsl(186, 34%, 60%);border-radius:5px"></div>'
        }
        
    }
}
)

