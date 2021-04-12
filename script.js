const answerQuestion =[
    {question: 'siapakah orang paling ganteng?',
        a:'A. denny abbas zain si tamvan',
        b:'B. justin bieber',
        c:'C. paul simanjuntak',
        d:'D. uing',
        correct:'a'
    },{
        question: 'siapakah yang sering ngambek?',
        a:'A. pocing',
        b:'B. amel zulfa',
        c:'C. amajoon',
        d:'D. setan',
        correct:'b'
    },{
        question: 'kapan denny ngupil?',
        a:'A. jam 1 siang',
        b:'B. dini hari',
        c:'C. setiap saat',
        d:'D. lagi berak',
        correct:'c'
    },{
        question: 'siapa pembuat amel zulfa nangis?',
        a:'A. bukan saya',
        b:'B. tak tau saya',
        c:'C. orangnya aja gak jelas',
        d:'D. setan kunti',
        correct:'a'
    },{
        question: 'kapan cicak berak?',
        a:'A. zaman dynasty minx',
        b:'B. pas jamet tiktok menyerang',
        c:'C. pas si amel jadi bucin',
        d:'D. sebelum masehi',
        correct:'b'
    },{
        question: 'kapan si cewe cabul gak mesum?',
        a:'A. setiap hari cabul',
        b:'B. setiap saat cabul',
        c:'C. pas si amel jadi bucin',
        d:'D. setiap dua bulan sekali',
        correct:'c'
    }
]

const question=document.getElementById('question')
const a_label=document.getElementById('aj');
const b_label=document.getElementById('bj');
const c_label=document.getElementById('cj');
const d_label=document.getElementById('dj')
const submit=document.getElementById('submit');
const answerEl=document.querySelectorAll('.form')
const perilaku=document.querySelector('h2')
let score=0;
let i=0;

// input text question

inputQ();
function inputQ(){
    uncheck()
    const questionData=answerQuestion[i]
    question.innerText=questionData.question;
    a_label.innerText=questionData.a;
    b_label.innerText=questionData.b;
    c_label.innerText=questionData.c;
    d_label.innerText=questionData.d;
    console.log(i)
    
};

function main(){
    let jawaban=undefined;
    answerEl.forEach(f=>{
      if(f.checked){
        jawaban=f.id;
      }
    })
    return jawaban;
};

function uncheck(){
    answerEl.forEach(el=>{
        el.checked=false
    })
    
}

function tanda(){
    if (score<=3){return 'bego banget issss'
}else if(score=4){
    return 'lumayan pinter lahh'
}else{
    return 'uwawww jago kali'
}
    
        

}

submit.addEventListener('click',()=>{
    const jawaban=main()

    if(jawaban){
        if(jawaban === answerQuestion[i].correct){
            score++;
        }
        i++;

        

        if (i<answerQuestion.length){
            inputQ()
        }else{
            question.innerHTML = `
            <h2>kmu telah menjawab ${score}/${answerQuestion.length} pertanyaan.</h2>
            
            <button type="button" class="btn-outline-danger" onclick="location.reload()">Reload</button>
           
            `;
            perilaku.innerHTML= tanda();
        
        }
    }
    
})
