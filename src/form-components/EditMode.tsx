import React, { useState } from "react";
import Form from "react-bootstrap/Form";
/*interface Student {
    name: string;
    isStudent: boolean;
}*/
//const initialPerson: Student = { name: "Your Name", isStudent: true };
//const editablePerson: Student = { name: "", isStudent: false };
export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    //const [editPerson, setEditPerson] = useState<Student>(editablePerson);
    function changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function changeIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                inline
                name="student"
                type="switch"
                label="Edit Mode?"
                checked={editMode}
                onChange={changeMode}
            ></Form.Check>
            {editMode && (
                <Form.Group>
                    <Form.Label>Insert Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={changeName}
                    ></Form.Control>
                </Form.Group>
            )}
            {editMode && (
                <Form.Check
                    inline
                    name="student"
                    role="checkbox"
                    type="checkbox"
                    label="Student"
                    checked={isStudent}
                    onChange={changeIsStudent}
                    aria-label="Is Student"
                />
            )}
            {!editMode && (
                <div>
                    {name} {isStudent ? "is" : "is not"} a student
                </div>
            )}
        </div>
    );
}
