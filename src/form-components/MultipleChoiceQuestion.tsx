import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    const [result, setResult] = useState<string>("❌");
    function CompareAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            setResult("✔️");
        } else {
            setResult("❌");
        }
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Label>Options for Question</Form.Label>
                <Form.Select value={answer} onChange={CompareAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {" "}
                Result: {result} Answer: {answer}
            </div>
        </div>
    );
}
