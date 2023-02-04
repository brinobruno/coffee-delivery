import { FieldErrorsImpl } from 'react-hook-form'
import { ErrorsContainer } from './styles'

interface IErrorsDetected {
  errorsDetected: Partial<
    FieldErrorsImpl<{
      reference: string | undefined
      zip: number
      streetAddress: string
      houseNumber: number
      zone: string
      city: string
      uf: string
      payment: string
    }>
  >
}

export function ErrorsDisplay({ errorsDetected }: IErrorsDetected) {
  return (
    <ErrorsContainer>
      {errorsDetected.zip && (
        <p>
          <strong>ZIP: </strong>
          {errorsDetected.zip?.message}
        </p>
      )}
      {errorsDetected.streetAddress && (
        <p>
          <strong>Street: </strong>
          {errorsDetected.streetAddress?.message}
        </p>
      )}
      {errorsDetected.houseNumber && (
        <p>
          <strong>Number: </strong>
          {errorsDetected.houseNumber?.message}
        </p>
      )}
      {errorsDetected.reference && (
        <p>
          <strong>Reference: </strong>
          {errorsDetected.reference?.message}
        </p>
      )}
      {errorsDetected.zone && (
        <p>
          <strong>Zone: </strong>
          {errorsDetected.zone?.message}
        </p>
      )}
      {errorsDetected.city && (
        <p>
          <strong>City: </strong>
          {errorsDetected.city?.message}
        </p>
      )}
      {errorsDetected.uf && (
        <p>
          <strong>UF: </strong>
          {errorsDetected.uf?.message}
        </p>
      )}
      {errorsDetected.payment && (
        <p>
          <strong>Payment: </strong>
          {errorsDetected.payment?.message}
        </p>
      )}
    </ErrorsContainer>
  )
}
