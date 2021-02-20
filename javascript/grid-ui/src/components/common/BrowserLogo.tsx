// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import React from "react";
import {Theme, withStyles} from "@material-ui/core/styles";
import browserLogo from "../../util/browser-logo";
import {Size} from "../../models/size";
import clsx from "clsx";

const useStyles = (theme: Theme) => (
  {
    logo: {
      marginRight: 0,
    },
    small: {
      width: 24,
      height: 24,
    },
    medium: {
      width: 32,
      height: 32,
    },
    large: {
      width: 48,
      height: 48,
    },
  });

type BrowserLogoProps = {
  browserName: string;
  size: Size;
  classes: any;
};

class BrowserLogo extends React.Component<BrowserLogoProps, {}> {

  static defaultProps = {
    size: Size.S
  };

  render() {
    const {browserName, size, classes} = this.props;

    function sizeMap(size) {
      if (size === Size.S) {
        return classes.small;
      }
      if (size === Size.M) {
        return classes.medium;
      }
      if (size === Size.L) {
        return classes.large;
      }
    }

    return (
      <img
        src={browserLogo(browserName)}
        className={clsx(classes.logo, sizeMap(size))}
        alt="Browser Logo"
      />
    );
  }
}

export default withStyles(useStyles)(BrowserLogo)
