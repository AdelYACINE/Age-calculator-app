import { useContext } from "react";
import ArrowSvg from "./ArrowSvg";
import { Context } from "../context/Context";

const Form = () => {
  const { onSubmit, errors, register, handleSubmit } = useContext(Context);

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="input-label-container">
            <label
              htmlFor="day"
              className={errors.day?.message ? "label label-error" : "label"}
            >
              DAY
            </label>
            <input
              id="day"
              type="number"
              placeholder="DD"
              min={0}
              max={31}
              className={errors.day?.message ? "input input-error" : "input"}
              {...register("day")}
            />
            <div className="container-message-error">
              <p className="text-error">{errors.day?.message}</p>
            </div>
          </div>

          <div className="input-label-container">
            <label
              htmlFor="mounth"
              className={errors.mounth?.message ? "label label-error" : "label"}
            >
              MOUNTH
            </label>
            <input
              id="mounth"
              type="number"
              placeholder="MM"
              min={0}
              max={12}
              className={errors.mounth?.message ? "input input-error" : "input"}
              {...register("mounth")}
            />
            <div className="container-message-error">
              <p className="text-error">{errors.mounth?.message}</p>
            </div>
          </div>

          <div className="input-label-container">
            <label
              htmlFor="year"
              className={errors.year?.message ? "label label-error" : "label"}
            >
              YEAR
            </label>
            <input
              id="year"
              type="number"
              placeholder="YYYY"
              min={0}
              max={new Date().getFullYear()}
              className={errors.year?.message ? "input input-error" : "input"}
              {...register("year")}
            />
            <div className="container-message-error">
              <p className="text-error">{errors.year?.message}</p>
            </div>
          </div>
        </div>
        <ArrowSvg />
      </form>
    </div>
  );
};

export default Form;
