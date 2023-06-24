'use client'
import { IUser } from '@/types/userTypes'
import { Field, Form, Formik } from 'formik'
import { userSchema } from '@/utils/yup'
import { FC } from 'react'
import Link from 'next/link'
import { useCreateUser } from '@/hooks/useCreateUser'

const Register: FC = ({ }) => {
  const { mutate } = useCreateUser()
  const initialValues: IUser = {
    username: '',
    password: ''
  }
  return (
    <main className='auth' style={{ marginTop: '300px' }}>
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
                <button type='submit' className='btn'>Registrarse</button>
                <Link className="linkAuth" href="/login">Iniciar sesión</Link>
              </div>
            </Form>
          )
        }
      </Formik>
    </main>
  )
}
export default Register