// @flow

import React, { Fragment } from "react"
import { Twitter } from "react-social-sharing"
import style from "./Main.st.css"
import Title from "../Components/Title"
import Button from "../Components/Button"

const Done = () => (
  // $FlowFixMe
  <main {...style("root", {})}>
    <Fragment>
      <Title>
        No one cares if you use <span className={style.blue}>React</span> or{" "}
        <span className={style.yellow}>Angular</span>.
      </Title>
      <Title>They are both fucking awesome!</Title>
      <div>
        <Twitter
          message="Find out if you should use react or angular"
          link="https://should-i-use-react-or-angular.now.sh"
        />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/elrumordelaluz/should-i-use-react-or-angular"
        >
          Repo
        </a>
      </div>
      <div>
        <a href="/">
          <Button tertiary>Play again?!</Button>
        </a>
      </div>
    </Fragment>
  </main>
)

export default Done
