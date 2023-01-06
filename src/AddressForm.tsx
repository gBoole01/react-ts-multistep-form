import { FormWrapper } from './FormWrapper'

export function AddressForm() {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input autoFocus required type="text" />
      <label htmlFor="city">City</label>
      <input required type="text" />
      <label htmlFor="state">State</label>
      <input required type="text" />
      <label htmlFor="zip">Zip</label>
      <input required type="text" />
    </FormWrapper>
  )
}
