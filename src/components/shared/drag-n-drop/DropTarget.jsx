import React from 'react';

const DropTarget = ({onDrop, canDrop, children}) => {
  const onDragOver = (ev) => {
    if (!canDrop()) {
      return;
    }
    ev.preventDefault();
  }

  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onDragOver,
          onDrop
        }))}
    </>
  )
}

export default DropTarget;