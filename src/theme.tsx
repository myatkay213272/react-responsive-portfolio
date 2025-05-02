import {extendTheme} from "@chakra-ui/react"

const config = {
    initialColorMode : "light",
    useSystemMode : false
}

const theme = extendTheme({config})

export default theme;