const answerQuestion =[
    {question: 'kapan javascript pertama kali dirilis?',
        a:'A. 1945',
        b:'B. 1995',
        c:'C. 2001',
        d:'D. 1999',
        correct:'b'
    },{
        question: 'apa kepanjangan dari HTML?',
        a:'A. HyperText Markup Language',
        b:'B. HoistingText Markup Ligatures',
        c:'C. Hypertooth Mark Link',
        d:'D. HardText Markup Language',
        correct:'a'
    },{
        question: 'siapa pembuat javascript?',
        a:'A. Mark Zuckerberg',
        b:'B. Taehyung',
        c:'C. Brendan Eich',
        d:'D. Snoop Dog',
        correct:'c'
    },{
        question: 'apa kepanjangan dari CSS?',
        a:'A. Cascading Style Sheets',
        b:'B. Cascade Syle Shot',
        c:'C. Cascade Style Sheet',
        d:'D. Cascading Sile Sit',
        correct:'a'
    },{
        question: 'siapa pembuat NodeJs?',
        a:'A. Ryan Dahl',
        b:'B. Brad',
        c:'C. Jquery',
        d:'D. Jokowi',
        correct:'a'
    },{
        question: 'apa kepanjangan dari HTTP?',
        a:'A. Hypertext Twisted Protocol',
        b:'B. Hypertext Transfer Procontrol',
        c:'C. Hypertext Transfer Protocol',
        d:'D. semua salah',
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
    console.log(questionData.correct)
    
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
            <h2>kamu telah menjawab ${score}/${answerQuestion.length} pertanyaan.</h2>
            
            <button type="button" class="btn-outline-danger" onclick="location.reload()">Reload</button>
           
            `;
         
        
        }
    }
    
})
