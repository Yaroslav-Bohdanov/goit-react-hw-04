import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.errorMessage}>
      {message || "Something went wrong. Please try again later"}
    </div>
  );
};

export default ErrorMessage;
