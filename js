const quiz = [
            {
                ques: "Q1: Find the odd number ?",
                a: "5",
                b: "6",
                c: "8",
                d: "2",
                ans: "ans1"
            },
            {
                ques: "q : who is you",
                a:"me",
                b: "he",
                c: "she",
                d: "they",
                ans: "ans1"

            },
            {
                ques: "Q2: Find the even number ?",
                a: "5",
                b: "7",
                c: "11",
                d: "2",
                ans: "ans4"
            },
            {
                ques: "Q3: Find the prime number ?",
                a: "6",
                b: "5",
                c: "8",
                d: "2",
                ans: "ans2"
            },
            {
                
                ques: "Q4: Find the prime number ?",
                a: "6",
                b: "5",
                c: "8",
                d: "2",
                ans: "ans2"
            }
        ];

        const question = document.querySelector(".question");
        const option1 = document.querySelector("#option1");
        const option2 = document.querySelector("#option2");
        const option3 = document.querySelector("#option3");
        const option4 = document.querySelector("#option4");

        const submitbtn = document.getElementById("submit");

        const answers = document.querySelectorAll(".answer");

        const showscore = document.querySelector("#showscore");


        let quescount = 0;
        let score = 0;

        // For loading the first question and then moving on
        const loadQuestion = () => {
            question.innerText = quiz[quescount].ques;
            option1.innerText = quiz[quescount].a;
            option2.innerText = quiz[quescount].b;
            option3.innerText = quiz[quescount].c;
            option4.innerText = quiz[quescount].d;
        }

        loadQuestion();


        getcheckedans = () => {
            let answer;
            answers.forEach((currAnselem) => {
                if (currAnselem.checked) {
                    answer = currAnselem.id;
                }

            })
            return answer;
        }

        //for deselecting the options
        const deseletAll = () => {
            answers.forEach((currAnselem) => currAnselem.checked = false)

        }

        // if sumbit is being clicked then we check that the checked answer matches or not
        submitbtn.addEventListener("click", () => {
            const anscheck = getcheckedans();
            if (anscheck == quiz[quescount].ans) {
                score++;
            }
            quescount++;

            deseletAll();
            if (quescount < quiz.length) {
                loadQuestion();
            }
            else {
                //printing the score
                if(score !=quiz.length)
                {
                showscore.innerHTML = ` <h3> You scored ${score}/${quiz.length} 🥳🥳 </h3>
                <h3> Give one more try... </h3>
                <button type="button" class="btn btn-danger" id="playagain" onclick ="location.reload()">Play Again</button>
                `;
                }
                else{
                    showscore.innerHTML = ` <h3> You scored ${score}/${quiz.length} 🥳🥳 </h3>
                <h3> Well Done.. </h3>
                <button type="button" class="btn btn-danger" id="playagain" onclick ="location.reload()">Play Again</button>
                `;

                }
            }
        })
