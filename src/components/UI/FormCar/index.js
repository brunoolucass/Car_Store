import React from "react";
import { Title } from "../Carousel/styled";
import {Section, InputModified, ButtonModified, Form } from "./styled";
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationForm = yup.object().shape({
 FirstName: yup.string().required ("Campo Obrigatório").max (20,"O nome não pode ultrapassar 20 caracteres.")  ,
 Email: yup.string().required ("Campo Obrigatório").max(40, "O E-mail não pode ultrapassar 40 caracteres."), 
 Phone: yup.number().required ("Campo Obrigatório")
})


const FormCar = (props) => {
    
    const {register, handleSubmit, formState:{errors}} = useForm ({ resolver: yupResolver (validationForm)})
    const onSubmit = data => {alert("Em breve entraremos em contato!"); window.location.reload();};

    return (
        <> 
            <Section>
                <Form onSubmit={handleSubmit (onSubmit)}>

                    <Title style={{margin:"0"}} translate="no">{props.car.model}</Title>
                        <p style={{fontSize:"1.4rem", margin:"0"}}>{props.car.transmission}</p>
                        <h1 style={{fontSize:"4rem", margin:"0"}} className="form-title">{props.car.price}</h1>
                        <p style={{fontSize:"1.4rem"}}>Solicite um orçamento para esse veículo</p>

                    <InputModified type="text" name="Name" id="Name" placeholder="Nome" {...register("FirstName")}/>
                    <p className="error-message">{errors.FirstName?.message}</p>

                    <InputModified type="email" name="Email" id="Email" placeholder="E-mail" {...register ("Email")}/>
                    <p className="error-message">{errors.Email?.message}</p>
                    
                    <InputModified type="number"  inputmode="numeric" name="Phone" id="Phone" placeholder="Telefone" {...register ("Phone")} />
                    <p className="error-message">{errors.Phone?.message}</p>
                    <ButtonModified  type="submit"> Enviar </ButtonModified>
                </Form>
            </Section>
        </>
    )
}


export default FormCar;