import { Button, Card, CardActions, CardContent, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from '@tanstack/react-router'

const userSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8)
  })

type RegisterData = z.infer<typeof userSchema>

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>({ resolver: zodResolver(userSchema) });

  const registerUser = (data: RegisterData) => {
    return axios.post('http://127.0.0.1:9000/auth/register/', data).then(res => res.data)
  }

  const mutation = useMutation({ mutationKey: ['register'], mutationFn: registerUser })

  const onSubmit = (data: RegisterData) => {
    mutation.mutate(data, {
      onSuccess: (data) => toast.success(data.message),
      onError: (error: any) => toast.error(error?.response?.data.error)
    })
  }

  return (
    <form style={{ width: 400 }}>
      <Card>
        <CardContent>
          <FormGroup style={{ gap: 12 }}>
            <FormLabel style={{ textAlign: 'center' }}>
              <Typography variant='h5' fontWeight="bold">
                Register
              </Typography>
            </FormLabel>
            <TextField color={errors.email && 'error'} type="email" label="Email" placeholder='example@email.com' {...register("email")} helperText={errors.email?.message || " "} />
            <TextField color={errors.password && 'error'} type='password' label="Password" placeholder='*************' {...register("password")} helperText={errors.password?.message || " "} />
          </FormGroup>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button type='submit' variant='contained' onClick={handleSubmit(onSubmit)}>Register</Button>
        </CardActions>
        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant='caption'>Already have an account?</Typography>
          <Typography variant='caption'>
            <Link to='/login'>Login</Link>
          </Typography>
        </div>
      </Card>
    </form>
  )
}

export default Register