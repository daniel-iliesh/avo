import { Button, Card, CardActions, CardContent, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { jwtDecode } from 'jwt-decode'
import { Link } from '@tanstack/react-router'
import { Link as MLink } from '@mui/material'
import Api from "../../services/ApiService"

const userSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8)
  })

type LoginData = z.infer<typeof userSchema>

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({ resolver: zodResolver(userSchema) });

  const loginUser = (data: LoginData) => {
    return Api.post('http://127.0.0.1:9000/auth/login/', data).then(res => res.data)
  }

  const mutation = useMutation({ mutationKey: ['auth', 'login'], mutationFn: loginUser })

  const onSubmit = (data: LoginData) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        localStorage.setItem("access", data.access)
        localStorage.setItem("refresh", data.refresh)
        
        let userData = jwtDecode(data.access)
        console.log(userData);
      },
      onError: (error: any) => toast.error(error?.response?.data.detail)
    })
  }

  return (
    <form style={{ width: 400 }}>
      <Card>
        <CardContent>
          <FormGroup style={{ gap: 12 }}>
            <FormLabel style={{ textAlign: 'center' }}>
              <Typography variant='h5' fontWeight="bold">
                Login
              </Typography>
            </FormLabel>
            <TextField color={errors.email && 'error'} type="email" label="Email" placeholder='example@email.com' {...register("email")} helperText={errors.email?.message || " "} />
            <TextField color={errors.password && 'error'} type='password' label="Password" placeholder='*************' {...register("password")} helperText={errors.password?.message || " "} />
          </FormGroup>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button type='submit' variant='contained' onClick={handleSubmit(onSubmit)} >Login</Button>
        </CardActions>
        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant='caption'>Don't have an account yet ?</Typography>
          <MLink variant='caption'>
            <Link to='/register'>Register</Link>
          </MLink>
        </div>
      </Card>
    </form>
  )
}

export default Login