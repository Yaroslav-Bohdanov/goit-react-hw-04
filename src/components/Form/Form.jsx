import s from "./Form.module.css";
const Form = ({ children, ref }) => {
  return (
    <ul ref={ref} className={s.formContainer}>
      {children}
    </ul>
  );
};

export default Form;
