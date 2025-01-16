const verifyLocation = (ifLogged) => {
  if (
    (ifLogged && window.location.pathname === '/') ||
    (ifLogged && window.location.pathname === '/index.html')
  ) {
    window.location.href = './pages/signedin.html';
    return;
  }
  if (!ifLogged && window.location.pathname === '/pages/signedin.html') {
    window.location.href = '../index.html';
    return;
  }
};

export default verifyLocation;

