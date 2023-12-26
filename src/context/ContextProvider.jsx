import { Context } from "./Context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const ContextProvider = ({ children }) => {
  const [day, setDay] = useState("");
  const [mounth, setMounth] = useState("");
  const [year, setYear] = useState("");

  const schema = yup.object().shape({
    year: yup.string().required("this field is required"),
    mounth: yup.string().required("this field is required"),
    day: yup.string().required("this field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const day = +data.day;
    const mounth = +data.mounth;
    const year = +data.year;
    const birthDate = new Date(year, mounth - 1, day);
    const ageDiffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffMs);
    console.log(ageDate);
    const years = ageDate.getUTCFullYear() - 1970;
    const mounths = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    setDay(days);
    setMounth(mounths);
    setYear(years);
  };

  return (
    <Context.Provider
      value={{ day, mounth, year, register, handleSubmit, errors, onSubmit }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
