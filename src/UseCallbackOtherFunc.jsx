import { memo, useState } from "react";

function UseCallbackOtherFunc({ func }) {
  console.log("useCallback child function worked");

  return (
    <div>
      usecallback other function

      {/* <button
        onClick={() => {
          console.log(func);
        }}
      >
        check
      </button> */}
    </div>
  );
}

export default memo(UseCallbackOtherFunc);
