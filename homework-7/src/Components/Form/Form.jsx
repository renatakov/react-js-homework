import {useForm} from "react-hook-form"
import { useState } from "react";
import "./Form.module.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const Form = () => {
    const [accounts, setAccounts] = useState([])
    
    const {handleSubmit, formState:{errors, submitCount}, register} = useForm()
    const firstFunction = (data) => {
        console.log(data)
        setAccounts([...accounts, {...data}])
    }
    console.log(accounts)
    return(
        <>
        <p>{submitCount}</p>
        <form onSubmit={handleSubmit(firstFunction)}>
            <input type="text" placeholder="First Name" name="firstName"
            {...register("firstName", {required: true})}
            />
            {errors.firstName && Notify.warning("First Name field is required")}
            <input type="text" placeholder="Last Name" name="lastName"
            {...register("lastName", {required: true})}
            />
            {errors.lastName && Notify.warning("Last Name field is required")}
            <input type="email" name="email" placeholder="Email" {...register("email", {required: true})}/>
            {errors.email && Notify.warning("Email field is required")}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;