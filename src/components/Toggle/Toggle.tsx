import React, {useState} from 'react';

function useToggle({
                    initialState = false,
                    label
                }: Props) {

    const [toggled, setToggled] = useState(initialState);

    /* Uses data-toggle as a custom attribute to do component specific styling
    *  */

    return (
        <button
            type={"button"}
            date-toggle
            aria-pressed={toggled}
            onClick={toggleState}>
            {label}
        </button>
    );

    //Function declarations

    function toggleState() {
        setToggled((toggled) => !toggled);
    }
}



type Props = {
    initialState: boolean,
    label: String
}

export default useToggle;