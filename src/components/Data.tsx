import { TableContainer, Table, Thead, Th, Tbody, Tr, Td, Button, HStack, useDisclosure, ButtonGroup } from "@chakra-ui/react";
import { RemoveData, GetData } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { typeReducer } from "../redux/reducers";
import { useCallback, useState } from "react";
import ModalForm from "./ModalForm";
import { MdDelete, MdEdit } from "react-icons/md";
import { appDispatch } from "../redux/store/store";




const Data = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const dispatch = useDispatch<appDispatch>();
    const [editFormID, setEditFormID] = useState(0)
    const allData = useSelector<typeReducer, typeReducer["formReducer"]>(
        (formstore) => formstore.formReducer
    )
    return (
        <>

            <HStack spacing={5} padding={3}>
                <Link to="/">
                    <IoArrowBack size={40} />
                </Link>
                <h1>Stored Data</h1>
            </HStack>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>Password</Th>
                            <Th>User-name</Th>
                            <Th>ID</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* {allData.length} */}
                        {allData.map(function (item) {
                            return (
                                <Tr key={item.id}>
                                    <Td>
                                        {" "}
                                        {item.email}
                                    </Td>
                                    <Td>
                                        {item.password}
                                    </Td>
                                    <Td>
                                        {item.username}
                                    </Td>
                                    <Td>
                                        {item.id}
                                    </Td>
                                    <Td>
                                        <ButtonGroup size='sm' isAttached variant='outline'>

                                            <Button colorScheme="green" onClick={() => {
                                                setEditFormID(item.id)
                                                onOpen();
                                            }}><MdEdit size={20} /></Button>
                                            <Button
                                                colorScheme="red"
                                                onClick={() => { dispatch(RemoveData(item.id)) }}
                                            >
                                                {" "}
                                                <MdDelete size={20} />

                                            </Button>
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
            <Button margin={4} onClick={useCallback(() => {
                dispatch(GetData());

            }, [dispatch])} >GETDATA</Button>

            <ModalForm onClose={onClose} isOpen={isOpen} formID={editFormID} />


        </>
    )
}

export default Data
