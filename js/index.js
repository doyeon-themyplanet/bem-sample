const header_search_form = document.querySelector('.header__search form');
const header_search_selected = document.querySelector('.selected');
const search_drop_name = document.querySelector('.selected span');
const search_drop_arrow = document.querySelector('.selected img');
const select_list_li = document.querySelectorAll('.select_list li');

header_search_selected.onclick = () => {
  if (header_search_selected.classList.contains('folded')) {
    showList();
    header_search_selected.classList.remove('folded');
  } else {
    hideList();
    header_search_selected.classList.add('folded');
  }
};

function showList() {
  search_drop_arrow.style.transform = 'rotate(180deg)';
  header_search_form.style.overflow = 'visible';
}

function hideList() {
  search_drop_arrow.style.transform = 'rotate(0deg)';
  header_search_form.style.overflow = 'hidden';
}
