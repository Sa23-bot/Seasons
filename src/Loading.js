import React from "react";

const Loading = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui large text loader">{props.message}</div>
    </div>
  );
};

// we can use the defaultprops in order to display a default value 
Loading.defaultProps = {
    message: 'Loading...'
}

export default Loading;

