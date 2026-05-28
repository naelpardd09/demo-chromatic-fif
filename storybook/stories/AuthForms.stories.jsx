import { LoginForm, SignupForm } from '../../src/components/AuthForms';

const meta = {
  title: 'Presentation/AuthForms',
  tags: ['autodocs'],
};

export default meta;

export const Login = {
  render: () => <LoginForm onSubmit={(e) => { e.preventDefault(); alert('Login!'); }} />
};

export const Signup = {
  render: () => <SignupForm onSubmit={(e) => { e.preventDefault(); alert('Signup!'); }} />
};