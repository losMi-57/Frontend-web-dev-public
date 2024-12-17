const checkbox = document.getElementById('header-desktop-categories-checkbox');

const elements = document.querySelectorAll(' .header-desktop-dropdown-page-pointer.pointer-1, .header-desktop-dropdown-page-pointer-1-hov-spc, .header-desktop-dropdown-page-pointer-mask.mask-1, .header-desktop-dropdown-page.page-1');

checkbox.addEventListener('change', function() {
  // Check if the checkbox is checked
  if (this.checked) {
    // Add a class (e.g., 'new-class') to all selected elements
    elements.forEach(element => {
      element.classList.add('desktop-link-no-hov');
    });
  } else {
    // Remove the class (e.g., 'new-class') from all selected elements
    elements.forEach(element => {
      element.classList.remove('desktop-link-no-hov');
    });
  }
});