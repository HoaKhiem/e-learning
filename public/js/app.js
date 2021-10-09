//-------------Define connect from index------------
const post_listt = document.querySelector('.post__list');
const pp = document.querySelector('.pp');
const profile_location = document.querySelector('.pr-locca');
const profile_description = document.querySelector('.pr-desc');
const profile_name = document.querySelector('.pr-name')
const scc = document.querySelector('.scc');
const xcc = document.querySelector('.xcc');
const hi = document.querySelector('.hi');
let x = document.querySelectorAll('.cx')
for(let i of x){
    i.addEventListener('click', ()=>{
        alert("Chức năng này đang được phát triển, vui lòng quay lại sau")
    })
}
const ic = document.querySelectorAll('.ic');
for(let i of ic){
    i.addEventListener('click',()=>{
        alert("Chức năng này đang được phát triển, vui lòng quay lại sau")
    })
}
let post_list = '';
let role ={};
fetch('/ss').then(function(res) {return res.json()}).then(function(da){localStorage.setItem('i',da.id); localStorage.setItem('n',da.n)})
const post_data_all = fetch('http://localhost:3200/api/postlist').then(response => response.json()).then((data) => {
    data.map((d) =>  post_list += `
                    <li class="card gedf-card pst">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="mr-2">
                                        <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <div class="h5">${d.author}</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-ellipsis-h"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                            <div class="h6 dropdown-header">Configuration</div>
                                            <a class="dropdown-item" href="#">Lưu</a>
                                            <a class="dropdown-item ${localStorage.getItem('n') === d.author ? '' : 'hide'}" href="#">Sửa</a>
                                            <a class="dropdown-item ${localStorage.getItem('n') === d.author ? '' : 'hide'}" href="/post/delete?id=${d._id}">Xoá</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <a class="card-link" href="#">
                                <h5 class="card-title">${d.title}</h5>
                            </a>
                            <p class="card-text">
                                ${d.content}
                            </p>
                            <div>
                                <span class="btn post__subject text-white">${d.subject}</span>
                                <span class="btn btn-warning text-white">${d.grade}</span>
                                <span class="btn btn-danger text-white">${d.salary}/b</span>
                                <span class="btn"> <i class="fa fa-map-marker-alt"></i>${d.location}</span>

                            </div>
                        </div>

                        <div class="card-footer">
                            <a href="#" class="card-link"><i class="fa fa-comment"></i>Bình luận</a>
                            <a href="#" class="card-link ${localStorage.getItem('i')==1 ? '' : 'hide'}"><i class="fa fa-mail-forward"></i>Ứng tuyển</a>
                        </div>
                    </li>
    `)
    post_listt.innerHTML = post_list
    console.log(localStorage.getItem('i'))
    localStorage.getItem('i') == 2 ? pp.classList.remove('hide') : pp.classList.add('hide')
})

fetch('/profile/getprofile').then((res) => res.json()).then((data) => {
    profile_name.textContent = data[0].name;
    profile_description.textContent = data[0].describe;
    profile_location.textContent = data[0].location;
})
scc.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Chức năng này đang dược phát triển, vui lòng quay lại sau")
})