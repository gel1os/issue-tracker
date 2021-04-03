import React from 'react';

const Drag = ({onDragStart, children}) => {
  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          draggable: true,
          onDragStart
        })
      )}
    </>
  );
}

export default Drag;