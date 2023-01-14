import styled from 'styled-components'

export const InformationItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-row-gap: 20px;
  grid-column-gap: 40px;

  padding-top: 4.125rem;

  @media (max-width: 500px) {
    & {
      display: flex;
      flex-direction: column;
      grid-template-columns: unset;

      padding-top: 2rem;
    }
  }
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
