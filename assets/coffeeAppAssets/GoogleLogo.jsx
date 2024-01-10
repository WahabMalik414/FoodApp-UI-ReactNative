import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GoogleLogo(props) {
  return (
    <Svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path transform="translate(5 6)" fill="#fff" d="M0 0H24V24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.34 16.875c0-1.17-.105-2.295-.3-3.375H16.5v6.383h8.88c-.383 2.062-1.545 3.81-3.293 4.98v4.14h5.333c3.12-2.873 4.92-7.103 4.92-12.128z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 33c4.455 0 8.19-1.478 10.92-3.998l-5.333-4.14c-1.477.99-3.367 1.575-5.587 1.575-4.298 0-7.935-2.902-9.233-6.802H1.755v4.275C4.47 29.302 10.05 33 16.5 33z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.268 19.635A9.918 9.918 0 016.75 16.5c0-1.087.188-2.145.518-3.135V9.09H1.755A16.494 16.494 0 000 16.5c0 2.663.637 5.183 1.755 7.41l5.513-4.275z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 6.563c2.422 0 4.597.832 6.307 2.467l4.733-4.732C24.682 1.635 20.947 0 16.5 0 10.05 0 4.47 3.697 1.755 9.09l5.512 4.275c1.298-3.9 4.935-6.803 9.233-6.803z"
        fill="#EA4335"
      />
    </Svg>
  )
}

export default GoogleLogo
