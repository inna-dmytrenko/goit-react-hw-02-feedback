import styled from '@emotion/styled/macro'
import { fontSize } from 'constants/index'

export const ButtonClick = styled.button`
  background-color: #137213;
  margin-right: 5px;
  font-size: ${fontSize.small}px;
  text-transform: uppercase;
  border-radius: 5px;
  &:hover {
    background-color: #ebf3eb;
  }
`
