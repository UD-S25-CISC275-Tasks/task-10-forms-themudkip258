import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    const [result, setResult] = useState<string>("❌");
    function compareAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value === expectedAnswer) {
            setResult("✔️");
        } else {
            setResult("❌");
        }
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerChecking">
                <Form.Label>And the answer is: </Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={compareAnswer}
                ></Form.Control>
            </Form.Group>
            <div>{result}</div>
        </div>
    );
}
