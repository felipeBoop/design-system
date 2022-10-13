import { Heading } from './components/Heading';
import { Logo } from './Logo';
import { Text } from './components/Text';
import { textInput } from './components/TextInput';  
import { Envelope, Lock } from 'phosphor-react';
import './styles/global.css';
import { CheckBox } from './components/CheckBox';
import { Button } from './components/Button';

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" ClassName="text-gray-400 mt-1">
          Faça login e comece a usar! 
        </Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text ClassName="font-semibold">Endereço de e-mail:</Text>
          <textInput.Root>
            <textInput.Icon>
              <Envelope />
            </textInput.Icon>
            <textInput.Input type="email" id="email" placeholder='example@example.com'/>
          </textInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text ClassName="font-semibold">Sua senha:</Text>
          <textInput.Root>
            <textInput.Icon>
              <Lock />
            </textInput.Icon>
            <textInput.Input type="password" id="password" placeholder='*********'/>
          </textInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <CheckBox id="remember" />
          <Text size="sm" ClassName="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>
        
        <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
     
        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha</a>
          </Text>

          <Text asChild size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </form>
    </div>
  )

}