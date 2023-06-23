'use client'
import { IUser } from '@/types/commonTypes'
import { Field, Form, Formik } from 'formik'
import { userSchema } from '@/utils/yup'
import { FC } from 'react'
import Link from 'next/link'

const Login: FC = ({ }) => {
  const { mutate } = useLogin()
  const initialValues: IUser = {
    username: '',
    password: ''
  }
  return (
    <main className='auth'>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values, { resetForm }) => {
          mutate(values)
          resetForm()
        }}
      >
        {
          ({ errors, touched }) => (
            <Form className='formWrapper'>
              <div className='inputsContainer'>
                {errors.username && touched.username ? <span className='errorColor'>{errors.username}</span> : null}
                <Field name="username" className={errors.username && touched.username && 'campo-obligatorio'} spellCheck="false" />
                <label htmlFor='username' className='label'>Nombre de usuario</label>
              </div>
              <div className='inputsContainer'>
                {errors.password && touched.password && <span className='errorColor'>{errors.password}</span>}
                <Field name="password" className={errors.password && touched.password && 'campo-obligatorio'} type="password" spellCheck="false" />
                <label htmlFor='password' className='label'>Password</label>
              </div>
              <div className='divButton'>
                <button type='submit' className='btn'>Iniciar sesión</button>
                <Link className="linkAuth" href="/register">Registrarse</Link>
              </div>
            </Form>
          )
        }
      </Formik>
    </main>
  )
}
export default Login