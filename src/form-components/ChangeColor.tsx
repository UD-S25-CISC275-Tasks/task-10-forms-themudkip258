import React, { useState } from "react";
import Form from "react-bootstrap/Form";
const COLOR_LIST: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "magenta",
];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLOR_LIST[0]);
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>

            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[0]}
                value={COLOR_LIST[0]}
                style={{ backgroundColor: COLOR_LIST[0] }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[1]}
                value={COLOR_LIST[1]}
                style={{ backgroundColor: COLOR_LIST[1] }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[2]}
                value={COLOR_LIST[2]}
                style={{ backgroundColor: COLOR_LIST[2] }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[3]}
                value={COLOR_LIST[3]}
                style={{ backgroundColor: COLOR_LIST[3] }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[4]}
                value={COLOR_LIST[4]}
                style={{ backgroundColor: COLOR_LIST[4] }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[5]}
                value={COLOR_LIST[5]}
                style={{ backgroundColor: COLOR_LIST[5] }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[6]}
                value={COLOR_LIST[6]}
                style={{ backgroundColor: COLOR_LIST[6] }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                label={COLOR_LIST[7]}
                value={COLOR_LIST[7]}
                style={{ backgroundColor: COLOR_LIST[7] }}
            />
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                The color is {color}
            </div>
        </div>
        //<Form.Check type="radio" name="colors" />
    );
}
