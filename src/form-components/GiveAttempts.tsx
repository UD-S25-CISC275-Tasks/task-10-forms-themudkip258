import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);
    const [useDisable, setUseDisable] = useState<boolean>(false);
    function subAttempts() {
        let temp: number = attempts - 1;
        if (temp === 0) {
            //setAttempts(0)
            setUseDisable(true);
        } else {
            setUseDisable(false);
        }
        setAttempts(attempts - 1);
    }
    function addAttempts(requested: number) {
        setAttempts(attempts + requested);
        let temp: number = attempts + requested;
        if (temp === 0) {
            //setAttempts(0)
            setUseDisable(true);
        } else {
            setUseDisable(false);
        }
    }
    function changeRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(+event.target.value);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="numberOAttempts">
                <Form.Label>Enter Your Requested Attempts Here: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={changeRequested}
                ></Form.Control>
            </Form.Group>
            <Button
                disabled={useDisable}
                onClick={() => {
                    subAttempts();
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    addAttempts(requestedAttempts);
                }}
            >
                gain
            </Button>
            <div>Remaining Attempts: {attempts}</div>
        </div>
    );
}
