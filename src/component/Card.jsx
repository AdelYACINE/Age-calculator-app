import ContextProvider from "../context/ContextProvider";
import Form from "./Form";
import Results from "./Results";

const Card = () => {
  return (
    <ContextProvider>
      <div className="container">
        <Form />
        <Results />
      </div>
    </ContextProvider>
  );
};

export default Card;
