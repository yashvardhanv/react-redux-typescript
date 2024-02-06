import { VStack, Button } from "@chakra-ui/react";
import { Decrease, Increase } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { FaMinus, FaPlus } from "react-icons/fa";
import { typeReducer } from "../redux/reducers";

const Buttons = () => {
    const count = useSelector<typeReducer, typeReducer["countReducer"]>(
        (count) => count.countReducer
    );

    const dispatch = useDispatch();


    const handleIncrease = () => {
        dispatch(Increase());
    };

    const handleDecrease = () => {
        dispatch(Decrease());

    }
    return (
        <>
            
            <VStack margin={3} spacing={3}>
                <ChakraLink  as={ReactRouterLink} to='/data'>
                    <Button colorScheme="teal">See Data</Button>
                </ChakraLink>
            </VStack>
            <Button margin={2} onClick={handleDecrease}><FaMinus /></Button>
            <Button  >{count}</Button>
            <Button margin={2} onClick={handleIncrease}><FaPlus /></Button>
        </>
    );
};

export default Buttons;
