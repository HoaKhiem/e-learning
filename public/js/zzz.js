<script>
        const teacher = document.querySelector('.tc');
        const student = document.querySelector('.st');
        const teacher_btn = document.getElementById('teacher');
        const student_btn = document.getElementById('student');

        teacher_btn.addEventListener('click',(e) =>{
            teacher.classList.toggle('show');
            student.classList.toggle('hide');
        })

        student_btn.addEventListener('click', (e) => {
            student.classList.remove('hide');
            teacher.classList.add('hide');
        })
    </script>