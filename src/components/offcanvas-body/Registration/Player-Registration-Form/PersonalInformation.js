import React,{useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ImageUpload from '../ImageUpload';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './PersonalInformation.css';
import { useRef } from 'react';
import Phone from '../../Phone';
function PersonalInformation() {
    // 
    const [mobileValue, setMobileValue] = useState(false);
    const [imageValue,setImageValue]=useState(false);

    // reset form start: 
    const firstName = useRef("");
    const middleName = useRef("");
    const lastName = useRef("");
    const initials = useRef("");
    const displayName = useRef("");
    const fathersName = useRef("");
    const mothersName = useRef("");
    const dob = useRef("");
    const bloodgrp = useRef("");
    // const mobile = useRef(false);
    const email = useRef("");
    const genderMale=useRef(false);
    const genderFemale=useRef(false);
    

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        firstName.current.value = "";
        middleName.current.value = "";
        lastName.current.value = "";
        initials.current.value = "";
        displayName.current.value = "";
        fathersName.current.value = "";
        mothersName.current.value = "";
        dob.current.value = "";
        bloodgrp.current.value = "none"; //since default or initial value in html code below is none
        setMobileValue(true);
        email.current.value = "";
        genderMale.current.checked=false;
        genderFemale.current.checked=false;
        // console.log("Ref",genderMale);
        console.log(imageValue);
    }

    // reset form end: 

    return (
        <div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PERSONAL INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Form >
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fName"
                                                type="text"
                                                placeholder="first name"
                                                // value={fName}
                                                ref={firstName}
                                            />
                                            <label htmlFor="fName" className='text-muted'>Player First Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="mName"
                                                type="text"
                                                placeholder="middle name"
                                                ref={middleName}
                                            />
                                            <label htmlFor="mName" className='text-muted'>Player Middle Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="lName"
                                                type="text"
                                                placeholder="last name"
                                                ref={lastName}
                                            />
                                            <label htmlFor="lName" className='text-muted'>Player Last Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="initials"
                                                type="text"
                                                placeholder="initials"
                                                ref={initials}
                                            />
                                            <label htmlFor="initials" className='text-muted'>Initials</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="dName"
                                                type="text"
                                                placeholder="display name"
                                                ref={displayName}
                                            />
                                            <label htmlFor="dName" className='text-muted'>Display Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fatherName"
                                                type="text"
                                                placeholder="father name"
                                                ref={fathersName}
                                            />
                                            <label htmlFor="fatherName" className='text-muted'>Father's Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="motherName"
                                                type="text"
                                                placeholder="mother name"
                                                ref={mothersName}
                                            />
                                            <label htmlFor="motherName" className='text-muted'>Mother's Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="dob1"
                                                type="date"
                                                placeholder="dob"
                                                ref={dob}
                                            />
                                            <label htmlFor="dob1" className='text-muted'>Date of Birth*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="bloodGroup"
                                            label="BloodGroup*"
                                        

                                        >
                                            <Form.Select aria-label="bloodGroup" className='' ref={bloodgrp}>
                                                <option value="none">Select Type</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Phone isClear={mobileValue} />
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="email"
                                                type="email"
                                                placeholder="email"
                                                ref={email}
                                            />
                                            <label htmlFor="email" className='text-muted'>Email Address*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='d-flex justify-content-center pt-3 col'>
                                        <label className='text-muted me-2' htmlFor="gender">Gender</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }}>
                                                <Form.Check
                                                    inline
                                                    label="Male"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-male`}
                                                    defaultChecked={false}
                                                    ref={genderMale}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Female"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-female`}
                                                    defaultChecked={false}
                                                    ref={genderFemale}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={5} lg={2} className='col'>
                                        <ImageUpload isClear={mobileValue} />
                                    </Col>
                                    <Col xs={{ span: 6, offset: 1 }} lg={{ span: 9, offset: 1 }} className='d-flex align-items-center col'>
                                        <Button variant="warning" style={{ color: "white", width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                                        <Button variant="success" className='mx-3' style={{ whiteSpace: 'nowrap', width: '130px' }} >Save and Next</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default PersonalInformation