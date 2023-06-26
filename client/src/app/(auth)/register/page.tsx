'use client'
import { IUser } from '@/types/userTypes'
import { Field, Form, Formik } from 'formik'
import { userSchema } from '@/utils/yup'
import { FC } from 'react'
import styles from '../auth.module.css'
import Link from 'next/link'
import { useCreateUser } from '@/hooks/useCreateUser'

const Register: FC = ({ }) => {
  const { mutate } = useCreateUser()
  const initialValues: IUser = {
    username: '',
    password: ''
  }
  return (
    <main className={styles.auth}>
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
            <Form className={styles.formWrapper}>
              <div className={styles.inputsContainer}>
                {errors.username && touched.username ? <span className={styles.errorColor}>{errors.username}</span> : null}
                <Field name="username" className={errors.username && touched.username && styles.campoObligatorio} spellCheck="false" />
                <label htmlFor='username' className={styles.label}>Nombre de usuario</label>
              </div>
              <div className={styles.inputsContainer}>
                {errors.password && touched.password && <span className={styles.errorColor}>{errors.password}</span>}
                <Field name="password" className={errors.password && touched.password && styles.campoObligatorio} type="password" spellCheck="false" />
                <label htmlFor='password' className={styles.label}>Password</label>
              </div>
              <div className={styles.divButton}>
                <button type='submit' className={styles.btn}>Registrarse</button>
                <Link className={`${styles.linkAuth} link`} href="/login">Iniciar sesión</Link>
              </div>
            </Form>
          )
        }
      </Formik>
    </main>
  )
}
export default Register