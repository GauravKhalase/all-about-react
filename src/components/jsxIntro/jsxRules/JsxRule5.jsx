import React from "react";
import { Fragment } from "react";

const JsxRule5 = () => {
  //! React fragments are the empty angular braces
  //! React fragment is used to prevent creating an extra tag (<> Fragment </>)
  //! The main purpose of react fragment is to improve the performance
  //! We can write react fragments in three different ways
  //! 1. <> </> - With empty angular braces
  //! 2. <React.Fragment> </React.Fragment> - As React.Fragment
  //! 3. <Fragment> </Fragment> - As Fragment
  ``; //!    but for this we need to import fragment from react first by destructuring
  //!    "import { Fragment } from "react";"

  return (
    <>
      <h2>JSX Rule 5 - Fragments</h2>
      <div>React fragments are the empty angular braces</div>
      <div>
        react fragment is used to prevent an extra tag (<> Fragment </>)
      </div>
      <div>
        The main purpose of react fragment is to improve the performance
      </div>
      <div>
        <div>
          1. {`<> </>`} - With empty angular braces
        </div>
        <div>2. {`<React.Fragment> </React.Fragment>`} - As React.Fragment</div>
        <div>3. {`<Fragment> </Fragment>`} - As Fragment</div>
        <div>
          but for this we need to import fragment from react first by
          destructuring
        </div>
        <div>"import {`{Fragment}`} from "react";"</div>
        <br />
      </div>
    </>
  );
};

export default JsxRule5;
