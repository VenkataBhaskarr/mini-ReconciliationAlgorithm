

const mainContainer = document.getElementById('main');
let virtualDOM = []
let virtualCopyOfDOM = []


function RenderComponent(data){
    console.log(virtualCopyOfDOM)
    if(virtualDOM.length === 0){
        HelperForRender(data)
    }else{
        let k = 0
        for(let i=0;i<virtualCopyOfDOM.length;i++){
          if(k === data.length){
              break
          }else{

              if(virtualCopyOfDOM[i].id === data[i].id){
                 // do nothing eat five star
              }else{
                 HelperForRender([data[i]])
              }
              k = k+1;
          }
        }
        for(let i=k;i<virtualCopyOfDOM.length;i++){
            virtualCopyOfDOM[i].child.innerHTML = ""
            virtualCopyOfDOM[i].parent.removeChild(virtualCopyOfDOM[i].child)
            virtualDOM.splice(i,1)
        }
        for(let i=k;i<data.length;i++){
            HelperForRender([data[i]])
        }
    }

    virtualCopyOfDOM = [...virtualDOM]
}


function HelperForRender(data){
        for(let i=0; i<data.length; i++){
            const childNode = document.createElement('div');
            const h1Att = document.createElement('h1')
            const h2Att = document.createElement('h2')
            h1Att.textContent = data[i].name
            h2Att.textContent = data[i].age
            childNode.appendChild(h1Att)
            childNode.appendChild(h2Att)
            mainContainer.appendChild(childNode)
            const newChildInVdom = {
                id : data[i].id,
                parent : mainContainer,
                child  : childNode
            }
            virtualDOM.push(newChildInVdom)
        }
}


setInterval(() => {
   const data = []
   const length = Math.random()*10
   for(let i=0;i<length;i++){
       const obj = {
           id : 100,
           name : "pranathi",
           age  : 20
       }
       data.push(obj)
   }
   RenderComponent(data)
},2000)
