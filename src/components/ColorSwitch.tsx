import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"


const ColorSwitch = () => {
    const {toggleColorMode,colorMode} = useColorMode()

    return (
        <HStack  spacing={3} >
            <Switch colorScheme="red" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorSwitch
