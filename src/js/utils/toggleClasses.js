const toggleClasses = (loginForm, regFrom, loginBtn, regBtn) => {
  loginForm.classList.toggle('d-none');
  regFrom.classList.toggle('d-none');
  loginBtn.classList.toggle('d-none');
  regBtn.classList.toggle('d-none');
};
export default toggleClasses;
