import { FormWrapper } from './FormWrapper'

export function UserForm() {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="firstname">First Name</label>
      <input autoFocus required type="text" />
      <label htmlFor="lastname">Last Name</label>
      <input required type="text" />
      <label htmlFor="age">Age</label>
      <input required type="number" min={1} />
    </FormWrapper>
  )
}
