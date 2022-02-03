// Header Part=============================
// =============Toggle-Function=============
const NavtoggolOpen = document.getElementById('NavtoggolOpen');
const NavtoggolClose = document.getElementById('NavtoggolClose');
const headerBottom = document.getElementById('headerBottom');

const NavtoggolOpenFn = () => {
    headerBottom.classList.add('active');
    NavtoggolOpen.style.transform = `rotate(90deg)`;
    NavtoggolOpen.style.transition = `0.5s ease`;
    NavtoggolClose.style.transform = `rotate(90deg)`;
    NavtoggolClose.style.transition = `0.5s ease`;
}
NavtoggolOpen.addEventListener('click', NavtoggolOpenFn);

const NavtoggolCloseFn = () => {
    headerBottom.classList.remove('active');
    NavtoggolClose.style.transform = `rotate(0deg)`;
    NavtoggolClose.style.transition = `0.5s ease`;
    NavtoggolOpen.style.transform = `rotate(0deg)`;
    NavtoggolOpen.style.transition = `0.5s ease`;
}
NavtoggolClose.addEventListener('click', NavtoggolCloseFn);
// Search-function======================
// =========Tap_to_Top==================
const SearchPart = document.getElementById('SearchPart');
const SearchArrorIcon = document.getElementById('SearchArrorIcon');
const SearchInput = document.getElementById('SearchInput');

// SearchPart.classList.remove('toTop');
const SearchInputFn = ()=>{
    SearchPart.classList.add('toTop');
}
SearchInput.addEventListener('click', SearchInputFn);

const SearchArrorIconFn = ()=> {
    SearchPart.classList.remove('toTop');
}
SearchArrorIcon.addEventListener('click', SearchArrorIconFn);