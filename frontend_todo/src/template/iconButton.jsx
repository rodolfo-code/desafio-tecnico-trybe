import React from 'react';

import If from '../template/if';

const IconButton = (props) => {
  const { hide, style, onClick, icon } = props;

  return (
    <If test={!hide}>
      <button className={'btn btn-' + style} onClick={onClick}>
        <i className={'fa fa-' + icon}></i>
      </button>
    </If>
  );
};

export default IconButton;
