"use client"
import { SubmitButton } from "@/components/form/Button"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import { useFormState } from "react-dom"






const CreateProfileAction = async (prevState:any, formData: FormData) => {
//    'use server'

   // ⬇️ ici on initialise bien useFormState AVANT le JSX
 
   
   const firstName = formData.get('firstName') as string
   if(firstName !== 'Jean') return {message: 'There was an error'};
   console.log(firstName) 
   return {message: 'Profile Created'}
}


function CreateProfilePage() {
  
  
  
    return (
    <section>
        <h1 className='text-2xl font-semibold mb-8 capitalize'>New user</h1>
        <div className='border p-8 rounded-md'>
              <FormContainer action={CreateProfileAction}>
                <div className="grid gap-4 mt-4">
                    <FormInput type="text" name='firstName' label='First Name'/>
                    <FormInput type="text" name='lastName' label='Last Name'/>
                    
                    <FormInput type="text" name='username' label='Username'/>
                </div>
                  <SubmitButton text="Create Profile" className="mt-8" />  
                  
              </FormContainer>
        </div>
    </section>
  )
}

export default CreateProfilePage