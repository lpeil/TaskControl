import React from 'react';
import styled from 'styled-components';

const Typography = (props) => {
  const variant = props.variant ?? 'span';

  const bold = props.bold;
  const color = props.color ?? 'text';
  const margin = setMargin(props.margin ?? 0);
  const fontSize = props.fontSize ?? '';

  const Component = styled[variant]`
    margin: ${margin};

    color: ${props => props.theme[color]};
    font-size: ${fontSize};
    font-weight: ${bold ? 'bold' : 'normal'};
  `

  return (
    <Component>{props.children}</Component>
  )
}

function setMargin(margin) {
  return (margin * 5) + 'px 0';
}

export default Typography;
