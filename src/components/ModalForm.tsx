import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Button, Modal } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UpdateData } from '../redux/actions/actions';
import { appDispatch } from '../redux/store/store';

interface Props {
    isOpen: boolean,
    onClose: () => void,
    formID: number,

}


const ModalForm = ({ isOpen, onClose, formID }: Props) => {

    const [errors, setErrors] = useState(false)
    const dispatch = useDispatch<appDispatch>();
    const [formEmail, setEmail] = useState("")
    const [formPassword, setPassword] = useState("")
    const [formUsername, setUsername] = useState("")

    const formDict = {
        id: formID,
        email: formEmail,
        password: formPassword,
        username: formUsername
    }







    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form>
                            <FormControl isRequired>
                                <FormLabel>New Email</FormLabel>
                                <Input onChange={(e) => { setEmail(e.target.value) }} type='email' required />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>New  Password</FormLabel>
                                <Input onChange={(e) => { setPassword(e.target.value) }} type='text' required />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>New Username</FormLabel>
                                <Input onChange={(e) => { setUsername(e.target.value) }} type='text' required />
                            </FormControl>
                            <Input type="hidden" />
                        </form>
                        {errors && <p className='alert alert-danger m-4 p-2'>Please fill form correctly</p>}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            if (!formDict.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i) || formDict.email === "" || formDict.password.length <= 8 || formDict.username.length <= 4) {
                                setErrors(true)
                            }
                            else {
                                setErrors(false)
                                setEmail("")
                                setPassword("")
                                setUsername("")
                                dispatch(UpdateData(formDict))
                                onClose()
                            }
                        }} >
                            Save
                        </Button>
                        <Button type="submit" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default ModalForm
