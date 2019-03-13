import React from 'react'
import styled from '@emotion/styled'
import { clearFix } from 'polished'

export const InputWrapper = styled.div`
  ${clearFix()};
  margin-bottom: 18px;
`
const InputCss = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
`

export const Input = props => (
  <InputWrapper className='input-wrapper' {...props}>
    <InputCss className='input' {...props} />
  </InputWrapper>
)

export default Input