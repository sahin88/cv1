window.onload= function(){
    console.log("selamlar")
    document.getElementById('downloo').addEventListener('click',()=>{
        const invoice= this.document.getElementById('target')
        console.log(invoice)
        console.log(window)
        var opt = {
            margin: 0,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2},
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save()
    })
}