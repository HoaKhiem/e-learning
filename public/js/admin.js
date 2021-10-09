const tb1 = document.querySelector('.tb1');
const tb2 = document.querySelector('.tb2');
fetch('/admin/userslist').then((rs) => {return rs.json()}).then((data) => {
    let x = '';
    let c = 1;
    data.map((d) => {
        x += `<tr>
        <td>
          ${c}
        </td>
        <td>
          ${d.name}
        </td>
        <td>
          ${d.userName}
        </td>
        <td>
          ${d.location}
        </td>
        <td>
          <a href="/admin/tables/manage">Quản lí</a>
        </td>
      </tr>`
      c++;
    })
    tb1.innerHTML = x;
})
fetch('/admin/teacherlist').then((res) => {return res.json()}).then((data) => {
    let x = '';
    let c = 1;
    data.map((d) => {
        x+=
        `<tr>
        <td>
          ${c}
        </td>
        <td>
          ${d.name}
        </td>
        <td>
          ${d.userName}
        </td>
        <td>
          ${d.location}
        </td>
        <td>
          <a href="/admin/tables/manage">Quản lí</a>
        </td>
      </tr>`
      c++;
    })
    console.log(x);
    tb2.innerHTML = x;
})