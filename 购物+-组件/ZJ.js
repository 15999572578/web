function ZJ(){
    this.int()
    this.value=0
}
ZJ.prototype={
    int(){
        this.ocenter=document.createElement("center")
        this.obutton_add=document.createElement("button")
        this.oinput=document.createElement("input")
        this.obutton_sub=document.createElement("button")
        this.obutton_add.innerText="+"
        this.obutton_sub.innerText="-"
        this.oinput.value=0
        this.ocenter.appendChild(this.obutton_add)
        this.ocenter.appendChild(this.oinput)
        this.ocenter.appendChild(this.obutton_sub)
        document.body.appendChild(this.ocenter)
        this.obutton_add.addEventListener("click",this.add.bind(this))
        this.obutton_sub.addEventListener("click",this.sub.bind(this))
    },
    add(){
        this.value++
        this.oinput.value=this.value
    },
    sub(){
        this.value--
        if(this.value<=0){
            this.value=0
        }
        this.oinput.value=this.value
    }
}