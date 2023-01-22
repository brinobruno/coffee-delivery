import {
  CheckoutSuccessContainer,
  CheckoutSuccessWrapper,
  SuccessDetails,
} from './styles'

import SuccessIllustration from './../../assets/order-success-illustration.svg'
import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CheckoutSuccess() {
  const currentTheme = useTheme()

  return (
    <CheckoutSuccessContainer>
      <CheckoutSuccessWrapper>
        <div>
          <h2>Yay! Order confirmed</h2>
          <span>Now just wait until your coffee arrives to you</span>

          <SuccessDetails>
            <li>
              <figure>
                <MapPin size={16} color={currentTheme['gray-100']} />
              </figure>

              <div>
                <span>
                  Delivery at <strong>address</strong> São Paulo, SP
                </span>
              </div>
            </li>
          </SuccessDetails>
        </div>

        <div>
          <img src={SuccessIllustration} alt="" />
        </div>
      </CheckoutSuccessWrapper>
    </CheckoutSuccessContainer>
  )
}
