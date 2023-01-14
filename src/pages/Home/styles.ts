import styled from 'styled-components'

export const HomeCoverContainer = styled.section`
  position: relative;

  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 5.875rem 0 6.75rem;

  &::before {
    content: '';
    position: absolute;

    background: url(${(props) => props.theme['background-home']}) no-repeat
      center;
    background-size: contain;
    opacity: 0.45;

    /* top, left... */
    inset: 0;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
  }
`

export const HomeInformationContainer = styled.div``

export const InformationItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-row-gap: 20px;
  grid-column-gap: 40px;
`

const INFORMATION_ITEM_COLORS = {
  gray: 'gray-700',
  lighterYellow: 'yellow-500',
  darkerYellow: 'yellow-700',
  purple: 'purple-500',
} as const

interface InformationItemProps {
  itemColor: keyof typeof INFORMATION_ITEM_COLORS
}

export const InformationItem = styled.div<InformationItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    background-color: ${(props) =>
      props.theme[INFORMATION_ITEM_COLORS[props.itemColor]]};

    display: flex;
    justify-content: center;
    align-items: center;

    clip-path: circle();
    padding: 8px;
    width: 36px;
  }

  span {
    color: ${(props) => props.theme['gray-700']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 20.8px;
  }
`
