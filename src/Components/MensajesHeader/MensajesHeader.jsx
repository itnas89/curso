import './MensajesHeader.css'

import { Formik } from 'formik'

export default function MensajesHeader(props) {
    return (
        <div className="MensajesHeader">
            <Formik initialValues={props.initialValues} onSubmit={props.clickNuevo} validationSchema={props.validationSchema}>
                {({values, handleChange, handleSubmit, isSubmitting, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <label for="asunto">Asunto: 
                            <input type="text" name="asunto" onChange={handleChange} value={values.asunto}/>
                            {errors.asunto && <span className="error-message">{errors.asunto}</span> }
                        </label>
                        <label for="email">Email: <input type="text" name="email" onChange={handleChange} value={values.email}/>
                            {errors.email && <span className="error-message">{errors.email}</span> }
                        </label>
                        <label for="mensaje">Mensaje: <textarea name="mensaje" onChange={handleChange}>{values.mensaje}</textarea>
                            {errors.mensaje && <span className="error-message">{errors.mensaje}</span> }
                        </label>
                        <label>
                            <button type="submit" className="Nuevo" disabled={isSubmitting}>Nuevo</button>
                            <button onClick={(e) => {e.preventDefault(); props.clickEliminar()}} className="Vaciar" disabled={isSubmitting}>Vaciar</button>
                        </label>
                    </form>
                )}
            </Formik>
        </div>
    )
}