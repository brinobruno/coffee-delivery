import { useTheme } from 'styled-components'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import SuccessIllustration from './../../assets/order-success-illustration.svg'
import {
  CheckoutSuccessContainer,
  CheckoutSuccessWrapper,
  SuccessDetails,
  SuccessDetailsItem,
} from './styles'

export function CheckoutSuccess() {
  const currentTheme = useTheme()

  return (
    <CheckoutSuccessContainer>
      <CheckoutSuccessWrapper>
        <div>
          <h2>Yay! Order confirmed</h2>
          <span>Now just wait until your coffee arrives to you</span>

          <SuccessDetails>
            <SuccessDetailsItem backgroundColor={currentTheme['purple-500']}>
              <figure>
                <MapPin
                  weight="fill"
                  size={16}
                  color={currentTheme['gray-100']}
                />
              </figure>

              <div>
                <span>
                  Delivery to
                  <strong> John Daniel Martinelli Street, 102</strong>
                  <br />
                  Neighborhood - São Paulo, SP
                </span>
              </div>
            </SuccessDetailsItem>

            <SuccessDetailsItem backgroundColor={currentTheme['yellow-500']}>
              <figure>
                <Clock
                  weight="fill"
                  size={16}
                  color={currentTheme['gray-100']}
                />
              </figure>

              <div>
                <span>
                  Expected delivery time
                  <br />
                  <strong>20 min - 30 min</strong>
                </span>
              </div>
            </SuccessDetailsItem>

            <SuccessDetailsItem backgroundColor={currentTheme['yellow-700']}>
              <figure>
                <CurrencyDollar
                  weight="fill"
                  size={16}
                  color={currentTheme['gray-100']}
                />
              </figure>

              <div>
                <span>
                  Payment on delivery
                  <br />
                  <strong>Credit Card</strong>
                </span>
              </div>
            </SuccessDetailsItem>
          </SuccessDetails>
        </div>

        <div>
          <img src={SuccessIllustration} alt="" />
        </div>
      </CheckoutSuccessWrapper>
    </CheckoutSuccessContainer>
  )
}
