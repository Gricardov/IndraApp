import React, { useState, useContext } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Button from '../../components/Button';
import { SessionContext } from '../../context/SessionContext';
import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom";
import { publicFetch } from '../../api/fetch';
import * as Yup from 'yup';

export default function Home() {
    const [loading, setLoading] = useState(false);

    let history = useHistory();
    const { login } = useContext(SessionContext);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const { error, data } = await publicFetch('https://jsonplaceholder.typicode.com/users?id=10', 'GET');
            if (!error && data) {
                login({ ...data[0], placa: formData.placa });
                history.push('/welcome');
            } else {
                toast.error('Ocurrió un error. Inténtelo más tarde');
            }
            setLoading(false);
        }
    })

    const checkErrors = () => {
        Object.keys(formik.errors).map((e, i) => {
            toast.error(formik.errors[e]);
        })
    }

    return (
        <div className='home'>
            <Navbar />
            <Presentation />
            <main className='home-main container'>
                <h2 className='home-main__title'>Déjanos tus datos</h2>
                <Form className='contact-form' onSubmit={formik.handleSubmit}>
                    <div className='contact-form-group'>
                        <select
                            className='contact-form-group__select'
                            id="doctype"
                            name='doctype'
                            onChange={formik.handleChange}
                            value={formik.values.doctype}>
                            <option value='dni'>DNI</option>
                        </select>
                        <Form.Input
                            className={`contact-form-group__input ${formik.errors.dni ? 'contact-form__input-error' : ''}`}
                            name='dni'
                            type='text'
                            placeholder='Nro. de doc'
                            onChange={formik.handleChange}
                            value={formik.values.dni}
                        />
                    </div>
                    <Form.Input
                        className={`contact-form__input ${formik.errors.celular ? 'contact-form__input-error' : ''}`}
                        name='celular'
                        type='text'
                        placeholder='Celular'
                        onChange={formik.handleChange}
                        value={formik.values.celular}
                    />
                    <Form.Input
                        className={`contact-form__input contact-form__input-last ${formik.errors.placa ? 'contact-form__input-error' : ''}`}
                        name='placa'
                        type='text'
                        placeholder='Placa'
                        onChange={formik.handleChange}
                        value={formik.values.placa}
                    />
                    <div className='contact-form-group contact-form__conditions'>
                        <label className="chk-container contact-form-group__chk">
                            <input name='terms' value='ok' type="checkbox" checked={formik.values.terms} onChange={formik.handleChange} />
                            <span className="chk-container__checkmark"></span>
                        </label>
                        <label className='contact-form-group__span'>Acepto la <a className='contact-form-group__link' href='#'>Política de Protecciòn de Datos Personales</a> y los <a className='contact-form-group__link' href='#'>Términos y Condiciones.</a></label>
                    </div>
                    <Button text='COTÍZALO' onClick={checkErrors} loading={loading} />
                </Form>
            </main>
        </div>
    )
}

const Presentation = () => {
    return (
        <div className='home-presentation'>
            <div className='home-presentation__content container'>
                <span className='home-presentation__pretitle'>¡NUEVO!</span>
                <h1 className='home-presentation__title'>Seguro vehicular <br /><span className='home-presentation__title-2'>Tracking</span></h1>
                <p className='home-presentation__description'>Cuéntanos donde le harás<br />seguimiento a tu seguro</p>
            </div>
            <span className='home-presentation__copyright'>© 2020 RIMAC Seguros y Reaseguros.</span>
        </div>
    )
}

function initialValues() {
    return {
        terms: false,
        doctype: 'dni',
        dni: '',
        celular: '',
        placa: ''
    }
}

function validationSchema() {
    return {
        terms: Yup.bool().oneOf([true], 'Debes aceptar los términos y condiciones'),
        doctype: Yup.string().required(),
        dni: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "El DNI solo debe estar conformado por dígitos")
            .min(8, 'El DNI debe tener 8 dígitos exactamente')
            .max(8, 'El DNI debe tener 8 dígitos exactamente'),
        celular: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "El celular solo debe estar conformado por dígitos")
            .min(9, 'El celular debe tener 9 dígitos exactamente')
            .max(9, 'El celular debe tener 9 dígitos exactamente'),
        placa: Yup.string()
            .min(6, 'La placa debe tener 6 caracteres como mínimo')
            .max(10, 'La placa debe tener 10 caracteres como máximo')
            .required('La placa es requerida')
    }
}