import { FormWrapper } from './FormWrapper'

export function AccountForm() {
  return (
    <FormWrapper title="Account Creation">
      <label htmlFor="email">Email</label>
      <input autoFocus required type="text" />
      <label htmlFor="password">Password</label>
      <input required type="password" />
    </FormWrapper>
  )
}
