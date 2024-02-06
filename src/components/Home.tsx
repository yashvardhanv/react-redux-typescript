import Form from "./Form"
import Buttons from "./Buttons"
import { HStack, Text } from "@chakra-ui/react"
import ColorSwitch from "./ColorSwitch"

const Home = () => {
    return (
        <>
            <HStack spacing={4}>
                <Text fontSize="4xl">Registration Form</Text>
                <ColorSwitch />
            </HStack>
            <Form />
            <Buttons />
        </>
    )
}

export default Home
