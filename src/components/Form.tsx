import { Button, Checkbox, FormControl, useToast, FormLabel, HStack, Input, Radio, RadioGroup } from "@chakra-ui/react"
import { useFormik } from "formik"
import { AddData} from "../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { typeReducer } from "../redux/reducers"
import { useState } from "react"
import { appDispatch } from "../redux/store/store"
const handleChecked = () => { }


const Form = () => {
    const toast = useToast()
    const dispatch = useDispatch<appDispatch>();
    
    const globalList = useSelector<typeReducer, typeReducer["formReducer"]>(
        (formstore) => formstore.formReducer
    )
    const [id,setId] = useState(globalList[globalList.length-1]?.id + 1) || 0
    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
            id : -10
        },
        validationSchema: Yup.object({
            email: Yup.string().required().email("please enter a valid email").max(20),
            password: Yup.string().min(8).max(20).required(),
            username: Yup.string().min(4).max(20).required(),
        }),
        onSubmit: values => {
            toast({
                title: 'Form submitted.',
                description: `${values.email} is registered`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setId(globalList[globalList.length-1].id+1)
            values.id = id
            dispatch(AddData(values))
            formik.resetForm()
        }
    })
    return (
        <>
            
            <form id="myform" name="myform" onSubmit={formik.handleSubmit}>
                <FormControl>

                    <FormLabel>Email address</FormLabel>
                    <Input isInvalid={formik.touched.email && formik.errors.email ? true : false} onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} id="email" type='email' />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="text-danger">{formik.errors.email}</p>
                    ) : null}
                </FormControl>
                <FormControl>
                    <FormLabel>Enter Password</FormLabel>
                    <Input isInvalid={formik.touched.password && formik.errors.password ? true : false} onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} id="password" type='password' />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="text-danger">{formik.errors.password}</p>
                    ) : null}
                </FormControl>
                <FormControl>
                    <FormLabel>Enter username</FormLabel>
                    <Input isInvalid={formik.touched.username && formik.errors.username ? true : false} onBlur={formik.handleBlur} value={formik.values.username} onChange={formik.handleChange} id="username" type='text' />
                    {formik.touched.username && formik.errors.username ? (
                        <p className="text-danger">{formik.errors.username}</p>
                    ) : null}

                </FormControl>
                <FormControl>
                    <Input id="idofhidden" type="hidden" value={formik.values.id} />
                </FormControl>
                <FormControl>
                    <HStack>
                        <FormLabel margin={2}>Select knwon languages</FormLabel>

                        <Checkbox id="chk1" onChange={handleChecked} margin={2} colorScheme='red' defaultChecked>
                            Python
                        </Checkbox>
                        <Checkbox id="chk2" onChange={handleChecked} margin={2} colorScheme='red' defaultChecked>
                            Java
                        </Checkbox>
                        <Checkbox id="chk3" onChange={handleChecked} margin={2} colorScheme='red' defaultChecked>
                            Java
                        </Checkbox>

                    </HStack>
                </FormControl>
                <FormControl>
                    <HStack spacing={2}>
                        <FormLabel margin={2}>Select Gender</FormLabel>
                        <RadioGroup defaultValue='1'>
                            <Radio colorScheme='red' value='1' margin={2}>
                                Male
                            </Radio>
                            <Radio colorScheme='red' value='2' margin={2}>
                                Female
                            </Radio>
                        </RadioGroup>
                    </HStack>
                </FormControl>
                <Button type="submit" colorScheme='teal' size='md'>
                    Submit
                </Button>
            </form>
        </>
    )
}

export default Form
