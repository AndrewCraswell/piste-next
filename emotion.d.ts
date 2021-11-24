import "@emotion/react";
import { Theme as FluentTheme } from "@fluentui/react";

import { LibTheme } from "some-lib";

declare module "@emotion/react" {
  export interface Theme extends FluentTheme {}
}
