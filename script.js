let sideMenu = document.querySelector("aside");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
let darkMode = document.querySelector(".dark-mode");

menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

Orders.forEach(order =>{
    let tr = document.createElement('tr');
    let trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined'? 'danger': order.status === 'Pending' ? 'warning':'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr)
})