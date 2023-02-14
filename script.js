console.log('Running');
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", (e) =>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
})