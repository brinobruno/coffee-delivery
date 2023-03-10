import { useEffect } from 'react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import { IProductCard } from '../../contexts/ProductsInCartContext'
import { CheckoutFormData } from '../Checkout/components/CheckoutForm'
import SuccessIllustration from './../../assets/order-success-illustration.svg'
import {
  CheckoutSuccessContainer,
  CheckoutSuccessWrapper,
  SuccessDetails,
  SuccessDetailsItem,
} from './styles'

interface LocationType {
  state: { data: CheckoutFormData; itemsRetrieved: IProductCard[] }
}

export function CheckoutSuccess() {
  const currentTheme = useTheme()
  const navigate = useNavigate()
  const { state } = useLocation() as unknown as LocationType

  // Verification purpose is to disallow users without any order to access it
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  })

  if (!state) return <></>

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
                  <strong>
                    {' '}
                    {state.data.streetAddress}, {state.data.houseNumber}
                  </strong>
                  <br />
                  {state.data.zone} - {state.data.city}, {state.data.uf}
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
                  <strong>{state.data.payment}</strong>
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
