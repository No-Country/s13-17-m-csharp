function useValidateFields() {
  const validateEmail = (e, setValidEmail) => {
    const regex = /^[\w]+[\w.]+@[\w.]+(\.[a-zA-Z]{2,30})$/;
    setValidEmail(regex.test(e.target.value));
  };

  const validatePass = (e, setValidPass) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:<>?~]).*$/;
    setValidPass(regex.test(e.target.value));
  };

  return { validateEmail, validatePass };
}

export { useValidateFields };
